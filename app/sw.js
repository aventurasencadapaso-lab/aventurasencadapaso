/* ============================================================
   Service worker · App de rutas · Aventuras en Cada Paso
   Si cambias algún archivo de la app, sube el número de VERSION.
   ============================================================ */
var VERSION = 'acp-app-v3';
var OFFLINE = 'acp-offline-v1';   // rutas descargadas por el usuario (no se borra al actualizar)
var RUNTIME = 'acp-runtime-v1';   // GPX y mapas vistos, fuentes
var MAX_RUNTIME_TILES = 1500;

var SHELL = [
  './', 'index.html', 'app.css', 'app.js', 'manifest.webmanifest',
  'vendor/leaflet/leaflet.js', 'vendor/leaflet/leaflet.css',
  '../rutas.js', '../logo-aventuras.png', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-maskable-512.png', 'icons/apple-touch-icon.png', 'icons/logo-cabecera.png'
];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(VERSION).then(function (c) {
    return Promise.all(SHELL.map(function (u) { return c.add(new Request(u, { cache: 'reload' })).catch(function () {}); }));
  }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k.indexOf('acp-app-') === 0 && k !== VERSION; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

function isTile(u) { return u.hostname === 'www.ign.es' && u.pathname.indexOf('/wmts/') === 0; }

var trimming = false;
function trimTiles() {
  if (trimming) return; trimming = true;
  caches.open(RUNTIME).then(function (c) {
    return c.keys().then(function (ks) {
      var tiles = ks.filter(function (r) { return isTile(new URL(r.url)); });
      var extra = tiles.length - MAX_RUNTIME_TILES;
      return Promise.all(tiles.slice(0, Math.max(0, extra)).map(function (r) { return c.delete(r); }));
    });
  }).then(function () { trimming = false; }, function () { trimming = false; });
}

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var u = new URL(req.url);

  // Teselas del mapa: primero lo guardado, si no, red (y se guarda lo que se va viendo)
  if (isTile(u)) {
    if (req.destination !== 'image') return; // descargas de la propia app: van directas a su caché
    e.respondWith(caches.match(req.url).then(function (hit) {
      return hit || fetch(req).then(function (res) {
        if (res.ok || res.type === 'opaque') {
          var cp = res.clone();
          caches.open(RUNTIME).then(function (c) { return c.put(req.url, cp); }).then(function () { if (Math.random() < 0.05) trimTiles(); });
        }
        return res;
      });
    }));
    return;
  }

  // Tracks GPX: red primero (por si los actualizas) y si no hay cobertura, la copia guardada
  if (/\.gpx$/i.test(u.pathname)) {
    e.respondWith(fetch(req).then(function (res) {
      if (res.ok) { var cp = res.clone(); caches.open(RUNTIME).then(function (c) { c.put(req, cp); }); }
      return res;
    }).catch(function () { return caches.match(req, { ignoreSearch: true }).then(function (r) { return r || Response.error(); }); }));
    return;
  }

  // Fuentes de Google
  if (u.hostname === 'fonts.googleapis.com' || u.hostname === 'fonts.gstatic.com') {
    e.respondWith(caches.match(req).then(function (hit) {
      return hit || fetch(req).then(function (res) { var cp = res.clone(); caches.open(RUNTIME).then(function (c) { c.put(req, cp); }); return res; });
    }));
    return;
  }

  if (u.origin !== location.origin) return;

  // Abrir la app: siempre desde la copia guardada, así arranca sin cobertura
  if (req.mode === 'navigate') {
    e.respondWith(caches.open(VERSION).then(function (c) {
      return c.match('index.html').then(function (hit) {
        var net = fetch(req).then(function (res) { if (res.ok) c.put('index.html', res.clone()); return res; });
        return hit || net;
      });
    }).catch(function () { return fetch(req); }));
    return;
  }

  // Resto (app.js, css, rutas.js, iconos): copia guardada al instante y se actualiza en segundo plano
  e.respondWith(caches.open(VERSION).then(function (c) {
    return c.match(req, { ignoreSearch: true }).then(function (hit) {
      var net = fetch(req).then(function (res) { if (res.ok) c.put(req, res.clone()); return res; });
      if (hit) { net.catch(function () {}); return hit; }
      return net.catch(function () { return caches.match(req, { ignoreSearch: true }).then(function (r) { return r || Response.error(); }); });
    });
  }));
});

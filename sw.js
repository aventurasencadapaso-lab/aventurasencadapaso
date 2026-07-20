/* ============================================================
   SERVICE WORKER — Aventuras en Cada Paso v3
   Cache First para assets · Network First para HTML
   Offline page para cuando no hay red
============================================================ */

var CACHE_NAME   = 'aventuras-v3';
var BASE         = '/aventurasencadapaso';

var CACHE_CORE = [
  BASE + '/',
  BASE + '/index.html',
  BASE + '/style.min.css',
  BASE + '/rutas.js',
  BASE + '/tiendas.js',
  BASE + '/manifest.json',
  BASE + '/offline.html',
  BASE + '/buscador-aventuras.html',
  BASE + '/calendario.html',
  BASE + '/comparador.html',
  BASE + '/ruleta.html',
  BASE + '/tenerife.html',
  BASE + '/grancanaria.html',
  BASE + '/lanzarote.html',
  BASE + '/fuerteventura.html',
  BASE + '/lapalma.html',
  BASE + '/lagomera.html',
  BASE + '/elhierro.html',
  BASE + '/lagraciosa.html',
  BASE + '/lobos.html',
  BASE + '/tiendas.html',
  BASE + '/404.html',
  BASE + '/icons/icon-192.png',
  BASE + '/icons/icon-512.png',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Orbitron:wght@700;900&display=swap'
];

/* ── INSTALL ── */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return Promise.allSettled(
          CACHE_CORE.map(function(url) {
            return cache.add(new Request(url, { mode: 'no-cors' }))
              .catch(function() { /* ignorar si falla */ });
          })
        );
      })
      .then(function() { return self.skipWaiting(); })
  );
});

/* ── ACTIVATE ── */
self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE_NAME; })
            .map(function(k)   { return caches.delete(k); })
      );
    }).then(function() { return self.clients.claim(); })
  );
});

/* ── FETCH ── */
self.addEventListener('fetch', function(e) {
  var req = e.request;
  var url = req.url;

  // Solo GET
  if (req.method !== 'GET') return;

  // No interceptar analytics, formsubmit, translate
  if (url.includes('google-analytics') ||
      url.includes('googletagmanager') ||
      url.includes('formsubmit') ||
      url.includes('translate.google')) {
    return;
  }

  // HTML — Network First con fallback offline
  if (req.destination === 'document' || url.endsWith('.html')) {
    e.respondWith(
      fetch(req)
        .then(function(res) {
          var clone = res.clone();
          caches.open(CACHE_NAME).then(function(c) { c.put(req, clone); });
          return res;
        })
        .catch(function() {
          return caches.match(req)
            .then(function(cached) {
              return cached || caches.match(BASE + '/offline.html');
            });
        })
    );
    return;
  }

  // Assets (CSS, JS, imágenes, fuentes) — Cache First
  e.respondWith(
    caches.match(req).then(function(cached) {
      if (cached) return cached;
      return fetch(req).then(function(res) {
        if (res && res.status === 200) {
          var clone = res.clone();
          caches.open(CACHE_NAME).then(function(c) { c.put(req, clone); });
        }
        return res;
      }).catch(function() { return new Response('', { status: 408 }); });
    })
  );
});

/* ── PUSH NOTIFICATIONS (preparado para el futuro) ── */
self.addEventListener('push', function(e) {
  if (!e.data) return;
  var data = e.data.json();
  e.waitUntil(
    self.registration.showNotification(data.title || 'Aventuras en Cada Paso', {
      body:    data.body    || 'Nueva aventura disponible en Canarias',
      icon:    BASE + '/icons/icon-192.png',
      badge:   BASE + '/icons/icon-72.png',
      tag:     data.tag    || 'aventuras',
      data:    { url: data.url || BASE + '/' },
      actions: [
        { action: 'ver',    title: 'Ver ahora' },
        { action: 'cerrar', title: 'Cerrar'    }
      ]
    })
  );
});

self.addEventListener('notificationclick', function(e) {
  e.notification.close();
  if (e.action === 'ver' || !e.action) {
    var url = (e.notification.data && e.notification.data.url) || BASE + '/';
    e.waitUntil(clients.openWindow(url));
  }
});

/* ============================================================
   Aventuras en Cada Paso · App de rutas (PWA)
   - Lee las rutas de ../rutas.js y los tracks de ../gpx/<id>.gpx
   - Mapa topográfico IGN, descargable para usar sin conexión
   - Navegación GPS con aviso al salirse de la ruta
   ============================================================ */
(function () {
'use strict';

/* ---------------- Ajustes ---------------- */
var CFG = {
  gpxPath: function (id) { return '../gpx/' + encodeURIComponent(id) + '.gpx'; },
  webPath: function (id) { return '../rutas/' + encodeURIComponent(id) + '.html'; },
  offRoute: 40,        // metros de separación para avisar de "fuera de ruta"
  maxAccuracy: 60,     // lecturas GPS peores que esto no disparan avisos
  finishRadius: 40,    // metros al final para dar la ruta por terminada
  dlMinZoom: 10,       // niveles de zoom que se descargan para uso offline
  dlMaxZoom: 16,
  dlBuffer: 450,       // metros de mapa alrededor del track
  tileKB: 28           // tamaño medio estimado de una tesela (para el aviso de MB)
};

var LAYERS = {
  topo: {
    name: 'Topográfico IGN',
    url: 'https://www.ign.es/wmts/mapa-raster?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=MTN&STYLE=default&TILEMATRIXSET=GoogleMapsCompatible&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&FORMAT=image/jpeg',
    maxNative: 16,
    attr: '© <a href="https://www.ign.es" target="_blank" rel="noopener">IGN</a> CC BY 4.0'
  },
  orto: {
    name: 'Satélite PNOA',
    url: 'https://www.ign.es/wmts/pnoa-ma?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=OI.OrthoimageCoverage&STYLE=default&TILEMATRIXSET=GoogleMapsCompatible&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&FORMAT=image/jpeg',
    maxNative: 19,
    attr: 'PNOA © <a href="https://www.ign.es" target="_blank" rel="noopener">IGN</a> CC BY 4.0'
  }
};
var OFFLINE_CACHE = 'acp-offline-v1';
var DL_KEY = 'acp-descargas-v1';

/* ---------------- Utilidades ---------------- */
var $ = function (s) { return document.querySelector(s); };
function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
function norm(s) { return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
function km(m, d) { return (m / 1000).toFixed(d == null ? 1 : d).replace('.', ','); }
function int(n) { return Math.round(n).toLocaleString('es-ES'); }
function store(k, v) { try { if (v === undefined) return JSON.parse(localStorage.getItem(k)); localStorage.setItem(k, JSON.stringify(v)); } catch (e) { return null; } }
var R = 6371008.8, RAD = Math.PI / 180;
function hav(a, b, c, d) {
  var dLa = (c - a) * RAD, dLo = (d - b) * RAD;
  var x = Math.sin(dLa / 2) * Math.sin(dLa / 2) + Math.cos(a * RAD) * Math.cos(c * RAD) * Math.sin(dLo / 2) * Math.sin(dLo / 2);
  return 2 * R * Math.asin(Math.min(1, Math.sqrt(x)));
}
function bearing(a, b, c, d) {
  var y = Math.sin((d - b) * RAD) * Math.cos(c * RAD);
  var x = Math.cos(a * RAD) * Math.sin(c * RAD) - Math.sin(a * RAD) * Math.cos(c * RAD) * Math.cos((d - b) * RAD);
  return (Math.atan2(y, x) / RAD + 360) % 360;
}
function compass(deg) { return ['norte', 'noreste', 'este', 'sureste', 'sur', 'suroeste', 'oeste', 'noroeste'][Math.round(deg / 45) % 8]; }
var toastT;
function toast(msg, ms) {
  var t = $('#toast'); t.textContent = msg; t.hidden = false;
  clearTimeout(toastT); toastT = setTimeout(function () { t.hidden = true; }, ms || 3500);
}

/* ---------------- Datos ---------------- */
var ROUTES = (typeof RUTAS !== 'undefined' ? RUTAS : []).filter(function (r) { return r && r.id; });
var seen = {};
ROUTES = ROUTES.filter(function (r) { if (seen[r.id]) return false; seen[r.id] = 1; return true; });
var byId = {}; ROUTES.forEach(function (r) { byId[r.id] = r; });
var trackCache = {};

function parseGPX(txt) {
  var doc = new DOMParser().parseFromString(txt, 'application/xml');
  var nodes = doc.getElementsByTagName('trkpt');
  if (!nodes.length) nodes = doc.getElementsByTagName('rtept');
  var pts = [];
  for (var i = 0; i < nodes.length; i++) {
    var n = nodes[i], lat = parseFloat(n.getAttribute('lat')), lon = parseFloat(n.getAttribute('lon'));
    if (isNaN(lat) || isNaN(lon)) continue;
    var e = n.getElementsByTagName('ele')[0], ele = e ? parseFloat(e.textContent) : NaN;
    var last = pts[pts.length - 1];
    if (last && last[0] === lat && last[1] === lon) continue;
    pts.push([lat, lon, ele]);
  }
  return pts;
}

function buildTrack(pts) {
  var n = pts.length, cum = new Float64Array(n), hasEle = false;
  for (var i = 1; i < n; i++) cum[i] = cum[i - 1] + hav(pts[i - 1][0], pts[i - 1][1], pts[i][0], pts[i][1]);
  // altitud suavizada (media móvil) para que el desnivel no salga inflado por el ruido del GPS
  var ele = new Float64Array(n);
  for (i = 0; i < n; i++) if (!isNaN(pts[i][2])) { hasEle = true; break; }
  if (hasEle) {
    var raw = pts.map(function (p) { return p[2]; }), lastV = NaN;
    for (i = 0; i < n; i++) { if (isNaN(raw[i])) raw[i] = lastV; else lastV = raw[i]; }
    for (i = n - 1; i >= 0; i--) { if (isNaN(raw[i])) raw[i] = lastV; else lastV = raw[i]; }
    for (i = 0; i < n; i++) {
      var s = 0, c = 0;
      for (var j = i - 1; j >= 0 && cum[i] - cum[j] <= 60; j--) { s += raw[j]; c++; }
      for (j = i; j < n && cum[j] - cum[i] <= 60; j++) { s += raw[j]; c++; }
      ele[i] = s / c;
    }
  }
  // desnivel acumulado con histéresis de 3 m
  var cumUp = new Float64Array(n), up = 0, down = 0, ref = ele[0], min = Infinity, max = -Infinity;
  for (i = 0; i < n; i++) {
    var d = ele[i] - ref;
    if (d > 3) { up += d; ref = ele[i]; } else if (d < -3) { down -= d; ref = ele[i]; }
    cumUp[i] = up;
    if (ele[i] < min) min = ele[i]; if (ele[i] > max) max = ele[i];
  }
  var la = pts.map(function (p) { return p[0]; }), lo = pts.map(function (p) { return p[1]; });
  var total = cum[n - 1] || 0;
  var loop = n > 2 && hav(la[0], lo[0], la[n - 1], lo[n - 1]) < 150;
  return {
    pts: pts, lat: la, lon: lo, cum: cum, ele: ele, cumUp: cumUp, hasEle: hasEle,
    total: total, up: up, down: down, min: min, max: max, loop: loop,
    bounds: [[Math.min.apply(null, la), Math.min.apply(null, lo)], [Math.max.apply(null, la), Math.max.apply(null, lo)]]
  };
}

function reverseTrack(t) { return buildTrack(t.pts.slice().reverse()); }

function loadTrack(id) {
  if (trackCache[id]) return Promise.resolve(trackCache[id]);
  return fetch(CFG.gpxPath(id)).then(function (r) {
    if (!r.ok) throw new Error('sin gpx');
    return r.text();
  }).then(function (txt) {
    var pts = parseGPX(txt);
    if (pts.length < 2) throw new Error('vacío');
    return (trackCache[id] = buildTrack(pts));
  });
}

/* Punto de la ruta más cercano a una posición. Prefiere el tramo más
   próximo al avance anterior para no "saltar" en rutas de ida y vuelta. */
function locate(t, lat, lon, lastS) {
  var kx = Math.cos(lat * RAD) * R * RAD, ky = R * RAD, n = t.lat.length;
  var best = null, cands = [];
  for (var i = 0; i < n - 1; i++) {
    var ax = (t.lon[i] - lon) * kx, ay = (t.lat[i] - lat) * ky, bx = (t.lon[i + 1] - lon) * kx, by = (t.lat[i + 1] - lat) * ky;
    var dx = bx - ax, dy = by - ay, L = dx * dx + dy * dy, u = L ? Math.max(0, Math.min(1, -(ax * dx + ay * dy) / L)) : 0;
    var px = ax + u * dx, py = ay + u * dy, d = Math.sqrt(px * px + py * py);
    var c = { d: d, i: i, u: u, s: t.cum[i] + u * (t.cum[i + 1] - t.cum[i]) };
    cands.push(c);
    if (!best || d < best.d) best = c;
  }
  if (lastS != null) {
    // el más cercano entre los tramos próximos a donde ibas (evita saltar al otro ramal en rutas de ida y vuelta)
    var local = null;
    for (i = 0; i < cands.length; i++) {
      var k = cands[i];
      if (Math.abs(k.s - lastS) <= 600 && (!local || k.d < local.d)) local = k;
    }
    if (local && local.d <= best.d + 25) {
      // si dos ramales pasan igual de cerca (mismo camino a la ida y a la vuelta), gana el que sigue hacia delante
      var pick = local, cost = function (k) { return k.d + (k.s < lastS - 15 ? 20 : 0); };
      for (i = 0; i < cands.length; i++) {
        k = cands[i];
        if (Math.abs(k.s - lastS) <= 600 && k.d <= local.d + 8 && cost(k) < cost(pick)) pick = k;
      }
      best = pick;
    }
  }
  best.lat = t.lat[best.i] + best.u * (t.lat[best.i + 1] - t.lat[best.i]);
  best.lon = t.lon[best.i] + best.u * (t.lon[best.i + 1] - t.lon[best.i]);
  return best;
}
function valueAt(arr, t, s) {
  var c = t.cum, lo = 0, hi = c.length - 1;
  if (s <= 0) return arr[0]; if (s >= t.total) return arr[hi];
  while (hi - lo > 1) { var m = (lo + hi) >> 1; if (c[m] <= s) lo = m; else hi = m; }
  var f = (s - c[lo]) / ((c[hi] - c[lo]) || 1);
  return arr[lo] + f * (arr[hi] - arr[lo]);
}

/* ---------------- Descargas offline ---------------- */
function getDL() { return store(DL_KEY) || {}; }
function setDL(o) { store(DL_KEY, o); }
function isDL(id) { return !!getDL()[id]; }

function tileURL(layer, z, x, y) { return LAYERS[layer].url.replace('{z}', z).replace('{x}', x).replace('{y}', y); }
function lon2x(lon, z) { return Math.floor((lon + 180) / 360 * Math.pow(2, z)); }
function lat2y(lat, z) { var r = lat * RAD; return Math.floor((1 - Math.log(Math.tan(r) + 1 / Math.cos(r)) / Math.PI) / 2 * Math.pow(2, z)); }

function tilesFor(t) {
  var set = {}, list = [];
  function add(z, x, y) { var k = z + '/' + x + '/' + y; if (!set[k]) { set[k] = 1; list.push(k); } }
  var dLat = CFG.dlBuffer / 111320, midLat = (t.bounds[0][0] + t.bounds[1][0]) / 2, dLon = CFG.dlBuffer / (111320 * Math.cos(midLat * RAD));
  for (var z = CFG.dlMinZoom; z <= CFG.dlMaxZoom; z++) {
    if (z <= 13) { // zooms bajos: el rectángulo completo
      var x0 = lon2x(t.bounds[0][1] - dLon, z), x1 = lon2x(t.bounds[1][1] + dLon, z);
      var y0 = lat2y(t.bounds[1][0] + dLat, z), y1 = lat2y(t.bounds[0][0] - dLat, z);
      for (var x = x0; x <= x1; x++) for (var y = y0; y <= y1; y++) add(z, x, y);
    } else { // zooms altos: un pasillo alrededor del track
      var step = Math.max(1, Math.floor(t.lat.length / 4000));
      for (var i = 0; i < t.lat.length; i += step) {
        var a = lon2x(t.lon[i] - dLon, z), b = lon2x(t.lon[i] + dLon, z), c = lat2y(t.lat[i] + dLat, z), d = lat2y(t.lat[i] - dLat, z);
        for (x = a; x <= b; x++) for (y = c; y <= d; y++) add(z, x, y);
      }
    }
  }
  return list;
}

var dlBusy = {};
function download(id, t, onProg) {
  if (dlBusy[id]) return dlBusy[id];
  var keys = tilesFor(t), done = 0, fail = 0, mode = null;
  if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(function () {});
  var p = caches.open(OFFLINE_CACHE).then(function (cache) {
    return cache.add(CFG.gpxPath(id)).then(function () {
      var q = keys.slice();
      function one(url) {
        var opts = { mode: mode || 'cors', credentials: 'omit' };
        return fetch(url, opts).then(function (res) {
          if (!mode) mode = 'cors';
          if (res.type !== 'opaque' && !res.ok) throw new Error(res.status);
          return cache.put(url, res);
        }, function (err) {
          if (mode === 'cors' || mode === 'no-cors') throw err;
          mode = 'no-cors';           // el servidor no admite CORS: guardamos la respuesta opaca
          return one(url);
        });
      }
      function worker() {
        var k = q.shift(); if (!k) return Promise.resolve();
        var z = k.split('/'), url = tileURL('topo', z[0], z[1], z[2]);
        return cache.match(url).then(function (hit) { return hit || one(url); })
          .catch(function () { fail++; })
          .then(function () { done++; onProg && onProg(done, keys.length); return worker(); });
      }
      var ws = [];
      for (var i = 0; i < 6; i++) ws.push(worker());
      return Promise.all(ws);
    });
  }).then(function () {
    if (fail > keys.length * 0.15) throw new Error('Han fallado ' + fail + ' partes del mapa. Revisa la conexión e inténtalo otra vez.');
    var o = getDL(); o[id] = { t: keys, d: Date.now(), f: fail }; setDL(o);
    return { n: keys.length, fail: fail };
  });
  dlBusy[id] = p;
  p.then(function () { delete dlBusy[id]; }, function () { delete dlBusy[id]; });
  return p;
}

function removeDL(id) {
  var o = getDL(), me = o[id]; if (!me) return Promise.resolve();
  delete o[id]; setDL(o);
  var keep = {};
  Object.keys(o).forEach(function (k) { (o[k].t || []).forEach(function (x) { keep[x] = 1; }); });
  return caches.open(OFFLINE_CACHE).then(function (c) {
    var jobs = [c.delete(CFG.gpxPath(id))];
    (me.t || []).forEach(function (k) { if (!keep[k]) { var z = k.split('/'); jobs.push(c.delete(tileURL('topo', z[0], z[1], z[2]))); } });
    return Promise.all(jobs);
  });
}

function showStorage() {
  var el = $('#storage'), n = Object.keys(getDL()).length;
  if (!navigator.storage || !navigator.storage.estimate) { el.textContent = n ? n + ' rutas descargadas' : ''; return; }
  navigator.storage.estimate().then(function (e) {
    el.textContent = (n ? n + (n === 1 ? ' ruta descargada' : ' rutas descargadas') + ' · ' : '') +
      'Espacio usado: ' + Math.round((e.usage || 0) / 1048576) + ' MB';
  });
}

/* ---------------- Mapa ---------------- */
function baseLayer(key) {
  var L0 = LAYERS[key];
  return L.tileLayer(L0.url, { maxNativeZoom: L0.maxNative, maxZoom: 18, minZoom: 6, attribution: L0.attr, keepBuffer: 3 });
}
function drawTrack(map, t) {
  var ll = t.pts.map(function (p) { return [p[0], p[1]]; });
  var g = L.layerGroup().addTo(map);
  L.polyline(ll, { color: '#02070f', weight: 9, opacity: .55, interactive: false }).addTo(g);
  var line = L.polyline(ll, { color: '#1cff6b', weight: 5, opacity: 1, interactive: false }).addTo(g);
  L.marker(ll[0], { icon: L.divIcon({ className: '', html: '<div class="pin pin-s"></div>', iconSize: [18, 18], iconAnchor: [9, 9] }), interactive: false }).addTo(g);
  if (!t.loop) L.marker(ll[ll.length - 1], { icon: L.divIcon({ className: '', html: '<div class="pin pin-e"></div>', iconSize: [18, 18], iconAnchor: [9, 9] }), interactive: false }).addTo(g);
  return { group: g, line: line, ll: ll };
}

/* ---------------- Perfil de altitud ---------------- */
function drawProfile(canvas, t, pos) {
  var dpr = window.devicePixelRatio || 1, w = canvas.clientWidth, h = canvas.clientHeight;
  if (!w || !h) return;
  canvas.width = w * dpr; canvas.height = h * dpr;
  var g = canvas.getContext('2d'); g.scale(dpr, dpr); g.clearRect(0, 0, w, h);
  if (!t.hasEle) { g.fillStyle = '#5a6070'; g.font = '12px Roboto,sans-serif'; g.fillText('Este track no incluye altitud', 12, h / 2); return; }
  var small = h < 100, pl = small ? 6 : 38, pr = 8, pt = 10, pb = small ? 6 : 20;
  var lo = t.min, hi = t.max; if (hi - lo < 40) { var m = (hi + lo) / 2; lo = m - 20; hi = m + 20; }
  var X = function (s) { return pl + (s / t.total) * (w - pl - pr); }, Y = function (e) { return pt + (1 - (e - lo) / (hi - lo)) * (h - pt - pb); };
  var n = t.ele.length, step = Math.max(1, Math.floor(n / (w * 1.5)));
  function path() { g.beginPath(); g.moveTo(X(0), Y(t.ele[0])); for (var i = step; i < n; i += step) g.lineTo(X(t.cum[i]), Y(t.ele[i])); g.lineTo(X(t.total), Y(t.ele[n - 1])); }
  var grd = g.createLinearGradient(0, pt, 0, h - pb); grd.addColorStop(0, 'rgba(28,255,107,.35)'); grd.addColorStop(1, 'rgba(28,255,107,.02)');
  path(); g.lineTo(X(t.total), h - pb); g.lineTo(X(0), h - pb); g.closePath(); g.fillStyle = grd; g.fill();
  if (pos != null) { // tramo ya recorrido
    g.save(); g.beginPath(); g.rect(0, 0, X(pos), h); g.clip();
    path(); g.lineTo(X(t.total), h - pb); g.lineTo(X(0), h - pb); g.closePath(); g.fillStyle = 'rgba(255,111,0,.28)'; g.fill(); g.restore();
  }
  path(); g.strokeStyle = '#1cff6b'; g.lineWidth = 2; g.stroke();
  if (!small) {
    g.fillStyle = '#8a8fa0'; g.font = '10px Roboto,sans-serif'; g.textAlign = 'right';
    g.fillText(int(t.max) + ' m', pl - 5, Y(t.max) + 4); g.fillText(int(t.min) + ' m', pl - 5, Y(t.min) + 4);
    g.textAlign = 'left'; g.fillText('0', pl, h - 5); g.textAlign = 'right'; g.fillText(km(t.total) + ' km', w - pr, h - 5);
  }
  if (pos != null) {
    var e = valueAt(t.ele, t, pos);
    g.strokeStyle = 'rgba(255,255,255,.5)'; g.lineWidth = 1; g.beginPath(); g.moveTo(X(pos), pt); g.lineTo(X(pos), h - pb); g.stroke();
    g.beginPath(); g.arc(X(pos), Y(e), 5, 0, 7); g.fillStyle = '#2d8cff'; g.fill(); g.strokeStyle = '#fff'; g.lineWidth = 2; g.stroke();
  }
}

/* ---------------- Estado de red ---------------- */
function net() {
  var on = navigator.onLine;
  ['#net'].concat([].slice.call(document.querySelectorAll('.net-mini'))).forEach(function (s) {
    var el = typeof s === 'string' ? $(s) : s; if (!el) return;
    el.className = (el.classList.contains('net-mini') ? 'pill net-mini ' : 'pill ') + (on ? 'on' : 'off');
    el.textContent = on ? 'En línea' : 'Sin conexión';
  });
}
window.addEventListener('online', function () { net(); renderList(); });
window.addEventListener('offline', function () { net(); renderList(); });

/* ================= VISTA: LISTA ================= */
var F = { q: '', isla: '', dif: '', tipo: '', near: null, dl: false };
(function initFilters() {
  var islas = [], tipos = [];
  ROUTES.forEach(function (r) { if (islas.indexOf(r.isla) < 0) islas.push(r.isla); if (tipos.indexOf(r.tipo) < 0) tipos.push(r.tipo); });
  var ch = $('#chips-isla');
  ch.innerHTML = ['<button class="chip act" data-v="">Todas</button>'].concat(islas.map(function (i) { return '<button class="chip" data-v="' + esc(i) + '">' + esc(i) + '</button>'; })).join('');
  ch.addEventListener('click', function (e) {
    var b = e.target.closest('.chip'); if (!b) return;
    [].forEach.call(ch.children, function (c) { c.classList.toggle('act', c === b); });
    F.isla = b.dataset.v; renderList();
  });
  $('#f-tipo').innerHTML = '<option value="">Toda actividad</option>' + tipos.map(function (t) { return '<option' + (t === 'Senderismo' ? ' selected' : '') + '>' + esc(t) + '</option>'; }).join('');
  F.tipo = tipos.indexOf('Senderismo') >= 0 ? 'Senderismo' : '';
  $('#q').addEventListener('input', function () { F.q = norm(this.value); renderList(); });
  $('#f-dif').addEventListener('change', function () { F.dif = this.value; renderList(); });
  $('#f-tipo').addEventListener('change', function () { F.tipo = this.value; renderList(); });
  $('#btn-dl').addEventListener('click', function () { F.dl = !F.dl; this.classList.toggle('act', F.dl); renderList(); });
  $('#btn-near').addEventListener('click', function () {
    var b = this;
    if (F.near) { F.near = null; b.classList.remove('act'); b.textContent = 'Cerca de mí'; renderList(); return; }
    b.textContent = 'Localizando…';
    navigator.geolocation.getCurrentPosition(function (p) {
      F.near = [p.coords.latitude, p.coords.longitude]; b.classList.add('act'); b.textContent = 'Cerca de mí ✓'; renderList();
    }, function () { b.textContent = 'Cerca de mí'; toast('No se pudo obtener tu ubicación. Revisa los permisos de localización.'); },
    { enableHighAccuracy: false, timeout: 15000, maximumAge: 300000 });
  });
})();

function renderList() {
  var dl = getDL(), on = navigator.onLine;
  var rows = ROUTES.filter(function (r) {
    if (F.isla && r.isla !== F.isla) return false;
    if (F.dif && r.dificultad !== F.dif) return false;
    if (F.tipo && r.tipo !== F.tipo) return false;
    if (F.dl && !dl[r.id]) return false;
    if (F.q && norm(r.nombre + ' ' + r.isla + ' ' + r.descripcion).indexOf(F.q) < 0) return false;
    return true;
  });
  if (F.near) {
    rows.forEach(function (r) { r._d = (r.lat && r.lng) ? hav(F.near[0], F.near[1], r.lat, r.lng) : 1e9; });
    rows.sort(function (a, b) { return a._d - b._d; });
  }
  $('#count').textContent = rows.length + (rows.length === 1 ? ' ruta' : ' rutas') + (!on ? ' · sin conexión: solo abren las descargadas o ya vistas' : '');
  var ok = '<span class="c-ok" title="Disponible sin conexión"><svg viewBox="0 0 24 24"><path d="M5 12l5 5L20 7"/></svg></span>';
  $('#list').innerHTML = rows.length ? rows.map(function (r) {
    var d = dl[r.id];
    return '<li><a class="card' + (!on && !d && !trackCache[r.id] ? ' dim' : '') + '" href="#/ruta/' + encodeURIComponent(r.id) + '">' +
      (d ? ok : '') +
      '<div class="c-meta"><span class="isla">' + esc(r.isla) + '</span>·<span>' + esc(r.tipo) + '</span></div>' +
      '<div class="c-name">' + esc(r.nombre) + '</div>' +
      '<div class="c-row"><span><i class="dif dif-' + esc(r.dificultad) + '"></i><b>' + esc(r.dificultad) + '</b></span>' +
      (r.distancia ? '<span><b>' + String(r.distancia).replace('.', ',') + '</b> km</span>' : '') +
      '<span><b>' + esc(r.duracion) + '</b></span>' +
      (F.near && r._d < 1e9 ? '<span>a <b>' + km(r._d, r._d < 10000 ? 1 : 0) + ' km</b></span>' : '') +
      '</div></a></li>';
  }).join('') : '<li class="empty">' + (F.dl ? 'Aún no has descargado ninguna ruta.<br>Abre una ruta y pulsa «Descargar para usar sin conexión».' : 'No hay rutas con esos filtros.') + '</li>';
  showStorage();
}

/* ================= VISTA: DETALLE ================= */
var dMap, dBase, dTrackLayer, cur = null;

function openDetail(id) {
  var r = byId[id];
  if (!r) { location.hash = '#/'; return; }
  cur = { r: r, t: null };
  $('#d-meta').textContent = r.isla + ' · ' + r.tipo + ' · ' + r.dificultad;
  $('#d-name').textContent = r.nombre;
  $('#d-desc').textContent = r.descripcion || '';
  $('#d-web').href = CFG.webPath(id);
  $('#d-go').href = 'https://www.google.com/maps/dir/?api=1&destination=' + r.lat + ',' + r.lng;
  $('#d-rev').checked = false;
  $('#d-stats').innerHTML = stat(r.distancia ? String(r.distancia).replace('.', ',') : '–', 'km') + stat('…', 'm subida') + stat(esc(r.duracion), 'duración');
  $('#d-dlbox').innerHTML = '';
  $('#btn-start').disabled = true;
  var cv = $('#d-prof'); cv.getContext('2d').clearRect(0, 0, cv.width, cv.height);

  if (!dMap) {
    dMap = L.map('d-map', { zoomControl: false, attributionControl: true });
    dBase = baseLayer('topo').addTo(dMap);
    L.control.zoom({ position: 'bottomright' }).addTo(dMap);
  }
  if (dTrackLayer) { dTrackLayer.group.remove(); dTrackLayer = null; }
  dMap.setView([r.lat || 28.3, r.lng || -16.5], 13);
  setTimeout(function () { dMap.invalidateSize(); }, 50);

  loadTrack(id).then(function (t) {
    if (!cur || cur.r !== r) return;
    cur.t = t;
    dTrackLayer = drawTrack(dMap, t);
    dMap.invalidateSize();
    dMap.fitBounds(t.bounds, { padding: [24, 24] });
    $('#d-stats').innerHTML = stat(km(t.total), 'km') + stat(t.hasEle ? int(t.up) : '–', 'm subida') + stat(t.hasEle ? int(t.down) : '–', 'm bajada') +
      stat(t.hasEle ? int(t.max) : '–', 'm alt. máx') + stat(esc(r.duracion), 'duración') + stat(t.loop ? 'Circular' : 'Lineal', 'tipo');
    drawProfile($('#d-prof'), t);
    $('#btn-start').disabled = false;
    renderDLBox();
  }).catch(function () {
    if (!cur || cur.r !== r) return;
    $('#d-dlbox').innerHTML = '<p class="dl-note dl-warn">' + (navigator.onLine
      ? 'Esta ruta todavía no tiene track GPS disponible.'
      : 'Sin conexión: esta ruta no está descargada en el móvil. Descárgala cuando tengas cobertura.') + '</p>';
  });
}
function stat(v, l) { return '<div class="stat"><b>' + v + '</b><span>' + l + '</span></div>'; }

function renderDLBox() {
  var box = $('#d-dlbox'), r = cur.r, t = cur.t;
  if (isDL(r.id)) {
    var info = getDL()[r.id];
    box.innerHTML = '<div class="dl-ok"><span><b>✓ Disponible sin conexión</b><br><small>Descargada el ' + new Date(info.d).toLocaleDateString('es-ES') + '</small></span><button type="button" id="btn-rm">Borrar</button></div>';
    $('#btn-rm').onclick = function () { removeDL(r.id).then(function () { toast('Descarga eliminada'); renderDLBox(); }); };
    return;
  }
  var n = tilesFor(t).length, mb = Math.max(1, Math.round(n * CFG.tileKB / 1024));
  box.innerHTML = '<button type="button" class="btn btn-dl" id="btn-get">' +
    '<svg viewBox="0 0 24 24"><path d="M12 3v12M7 10l5 5 5-5M5 20h14"/></svg>Descargar para usar sin conexión</button>' +
    '<p class="dl-note">Guarda el mapa y el track en el móvil (≈ ' + mb + ' MB). Hazlo antes de salir, con cobertura o wifi.</p>';
  $('#btn-get').onclick = function () {
    if (!navigator.onLine) { toast('Necesitas conexión para descargar la ruta.'); return; }
    if (!('caches' in window)) { toast('Este navegador no permite guardar mapas sin conexión.'); return; }
    var btn = this; btn.disabled = true;
    box.querySelector('.dl-note').innerHTML = 'Descargando mapa… <span id="dl-pct">0%</span><div class="bar"><i id="dl-bar"></i></div>';
    download(r.id, t, function (d, tot) {
      var p = Math.round(d / tot * 100), a = $('#dl-pct'), b = $('#dl-bar');
      if (a) a.textContent = p + '%'; if (b) b.style.width = p + '%';
    }).then(function () {
      toast('Ruta lista para usar sin conexión ✓');
      if (cur && cur.r === r) renderDLBox();
    }).catch(function (e) {
      toast(e.message || 'No se pudo completar la descarga', 6000);
      if (cur && cur.r === r) renderDLBox();
    });
  };
}

$('#btn-start').addEventListener('click', function () {
  if (!cur || !cur.t) return;
  unlockAudio();
  var go = function () { location.hash = '#/navegar/' + encodeURIComponent(cur.r.id) + ($('#d-rev').checked ? '/inverso' : ''); };
  if (!isDL(cur.r.id) && navigator.onLine) {
    if (!confirm('Esta ruta no está descargada. Si pierdes la cobertura verás la línea de la ruta y tu posición, pero no el mapa de fondo.\n\n¿Empezar igualmente?')) return;
  }
  go();
});

/* ================= VISTA: NAVEGACIÓN ================= */
var N = null, nMap, nBase, nBaseKey = 'topo';

function startNav(id, reverse) {
  var r = byId[id];
  if (!r) { location.hash = '#/'; return; }
  loadTrack(id).then(function (t0) {
    var t = reverse ? reverseTrack(t0) : t0;
    stopNav();
    N = { r: r, t: t, lastS: null, joined: false, off: false, offCount: 0, lastAlert: 0, finished: false, follow: true, pos: null, watch: null, lastFix: 0 };
    if (!nMap) {
      nMap = L.map('n-map', { zoomControl: false, attributionControl: true });
      nBase = baseLayer(nBaseKey).addTo(nMap);
      nMap.on('dragstart', function () { if (N) { N.follow = false; $('#n-center').classList.remove('act'); } });
    }
    layoutNav();
    nMap.invalidateSize();
    nMap.fitBounds(t.bounds, { padding: [30, 30] });
    N.track = drawTrack(nMap, t);
    N.doneLine = L.polyline([], { color: '#ff6f00', weight: 5, opacity: .95, interactive: false }).addTo(nMap);
    N.guide = L.polyline([], { color: '#2d8cff', weight: 3, dashArray: '6 8', interactive: false }).addTo(nMap);
    N.acc = L.circle([0, 0], { radius: 1, color: '#2d8cff', weight: 1, fillOpacity: .12, interactive: false });
    N.me = L.marker([0, 0], { icon: L.divIcon({ className: '', html: '<div class="me"><s></s><i></i></div>', iconSize: [22, 22], iconAnchor: [11, 11] }), interactive: false, zIndexOffset: 1000 });
    nMap.fitBounds(t.bounds, { padding: [30, 30] });
    $('#n-center').classList.add('act');
    setBanner('go', 'Buscando tu posición…', 'Sal a un lugar despejado para que el GPS te encuentre.');
    $('#n-done').textContent = '0,0'; $('#n-left').textContent = km(t.total); $('#n-up').textContent = t.hasEle ? int(t.up) : '–'; $('#n-ele').textContent = '–';
    drawProfile($('#n-prof'), t, null);
    if (!navigator.geolocation) { setBanner('off', 'Sin GPS', 'Este dispositivo no permite la localización.'); return; }
    N.watch = navigator.geolocation.watchPosition(onFix, onFixErr, { enableHighAccuracy: true, maximumAge: 2000, timeout: 30000 });
    keepAwake(true);
    N.timer = setInterval(function () {
      if (N && N.lastFix && Date.now() - N.lastFix > 45000) $('#n-gps').textContent = 'Sin señal GPS desde hace ' + Math.round((Date.now() - N.lastFix) / 1000) + ' s. Mantén el móvil a cielo abierto.';
    }, 5000);
  }).catch(function (e) {
    console.error(e);
    toast('No se pudo cargar el track de esta ruta.'); location.hash = '#/ruta/' + encodeURIComponent(id);
  });
}

function layoutNav() {
  var h = document.querySelector('.sheet').offsetHeight;
  $('#n-map').style.bottom = (h - 18) + 'px';
  document.querySelector('.n-side').style.bottom = (h + 12) + 'px';
  if (nMap) nMap.invalidateSize();
}
window.addEventListener('resize', function () { if (N) layoutNav(); });

function stopNav() {
  if (!N) return;
  if (N.watch != null) navigator.geolocation.clearWatch(N.watch);
  clearInterval(N.timer);
  [N.track && N.track.group, N.doneLine, N.guide, N.acc, N.me].forEach(function (l) { if (l && nMap && nMap.hasLayer(l)) nMap.removeLayer(l); });
  N = null; keepAwake(false);
  $('#n-coords').hidden = true;
}

function onFixErr(e) {
  if (!N) return;
  if (e.code === 1) setBanner('off', 'Permiso de ubicación denegado', 'Actívalo en los ajustes del navegador para seguir la ruta.');
  else $('#n-gps').textContent = 'Esperando señal GPS…';
}

function onFix(p) {
  if (!N) return;
  var c = p.coords, lat = c.latitude, lon = c.longitude, acc = c.accuracy || 999, t = N.t;
  var prev = N.pos;
  N.pos = { lat: lat, lon: lon, acc: acc, ele: c.altitude };
  N.lastFix = Date.now();
  N.me.setLatLng([lat, lon]); if (!nMap.hasLayer(N.me)) N.me.addTo(nMap);
  N.acc.setLatLng([lat, lon]).setRadius(acc); if (!nMap.hasLayer(N.acc)) N.acc.addTo(nMap);

  // flecha de dirección de marcha
  var head = (c.heading != null && !isNaN(c.heading) && (c.speed || 0) > 0.5) ? c.heading : null;
  if (head == null && prev && hav(prev.lat, prev.lon, lat, lon) > 8) head = bearing(prev.lat, prev.lon, lat, lon);
  var el = N.me.getElement && N.me.getElement();
  if (el && head != null) { var m = el.querySelector('.me'); m.classList.add('dir'); m.querySelector('s').style.transform = 'rotate(' + head + 'deg)'; }

  var loc = locate(t, lat, lon, N.lastS);
  var weak = acc > CFG.maxAccuracy, thr = CFG.offRoute + Math.min(acc, 30) * 0.5;
  $('#n-gps').textContent = 'Precisión GPS: ±' + Math.round(acc) + ' m' + (navigator.onLine ? '' : ' · sin conexión');
  if (c.altitude != null && !isNaN(c.altitude)) $('#n-ele').textContent = int(c.altitude);
  else if (t.hasEle && loc.d < thr) $('#n-ele').textContent = int(valueAt(t.ele, t, loc.s));

  if (N.follow) nMap.setView([lat, lon], Math.max(nMap.getZoom(), 16), { animate: true });

  // Aún no has llegado al inicio de la ruta
  if (!N.joined) {
    if (loc.d < thr && !weak) { N.joined = true; toast('Estás en la ruta. ¡Buen camino!'); vibrate([80]); }
    else {
      var target = loc.d < 300 ? loc : { lat: t.lat[0], lon: t.lon[0], d: hav(lat, lon, t.lat[0], t.lon[0]) };
      if (loc.d < target.d) target = loc;
      N.guide.setLatLngs([[lat, lon], [target.lat, target.lon]]);
      var b = bearing(lat, lon, target.lat, target.lon);
      setBanner('go', 'Ve hacia la ruta: ' + fmtDist(target.d), 'Dirección ' + compass(b), b);
      if (N.follow && target.d > 150) nMap.fitBounds(L.latLngBounds([[lat, lon], [target.lat, target.lon]]).pad(0.3), { maxZoom: 17 });
      return;
    }
  }

  if (weak) {
    setBanner('weak', 'Señal GPS débil (±' + Math.round(acc) + ' m)', 'Espera unos segundos a cielo abierto.');
    return;
  }

  // Fuera de ruta
  if (loc.d > thr) {
    N.offCount++;
    if (N.offCount >= 2) {
      var bb = bearing(lat, lon, loc.lat, loc.lon);
      N.guide.setLatLngs([[lat, lon], [loc.lat, loc.lon]]);
      setBanner('off', '¡Te has salido de la ruta!', 'El camino está a ' + fmtDist(loc.d) + ' hacia el ' + compass(bb) + '.', bb);
      if (!N.off || Date.now() - N.lastAlert > 30000) { alarm(); N.lastAlert = Date.now(); }
      N.off = true;
    }
    return;
  }
  if (loc.d < thr - 8 || !N.off) {
    if (N.off) { toast('De vuelta en la ruta ✓'); vibrate([60, 60, 60]); }
    N.off = false; N.offCount = 0; N.guide.setLatLngs([]);
  }

  N.lastS = loc.s;
  var left = Math.max(0, t.total - loc.s);
  $('#n-done').textContent = km(loc.s);
  $('#n-left').textContent = km(left);
  if (t.hasEle) $('#n-up').textContent = int(Math.max(0, t.up - valueAt(t.cumUp, t, loc.s)));
  var done = [];
  for (var i = 0; i <= loc.i; i++) done.push([t.lat[i], t.lon[i]]);
  done.push([loc.lat, loc.lon]);
  N.doneLine.setLatLngs(done);
  drawProfile($('#n-prof'), t, loc.s);

  if (!N.finished && left < CFG.finishRadius && loc.s > t.total * 0.5) {
    N.finished = true; vibrate([200, 100, 200]); beep(880, .15); setTimeout(function () { beep(1320, .25); }, 180);
    setBanner('end', '¡Ruta completada!', km(t.total) + ' km' + (t.hasEle ? ' · ' + int(t.up) + ' m de subida' : ''));
  } else if (!N.finished) {
    setBanner('ok', 'En ruta', 'Quedan ' + km(left) + ' km' + (t.hasEle ? ' · ' + int(Math.max(0, t.up - valueAt(t.cumUp, t, loc.s))) + ' m de subida' : ''));
  }
}

function fmtDist(m) { return m < 1000 ? Math.round(m) + ' m' : km(m) + ' km'; }
function setBanner(kind, title, sub, dir) {
  var arrow = dir != null ? '<span class="arr" style="transform:rotate(' + dir + 'deg)"><svg viewBox="0 0 24 24"><path d="M12 3v18M5 10l7-7 7 7"/></svg></span>' : '';
  var b = $('#n-banner'); b.className = 'banner ' + kind;
  b.innerHTML = arrow + '<span><b>' + esc(title) + '</b>' + (sub ? esc(sub) : '') + '</span>';
}

/* avisos: vibración + pitido */
var actx = null;
function unlockAudio() { try { actx = actx || new (window.AudioContext || window.webkitAudioContext)(); if (actx.state === 'suspended') actx.resume(); } catch (e) {} }
function beep(f, d) {
  if (!actx) return;
  try {
    var o = actx.createOscillator(), g = actx.createGain(); o.type = 'square'; o.frequency.value = f;
    g.gain.setValueAtTime(.001, actx.currentTime); g.gain.exponentialRampToValueAtTime(.35, actx.currentTime + .02); g.gain.exponentialRampToValueAtTime(.001, actx.currentTime + d);
    o.connect(g); g.connect(actx.destination); o.start(); o.stop(actx.currentTime + d + .05);
  } catch (e) {}
}
function vibrate(p) { try { navigator.vibrate && navigator.vibrate(p); } catch (e) {} }
function alarm() { vibrate([400, 150, 400, 150, 400]); beep(980, .22); setTimeout(function () { beep(740, .22); }, 280); setTimeout(function () { beep(980, .3); }, 560); }

/* pantalla siempre encendida mientras navegas */
var wake = null, wantWake = false;
function keepAwake(on) {
  wantWake = on;
  if (!('wakeLock' in navigator)) return;
  if (on && !wake) navigator.wakeLock.request('screen').then(function (w) { wake = w; w.addEventListener('release', function () { wake = null; }); }).catch(function () {});
  if (!on && wake) { wake.release(); wake = null; }
}
document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'visible' && wantWake) keepAwake(true); });

/* botones de navegación */
$('#n-exit').addEventListener('click', function () {
  if (N && N.joined && !N.finished && !confirm('¿Terminar el seguimiento de la ruta?')) return;
  var id = N ? N.r.id : ''; stopNav(); location.hash = id ? '#/ruta/' + encodeURIComponent(id) : '#/';
});
$('#n-center').addEventListener('click', function () {
  if (!N) return; N.follow = true; this.classList.add('act');
  if (N.pos) nMap.setView([N.pos.lat, N.pos.lon], Math.max(nMap.getZoom(), 16)); else nMap.fitBounds(N.t.bounds);
});
$('#n-layer').addEventListener('click', function () {
  if (!navigator.onLine && nBaseKey === 'topo') { toast('El satélite solo está disponible con conexión. El mapa descargado es el topográfico.'); return; }
  nBaseKey = nBaseKey === 'topo' ? 'orto' : 'topo';
  nBase.remove(); nBase = baseLayer(nBaseKey).addTo(nMap); nBase.bringToBack();
  toast(LAYERS[nBaseKey].name, 1500);
});
$('#n-sos').addEventListener('click', function () {
  var box = $('#n-coords');
  if (!box.hidden) { box.hidden = true; return; }
  var p = N && N.pos;
  var txt = p ? p.lat.toFixed(5) + ', ' + p.lon.toFixed(5) : 'Aún sin posición GPS';
  box.innerHTML = '<h3>EMERGENCIA</h3><div>Tus coordenadas (dáselas al 112):</div><div class="cv">' + txt + '</div>' +
    (p ? '<div style="font-size:12px;color:#8a8fa0">Precisión ±' + Math.round(p.acc) + ' m · Ruta: ' + esc(N.r.nombre) + '</div>' : '') +
    '<a class="btn btn-red" href="tel:112">Llamar al 112</a>' +
    (p ? '<a class="btn btn-out" href="sms:112?&body=' + encodeURIComponent('Emergencia en ruta ' + N.r.nombre + '. Coordenadas: ' + txt) + '">Enviar SMS con coordenadas</a>' : '') +
    '<button class="btn btn-out" type="button" id="sos-x">Cerrar</button>';
  box.hidden = false;
  $('#sos-x').onclick = function () { box.hidden = true; };
});

/* ================= ENRUTADO ================= */
function route() {
  var h = decodeURIComponent(location.hash.replace(/^#\/?/, '')).split('/');
  var v = h[0] || '';
  $('#v-list').hidden = v !== '';
  $('#v-detail').hidden = v !== 'ruta';
  $('#v-nav').hidden = v !== 'navegar';
  if (v !== 'navegar') stopNav();
  net();
  if (v === 'ruta') { openDetail(h[1]); window.scrollTo(0, 0); }
  else if (v === 'navegar') startNav(h[1], h[2] === 'inverso');
  else renderList();
}
window.addEventListener('hashchange', route);

/* instalación */
var deferred = null;
window.addEventListener('beforeinstallprompt', function (e) { e.preventDefault(); deferred = e; $('#btn-install').hidden = false; });
$('#btn-install').addEventListener('click', function () { if (!deferred) return; deferred.prompt(); deferred.userChoice.finally(function () { deferred = null; $('#btn-install').hidden = true; }); });
var standalone = window.matchMedia('(display-mode: standalone)').matches || navigator.standalone;
if (/iphone|ipad|ipod/i.test(navigator.userAgent) && !standalone && !store('acp-ioshint')) $('#ios-hint').hidden = false;
document.querySelector('.hint-x').addEventListener('click', function () { $('#ios-hint').hidden = true; store('acp-ioshint', 1); });

if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(function () {});

if (!ROUTES.length) $('#list').innerHTML = '<li class="empty">No se han podido cargar las rutas. Conéctate a internet y vuelve a abrir la app.</li>';
route();

window.ACP = { locate: locate, buildTrack: buildTrack, parseGPX: parseGPX, tilesFor: tilesFor, loadTrack: loadTrack }; // para pruebas
})();

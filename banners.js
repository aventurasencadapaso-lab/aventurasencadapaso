/* =====================================================================
   BANNERS – Aventuras en Cada Paso
   ---------------------------------------------------------------------
   TODO EN UN SITIO: para cambiar los banners de las 342 paginas,
   edita solo la lista BANNERS de abajo.

   Cada banner:
     id      : nombre corto, sin espacios (se usa en las estadisticas)
     tipo    : "propio"  -> promocion de la web (sin aviso de publicidad)
               "patrocinado" -> anuncio de pago (sale la etiqueta
                            "Publicidad" y el enlace lleva rel="sponsored")
     icono   : clase de Font Awesome, p.ej. "fa-dice"
     titulo  : texto grande (corto, 4-6 palabras)
     texto   : una frase de apoyo
     cta     : texto del boton
     url     : a donde lleva. Las paginas internas se escriben tal cual
               ("ruleta.html"); el script le pone "../" en rutas y blog.
     externo : true si es un enlace a otra web (se abre en pestana nueva)
     imagen  : opcional, logo o foto del anunciante (misma regla de ruta)
     zonas   : en que paginas puede salir ->
               "home", "ruta", "isla", "blog", "herramienta"
     peso    : cuantas veces mas probable que salga (1 = normal)

   Para VENDER un espacio: copia un bloque, pon tipo:"patrocinado",
   los datos del anunciante y su url completa con externo:true.
   ===================================================================== */

var BANNERS = [
  {
    id: 'ruleta',
    tipo: 'propio',
    icono: 'fa-dice',
    titulo: '¿No sabes a dónde ir?',
    texto: 'Deja que la ruleta elija tu próxima aventura entre las 236 rutas del archipiélago.',
    cta: 'Girar la ruleta',
    url: 'ruleta.html',
    zonas: ['ruta', 'isla', 'home', 'herramienta'],
    peso: 2
  },
  {
    id: 'calendario',
    tipo: 'propio',
    icono: 'fa-calendar-alt',
    titulo: '148 eventos outdoor en Canarias',
    texto: 'Carreras, travesías y quedadas de las 9 islas, en un solo calendario.',
    cta: 'Ver el calendario',
    url: 'calendario.html',
    zonas: ['ruta', 'isla', 'blog', 'home', 'herramienta'],
    peso: 2
  },
  {
    id: 'tiendas',
    tipo: 'propio',
    icono: 'fa-store',
    titulo: '¿Te falta material?',
    texto: '28 tiendas en Canarias para comprar, alquilar o reparar tu equipo.',
    cta: 'Ver tiendas',
    url: 'tiendas.html',
    zonas: ['ruta', 'isla', 'blog', 'home', 'herramienta'],
    peso: 2
  },
  {
    id: 'buscador',
    tipo: 'propio',
    icono: 'fa-compass',
    titulo: '236 rutas con GPS, gratis',
    texto: 'Filtra por isla, deporte, dificultad y distancia, y descarga el track.',
    cta: 'Buscar mi ruta',
    url: 'buscador-aventuras.html',
    zonas: ['blog', 'isla', 'herramienta'],
    peso: 2
  },
  {
    id: 'comparador',
    tipo: 'propio',
    icono: 'fa-balance-scale',
    titulo: '¿Qué isla elijo?',
    texto: 'Compara clima, rutas, dificultad y precios entre las 9 islas.',
    cta: 'Comparar islas',
    url: 'comparador.html',
    zonas: ['ruta', 'blog', 'herramienta'],
    peso: 1
  },
  {
    id: 'redes',
    tipo: 'propio',
    icono: 'fa-instagram',
    marca: 'fab',
    titulo: 'La ruta de la semana, en Instagram',
    texto: 'Cada semana una ruta nueva en vídeo, con su track para descargar.',
    cta: 'Seguirnos',
    url: 'https://instagram.com/aventurasencadapaso',
    externo: true,
    zonas: ['ruta', 'blog', 'home'],
    peso: 1
  },
  {
    id: 'empresas',
    tipo: 'propio',
    estilo: 'hueco',
    icono: 'fa-bullhorn',
    titulo: 'Tu marca, aquí',
    texto: 'Espacio disponible para tiendas, guías y empresas de turismo activo en Canarias.',
    cta: 'Cómo anunciarse',
    url: 'empresas.html',
    zonas: ['ruta', 'isla', 'blog', 'herramienta'],
    peso: 1
  }
];

(function () {
  'use strict';

  var slots = document.querySelectorAll('.promo-slot');
  if (!slots.length) return;

  /* ---------- estilos ---------- */
  if (!document.getElementById('promo-css')) {
    var st = document.createElement('style');
    st.id = 'promo-css';
    st.textContent = [
      '.promo-slot{max-width:860px;margin:36px auto;padding:0 28px;}',
      '.promo-slot--ancho{max-width:1100px;}',
      '.promo{display:flex;align-items:center;gap:18px;background:linear-gradient(135deg,#0c1624,#050b14);',
      'border:1px solid rgba(28,255,107,.18);border-left:3px solid #1cff6b;border-radius:16px;',
      'padding:20px 22px;text-decoration:none;transition:.2s;position:relative;overflow:hidden;}',
      '.promo:hover{border-color:rgba(28,255,107,.45);transform:translateY(-2px);',
      'box-shadow:0 10px 30px rgba(0,0,0,.45);}',
      '.promo__icono{flex:0 0 52px;width:52px;height:52px;border-radius:14px;display:flex;',
      'align-items:center;justify-content:center;background:rgba(28,255,107,.1);color:#1cff6b;font-size:1.4rem;}',
      '.promo__cuerpo{flex:1 1 auto;min-width:0;}',
      '.promo__titulo{display:block;font-family:Orbitron,sans-serif;font-size:13px;font-weight:700;',
      'color:#e8eaf0;letter-spacing:.5px;margin:0 0 6px;line-height:1.35;}',
      '.promo__texto{display:block;color:#8a8fa0;font-size:13px;line-height:1.6;margin:0;}',
      '.promo__cta{flex:0 0 auto;display:inline-flex;align-items:center;gap:8px;padding:11px 18px;',
      'background:#1cff6b;color:#02070f;border-radius:12px;font-family:Orbitron,sans-serif;',
      'font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;white-space:nowrap;}',
      '.promo:hover .promo__cta{background:#00e05a;}',
      '.promo__logo{max-height:40px;max-width:120px;border-radius:8px;}',
      '.promo__aviso{position:absolute;top:8px;right:12px;font-family:Orbitron,sans-serif;font-size:8px;',
      'letter-spacing:1.5px;text-transform:uppercase;color:#5a6070;}',
      '.promo--hueco{border-style:dashed;border-left-style:dashed;border-color:rgba(28,255,107,.25);',
      'background:rgba(28,255,107,.03);}',
      '.promo--hueco .promo__cta{background:transparent;color:#1cff6b;border:1px solid rgba(28,255,107,.4);}',
      '.promo--hueco:hover .promo__cta{background:rgba(28,255,107,.12);}',
      '.promo--patrocinado{border-left-color:#ff6f00;}',
      '.promo--patrocinado .promo__icono{background:rgba(255,111,0,.1);color:#ff6f00;}',
      '@media(max-width:700px){',
      '.promo-slot{padding:0 20px;margin:28px auto;}',
      '.promo{flex-wrap:wrap;gap:14px;padding:18px;}',
      '.promo{align-items:flex-start;}',
      '.promo__icono{flex:0 0 44px;width:44px;height:44px;font-size:1.2rem;order:1;}',
      '.promo__cuerpo{flex:1 1 0;min-width:0;order:2;}',
      '.promo__cta{flex:1 1 100%;order:3;justify-content:center;}',
      '}'
    ].join('');
    document.head.appendChild(st);
  }

  /* ---------- utilidades ---------- */
  function pagActual() {
    var p = location.pathname.split('/').pop();
    return p === '' ? 'index.html' : p;
  }

  function elegir(zona, usados) {
    var actual = pagActual();
    var bolsa = [];
    for (var i = 0; i < BANNERS.length; i++) {
      var b = BANNERS[i];
      if (!b.zonas || b.zonas.indexOf(zona) === -1) continue;
      if (!b.externo && b.url.split('/').pop() === actual) continue; // no anunciar la propia pagina
      if (usados.indexOf(b.id) !== -1) continue;
      var peso = b.peso || 1;
      for (var j = 0; j < peso; j++) bolsa.push(b);
    }
    if (!bolsa.length) return null;
    return bolsa[Math.floor(Math.random() * bolsa.length)];
  }

  function pintar(slot, b) {
    var base = slot.getAttribute('data-base') || '';
    var href = b.externo ? b.url : base + b.url;
    var marca = b.marca || 'fas';
    var a = document.createElement('a');
    a.className = 'promo' +
      (b.tipo === 'patrocinado' ? ' promo--patrocinado' : '') +
      (b.estilo === 'hueco' ? ' promo--hueco' : '');
    a.href = href;
    if (b.externo) { a.target = '_blank'; a.rel = b.tipo === 'patrocinado' ? 'sponsored noopener' : 'noopener'; }
    else if (b.tipo === 'patrocinado') { a.rel = 'sponsored'; }
    a.setAttribute('data-promo-id', b.id);

    var visual = b.imagen
      ? '<img class="promo__logo" src="' + (b.externo ? b.imagen : base + b.imagen) + '" alt="' + b.titulo + '" loading="lazy">'
      : '<i class="' + marca + ' ' + b.icono + '" aria-hidden="true"></i>';

    a.innerHTML =
      (b.tipo === 'patrocinado' ? '<span class="promo__aviso">Publicidad</span>' : '') +
      '<span class="promo__icono">' + visual + '</span>' +
      '<span class="promo__cuerpo">' +
        '<span class="promo__titulo">' + b.titulo + '</span>' +
        '<span class="promo__texto">' + b.texto + '</span>' +
      '</span>' +
      '<span class="promo__cta">' + b.cta + ' <i class="fas fa-arrow-right" aria-hidden="true"></i></span>';

    a.addEventListener('click', function () {
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'promo_click', {
          promo_id: b.id,
          promo_tipo: b.tipo,
          pagina: pagActual()
        });
      }
    });

    slot.appendChild(a);
    slot.setAttribute('data-promo-mostrado', b.id);
  }

  var usados = [];
  for (var i = 0; i < slots.length; i++) {
    var zona = slots[i].getAttribute('data-promo') || 'ruta';
    var b = elegir(zona, usados);
    if (!b) continue;
    usados.push(b.id);
    pintar(slots[i], b);
  }
})();

/*
   TIENDAS.JS — Base de datos de tiendas y equipamiento outdoor en Canarias
   Campos: id, nombre, isla, tipo, deporte[,
], zona, descripcion, direccion, telefono, web, foto, lat, lng
*/

var TIENDAS = [
  {
    id: "grandesport-gomera",
    nombre: "Deportes GranDesport",
    isla: "La Gomera", tipo: "Comprar",
    deporte: ["Senderismo", "Multideporte"],
    zona: "Sur",
    descripcion: "La única tienda de la isla especializada en equipo de senderismo y camping. También ofrecen información sobre rutas y el terreno para quienes visitan La Gomera.",
    direccion: "C. Real 47, 38800 San Sebastián de La Gomera, La Gomera",
    telefono: "+34 922 87 06 85",
    web: "",
    foto: "",
    lat: 28.0928977, lng: -17.1116994
  },

  // ══════════════════════════════════════
  //  TENERIFE
  // ══════════════════════════════════════
  {
    id: "oldpeak-tenerife",
    nombre: "Old Peak Mountain Store",
    isla: "Tenerife", tipo: "Comprar",
    deporte: ["Senderismo","Escalada","Trail Running","Barranquismo"],
    zona: "Norte",
    descripcion: "Tienda técnica de montaña en La Laguna. Escalada, alpinismo, senderismo, trail running y trabajos verticales. Marcas como Petzl, Black Diamond, La Sportiva y The North Face.",
    direccion: "Av. de la República Argentina 14, La Laguna, Tenerife",
    telefono: "+34 922 259 000",
    web: "https://www.oldpeak.es",
    foto: "imagenes/tiendas/oldpeak.jpg",
    lat: 28.4938689, lng: -16.3150688
  },
  {
    id: "tenerife-outdoor",
    nombre: "Tenerife Outdoor",
    isla: "Tenerife", tipo: "Comprar",
    deporte: ["Senderismo","Trail Running","Escalada","Barranquismo"],
    zona: "Norte",
    descripcion: "La tienda outdoor más completa de Canarias. Senderismo, alpinismo, barranquismo y trail running. Especialistas en calzado barefoot. Marcas Rab, Arc'teryx, Osprey y Salomon.",
    direccion: "Av. de la República Argentina 79, Local Bajo, 38208 San Cristóbal de La Laguna, Tenerife",
    telefono: "+34 922 257 892",
    web: "https://www.tenerifeoutdoor.com",
    foto: "imagenes/tiendas/tenerife-outdoor.jpg",
    lat: 28.5067422, lng: -16.3113805
  },
  {
    id: "javisport",
    nombre: "JaviSport",
    isla: "Tenerife", tipo: "Comprar",
    deporte: ["Escalada","Barranquismo","Senderismo"],
    zona: "Norte",
    descripcion: "Especialistas en escalada, barranquismo y trabajos verticales. Material técnico de seguridad, cuerdas, arneses y calzado de escalada. Asesoramiento experto.",
    direccion: "Carretera Provincial 189, Local 6, 38390 Santa Úrsula, Tenerife",
    telefono: "",
    web: "https://javisport.com",
    foto: "imagenes/tiendas/javisport.jpg",
    lat: 28.4165877, lng: -16.5038522
  },
  {
    id: "basalto-escalada",
    nombre: "Basalto Escalada",
    isla: "Tenerife", tipo: "Comprar",
    deporte: ["Escalada","Barranquismo","Senderismo"],
    zona: "Norte",
    descripcion: "Más de 25 años de experiencia en equipamiento de escalada y montaña. Tienda especializada con asesoramiento técnico de nivel. Productos de seguridad y escalada deportiva.",
    direccion: "C. Baltasar Núñez 2, 38202 San Cristóbal de La Laguna, Tenerife",
    telefono: "",
    web: "https://basaltoescalada.com",
    foto: "imagenes/tiendas/basalto-escalada.jpg",
    lat: 28.4865396, lng: -16.31804
  },
  {
    id: "grlimits",
    nombre: "GRLimits",
    isla: "Tenerife", tipo: "Comprar",
    deporte: ["Trail Running","Senderismo","Multideporte"],
    zona: "Norte",
    descripcion: "Tienda de trail running y material outdoor en Los Realejos. Nutrición deportiva, calzado técnico y equipamiento para corredores de montaña.",
    direccion: "Av. Los Remedios 9, 38410 Los Realejos, Tenerife",
    telefono: "",
    web: "https://grlimits.com",
    foto: "imagenes/tiendas/grlimits.jpg",
    lat: 28.3805079, lng: -16.5848371
  },
  {
    id: "xplore-tenerife",
    nombre: "Xplore Tenerife – Kayak & Bike",
    isla: "Tenerife", tipo: "Alquilar",
    deporte: ["Kayak","Surf","Ciclismo"],
    zona: "Sur",
    descripcion: "Alquiler y tours de kayak, paddle surf y bicicleta en Los Cristianos. Material náutico de calidad con rutas guiadas por la costa sur. Ideal para todos los niveles.",
    direccion: "Edificio Cristianmar, C. El Coronel 1, 38650 Los Cristianos, Tenerife",
    telefono: "+34 605 536 940",
    web: "https://xploretenerife.com",
    foto: "imagenes/tiendas/xplore-tenerife.jpg",
    lat: 28.0493552, lng: -16.7137002
  },
  {
    id: "decathlon-tenerife",
    nombre: "Decathlon Tenerife",
    isla: "Tenerife", tipo: "Comprar",
    deporte: ["Multideporte","Senderismo","Ciclismo","Surf"],
    zona: "Sur",
    descripcion: "Mayor oferta de equipamiento deportivo a buen precio. Senderismo, ciclismo, trail running, surf y camping. Nuevo servicio de alquiler náutico en tiendas seleccionadas.",
    direccion: "Av. de Ayyo s/n, 38670 Adeje, Tenerife",
    telefono: "",
    web: "https://www.decathlon.es/tiendas/tenerife",
    foto: "imagenes/tiendas/decathlon-tenerife.jpg",
    lat: 28.1227185, lng: -16.7445804
  },

  // ══════════════════════════════════════
  //  GRAN CANARIA
  // ══════════════════════════════════════
  {
    id: "limasport-gc",
    nombre: "Lima Sport Canarias",
    isla: "Gran Canaria", tipo: "Comprar",
    deporte: ["Escalada","Senderismo","Barranquismo","Trail Running"],
    zona: "Norte",
    descripcion: "Tienda especializada en equipamiento técnico para montaña, escalada, alpinismo y barranquismo. También material para trabajos en altura y rescate profesional.",
    direccion: "C. Fondos de Segura 3, 35019 Las Palmas de Gran Canaria",
    telefono: "+34 928 232 890",
    web: "https://limasportcanarias.com",
    foto: "imagenes/tiendas/limasport-gc.jpg",
    lat: 28.1066799, lng: -15.4532637
  },
  {
    id: "yukan-gran-canaria",
    nombre: "YUKAN Outdoor Gran Canaria",
    isla: "Gran Canaria", tipo: "Alquilar",
    deporte: ["Kayak","Escalada","Senderismo"],
    zona: "Norte",
    descripcion: "Alquiler de material para senderismo, escalada y coasteering. Guías especializados y equipamiento técnico para explorar Gran Canaria de forma segura.",
    direccion: "Telde, Gran Canaria",
    telefono: "+34 644 754 854",
    web: "https://yukanoutdoor.com",
    foto: "imagenes/tiendas/yukan-gran-canaria.jpg",
    lat: 27.9931, lng: -15.4177
  },
  {
    id: "canarias-extreme",
    nombre: "Canarias Extreme Sport",
    isla: "Gran Canaria", tipo: "Alquilar",
    deporte: ["Surf","Kayak","Multideporte"],
    zona: "Sur",
    descripcion: "Material outdoor y deportes extremos en Maspalomas. Buggys, jet ski, kayak y material acuático. Aventuras en el sur de Gran Canaria para todos los gustos.",
    direccion: "Av. de Oceanía, 35100 Maspalomas, Gran Canaria",
    telefono: "+34 675 911 923",
    web: "https://www.canariasextreme.com",
    foto: "imagenes/tiendas/canarias-extreme.jpg",
    lat: 27.736311, lng: -15.5947631
  },
  {
    id: "decathlon-gc",
    nombre: "Decathlon Gran Canaria",
    isla: "Gran Canaria", tipo: "Comprar",
    deporte: ["Multideporte","Senderismo","Surf","Ciclismo"],
    zona: "Norte",
    descripcion: "Equipamiento deportivo completo en Las Palmas y Telde. Nuevo servicio de alquiler náutico: kayak y paddle surf en tiendas del sur. Accesible para todos los bolsillos.",
    direccion: "Autovía GC-1, Km 8, 35213 Telde, Gran Canaria",
    telefono: "",
    web: "https://www.decathlon.es/tiendas/gran-canaria",
    foto: "imagenes/tiendas/decathlon-tenerife.jpg",
    lat: 27.9878, lng: -15.4144
  },

  // ══════════════════════════════════════
  //  LANZAROTE
  // ══════════════════════════════════════
  {
    id: "kayak-lanzarote",
    nombre: "Kayak Lanzarote",
    isla: "Lanzarote", tipo: "Alquilar",
    deporte: ["Kayak","Submarinismo"],
    zona: "Sur",
    descripcion: "Entre el 10% de las mejores atracciones del mundo. Alquiler de kayaks de mar en Los Ajaches y Papagayo. Kayaks individuales, dobles y de travesía. Snorkel incluido.",
    direccion: "C. Las Palmas 5, 35580 Playa Blanca, Lanzarote",
    telefono: "+34 928 585 636",
    web: "https://www.kayaklanzarote.com",
    foto: "imagenes/tiendas/kayak-walk-lanzarote.jpg",
    lat: 28.8590891, lng: -13.8030372
  },
  {
    id: "papagayo-watersports",
    nombre: "Papagayo Watersports",
    isla: "Lanzarote", tipo: "Alquilar",
    deporte: ["Kayak","Surf","Submarinismo"],
    zona: "Sur",
    descripcion: "Alquiler de kayaks, paddle surf, máscaras y trajes de neopreno en Playa Blanca. Kayaks individuales, dobles, triples y cuádruples. Precios especiales para familias.",
    direccion: "Complejo Sandos Papagayo, 35580 Playa Blanca, Lanzarote",
    telefono: "",
    web: "https://papagayowatersports.com",
    foto: "",
    lat: 28.8582723, lng: -13.798958
  },

  // ══════════════════════════════════════
  //  FUERTEVENTURA
  // ══════════════════════════════════════
  {
    id: "profuerte-fuerteventura",
    nombre: "ProFuerte Sports Centre",
    isla: "Fuerteventura", tipo: "Alquilar",
    deporte: ["Surf","Kayak"],
    zona: "Norte",
    descripcion: "Alquiler y clases de windsurf, kitesurf y paddle surf en Corralejo. Material de última generación. Sede de eventos internacionales de windsurf durante décadas.",
    direccion: "Av. Ntra. Sra. del Carmen 45, 35660 Corralejo, Fuerteventura",
    telefono: "+34 605 683 423",
    web: "https://profuerte.com",
    foto: "imagenes/tiendas/profuerte-fuerteventura.jpg",
    lat: 28.7359669, lng: -13.8681305
  },
  {
    id: "divecenter-corralejo",
    nombre: "Dive Center Corralejo",
    isla: "Fuerteventura", tipo: "Alquilar",
    deporte: ["Submarinismo"],
    zona: "Norte",
    descripcion: "Centro de buceo en Corralejo con acceso a los mejores spots de Fuerteventura. Alquiler de equipo, inmersiones guiadas y cursos PADI para todos los niveles.",
    direccion: "C/ Nuestra Señora del Pino 22, 35660 Corralejo, Fuerteventura",
    telefono: "+34 928 535 906",
    web: "https://divecentercorralejo.webnode.page",
    foto: "",
    lat: 28.7305, lng: -13.8631
  },

  // ══════════════════════════════════════
  //  LA PALMA
  // ══════════════════════════════════════,

  // ══════════════════════════════════════
  //  LA GOMERA
  // ══════════════════════════════════════,

  // ══════════════════════════════════════
  //  EL HIERRO
  // ══════════════════════════════════════
  {
    id: "buceo-elhierro",
    nombre: "Centro de Buceo El Hierro",
    isla: "El Hierro", tipo: "Alquilar",
    deporte: ["Submarinismo"],
    zona: "Sur",
    descripcion: "El mejor buceo de España en la Reserva Marina de La Restinga. Alquiler de equipo, bautismos de buceo y cursos PADI. Aguas con 50 m de visibilidad y fondos volcánicos únicos.",
    direccion: "C. El Rancho 12, 38917 La Restinga, El Hierro",
    telefono: "+34 922 558 164",
    web: "https://centrodebuceoelhierro.com",
    foto: "",
    lat: 27.6411, lng: -17.9867
  },

  // ══════════════════════════════════════
  //  ONLINE / TODA CANARIAS
  // ══════════════════════════════════════
  {
    id: "prozis",
    nombre: "Prozis – Nutrición Deportiva",
    isla: "Online", tipo: "Suplementación",
    deporte: ["Trail Running","Senderismo","Multideporte"],
    zona: "Online",
    descripcion: "Tienda online líder en suplementación deportiva con envío a Canarias. Proteínas, geles, barritas energéticas y suplementos para deportes de resistencia y aventura.",
    direccion: "Online",
    telefono: "",
    web: "https://www.prozis.com/es/es/",
    foto: "imagenes/tiendas/prozis.jpg",
    lat: null, lng: null
  },
  {
    id: "barrabes",
    nombre: "Barrabes – Especialistas Outdoor",
    isla: "Online", tipo: "Comprar",
    deporte: ["Senderismo","Escalada","Trail Running","Multideporte"],
    zona: "Online",
    descripcion: "La referencia española en material técnico de montaña. Escalada, senderismo, alta montaña y aventura. Asesoramiento experto y envío a Canarias.",
    direccion: "Online",
    telefono: "",
    web: "https://www.barrabes.com",
    foto: "imagenes/tiendas/barrabes.jpg",
    lat: null, lng: null
  },

  // ══════════════════════════════════════
  //  TENERIFE — más tiendas
  // ══════════════════════════════════════
  {
    id: "izas-tenerife",
    nombre: "Izas Outdoor Canarias",
    isla: "Tenerife", tipo: "Comprar",
    deporte: ["Senderismo","Trail Running","Multideporte"],
    zona: "Norte",
    descripcion: "Más de 25 años vistiendo a senderistas y trekkers. Ropa técnica de senderismo con la mejor relación calidad-precio de Canarias. Marca canaria con tienda en Tenerife.",
    direccion: "Rambla de Santa Cruz 74, 38001 Santa Cruz de Tenerife",
    telefono: "",
    web: "https://izas-outdoorcanarias.com",
    foto: "",
    lat: 28.4697462, lng: -16.2593062
  },

  // ══════════════════════════════════════
  //  GRAN CANARIA — más tiendas
  // ══════════════════════════════════════
  {
    id: "perojo-gc",
    nombre: "Perojo Deportes de Montaña",
    isla: "Gran Canaria", tipo: "Comprar",
    deporte: ["Senderismo","Escalada","Trail Running","Barranquismo"],
    zona: "Norte",
    descripcion: "Tienda clásica de deportes de montaña en Las Palmas. Senderismo, escalada, alpinismo y barranquismo. Una de las referencias del outdoor en Gran Canaria desde hace décadas.",
    direccion: "C. Perojo 27, 35003 Las Palmas de Gran Canaria",
    telefono: "",
    web: "https://www.perojo.com",
    foto: "",
    lat: 28.1099094, lng: -15.4195245
  },
  {
    id: "mandala-climb-gc",
    nombre: "Mandala Climb Gran Canaria",
    isla: "Gran Canaria", tipo: "Comprar",
    deporte: ["Escalada","Barranquismo"],
    zona: "Norte",
    descripcion: "Especialistas en escalada, boulder y montañismo. Equipamiento técnico de las mejores marcas con personal con años de experiencia en la práctica de la escalada. Envíos a todas las islas.",
    direccion: "C. Manuel González Martín 18, 35006 Las Palmas de Gran Canaria",
    telefono: "",
    web: "https://www.mandalaclimb.com",
    foto: "",
    lat: 28.1296081, lng: -15.4310436
  },

  // ══════════════════════════════════════
  //  LANZAROTE — más tiendas
  // ══════════════════════════════════════,

  // ══════════════════════════════════════
  //  FUERTEVENTURA — más tiendas
  // ══════════════════════════════════════,

  // ══════════════════════════════════════
  //  LA PALMA — más tiendas
  // ══════════════════════════════════════,

  // ══════════════════════════════════════
  //  LA GOMERA — más tiendas
  // ══════════════════════════════════════,

  // ══════════════════════════════════════
  //  EL HIERRO — más tiendas
  // ══════════════════════════════════════,

  // ══════════════════════════════════════
  //  LA GRACIOSA
  // ══════════════════════════════════════

  // ── NUEVAS TIENDAS TENERIFE ──
  {
    id: "canary-runner",
    nombre: "Canary Runner",
    isla: "Tenerife", tipo: "Comprar",
    deporte: ["Trail Running","Senderismo","Running"],
    zona: "Norte",
    descripcion: "Tienda especializada en Trail Running, Running y Trekking en el norte de Tenerife. Calzado técnico, ropa, accesorios y suplementación de las mejores marcas.",
    direccion: "C. La Longuera 28, 38418 Los Realejos, Tenerife",
    telefono: "+34 613 604 714",
    web: "https://canaryrunner.com",
    foto: "",
    lat: 28.3977833, lng: -16.5763002
  }
  ,{
    id: "bikila-los-realejos",
    nombre: "Bikila Los Realejos",
    isla: "Tenerife", tipo: "Comprar",
    deporte: ["Trail Running","Running","Atletismo"],
    zona: "Norte",
    descripcion: "Tienda especializada en atletismo, running y trail abierta en 2026. Sección Trail 100%, pista de tartán para probar zapatillas de clavos.",
    direccion: "Calle La Longuera 46, 38418 Los Realejos, Tenerife",
    telefono: "+34 922 224 525",
    web: "https://bikila.com/pages/bikila-los-realejos",
    foto: "",
    lat: 28.3976664, lng: -16.5774304
  }
  ,{
    id: "bikila-la-laguna",
    nombre: "Bikila La Laguna",
    isla: "Tenerife", tipo: "Comprar",
    deporte: ["Trail Running","Running","Atletismo"],
    zona: "Norte",
    descripcion: "Tienda de atletismo, running y trail en La Laguna. Abierta desde agosto 2024, continuando el legado de Guzmán Sport.",
    direccion: "Calle El Juego 14, 38204 La Laguna, Tenerife",
    telefono: "+34 922 251 186",
    web: "https://bikila.com/pages/bikila-la-laguna",
    foto: "",
    lat: 28.4870377, lng: -16.3172391
  }
  ,{
    id: "tenerife-climbing-house",
    nombre: "Tenerife Climbing House",
    isla: "Tenerife", tipo: "Comprar",
    deporte: ["Escalada","Barranquismo"],
    zona: "Sur",
    descripcion: "Albergue, escuela de escalada, tienda y alquiler de material en Villa de Arico. El punto neurálgico de la escalada en Tenerife.",
    direccion: "C/ La Asomadita 8, 38580 Villa de Arico, Tenerife",
    telefono: "",
    web: "https://tenerifeclimbinghouse.com",
    foto: "",
    lat: 28.166328, lng: -16.500372
  }
  // ── NUEVAS TIENDAS GRAN CANARIA ──
  ,{
    id: "bikila-las-palmas",
    nombre: "Bikila Las Palmas",
    isla: "Gran Canaria", tipo: "Comprar",
    deporte: ["Trail Running","Running","Atletismo"],
    zona: "Norte",
    descripcion: "Tienda especializada en atletismo, running y trail abierta en agosto 2025 junto al CC Siete Palmas. Sección Trail 100% y pista de tartán.",
    direccion: "Av. Pintor Felo Monzón 39, Las Palmas de Gran Canaria",
    telefono: "+34 928 768 351",
    web: "https://bikila.com/pages/bikila-las-palmas-gran-canaria",
    foto: "",
    lat: 28.0969714, lng: -15.4550169
  }
  
]; // ← No borres este corchete

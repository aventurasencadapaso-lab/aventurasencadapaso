/*
   TIENDAS.JS — Base de datos de tiendas y equipamiento outdoor en Canarias
   Campos: id, nombre, isla, tipo, deporte[], zona, descripcion, direccion, telefono, web, foto, lat, lng
*/

var TIENDAS = [

  // ══════════════════════════════════════
  //  TENERIFE
  // ══════════════════════════════════════
  {
    id: "oldpeak-tenerife",
    nombre: "Old Peak Mountain Store",
    isla: "Tenerife", tipo: "Comprar",
    deporte: ["Senderismo","Escalada","Trail Running","Barranquismo"],
    zona: "Norte",
    descripcion: "Tienda técnica de montaña en La Laguna. Escalada, alpinismo, senderismo, trail running y trabajos verticales. Marcas como Petzl, Arc'teryx, La Sportiva y The North Face.",
    direccion: "Av. de la República Argentina 14, La Laguna, Tenerife",
    telefono: "+34 922 259 000",
    web: "https://www.oldpeak.es",
    foto: "imagenes/tiendas/oldpeak.jpg",
    lat: 28.4858, lng: -16.3175
  },
  {
    id: "tenerife-outdoor",
    nombre: "Tenerife Outdoor",
    isla: "Tenerife", tipo: "Comprar",
    deporte: ["Senderismo","Trail Running","Escalada","Barranquismo"],
    zona: "Norte",
    descripcion: "La tienda outdoor más completa de Canarias. Senderismo, alpinismo, barranquismo y trail running. Especialistas en calzado barefoot. Marcas Rab, Arc'teryx, Osprey y Salomon.",
    direccion: "San Cristóbal de La Laguna, Tenerife",
    telefono: "+34 922 257 892",
    web: "https://www.tenerifeoutdoor.com",
    foto: "imagenes/tiendas/tenerife-outdoor.jpg",
    lat: 28.4869, lng: -16.3159
  },
  {
    id: "javisport",
    nombre: "JaviSport",
    isla: "Tenerife", tipo: "Comprar",
    deporte: ["Escalada","Barranquismo","Senderismo"],
    zona: "Norte",
    descripcion: "Especialistas en escalada, barranquismo y trabajos verticales. Material técnico de seguridad, cuerdas, arneses y calzado de escalada. Asesoramiento experto.",
    direccion: "Santa Cruz de Tenerife",
    telefono: "",
    web: "https://javisport.com",
    foto: "imagenes/tiendas/javisport.jpg",
    lat: 28.4636, lng: -16.2518
  },
  {
    id: "basalto-escalada",
    nombre: "Basalto Escalada",
    isla: "Tenerife", tipo: "Comprar",
    deporte: ["Escalada","Barranquismo","Senderismo"],
    zona: "Norte",
    descripcion: "Más de 30 años de experiencia en equipamiento de escalada y montaña. Tienda especializada con asesoramiento técnico de nivel. Productos de seguridad y escalada deportiva.",
    direccion: "C/ Baltasar Núñez, Edificio Málaga nº2, 38202 San Cristóbal de La Laguna, Tenerife",
    telefono: "+34 922 258 029",
    web: "https://basaltoescalada.com",
    foto: "imagenes/tiendas/basalto-escalada.jpg",
    lat: 28.4864, lng: -16.3186
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
    lat: 28.3750, lng: -16.5880
  },
  {
    id: "xplore-tenerife",
    nombre: "Xplore Tenerife – Kayak & Bike",
    isla: "Tenerife", tipo: "Alquilar",
    deporte: ["Kayak","Surf","Ciclismo"],
    zona: "Sur",
    descripcion: "Alquiler y tours de kayak, paddle surf y bicicleta en Los Cristianos. Material náutico de calidad con rutas guiadas por la costa sur. Ideal para todos los niveles.",
    direccion: "Los Cristianos, Tenerife",
    telefono: "+34 605 536 940",
    web: "https://xploretenerife.com",
    foto: "imagenes/tiendas/xplore-tenerife.jpg",
    lat: 28.0514, lng: -16.7147
  },
  {
    id: "decathlon-tenerife",
    nombre: "Decathlon Tenerife",
    isla: "Tenerife", tipo: "Comprar",
    deporte: ["Multideporte","Senderismo","Ciclismo","Surf"],
    zona: "Sur",
    descripcion: "Mayor oferta de equipamiento deportivo a buen precio. Senderismo, ciclismo, trail running, surf y camping. Nuevo servicio de alquiler náutico en tiendas seleccionadas.",
    direccion: "San Isidro, Tenerife",
    telefono: "",
    web: "https://www.decathlon.es/tiendas/tenerife",
    foto: "imagenes/tiendas/decathlon-tenerife.jpg",
    lat: 28.0764, lng: -16.5625
  },

  // ══════════════════════════════════════
  //  GRAN CANARIA
  // ══════════════════════════════════════
  {
    id: "limasport-gc",
    nombre: "Lima Sport Canarias",
    isla: "Gran Canaria", tipo: "Comprar",
    deporte: ["Escalada","Senderismo","Barranquismo","Alpinismo"],
    zona: "Norte",
    descripcion: "Tienda especializada en equipamiento técnico para montaña, escalada, alpinismo y barranquismo. También material para trabajos en altura y rescate profesional.",
    direccion: "C/ Fondos de Segura 3, 35019 Las Palmas de Gran Canaria",
    telefono: "+34 928 232 890",
    web: "https://limasportcanarias.com",
    foto: "imagenes/tiendas/limasport-gc.jpg",
    lat: 28.1077, lng: -15.4256
  },
  {
    id: "yukan-gran-canaria",
    nombre: "YUKAN Outdoor Gran Canaria",
    isla: "Gran Canaria", tipo: "Alquilar",
    deporte: ["Kayak","Escalada","Senderismo"],
    zona: "Sur",
    descripcion: "Alquiler de material para senderismo, escalada y coasteering. Guías especializados y equipamiento técnico para explorar Gran Canaria de forma segura.",
    direccion: "Las Palmas de Gran Canaria",
    telefono: "+34 644 754 854",
    web: "https://yukanoutdoor.com",
    foto: "imagenes/tiendas/yukan-gran-canaria.jpg",
    lat: null, lng: null
  },
  {
    id: "canarias-extreme",
    nombre: "Canarias Extreme Sport",
    isla: "Gran Canaria", tipo: "Alquilar",
    deporte: ["Surf","Kayak","Multideporte"],
    zona: "Sur",
    descripcion: "Material outdoor y deportes extremos en Maspalomas. Buggys, jet ski, kayak y material acuático. Aventuras en el sur de Gran Canaria para todos los gustos.",
    direccion: "Maspalomas, Gran Canaria",
    telefono: "+34 675 911 923",
    web: "https://www.canariasextreme.com",
    foto: "imagenes/tiendas/canarias-extreme.jpg",
    lat: null, lng: null
  },
  {
    id: "decathlon-gc",
    nombre: "Decathlon Gran Canaria",
    isla: "Gran Canaria", tipo: "Comprar",
    deporte: ["Multideporte","Senderismo","Surf","Ciclismo"],
    zona: "Norte",
    descripcion: "Equipamiento deportivo completo en Las Palmas y Telde. Nuevo servicio de alquiler náutico: kayak y paddle surf en tiendas del sur. Accesible para todos los bolsillos.",
    direccion: "Telde / Las Palmas de Gran Canaria",
    telefono: "",
    web: "https://www.decathlon.es/tiendas/gran-canaria",
    foto: "imagenes/tiendas/decathlon-tenerife.jpg",
    lat: null, lng: null
  },

  // ══════════════════════════════════════
  //  LANZAROTE
  // ══════════════════════════════════════
  
  {
    id: "papagayo-watersports",
    nombre: "Papagayo Watersports",
    isla: "Lanzarote", tipo: "Alquilar",
    deporte: ["Kayak","Surf","Submarinismo"],
    zona: "Sur",
    descripcion: "Alquiler de kayaks, paddle surf, máscaras y trajes de neopreno en Playa Blanca. Kayaks individuales, dobles, triples y cuádruples. Precios especiales para familias.",
    direccion: "Playa Blanca, Lanzarote",
    telefono: "",
    web: "https://papagayowatersports.com",
    foto: "",
    lat: 28.86, lng: -13.8400
  },
  {
    id: "kayak-walk-lanzarote",
    nombre: "Kayak & Walk in Lanzarote",
    isla: "Lanzarote", tipo: "Alquilar",
    deporte: ["Kayak","Senderismo","Submarinismo"],
    zona: "Sur",
    descripcion: "Alquiler de kayaks de mar y material de snorkel en Playa Blanca. Rutas guiadas por Los Ajaches y las calas de Papagayo, con paradas para buceo en fondos volcánicos. Kayaks individuales, dobles y de travesía.",
    direccion: "Playa Blanca, Lanzarote",
    telefono: "+34 928 585 636",
    web: "https://kayakandwalkinlanzarote.com",
    foto: "imagenes/tiendas/kayak-walk-lanzarote.jpg",
    lat: 28.8630, lng: -13.8360
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
    direccion: "Corralejo, Fuerteventura",
    telefono: "+34 605 683 423",
    web: "https://profuerte.com",
    foto: "imagenes/tiendas/profuerte-fuerteventura.jpg",
    lat: 28.7286, lng: -13.8653
  },
  

  // ══════════════════════════════════════
  //  LA PALMA
  // ══════════════════════════════════════,

  // ══════════════════════════════════════
  //  LA GOMERA
  // ══════════════════════════════════════,
  {
    id: "adventure-capital-tenerife",
    nombre: "Adventure Capital",
    isla: "Tenerife", tipo: "Alquilar",
    deporte: ["Senderismo","Barranquismo","Trail Running","Ciclismo","Surf"],
    zona: "Norte",
    descripcion: "Turismo activo con guía oficial UIMLA en Tenerife: senderismo, ascensión al Teide, barranquismo, trail running, ciclismo, surf y observación de cetáceos. También organiza circuitos guiados en el resto de islas.",
    direccion: "Rambla de Santa Cruz 149, 1B, 38001 Santa Cruz de Tenerife",
    telefono: "+34 629 392 160",
    web: "https://www.adventurecapital.es",
    foto: "",
    lat: 28.4682, lng: -16.2637
  },

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
    direccion: "La Restinga, El Hierro",
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
    id: "izas-outdoor",
    nombre: "Izas Outdoor",
    isla: "Marca", tipo: "Marca",
    deporte: ["Senderismo","Trail Running","Multideporte"],
    zona: "Marca",
    descripcion: "Marca española de ropa técnica para senderismo, trekking y actividades al aire libre, con más de 35 años de trayectoria. Sus productos están disponibles en diferentes tiendas de Canarias a través de su red comercial en las islas.",
    direccion: "Disponible en tiendas colaboradoras de Canarias",
    telefono: "",
    web: "https://www.izas-outdoor.com",
    foto: "",
    lat: null, lng: null
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
    direccion: "Las Palmas de Gran Canaria",
    telefono: "",
    web: "https://www.perojo.com",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "mandala-climb-gc",
    nombre: "Mandala Climb Gran Canaria",
    isla: "Gran Canaria", tipo: "Comprar",
    deporte: ["Escalada","Barranquismo"],
    zona: "Norte",
    descripcion: "Especialistas en escalada, boulder y montañismo. Equipamiento técnico de las mejores marcas con personal con años de experiencia en la práctica de la escalada. Envíos a todas las islas.",
    direccion: "C/ Manuel González Martín 18, 35006 Las Palmas de Gran Canaria",
    telefono: "+34 928 249 809",
    web: "https://www.mandalaclimb.com",
    foto: "",
    lat: 28.1128, lng: -15.4302
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
  ,{
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
    lat: 28.3841, lng: -16.5925
  }
  ,{
    id: "bikila-los-realejos",
    nombre: "Bikila Los Realejos",
    isla: "Tenerife", tipo: "Comprar",
    deporte: ["Trail Running","Running","Atletismo"],
    zona: "Norte",
    descripcion: "Tienda de atletismo, running y trail. Los Realejos, El Toscal.",
    direccion: "Calle La Longuera 46, 38418 Los Realejos, Tenerife",
    telefono: "+34 922 224 525",
    web: "https://bikila.com/pages/bikila-los-realejos",
    foto: "",
    lat: 28.3838, lng: -16.5921
  }
  ,{
    id: "bikila-la-laguna",
    nombre: "Bikila La Laguna",
    isla: "Tenerife", tipo: "Comprar",
    deporte: ["Trail Running","Running","Atletismo"],
    zona: "Norte",
    descripcion: "Tienda de atletismo, running y trail. La Laguna.",
    direccion: "Calle El Juego 14, 38204 La Laguna, Tenerife",
    telefono: "+34 922 251 186",
    web: "https://bikila.com/pages/bikila-la-laguna",
    foto: "",
    lat: 28.4879, lng: -16.3187
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
    lat: 28.1641, lng: -16.4826
  }
  // ── NUEVAS TIENDAS GRAN CANARIA ──
  ,{
    id: "bikila-las-palmas",
    nombre: "Bikila Las Palmas",
    isla: "Gran Canaria", tipo: "Comprar",
    deporte: ["Trail Running","Running","Atletismo"],
    zona: "Norte",
    descripcion: "Tienda de atletismo, running y trail. CC Siete Palmas.",
    direccion: "Av. Pintor Felo Monzón 39, Las Palmas de Gran Canaria",
    telefono: "+34 928 768 351",
    web: "https://bikila.com/pages/bikila-las-palmas-gran-canaria",
    foto: "",
    lat: 28.1033, lng: -15.4372
  }
  ]; // ← No borres este corchete

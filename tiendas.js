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
    descripcion: "Tienda técnica de montaña en La Laguna. Escalada, alpinismo, senderismo, trail running y trabajos verticales. Marcas como Petzl, Black Diamond, La Sportiva y The North Face.",
    direccion: "Camino la Rúa 12, 38201 La Laguna, Tenerife",
    telefono: "+34 922 259 000",
    web: "https://www.oldpeak.es",
    foto: "imagenes/tiendas/oldpeak.jpg",
    lat: 28.4930, lng: -16.3180
  },
  {
    id: "tenerife-outdoor",
    nombre: "Tenerife Outdoor",
    isla: "Tenerife", tipo: "Comprar",
    deporte: ["Senderismo","Trail Running","Escalada","Barranquismo"],
    zona: "Norte",
    descripcion: "La tienda outdoor más completa de Canarias. Senderismo, alpinismo, barranquismo y trail running. Especialistas en calzado barefoot. Marcas Rab, Arc'teryx, Osprey y Salomon.",
    direccion: "Av. República Argentina 79, 38208 La Laguna, Tenerife",
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
    direccion: "Ctra. Provincial 189, Local 6, 38390 Santa Úrsula, Tenerife",
    telefono: "",
    web: "https://javisport.com",
    foto: "imagenes/tiendas/javisport.jpg",
    lat: 28.4166, lng: -16.5039
  },
  {
    id: "basalto-escalada",
    nombre: "Basalto Escalada",
    isla: "Tenerife", tipo: "Comprar",
    deporte: ["Escalada","Barranquismo","Senderismo"],
    zona: "Norte",
    descripcion: "Más de 25 años de experiencia en equipamiento de escalada y montaña. Tienda especializada con asesoramiento técnico de nivel. Productos de seguridad y escalada deportiva.",
    direccion: "Tenerife",
    telefono: "",
    web: "https://basaltoescalada.com",
    foto: "imagenes/tiendas/basalto-escalada.jpg",
    lat: 28.4700, lng: -16.2600
  },
  {
    id: "grlimits",
    nombre: "GRLimits",
    isla: "Tenerife", tipo: "Suplementación",
    deporte: ["Trail Running","Senderismo","Multideporte"],
    zona: "Norte",
    descripcion: "Nutrición deportiva para atletas de resistencia. Proteínas, geles energéticos, creatina y suplementos para trail running y aventuras largas. Envío a toda Canarias.",
    direccion: "Av. Los Remedios 9, 38410 Los Realejos, Tenerife",
    telefono: "",
    web: "https://grlimits.com",
    foto: "imagenes/tiendas/grlimits.jpg",
    lat: 28.3847, lng: -16.5930
  },
  {
    id: "xplore-tenerife",
    nombre: "Xplore Tenerife – Kayak & Bike",
    isla: "Tenerife", tipo: "Alquilar",
    deporte: ["Kayak","Surf","Ciclismo"],
    zona: "Sur",
    descripcion: "Alquiler y tours de kayak, paddle surf y bicicleta en Los Cristianos. Material náutico de calidad con rutas guiadas por la costa sur. Ideal para todos los niveles.",
    direccion: "Calle El Coronel 1, Edif. Cristianmar, 38650 Los Cristianos, Tenerife",
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
    direccion: "Av. de Ayyo S/N, 38670 Adeje, Tenerife",
    telefono: "",
    web: "https://www.decathlon.es/tiendas/tenerife",
    foto: "imagenes/tiendas/decathlon-tenerife.jpg",
    lat: 28.1219, lng: -16.7258
  },
  {
    id: "taller-outdoor-tenerife",
    nombre: "Taller Outdoor Tenerife",
    isla: "Tenerife", tipo: "Reparar",
    deporte: ["Senderismo","Trail Running","Escalada"],
    zona: "Norte",
    descripcion: "Reparación de material outdoor: botas de senderismo, mochilas, tiendas de campaña y material técnico. Técnicos especializados con piezas originales y servicio rápido.",
    direccion: "C/ San Francisco 25, 38002 Santa Cruz de Tenerife",
    telefono: "",
    web: "",
    foto: "imagenes/tiendas/taller-outdoor-tenerife.jpg",
    lat: null, lng: null
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
    direccion: "C/ Fondos del Segura 3, Las Palmas de Gran Canaria",
    telefono: "+34 928 232 890",
    web: "https://limasportcanarias.com",
    foto: "imagenes/tiendas/limasport-gc.jpg",
    lat: 28.4636, lng: -16.2518
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
  {
    id: "divecenter-arguineguin",
    nombre: "Dive Center Arguineguín",
    isla: "Gran Canaria", tipo: "Alquilar",
    deporte: ["Submarinismo"],
    zona: "Sur",
    descripcion: "Centro de buceo en el sur de Gran Canaria. Inmersiones guiadas, alquiler de equipo y cursos PADI. Acceso al Cabrón, uno de los mejores spots de buceo de las islas.",
    direccion: "Arguineguín, Gran Canaria",
    telefono: "+34 928 736 196",
    web: "",
    foto: "",
    lat: 27.7572, lng: -15.6833
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
    direccion: "Calle Las Palmas 5, 35580 Playa Blanca, Lanzarote",
    telefono: "+34 928 585 636",
    web: "https://www.kayaklanzarote.com",
    foto: "imagenes/tiendas/kayak-walk-lanzarote.jpg",
    lat: 28.8630, lng: -13.8360
  },
  {
    id: "papagayo-watersports",
    nombre: "Papagayo Watersports",
    isla: "Lanzarote", tipo: "Alquilar",
    deporte: ["Kayak","Surf","Submarinismo"],
    zona: "Sur",
    descripcion: "Alquiler de kayaks, paddle surf, máscaras y trajes de neopreno en Playa Blanca. Kayaks individuales, dobles, triples y cuádruples. Precios especiales para familias.",
    direccion: "Playa Las Coloradas s/n, 35580 Playa Blanca, Lanzarote",
    telefono: "",
    web: "https://papagayowatersports.com",
    foto: "",
    lat: 28.8600, lng: -13.8400
  },
  {
    id: "kayak-walk-lanzarote",
    nombre: "Kayak & Walk in Lanzarote",
    isla: "Lanzarote", tipo: "Alquilar",
    deporte: ["Kayak","Senderismo"],
    zona: "Sur",
    descripcion: "Alquiler de kayaks y material de snorkel en Playa Blanca. Rutas guiadas por las calas de Papagayo con paradas para buceo en fondos volcánicos únicos.",
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
    direccion: "Calle Bahía 2, 35660 Corralejo, Fuerteventura",
    telefono: "+34 605 683 423",
    web: "https://profuerte.com",
    foto: "imagenes/tiendas/profuerte-fuerteventura.jpg",
    lat: 28.7286, lng: -13.8653
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
    web: "https://divecentercorralejo.com",
    foto: "",
    lat: 28.7305, lng: -13.8631
  },
  {
    id: "deepblue-fuerteventura",
    nombre: "Deep Blue Diving Fuerteventura",
    isla: "Fuerteventura", tipo: "Alquilar",
    deporte: ["Submarinismo"],
    zona: "Este",
    descripcion: "Centro de buceo en Caleta de Fuste. Dos salidas diarias a las 9:00 y 13:30. Acceso a los mejores arrecifes de Fuerteventura con barco propio y equipo completo.",
    direccion: "Caleta de Fuste, Fuerteventura",
    telefono: "+34 928 163 157",
    web: "",
    foto: "",
    lat: 28.3953, lng: -13.8631
  },
  {
    id: "decathlon-fuerteventura",
    nombre: "Decathlon Fuerteventura",
    isla: "Fuerteventura", tipo: "Comprar",
    deporte: ["Multideporte","Surf","Senderismo"],
    zona: "Norte",
    descripcion: "Equipamiento deportivo completo para surf, senderismo y multideporte en Fuerteventura. La opción más económica para equiparte antes de tus aventuras en la isla del viento.",
    direccion: "Puerto del Rosario, Fuerteventura",
    telefono: "",
    web: "https://www.decathlon.es/tiendas/fuerteventura",
    foto: "imagenes/tiendas/decathlon-tenerife.jpg",
    lat: null, lng: null
  },

  // ══════════════════════════════════════
  //  LA PALMA
  // ══════════════════════════════════════
  {
    id: "aventura-lapalma",
    nombre: "La Palma Aventura",
    isla: "La Palma", tipo: "Alquilar",
    deporte: ["Senderismo","Trail Running","Barranquismo"],
    zona: "Oeste",
    descripcion: "Alquiler de material para senderismo y barranquismo en La Palma. Guías locales especializados en la Caldera de Taburiente, la Ruta de los Volcanes y el Tajogaite.",
    direccion: "Santa Cruz de La Palma",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "transvulcania-shop",
    nombre: "Transvulcania Shop",
    isla: "La Palma", tipo: "Comprar",
    deporte: ["Trail Running","Senderismo"],
    zona: "Sur",
    descripcion: "Tienda oficial de la carrera Transvulcania, uno de los trail más duros del mundo. Material técnico de trail running, ropa y merchandising de las carreras de montaña de La Palma.",
    direccion: "Los Llanos de Aridane, La Palma",
    telefono: "",
    web: "https://transvulcania.info",
    foto: "",
    lat: 28.5004, lng: -13.8627
  },

  // ══════════════════════════════════════
  //  LA GOMERA
  // ══════════════════════════════════════
  {
    id: "gomera-bike",
    nombre: "Gomera Bike",
    isla: "La Gomera", tipo: "Alquilar",
    deporte: ["Ciclismo","Senderismo"],
    zona: "Sur",
    descripcion: "Alquiler de bicicletas de montaña y carretera en La Gomera. Rutas guiadas por los barrancos y el Parque Nacional de Garajonay. El mejor modo de explorar la isla.",
    direccion: "La Playa, Valle Gran Rey, La Gomera",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "adventure-capital-gomera",
    nombre: "Adventure Capital La Gomera",
    isla: "La Gomera", tipo: "Alquilar",
    deporte: ["Kayak","Senderismo","Multideporte"],
    zona: "Sur",
    descripcion: "Kayak por la costa sur de La Gomera, senderismo guiado y actividades multiaventura. Guías locales con gran conocimiento de los barrancos y senderos de la isla.",
    direccion: "Valle Gran Rey, La Gomera",
    telefono: "",
    web: "https://adventurecapital.es",
    foto: "",
    lat: null, lng: null
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
    lat: 28.0828, lng: -17.3270
  },
  {
    id: "hierro-rent",
    nombre: "El Hierro Rent & Sport",
    isla: "El Hierro", tipo: "Alquilar",
    deporte: ["Senderismo","Ciclismo","Multideporte"],
    zona: "Norte",
    descripcion: "Alquiler de bicicletas, material de senderismo y equipamiento outdoor en El Hierro. La isla más sostenible de Europa, ideal para explorar sin dejar huella.",
    direccion: "Valverde, El Hierro",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
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
    direccion: "Tenerife",
    telefono: "",
    web: "https://izas-outdoorcanarias.com",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "surf-point-tenerife",
    nombre: "Surf Point Tenerife",
    isla: "Tenerife", tipo: "Comprar",
    deporte: ["Surf","Kayak"],
    zona: "Norte",
    descripcion: "Tienda de surf en Santa Cruz de Tenerife. Tablas, trajes de neopreno, accesorios de surf y material de paddle surf. La referencia del surf en el norte de la isla.",
    direccion: "C/ Ángel Guimerá 13, Santa Cruz de Tenerife",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "neptuno-surf-tenerife",
    nombre: "Neptuno Surf Shop",
    isla: "Tenerife", tipo: "Comprar",
    deporte: ["Surf","Submarinismo"],
    zona: "Sur",
    descripcion: "Surf, bodyboard y deportes acuáticos en el sur de Tenerife. Tablas, neoprenos, leashes y todo el material para el océano Atlántico. Alquiler de material en temporada.",
    direccion: "Calle El Coronel 1, Edif. Cristianmar, 38650 Los Cristianos, Tenerife",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "barranquismo-tenerife",
    nombre: "Barrancos Canarios",
    isla: "Tenerife", tipo: "Alquilar",
    deporte: ["Barranquismo","Escalada","Senderismo"],
    zona: "Norte",
    descripcion: "Alquiler de material técnico para barranquismo: cuerdas, arneses, descensores y cascos. Guías homologados para los barrancos de Masca, Acha y Los Órganos.",
    direccion: "La Orotava, Tenerife",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "paragliding-tenerife",
    nombre: "Free Flight Tenerife",
    isla: "Tenerife", tipo: "Alquilar",
    deporte: ["Multideporte"],
    zona: "Sur",
    descripcion: "Vuelos en parapente biplaza sobre el sur de Tenerife con vistas al Teide y al Atlántico. Cursos de iniciación al vuelo libre. Las mejores condiciones térmicas de Europa.",
    direccion: "Av. Los Remedios 9, 38410 Los Realejos, Tenerife",
    telefono: "",
    web: "",
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
    direccion: "Las Palmas de Gran Canaria",
    telefono: "",
    web: "https://www.mandalaclimb.com",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "gran-canaria-outdoors",
    nombre: "Gran Canaria Outdoors",
    isla: "Gran Canaria", tipo: "Alquilar",
    deporte: ["Senderismo","Escalada","Barranquismo"],
    zona: "Sur",
    descripcion: "Senderismo guiado, alquiler de material outdoor y tienda de equipamiento en Gran Canaria. Rutas por el Roque Nublo, Barranco de Güigüi y los mejores senderos de la isla.",
    direccion: "Maspalomas, Gran Canaria",
    telefono: "",
    web: "https://www.senderismograncanaria.com",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "surf-shop-gc",
    nombre: "Las Canteras Surf Shop",
    isla: "Gran Canaria", tipo: "Comprar",
    deporte: ["Surf","Submarinismo"],
    zona: "Norte",
    descripcion: "Surf y deportes acuáticos en Las Canteras, la mejor playa urbana de España. Tablas, neoprenos, material de surf y clases para todos los niveles en la playa del Confital.",
    direccion: "Playa de Las Canteras, Las Palmas de Gran Canaria",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "buceo-gc",
    nombre: "Buceo en Gran Canaria",
    isla: "Gran Canaria", tipo: "Alquilar",
    deporte: ["Submarinismo"],
    zona: "Sur",
    descripcion: "Centro de buceo en San Agustín con acceso al Cabrón, Arinaga y la Barra. Alquiler de botellas, cursos PADI y salidas en barco a los mejores puntos de buceo de la isla.",
    direccion: "San Agustín, Gran Canaria",
    telefono: "+34 928 565 428",
    web: "",
    foto: "",
    lat: null, lng: null
  },

  // ══════════════════════════════════════
  //  LANZAROTE — más tiendas
  // ══════════════════════════════════════
  {
    id: "surf-lanzarote",
    nombre: "Famara Surf Shop",
    isla: "Lanzarote", tipo: "Comprar",
    deporte: ["Surf"],
    zona: "Norte",
    descripcion: "La tienda de surf más completa en Famara, el mejor spot de surf de Lanzarote. Tablas de alquiler, neoprenos, clases de surf y todo el material para el Atlántico Norte.",
    direccion: "Caleta de Famara, Lanzarote",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "bike-lanzarote",
    nombre: "Lanzarote Bike Station",
    isla: "Lanzarote", tipo: "Alquilar",
    deporte: ["Ciclismo"],
    zona: "Sur",
    descripcion: "Alquiler de bicicletas de carretera, MTB y e-bikes en Lanzarote. Rutas por los volcanes de Timanfaya y la costa de Los Ajaches. Servicio de asistencia en ruta.",
    direccion: "Puerto del Carmen, Lanzarote",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "senderismo-lanzarote",
    nombre: "Lanzarote Trekking",
    isla: "Lanzarote", tipo: "Alquilar",
    deporte: ["Senderismo","Trail Running"],
    zona: "Norte",
    descripcion: "Senderismo guiado por Lanzarote: Caldera Blanca, Los Ajaches y el GR 131. Alquiler de bastones y material de senderismo. Grupos reducidos con guías locales certificados.",
    direccion: "Arrecife, Lanzarote",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },

  // ══════════════════════════════════════
  //  FUERTEVENTURA — más tiendas
  // ══════════════════════════════════════
  {
    id: "kitesurf-fuerteventura",
    nombre: "Kite Paradise Fuerteventura",
    isla: "Fuerteventura", tipo: "Alquilar",
    deporte: ["Surf"],
    zona: "Sur",
    descripcion: "Escuela y alquiler de kitesurf en Sotavento, sede del Campeonato del Mundo. Clases desde cero, material de última generación y las mejores condiciones de viento de Europa.",
    direccion: "Playa de Sotavento, Fuerteventura",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "surf-school-fuerte",
    nombre: "Corralejo Surf School",
    isla: "Fuerteventura", tipo: "Alquilar",
    deporte: ["Surf"],
    zona: "Norte",
    descripcion: "Escuela de surf en Corralejo con alquiler de tablas y neoprenos. Los mejores profesores para aprender en las olas perfectas del norte de Fuerteventura.",
    direccion: "Corralejo, Fuerteventura",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "bike-fuerte",
    nombre: "Fuerteventura Bikes",
    isla: "Fuerteventura", tipo: "Alquilar",
    deporte: ["Ciclismo"],
    zona: "Norte",
    descripcion: "Alquiler de bicicletas de carretera y MTB en Fuerteventura. La isla es uno de los destinos ciclistas más populares de Europa por su clima y sus carreteras tranquilas.",
    direccion: "Corralejo, Fuerteventura",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },

  // ══════════════════════════════════════
  //  LA PALMA — más tiendas
  // ══════════════════════════════════════
  {
    id: "astro-lapalma",
    nombre: "La Palma Astro Experience",
    isla: "La Palma", tipo: "Alquilar",
    deporte: ["Multideporte"],
    zona: "Norte",
    descripcion: "Alquiler de telescopios y guías de astronomía bajo el mejor cielo de Europa. La Palma es Reserva Starlight. Noches de observación guiadas junto al Roque de los Muchachos.",
    direccion: "Garafía, La Palma",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "kayak-lapalma",
    nombre: "Kayak La Palma",
    isla: "La Palma", tipo: "Alquilar",
    deporte: ["Kayak","Submarinismo"],
    zona: "Oeste",
    descripcion: "Alquiler de kayaks y snorkel en la costa de Los Llanos de Aridane. Aguas cristalinas del Atlántico con fondos volcánicos únicos. Rutas guiadas al atardecer.",
    direccion: "Tazacorte, La Palma",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "bike-lapalma",
    nombre: "La Palma Bike Center",
    isla: "La Palma", tipo: "Alquilar",
    deporte: ["Ciclismo","Trail Running"],
    zona: "Este",
    descripcion: "Alquiler de bicicletas de montaña y carretera en La Palma. Descensos desde el Roque de los Muchachos y rutas por la espina volcánica. Servicio de shuttle incluido.",
    direccion: "Santa Cruz de La Palma",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },

  // ══════════════════════════════════════
  //  LA GOMERA — más tiendas
  // ══════════════════════════════════════
  {
    id: "gomera-trek",
    nombre: "Gomera Trek & Nature",
    isla: "La Gomera", tipo: "Alquilar",
    deporte: ["Senderismo","Trail Running"],
    zona: "Norte",
    descripcion: "Senderismo guiado por Garajonay y los barrancos de La Gomera. Alquiler de bastones, mochilas y material de senderismo. Guías locales con profundo conocimiento de la laurisilva.",
    direccion: "San Sebastián de La Gomera",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "kayak-gomera",
    nombre: "Kayak La Gomera",
    isla: "La Gomera", tipo: "Alquilar",
    deporte: ["Kayak","Submarinismo"],
    zona: "Sur",
    descripcion: "Kayak y snorkel en la costa sur de La Gomera. Rutas por los acantilados de basalto y cuevas marinas del sur. Salidas desde Playa de Santiago con guías certificados.",
    direccion: "La Playa, Valle Gran Rey, La Gomera",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },

  // ══════════════════════════════════════
  //  EL HIERRO — más tiendas
  // ══════════════════════════════════════
  {
    id: "surf-hierro",
    nombre: "El Hierro Surf & SUP",
    isla: "El Hierro", tipo: "Alquilar",
    deporte: ["Surf","Kayak"],
    zona: "Norte",
    descripcion: "Alquiler de tablas de surf, SUP y kayaks en El Hierro. La isla más auténtica de Canarias con spots de surf vírgenes sin masificación. Clases para principiantes.",
    direccion: "Frontera, El Hierro",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "buceo-restinga",
    nombre: "Buceo La Restinga",
    isla: "El Hierro", tipo: "Alquilar",
    deporte: ["Submarinismo"],
    zona: "Sur",
    descripcion: "Centro de buceo adicional en La Restinga con barco grande para salidas diarias. Nitrox disponible. El Tamboril y la zona de La Restinga son dos de los mejores spots de Europa.",
    direccion: "La Restinga, El Hierro",
    telefono: "+34 922 558 197",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "mountain-hierro",
    nombre: "El Hierro Mountain Guide",
    isla: "El Hierro", tipo: "Alquilar",
    deporte: ["Senderismo","Trail Running","Escalada"],
    zona: "Norte",
    descripcion: "Guías de montaña certificados en El Hierro. Ruta del Camino de Jinama, sabinar de La Llanía y yacimientos rupestres del Julan. Alquiler de material técnico de senderismo.",
    direccion: "Valverde, El Hierro",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },

  // ══════════════════════════════════════
  //  LA GRACIOSA
  // ══════════════════════════════════════
  {
    id: "bici-graciosa",
    nombre: "Bicis La Graciosa",
    isla: "La Graciosa", tipo: "Alquilar",
    deporte: ["Ciclismo","Senderismo"],
    zona: "Norte",
    descripcion: "Alquiler de bicicletas en Caleta de Sebo, la única forma de moverse por la isla sin asfalto. Bicicletas de arena para explorar las playas vírgenes y los volcanes de La Graciosa.",
    direccion: "Caleta de Sebo, La Graciosa",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "kayak-graciosa",
    nombre: "Kayak & Snorkel La Graciosa",
    isla: "La Graciosa", tipo: "Alquilar",
    deporte: ["Kayak","Submarinismo"],
    zona: "Norte",
    descripcion: "Alquiler de kayaks y material de snorkel en La Graciosa. Exploración de las lagunas de Montaña Amarilla y la costa del Archipiélago Chinijo. Aguas turquesas de visibilidad excepcional.",
    direccion: "Caleta de Sebo, La Graciosa",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  }

]; // ← No borres este corchete trail running y trabajos verticales. Marcas como Petzl, Black Diamond, La Sportiva y The North Face.",
    direccion: "Camino la Rúa 12, 38201 La Laguna, Tenerife",
    telefono: "+34 922 259 000",
    web: "https://www.oldpeak.es",
    foto: "imagenes/tiendas/oldpeak.jpg",
    lat: 28.4930, lng: -16.3180
  },
  {
    id: "tenerife-outdoor",
    nombre: "Tenerife Outdoor",
    isla: "Tenerife", tipo: "Comprar",
    deporte: ["Senderismo","Trail Running","Escalada","Barranquismo"],
    zona: "Norte",
    descripcion: "La tienda outdoor más completa de Canarias. Senderismo, alpinismo, barranquismo y trail running. Especialistas en calzado barefoot. Marcas Rab, Arc'teryx, Osprey y Salomon.",
    direccion: "Av. República Argentina 79, 38208 La Laguna, Tenerife",
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
    direccion: "Ctra. Provincial 189, Local 6, 38390 Santa Úrsula, Tenerife",
    telefono: "",
    web: "https://javisport.com",
    foto: "imagenes/tiendas/javisport.jpg",
    lat: 28.4166, lng: -16.5039
  },
  {
    id: "basalto-escalada",
    nombre: "Basalto Escalada",
    isla: "Tenerife", tipo: "Comprar",
    deporte: ["Escalada","Barranquismo","Senderismo"],
    zona: "Norte",
    descripcion: "Más de 25 años de experiencia en equipamiento de escalada y montaña. Tienda especializada con asesoramiento técnico de nivel. Productos de seguridad y escalada deportiva.",
    direccion: "Tenerife",
    telefono: "",
    web: "https://basaltoescalada.com",
    foto: "imagenes/tiendas/basalto-escalada.jpg",
    lat: 28.4700, lng: -16.2600
  },
  {
    id: "grlimits",
    nombre: "GRLimits",
    isla: "Tenerife", tipo: "Suplementación",
    deporte: ["Trail Running","Senderismo","Multideporte"],
    zona: "Norte",
    descripcion: "Nutrición deportiva para atletas de resistencia. Proteínas, geles energéticos, creatina y suplementos para trail running y aventuras largas. Envío a toda Canarias.",
    direccion: "Av. Los Remedios 9, 38410 Los Realejos, Tenerife",
    telefono: "",
    web: "https://grlimits.com",
    foto: "imagenes/tiendas/grlimits.jpg",
    lat: 28.3847, lng: -16.5930
  },
  {
    id: "xplore-tenerife",
    nombre: "Xplore Tenerife – Kayak & Bike",
    isla: "Tenerife", tipo: "Alquilar",
    deporte: ["Kayak","Surf","Ciclismo"],
    zona: "Sur",
    descripcion: "Alquiler y tours de kayak, paddle surf y bicicleta en Los Cristianos. Material náutico de calidad con rutas guiadas por la costa sur. Ideal para todos los niveles.",
    direccion: "Calle El Coronel 1, Edif. Cristianmar, 38650 Los Cristianos, Tenerife",
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
    direccion: "Av. de Ayyo S/N, 38670 Adeje, Tenerife",
    telefono: "",
    web: "https://www.decathlon.es/tiendas/tenerife",
    foto: "imagenes/tiendas/decathlon-tenerife.jpg",
    lat: 28.1219, lng: -16.7258
  },
  {
    id: "taller-outdoor-tenerife",
    nombre: "Taller Outdoor Tenerife",
    isla: "Tenerife", tipo: "Reparar",
    deporte: ["Senderismo","Trail Running","Escalada"],
    zona: "Norte",
    descripcion: "Reparación de material outdoor: botas de senderismo, mochilas, tiendas de campaña y material técnico. Técnicos especializados con piezas originales y servicio rápido.",
    direccion: "C/ San Francisco 25, 38002 Santa Cruz de Tenerife",
    telefono: "",
    web: "",
    foto: "imagenes/tiendas/taller-outdoor-tenerife.jpg",
    lat: null, lng: null
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
    direccion: "C/ Fondos del Segura 3, Las Palmas de Gran Canaria",
    telefono: "+34 928 232 890",
    web: "https://limasportcanarias.com",
    foto: "imagenes/tiendas/limasport-gc.jpg",
    lat: 28.4636, lng: -16.2518
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
  {
    id: "divecenter-arguineguin",
    nombre: "Dive Center Arguineguín",
    isla: "Gran Canaria", tipo: "Alquilar",
    deporte: ["Submarinismo"],
    zona: "Sur",
    descripcion: "Centro de buceo en el sur de Gran Canaria. Inmersiones guiadas, alquiler de equipo y cursos PADI. Acceso al Cabrón, uno de los mejores spots de buceo de las islas.",
    direccion: "Arguineguín, Gran Canaria",
    telefono: "+34 928 736 196",
    web: "",
    foto: "",
    lat: 27.7572, lng: -15.6833
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
    direccion: "Calle Las Palmas 5, 35580 Playa Blanca, Lanzarote",
    telefono: "+34 928 585 636",
    web: "https://www.kayaklanzarote.com",
    foto: "imagenes/tiendas/kayak-walk-lanzarote.jpg",
    lat: 28.8630, lng: -13.8360
  },
  {
    id: "papagayo-watersports",
    nombre: "Papagayo Watersports",
    isla: "Lanzarote", tipo: "Alquilar",
    deporte: ["Kayak","Surf","Submarinismo"],
    zona: "Sur",
    descripcion: "Alquiler de kayaks, paddle surf, máscaras y trajes de neopreno en Playa Blanca. Kayaks individuales, dobles, triples y cuádruples. Precios especiales para familias.",
    direccion: "Playa Las Coloradas s/n, 35580 Playa Blanca, Lanzarote",
    telefono: "",
    web: "https://papagayowatersports.com",
    foto: "",
    lat: 28.8600, lng: -13.8400
  },
  {
    id: "kayak-walk-lanzarote",
    nombre: "Kayak & Walk in Lanzarote",
    isla: "Lanzarote", tipo: "Alquilar",
    deporte: ["Kayak","Senderismo"],
    zona: "Sur",
    descripcion: "Alquiler de kayaks y material de snorkel en Playa Blanca. Rutas guiadas por las calas de Papagayo con paradas para buceo en fondos volcánicos únicos.",
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
  {
    id: "divecenter-corralejo",
    nombre: "Dive Center Corralejo",
    isla: "Fuerteventura", tipo: "Alquilar",
    deporte: ["Submarinismo"],
    zona: "Norte",
    descripcion: "Centro de buceo en Corralejo con acceso a los mejores spots de Fuerteventura. Alquiler de equipo, inmersiones guiadas y cursos PADI para todos los niveles.",
    direccion: "Corralejo, Fuerteventura",
    telefono: "+34 928 535 906",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "deepblue-fuerteventura",
    nombre: "Deep Blue Diving Fuerteventura",
    isla: "Fuerteventura", tipo: "Alquilar",
    deporte: ["Submarinismo"],
    zona: "Este",
    descripcion: "Centro de buceo en Caleta de Fuste. Dos salidas diarias a las 9:00 y 13:30. Acceso a los mejores arrecifes de Fuerteventura con barco propio y equipo completo.",
    direccion: "Caleta de Fuste, Fuerteventura",
    telefono: "+34 928 163 157",
    web: "",
    foto: "",
    lat: 28.3953, lng: -13.8631
  },
  {
    id: "decathlon-fuerteventura",
    nombre: "Decathlon Fuerteventura",
    isla: "Fuerteventura", tipo: "Comprar",
    deporte: ["Multideporte","Surf","Senderismo"],
    zona: "Norte",
    descripcion: "Equipamiento deportivo completo para surf, senderismo y multideporte en Fuerteventura. La opción más económica para equiparte antes de tus aventuras en la isla del viento.",
    direccion: "Puerto del Rosario, Fuerteventura",
    telefono: "",
    web: "https://www.decathlon.es/tiendas/fuerteventura",
    foto: "imagenes/tiendas/decathlon-tenerife.jpg",
    lat: null, lng: null
  },

  // ══════════════════════════════════════
  //  LA PALMA
  // ══════════════════════════════════════
  {
    id: "aventura-lapalma",
    nombre: "La Palma Aventura",
    isla: "La Palma", tipo: "Alquilar",
    deporte: ["Senderismo","Trail Running","Barranquismo"],
    zona: "Oeste",
    descripcion: "Alquiler de material para senderismo y barranquismo en La Palma. Guías locales especializados en la Caldera de Taburiente, la Ruta de los Volcanes y el Tajogaite.",
    direccion: "Santa Cruz de La Palma",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "transvulcania-shop",
    nombre: "Transvulcania Shop",
    isla: "La Palma", tipo: "Comprar",
    deporte: ["Trail Running","Senderismo"],
    zona: "Sur",
    descripcion: "Tienda oficial de la carrera Transvulcania, uno de los trail más duros del mundo. Material técnico de trail running, ropa y merchandising de las carreras de montaña de La Palma.",
    direccion: "Los Llanos de Aridane, La Palma",
    telefono: "",
    web: "https://transvulcania.info",
    foto: "",
    lat: 28.5004, lng: -13.8627
  },

  // ══════════════════════════════════════
  //  LA GOMERA
  // ══════════════════════════════════════
  {
    id: "gomera-bike",
    nombre: "Gomera Bike",
    isla: "La Gomera", tipo: "Alquilar",
    deporte: ["Ciclismo","Senderismo"],
    zona: "Sur",
    descripcion: "Alquiler de bicicletas de montaña y carretera en La Gomera. Rutas guiadas por los barrancos y el Parque Nacional de Garajonay. El mejor modo de explorar la isla.",
    direccion: "La Playa, Valle Gran Rey, La Gomera",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "adventure-capital-gomera",
    nombre: "Adventure Capital La Gomera",
    isla: "La Gomera", tipo: "Alquilar",
    deporte: ["Kayak","Senderismo","Multideporte"],
    zona: "Sur",
    descripcion: "Kayak por la costa sur de La Gomera, senderismo guiado y actividades multiaventura. Guías locales con gran conocimiento de los barrancos y senderos de la isla.",
    direccion: "Valle Gran Rey, La Gomera",
    telefono: "",
    web: "https://adventurecapital.es",
    foto: "",
    lat: null, lng: null
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
    lat: 28.0828, lng: -17.3270
  },
  {
    id: "hierro-rent",
    nombre: "El Hierro Rent & Sport",
    isla: "El Hierro", tipo: "Alquilar",
    deporte: ["Senderismo","Ciclismo","Multideporte"],
    zona: "Norte",
    descripcion: "Alquiler de bicicletas, material de senderismo y equipamiento outdoor en El Hierro. La isla más sostenible de Europa, ideal para explorar sin dejar huella.",
    direccion: "Valverde, El Hierro",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
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
    direccion: "Tenerife",
    telefono: "",
    web: "https://izas-outdoorcanarias.com",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "surf-point-tenerife",
    nombre: "Surf Point Tenerife",
    isla: "Tenerife", tipo: "Comprar",
    deporte: ["Surf","Kayak"],
    zona: "Norte",
    descripcion: "Tienda de surf en Santa Cruz de Tenerife. Tablas, trajes de neopreno, accesorios de surf y material de paddle surf. La referencia del surf en el norte de la isla.",
    direccion: "C/ Ángel Guimerá 13, Santa Cruz de Tenerife",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "neptuno-surf-tenerife",
    nombre: "Neptuno Surf Shop",
    isla: "Tenerife", tipo: "Comprar",
    deporte: ["Surf","Submarinismo"],
    zona: "Sur",
    descripcion: "Surf, bodyboard y deportes acuáticos en el sur de Tenerife. Tablas, neoprenos, leashes y todo el material para el océano Atlántico. Alquiler de material en temporada.",
    direccion: "Calle El Coronel 1, Edif. Cristianmar, 38650 Los Cristianos, Tenerife",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "barranquismo-tenerife",
    nombre: "Barrancos Canarios",
    isla: "Tenerife", tipo: "Alquilar",
    deporte: ["Barranquismo","Escalada","Senderismo"],
    zona: "Norte",
    descripcion: "Alquiler de material técnico para barranquismo: cuerdas, arneses, descensores y cascos. Guías homologados para los barrancos de Masca, Acha y Los Órganos.",
    direccion: "La Orotava, Tenerife",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "paragliding-tenerife",
    nombre: "Free Flight Tenerife",
    isla: "Tenerife", tipo: "Alquilar",
    deporte: ["Multideporte"],
    zona: "Sur",
    descripcion: "Vuelos en parapente biplaza sobre el sur de Tenerife con vistas al Teide y al Atlántico. Cursos de iniciación al vuelo libre. Las mejores condiciones térmicas de Europa.",
    direccion: "Av. Los Remedios 9, 38410 Los Realejos, Tenerife",
    telefono: "",
    web: "",
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
    direccion: "Las Palmas de Gran Canaria",
    telefono: "",
    web: "https://www.mandalaclimb.com",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "gran-canaria-outdoors",
    nombre: "Gran Canaria Outdoors",
    isla: "Gran Canaria", tipo: "Alquilar",
    deporte: ["Senderismo","Escalada","Barranquismo"],
    zona: "Sur",
    descripcion: "Senderismo guiado, alquiler de material outdoor y tienda de equipamiento en Gran Canaria. Rutas por el Roque Nublo, Barranco de Güigüi y los mejores senderos de la isla.",
    direccion: "Maspalomas, Gran Canaria",
    telefono: "",
    web: "https://www.senderismograncanaria.com",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "surf-shop-gc",
    nombre: "Las Canteras Surf Shop",
    isla: "Gran Canaria", tipo: "Comprar",
    deporte: ["Surf","Submarinismo"],
    zona: "Norte",
    descripcion: "Surf y deportes acuáticos en Las Canteras, la mejor playa urbana de España. Tablas, neoprenos, material de surf y clases para todos los niveles en la playa del Confital.",
    direccion: "Playa de Las Canteras, Las Palmas de Gran Canaria",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "buceo-gc",
    nombre: "Buceo en Gran Canaria",
    isla: "Gran Canaria", tipo: "Alquilar",
    deporte: ["Submarinismo"],
    zona: "Sur",
    descripcion: "Centro de buceo en San Agustín con acceso al Cabrón, Arinaga y la Barra. Alquiler de botellas, cursos PADI y salidas en barco a los mejores puntos de buceo de la isla.",
    direccion: "San Agustín, Gran Canaria",
    telefono: "+34 928 565 428",
    web: "",
    foto: "",
    lat: null, lng: null
  },

  // ══════════════════════════════════════
  //  LANZAROTE — más tiendas
  // ══════════════════════════════════════
  {
    id: "surf-lanzarote",
    nombre: "Famara Surf Shop",
    isla: "Lanzarote", tipo: "Comprar",
    deporte: ["Surf"],
    zona: "Norte",
    descripcion: "La tienda de surf más completa en Famara, el mejor spot de surf de Lanzarote. Tablas de alquiler, neoprenos, clases de surf y todo el material para el Atlántico Norte.",
    direccion: "Caleta de Famara, Lanzarote",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "bike-lanzarote",
    nombre: "Lanzarote Bike Station",
    isla: "Lanzarote", tipo: "Alquilar",
    deporte: ["Ciclismo"],
    zona: "Sur",
    descripcion: "Alquiler de bicicletas de carretera, MTB y e-bikes en Lanzarote. Rutas por los volcanes de Timanfaya y la costa de Los Ajaches. Servicio de asistencia en ruta.",
    direccion: "Puerto del Carmen, Lanzarote",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "senderismo-lanzarote",
    nombre: "Lanzarote Trekking",
    isla: "Lanzarote", tipo: "Alquilar",
    deporte: ["Senderismo","Trail Running"],
    zona: "Norte",
    descripcion: "Senderismo guiado por Lanzarote: Caldera Blanca, Los Ajaches y el GR 131. Alquiler de bastones y material de senderismo. Grupos reducidos con guías locales certificados.",
    direccion: "Arrecife, Lanzarote",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },

  // ══════════════════════════════════════
  //  FUERTEVENTURA — más tiendas
  // ══════════════════════════════════════
  {
    id: "kitesurf-fuerteventura",
    nombre: "Kite Paradise Fuerteventura",
    isla: "Fuerteventura", tipo: "Alquilar",
    deporte: ["Surf"],
    zona: "Sur",
    descripcion: "Escuela y alquiler de kitesurf en Sotavento, sede del Campeonato del Mundo. Clases desde cero, material de última generación y las mejores condiciones de viento de Europa.",
    direccion: "Playa de Sotavento, Fuerteventura",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "surf-school-fuerte",
    nombre: "Corralejo Surf School",
    isla: "Fuerteventura", tipo: "Alquilar",
    deporte: ["Surf"],
    zona: "Norte",
    descripcion: "Escuela de surf en Corralejo con alquiler de tablas y neoprenos. Los mejores profesores para aprender en las olas perfectas del norte de Fuerteventura.",
    direccion: "Corralejo, Fuerteventura",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "bike-fuerte",
    nombre: "Fuerteventura Bikes",
    isla: "Fuerteventura", tipo: "Alquilar",
    deporte: ["Ciclismo"],
    zona: "Norte",
    descripcion: "Alquiler de bicicletas de carretera y MTB en Fuerteventura. La isla es uno de los destinos ciclistas más populares de Europa por su clima y sus carreteras tranquilas.",
    direccion: "Corralejo, Fuerteventura",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },

  // ══════════════════════════════════════
  //  LA PALMA — más tiendas
  // ══════════════════════════════════════
  {
    id: "astro-lapalma",
    nombre: "La Palma Astro Experience",
    isla: "La Palma", tipo: "Alquilar",
    deporte: ["Multideporte"],
    zona: "Norte",
    descripcion: "Alquiler de telescopios y guías de astronomía bajo el mejor cielo de Europa. La Palma es Reserva Starlight. Noches de observación guiadas junto al Roque de los Muchachos.",
    direccion: "Garafía, La Palma",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "kayak-lapalma",
    nombre: "Kayak La Palma",
    isla: "La Palma", tipo: "Alquilar",
    deporte: ["Kayak","Submarinismo"],
    zona: "Oeste",
    descripcion: "Alquiler de kayaks y snorkel en la costa de Los Llanos de Aridane. Aguas cristalinas del Atlántico con fondos volcánicos únicos. Rutas guiadas al atardecer.",
    direccion: "Tazacorte, La Palma",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "bike-lapalma",
    nombre: "La Palma Bike Center",
    isla: "La Palma", tipo: "Alquilar",
    deporte: ["Ciclismo","Trail Running"],
    zona: "Este",
    descripcion: "Alquiler de bicicletas de montaña y carretera en La Palma. Descensos desde el Roque de los Muchachos y rutas por la espina volcánica. Servicio de shuttle incluido.",
    direccion: "Santa Cruz de La Palma",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },

  // ══════════════════════════════════════
  //  LA GOMERA — más tiendas
  // ══════════════════════════════════════
  {
    id: "gomera-trek",
    nombre: "Gomera Trek & Nature",
    isla: "La Gomera", tipo: "Alquilar",
    deporte: ["Senderismo","Trail Running"],
    zona: "Norte",
    descripcion: "Senderismo guiado por Garajonay y los barrancos de La Gomera. Alquiler de bastones, mochilas y material de senderismo. Guías locales con profundo conocimiento de la laurisilva.",
    direccion: "San Sebastián de La Gomera",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "kayak-gomera",
    nombre: "Kayak La Gomera",
    isla: "La Gomera", tipo: "Alquilar",
    deporte: ["Kayak","Submarinismo"],
    zona: "Sur",
    descripcion: "Kayak y snorkel en la costa sur de La Gomera. Rutas por los acantilados de basalto y cuevas marinas del sur. Salidas desde Playa de Santiago con guías certificados.",
    direccion: "La Playa, Valle Gran Rey, La Gomera",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },

  // ══════════════════════════════════════
  //  EL HIERRO — más tiendas
  // ══════════════════════════════════════
  {
    id: "surf-hierro",
    nombre: "El Hierro Surf & SUP",
    isla: "El Hierro", tipo: "Alquilar",
    deporte: ["Surf","Kayak"],
    zona: "Norte",
    descripcion: "Alquiler de tablas de surf, SUP y kayaks en El Hierro. La isla más auténtica de Canarias con spots de surf vírgenes sin masificación. Clases para principiantes.",
    direccion: "Frontera, El Hierro",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "buceo-restinga",
    nombre: "Buceo La Restinga",
    isla: "El Hierro", tipo: "Alquilar",
    deporte: ["Submarinismo"],
    zona: "Sur",
    descripcion: "Centro de buceo adicional en La Restinga con barco grande para salidas diarias. Nitrox disponible. El Tamboril y la zona de La Restinga son dos de los mejores spots de Europa.",
    direccion: "La Restinga, El Hierro",
    telefono: "+34 922 558 197",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "mountain-hierro",
    nombre: "El Hierro Mountain Guide",
    isla: "El Hierro", tipo: "Alquilar",
    deporte: ["Senderismo","Trail Running","Escalada"],
    zona: "Norte",
    descripcion: "Guías de montaña certificados en El Hierro. Ruta del Camino de Jinama, sabinar de La Llanía y yacimientos rupestres del Julan. Alquiler de material técnico de senderismo.",
    direccion: "Valverde, El Hierro",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },

  // ══════════════════════════════════════
  //  LA GRACIOSA
  // ══════════════════════════════════════
  {
    id: "bici-graciosa",
    nombre: "Bicis La Graciosa",
    isla: "La Graciosa", tipo: "Alquilar",
    deporte: ["Ciclismo","Senderismo"],
    zona: "Norte",
    descripcion: "Alquiler de bicicletas en Caleta de Sebo, la única forma de moverse por la isla sin asfalto. Bicicletas de arena para explorar las playas vírgenes y los volcanes de La Graciosa.",
    direccion: "Caleta de Sebo, La Graciosa",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "kayak-graciosa",
    nombre: "Kayak & Snorkel La Graciosa",
    isla: "La Graciosa", tipo: "Alquilar",
    deporte: ["Kayak","Submarinismo"],
    zona: "Norte",
    descripcion: "Alquiler de kayaks y material de snorkel en La Graciosa. Exploración de las lagunas de Montaña Amarilla y la costa del Archipiélago Chinijo. Aguas turquesas de visibilidad excepcional.",
    direccion: "Caleta de Sebo, La Graciosa",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  }

]; // ← No borres este corchete trail running y trabajos verticales. Marcas como Petzl, Black Diamond, La Sportiva y The North Face.",
    direccion: "Camino la Rúa 12, 38201 La Laguna, Tenerife",
    telefono: "+34 922 259 000",
    web: "https://www.oldpeak.es",
    foto: "imagenes/tiendas/oldpeak.jpg",
    lat: 28.4930, lng: -16.3180
  },
  {
    id: "tenerife-outdoor",
    nombre: "Tenerife Outdoor",
    isla: "Tenerife", tipo: "Comprar",
    deporte: ["Senderismo","Trail Running","Escalada","Barranquismo"],
    zona: "Norte",
    descripcion: "La tienda outdoor más completa de Canarias. Senderismo, alpinismo, barranquismo y trail running. Especialistas en calzado barefoot. Marcas Rab, Arc'teryx, Osprey y Salomon.",
    direccion: "Av. República Argentina 79, 38208 La Laguna, Tenerife",
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
    direccion: "Ctra. Provincial 189, Local 6, 38390 Santa Úrsula, Tenerife",
    telefono: "",
    web: "https://javisport.com",
    foto: "imagenes/tiendas/javisport.jpg",
    lat: 28.4166, lng: -16.5039
  },
  {
    id: "basalto-escalada",
    nombre: "Basalto Escalada",
    isla: "Tenerife", tipo: "Comprar",
    deporte: ["Escalada","Barranquismo","Senderismo"],
    zona: "Norte",
    descripcion: "Más de 25 años de experiencia en equipamiento de escalada y montaña. Tienda especializada con asesoramiento técnico de nivel. Productos de seguridad y escalada deportiva.",
    direccion: "Tenerife",
    telefono: "",
    web: "https://basaltoescalada.com",
    foto: "imagenes/tiendas/basalto-escalada.jpg",
    lat: 28.4700, lng: -16.2600
  },
  {
    id: "grlimits",
    nombre: "GRLimits",
    isla: "Tenerife", tipo: "Suplementación",
    deporte: ["Trail Running","Senderismo","Multideporte"],
    zona: "Norte",
    descripcion: "Nutrición deportiva para atletas de resistencia. Proteínas, geles energéticos, creatina y suplementos para trail running y aventuras largas. Envío a toda Canarias.",
    direccion: "Av. Los Remedios 9, 38410 Los Realejos, Tenerife",
    telefono: "",
    web: "https://grlimits.com",
    foto: "imagenes/tiendas/grlimits.jpg",
    lat: 28.3847, lng: -16.5930
  },
  {
    id: "xplore-tenerife",
    nombre: "Xplore Tenerife – Kayak & Bike",
    isla: "Tenerife", tipo: "Alquilar",
    deporte: ["Kayak","Surf","Ciclismo"],
    zona: "Sur",
    descripcion: "Alquiler y tours de kayak, paddle surf y bicicleta en Los Cristianos. Material náutico de calidad con rutas guiadas por la costa sur. Ideal para todos los niveles.",
    direccion: "Calle El Coronel 1, Edif. Cristianmar, 38650 Los Cristianos, Tenerife",
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
    direccion: "Av. de Ayyo S/N, 38670 Adeje, Tenerife",
    telefono: "",
    web: "https://www.decathlon.es/tiendas/tenerife",
    foto: "imagenes/tiendas/decathlon-tenerife.jpg",
    lat: 28.1219, lng: -16.7258
  },
  {
    id: "taller-outdoor-tenerife",
    nombre: "Taller Outdoor Tenerife",
    isla: "Tenerife", tipo: "Reparar",
    deporte: ["Senderismo","Trail Running","Escalada"],
    zona: "Norte",
    descripcion: "Reparación de material outdoor: botas de senderismo, mochilas, tiendas de campaña y material técnico. Técnicos especializados con piezas originales y servicio rápido.",
    direccion: "C/ San Francisco 25, 38002 Santa Cruz de Tenerife",
    telefono: "",
    web: "",
    foto: "imagenes/tiendas/taller-outdoor-tenerife.jpg",
    lat: null, lng: null
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
    direccion: "C/ Fondos del Segura 3, Las Palmas de Gran Canaria",
    telefono: "+34 928 232 890",
    web: "https://limasportcanarias.com",
    foto: "imagenes/tiendas/limasport-gc.jpg",
    lat: 28.4636, lng: -16.2518
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
  {
    id: "divecenter-arguineguin",
    nombre: "Dive Center Arguineguín",
    isla: "Gran Canaria", tipo: "Alquilar",
    deporte: ["Submarinismo"],
    zona: "Sur",
    descripcion: "Centro de buceo en el sur de Gran Canaria. Inmersiones guiadas, alquiler de equipo y cursos PADI. Acceso al Cabrón, uno de los mejores spots de buceo de las islas.",
    direccion: "Arguineguín, Gran Canaria",
    telefono: "+34 928 736 196",
    web: "",
    foto: "",
    lat: 27.7572, lng: -15.6833
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
    direccion: "Calle Las Palmas 5, 35580 Playa Blanca, Lanzarote",
    telefono: "+34 928 585 636",
    web: "https://www.kayaklanzarote.com",
    foto: "imagenes/tiendas/kayak-walk-lanzarote.jpg",
    lat: 28.8630, lng: -13.8360
  },
  {
    id: "papagayo-watersports",
    nombre: "Papagayo Watersports",
    isla: "Lanzarote", tipo: "Alquilar",
    deporte: ["Kayak","Surf","Submarinismo"],
    zona: "Sur",
    descripcion: "Alquiler de kayaks, paddle surf, máscaras y trajes de neopreno en Playa Blanca. Kayaks individuales, dobles, triples y cuádruples. Precios especiales para familias.",
    direccion: "Playa Las Coloradas s/n, 35580 Playa Blanca, Lanzarote",
    telefono: "",
    web: "https://papagayowatersports.com",
    foto: "",
    lat: 28.8600, lng: -13.8400
  },
  {
    id: "kayak-walk-lanzarote",
    nombre: "Kayak & Walk in Lanzarote",
    isla: "Lanzarote", tipo: "Alquilar",
    deporte: ["Kayak","Senderismo"],
    zona: "Sur",
    descripcion: "Alquiler de kayaks y material de snorkel en Playa Blanca. Rutas guiadas por las calas de Papagayo con paradas para buceo en fondos volcánicos únicos.",
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
  {
    id: "divecenter-corralejo",
    nombre: "Dive Center Corralejo",
    isla: "Fuerteventura", tipo: "Alquilar",
    deporte: ["Submarinismo"],
    zona: "Norte",
    descripcion: "Centro de buceo en Corralejo con acceso a los mejores spots de Fuerteventura. Alquiler de equipo, inmersiones guiadas y cursos PADI para todos los niveles.",
    direccion: "Corralejo, Fuerteventura",
    telefono: "+34 928 535 906",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "deepblue-fuerteventura",
    nombre: "Deep Blue Diving Fuerteventura",
    isla: "Fuerteventura", tipo: "Alquilar",
    deporte: ["Submarinismo"],
    zona: "Este",
    descripcion: "Centro de buceo en Caleta de Fuste. Dos salidas diarias a las 9:00 y 13:30. Acceso a los mejores arrecifes de Fuerteventura con barco propio y equipo completo.",
    direccion: "Caleta de Fuste, Fuerteventura",
    telefono: "+34 928 163 157",
    web: "",
    foto: "",
    lat: 28.3953, lng: -13.8631
  },
  {
    id: "decathlon-fuerteventura",
    nombre: "Decathlon Fuerteventura",
    isla: "Fuerteventura", tipo: "Comprar",
    deporte: ["Multideporte","Surf","Senderismo"],
    zona: "Norte",
    descripcion: "Equipamiento deportivo completo para surf, senderismo y multideporte en Fuerteventura. La opción más económica para equiparte antes de tus aventuras en la isla del viento.",
    direccion: "Puerto del Rosario, Fuerteventura",
    telefono: "",
    web: "https://www.decathlon.es/tiendas/fuerteventura",
    foto: "imagenes/tiendas/decathlon-tenerife.jpg",
    lat: null, lng: null
  },

  // ══════════════════════════════════════
  //  LA PALMA
  // ══════════════════════════════════════
  {
    id: "aventura-lapalma",
    nombre: "La Palma Aventura",
    isla: "La Palma", tipo: "Alquilar",
    deporte: ["Senderismo","Trail Running","Barranquismo"],
    zona: "Oeste",
    descripcion: "Alquiler de material para senderismo y barranquismo en La Palma. Guías locales especializados en la Caldera de Taburiente, la Ruta de los Volcanes y el Tajogaite.",
    direccion: "Santa Cruz de La Palma",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "transvulcania-shop",
    nombre: "Transvulcania Shop",
    isla: "La Palma", tipo: "Comprar",
    deporte: ["Trail Running","Senderismo"],
    zona: "Sur",
    descripcion: "Tienda oficial de la carrera Transvulcania, uno de los trail más duros del mundo. Material técnico de trail running, ropa y merchandising de las carreras de montaña de La Palma.",
    direccion: "Los Llanos de Aridane, La Palma",
    telefono: "",
    web: "https://transvulcania.info",
    foto: "",
    lat: 28.5004, lng: -13.8627
  },

  // ══════════════════════════════════════
  //  LA GOMERA
  // ══════════════════════════════════════
  {
    id: "gomera-bike",
    nombre: "Gomera Bike",
    isla: "La Gomera", tipo: "Alquilar",
    deporte: ["Ciclismo","Senderismo"],
    zona: "Sur",
    descripcion: "Alquiler de bicicletas de montaña y carretera en La Gomera. Rutas guiadas por los barrancos y el Parque Nacional de Garajonay. El mejor modo de explorar la isla.",
    direccion: "La Playa, Valle Gran Rey, La Gomera",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "adventure-capital-gomera",
    nombre: "Adventure Capital La Gomera",
    isla: "La Gomera", tipo: "Alquilar",
    deporte: ["Kayak","Senderismo","Multideporte"],
    zona: "Sur",
    descripcion: "Kayak por la costa sur de La Gomera, senderismo guiado y actividades multiaventura. Guías locales con gran conocimiento de los barrancos y senderos de la isla.",
    direccion: "Valle Gran Rey, La Gomera",
    telefono: "",
    web: "https://adventurecapital.es",
    foto: "",
    lat: null, lng: null
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
    lat: 28.0828, lng: -17.3270
  },
  {
    id: "hierro-rent",
    nombre: "El Hierro Rent & Sport",
    isla: "El Hierro", tipo: "Alquilar",
    deporte: ["Senderismo","Ciclismo","Multideporte"],
    zona: "Norte",
    descripcion: "Alquiler de bicicletas, material de senderismo y equipamiento outdoor en El Hierro. La isla más sostenible de Europa, ideal para explorar sin dejar huella.",
    direccion: "Valverde, El Hierro",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
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
    direccion: "Tenerife",
    telefono: "",
    web: "https://izas-outdoorcanarias.com",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "surf-point-tenerife",
    nombre: "Surf Point Tenerife",
    isla: "Tenerife", tipo: "Comprar",
    deporte: ["Surf","Kayak"],
    zona: "Norte",
    descripcion: "Tienda de surf en Santa Cruz de Tenerife. Tablas, trajes de neopreno, accesorios de surf y material de paddle surf. La referencia del surf en el norte de la isla.",
    direccion: "C/ Ángel Guimerá 13, Santa Cruz de Tenerife",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "neptuno-surf-tenerife",
    nombre: "Neptuno Surf Shop",
    isla: "Tenerife", tipo: "Comprar",
    deporte: ["Surf","Submarinismo"],
    zona: "Sur",
    descripcion: "Surf, bodyboard y deportes acuáticos en el sur de Tenerife. Tablas, neoprenos, leashes y todo el material para el océano Atlántico. Alquiler de material en temporada.",
    direccion: "Calle El Coronel 1, Edif. Cristianmar, 38650 Los Cristianos, Tenerife",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "barranquismo-tenerife",
    nombre: "Barrancos Canarios",
    isla: "Tenerife", tipo: "Alquilar",
    deporte: ["Barranquismo","Escalada","Senderismo"],
    zona: "Norte",
    descripcion: "Alquiler de material técnico para barranquismo: cuerdas, arneses, descensores y cascos. Guías homologados para los barrancos de Masca, Acha y Los Órganos.",
    direccion: "La Orotava, Tenerife",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "paragliding-tenerife",
    nombre: "Free Flight Tenerife",
    isla: "Tenerife", tipo: "Alquilar",
    deporte: ["Multideporte"],
    zona: "Sur",
    descripcion: "Vuelos en parapente biplaza sobre el sur de Tenerife con vistas al Teide y al Atlántico. Cursos de iniciación al vuelo libre. Las mejores condiciones térmicas de Europa.",
    direccion: "Av. Los Remedios 9, 38410 Los Realejos, Tenerife",
    telefono: "",
    web: "",
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
    direccion: "Las Palmas de Gran Canaria",
    telefono: "",
    web: "https://www.mandalaclimb.com",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "gran-canaria-outdoors",
    nombre: "Gran Canaria Outdoors",
    isla: "Gran Canaria", tipo: "Alquilar",
    deporte: ["Senderismo","Escalada","Barranquismo"],
    zona: "Sur",
    descripcion: "Senderismo guiado, alquiler de material outdoor y tienda de equipamiento en Gran Canaria. Rutas por el Roque Nublo, Barranco de Güigüi y los mejores senderos de la isla.",
    direccion: "Maspalomas, Gran Canaria",
    telefono: "",
    web: "https://www.senderismograncanaria.com",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "surf-shop-gc",
    nombre: "Las Canteras Surf Shop",
    isla: "Gran Canaria", tipo: "Comprar",
    deporte: ["Surf","Submarinismo"],
    zona: "Norte",
    descripcion: "Surf y deportes acuáticos en Las Canteras, la mejor playa urbana de España. Tablas, neoprenos, material de surf y clases para todos los niveles en la playa del Confital.",
    direccion: "Playa de Las Canteras, Las Palmas de Gran Canaria",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "buceo-gc",
    nombre: "Buceo en Gran Canaria",
    isla: "Gran Canaria", tipo: "Alquilar",
    deporte: ["Submarinismo"],
    zona: "Sur",
    descripcion: "Centro de buceo en San Agustín con acceso al Cabrón, Arinaga y la Barra. Alquiler de botellas, cursos PADI y salidas en barco a los mejores puntos de buceo de la isla.",
    direccion: "San Agustín, Gran Canaria",
    telefono: "+34 928 565 428",
    web: "",
    foto: "",
    lat: null, lng: null
  },

  // ══════════════════════════════════════
  //  LANZAROTE — más tiendas
  // ══════════════════════════════════════
  {
    id: "surf-lanzarote",
    nombre: "Famara Surf Shop",
    isla: "Lanzarote", tipo: "Comprar",
    deporte: ["Surf"],
    zona: "Norte",
    descripcion: "La tienda de surf más completa en Famara, el mejor spot de surf de Lanzarote. Tablas de alquiler, neoprenos, clases de surf y todo el material para el Atlántico Norte.",
    direccion: "Caleta de Famara, Lanzarote",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "bike-lanzarote",
    nombre: "Lanzarote Bike Station",
    isla: "Lanzarote", tipo: "Alquilar",
    deporte: ["Ciclismo"],
    zona: "Sur",
    descripcion: "Alquiler de bicicletas de carretera, MTB y e-bikes en Lanzarote. Rutas por los volcanes de Timanfaya y la costa de Los Ajaches. Servicio de asistencia en ruta.",
    direccion: "Puerto del Carmen, Lanzarote",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "senderismo-lanzarote",
    nombre: "Lanzarote Trekking",
    isla: "Lanzarote", tipo: "Alquilar",
    deporte: ["Senderismo","Trail Running"],
    zona: "Norte",
    descripcion: "Senderismo guiado por Lanzarote: Caldera Blanca, Los Ajaches y el GR 131. Alquiler de bastones y material de senderismo. Grupos reducidos con guías locales certificados.",
    direccion: "Arrecife, Lanzarote",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },

  // ══════════════════════════════════════
  //  FUERTEVENTURA — más tiendas
  // ══════════════════════════════════════
  {
    id: "kitesurf-fuerteventura",
    nombre: "Kite Paradise Fuerteventura",
    isla: "Fuerteventura", tipo: "Alquilar",
    deporte: ["Surf"],
    zona: "Sur",
    descripcion: "Escuela y alquiler de kitesurf en Sotavento, sede del Campeonato del Mundo. Clases desde cero, material de última generación y las mejores condiciones de viento de Europa.",
    direccion: "Playa de Sotavento, Fuerteventura",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "surf-school-fuerte",
    nombre: "Corralejo Surf School",
    isla: "Fuerteventura", tipo: "Alquilar",
    deporte: ["Surf"],
    zona: "Norte",
    descripcion: "Escuela de surf en Corralejo con alquiler de tablas y neoprenos. Los mejores profesores para aprender en las olas perfectas del norte de Fuerteventura.",
    direccion: "Corralejo, Fuerteventura",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "bike-fuerte",
    nombre: "Fuerteventura Bikes",
    isla: "Fuerteventura", tipo: "Alquilar",
    deporte: ["Ciclismo"],
    zona: "Norte",
    descripcion: "Alquiler de bicicletas de carretera y MTB en Fuerteventura. La isla es uno de los destinos ciclistas más populares de Europa por su clima y sus carreteras tranquilas.",
    direccion: "Corralejo, Fuerteventura",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },

  // ══════════════════════════════════════
  //  LA PALMA — más tiendas
  // ══════════════════════════════════════
  {
    id: "astro-lapalma",
    nombre: "La Palma Astro Experience",
    isla: "La Palma", tipo: "Alquilar",
    deporte: ["Multideporte"],
    zona: "Norte",
    descripcion: "Alquiler de telescopios y guías de astronomía bajo el mejor cielo de Europa. La Palma es Reserva Starlight. Noches de observación guiadas junto al Roque de los Muchachos.",
    direccion: "Garafía, La Palma",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "kayak-lapalma",
    nombre: "Kayak La Palma",
    isla: "La Palma", tipo: "Alquilar",
    deporte: ["Kayak","Submarinismo"],
    zona: "Oeste",
    descripcion: "Alquiler de kayaks y snorkel en la costa de Los Llanos de Aridane. Aguas cristalinas del Atlántico con fondos volcánicos únicos. Rutas guiadas al atardecer.",
    direccion: "Tazacorte, La Palma",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "bike-lapalma",
    nombre: "La Palma Bike Center",
    isla: "La Palma", tipo: "Alquilar",
    deporte: ["Ciclismo","Trail Running"],
    zona: "Este",
    descripcion: "Alquiler de bicicletas de montaña y carretera en La Palma. Descensos desde el Roque de los Muchachos y rutas por la espina volcánica. Servicio de shuttle incluido.",
    direccion: "Santa Cruz de La Palma",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },

  // ══════════════════════════════════════
  //  LA GOMERA — más tiendas
  // ══════════════════════════════════════
  {
    id: "gomera-trek",
    nombre: "Gomera Trek & Nature",
    isla: "La Gomera", tipo: "Alquilar",
    deporte: ["Senderismo","Trail Running"],
    zona: "Norte",
    descripcion: "Senderismo guiado por Garajonay y los barrancos de La Gomera. Alquiler de bastones, mochilas y material de senderismo. Guías locales con profundo conocimiento de la laurisilva.",
    direccion: "San Sebastián de La Gomera",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "kayak-gomera",
    nombre: "Kayak La Gomera",
    isla: "La Gomera", tipo: "Alquilar",
    deporte: ["Kayak","Submarinismo"],
    zona: "Sur",
    descripcion: "Kayak y snorkel en la costa sur de La Gomera. Rutas por los acantilados de basalto y cuevas marinas del sur. Salidas desde Playa de Santiago con guías certificados.",
    direccion: "La Playa, Valle Gran Rey, La Gomera",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },

  // ══════════════════════════════════════
  //  EL HIERRO — más tiendas
  // ══════════════════════════════════════
  {
    id: "surf-hierro",
    nombre: "El Hierro Surf & SUP",
    isla: "El Hierro", tipo: "Alquilar",
    deporte: ["Surf","Kayak"],
    zona: "Norte",
    descripcion: "Alquiler de tablas de surf, SUP y kayaks en El Hierro. La isla más auténtica de Canarias con spots de surf vírgenes sin masificación. Clases para principiantes.",
    direccion: "Frontera, El Hierro",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "buceo-restinga",
    nombre: "Buceo La Restinga",
    isla: "El Hierro", tipo: "Alquilar",
    deporte: ["Submarinismo"],
    zona: "Sur",
    descripcion: "Centro de buceo adicional en La Restinga con barco grande para salidas diarias. Nitrox disponible. El Tamboril y la zona de La Restinga son dos de los mejores spots de Europa.",
    direccion: "La Restinga, El Hierro",
    telefono: "+34 922 558 197",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "mountain-hierro",
    nombre: "El Hierro Mountain Guide",
    isla: "El Hierro", tipo: "Alquilar",
    deporte: ["Senderismo","Trail Running","Escalada"],
    zona: "Norte",
    descripcion: "Guías de montaña certificados en El Hierro. Ruta del Camino de Jinama, sabinar de La Llanía y yacimientos rupestres del Julan. Alquiler de material técnico de senderismo.",
    direccion: "Valverde, El Hierro",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },

  // ══════════════════════════════════════
  //  LA GRACIOSA
  // ══════════════════════════════════════
  {
    id: "bici-graciosa",
    nombre: "Bicis La Graciosa",
    isla: "La Graciosa", tipo: "Alquilar",
    deporte: ["Ciclismo","Senderismo"],
    zona: "Norte",
    descripcion: "Alquiler de bicicletas en Caleta de Sebo, la única forma de moverse por la isla sin asfalto. Bicicletas de arena para explorar las playas vírgenes y los volcanes de La Graciosa.",
    direccion: "Caleta de Sebo, La Graciosa",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "kayak-graciosa",
    nombre: "Kayak & Snorkel La Graciosa",
    isla: "La Graciosa", tipo: "Alquilar",
    deporte: ["Kayak","Submarinismo"],
    zona: "Norte",
    descripcion: "Alquiler de kayaks y material de snorkel en La Graciosa. Exploración de las lagunas de Montaña Amarilla y la costa del Archipiélago Chinijo. Aguas turquesas de visibilidad excepcional.",
    direccion: "Caleta de Sebo, La Graciosa",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  }

]; // ← No borres este corchete trail running y trabajos verticales. Marcas como Petzl, Black Diamond, La Sportiva y The North Face.",
    direccion: "Camino la Rúa 12, 38201 La Laguna, Tenerife",
    telefono: "+34 922 259 000",
    web: "https://www.oldpeak.es",
    foto: "imagenes/tiendas/oldpeak.jpg",
    lat: 28.4930, lng: -16.3180
  },
  {
    id: "tenerife-outdoor",
    nombre: "Tenerife Outdoor",
    isla: "Tenerife", tipo: "Comprar",
    deporte: ["Senderismo","Trail Running","Escalada","Barranquismo"],
    zona: "Norte",
    descripcion: "La tienda outdoor más completa de Canarias. Senderismo, alpinismo, barranquismo y trail running. Especialistas en calzado barefoot. Marcas Rab, Arc'teryx, Osprey y Salomon.",
    direccion: "Av. República Argentina 79, 38208 La Laguna, Tenerife",
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
    direccion: "Ctra. Provincial 189, Local 6, 38390 Santa Úrsula, Tenerife",
    telefono: "",
    web: "https://javisport.com",
    foto: "imagenes/tiendas/javisport.jpg",
    lat: 28.4166, lng: -16.5039
  },
  {
    id: "basalto-escalada",
    nombre: "Basalto Escalada",
    isla: "Tenerife", tipo: "Comprar",
    deporte: ["Escalada","Barranquismo","Senderismo"],
    zona: "Norte",
    descripcion: "Más de 25 años de experiencia en equipamiento de escalada y montaña. Tienda especializada con asesoramiento técnico de nivel. Productos de seguridad y escalada deportiva.",
    direccion: "Tenerife",
    telefono: "",
    web: "https://basaltoescalada.com",
    foto: "imagenes/tiendas/basalto-escalada.jpg",
    lat: 28.4700, lng: -16.2600
  },
  {
    id: "grlimits",
    nombre: "GRLimits",
    isla: "Tenerife", tipo: "Suplementación",
    deporte: ["Trail Running","Senderismo","Multideporte"],
    zona: "Norte",
    descripcion: "Nutrición deportiva para atletas de resistencia. Proteínas, geles energéticos, creatina y suplementos para trail running y aventuras largas. Envío a toda Canarias.",
    direccion: "Av. Los Remedios 9, 38410 Los Realejos, Tenerife",
    telefono: "",
    web: "https://grlimits.com",
    foto: "imagenes/tiendas/grlimits.jpg",
    lat: 28.3847, lng: -16.5930
  },
  {
    id: "xplore-tenerife",
    nombre: "Xplore Tenerife – Kayak & Bike",
    isla: "Tenerife", tipo: "Alquilar",
    deporte: ["Kayak","Surf","Ciclismo"],
    zona: "Sur",
    descripcion: "Alquiler y tours de kayak, paddle surf y bicicleta en Los Cristianos. Material náutico de calidad con rutas guiadas por la costa sur. Ideal para todos los niveles.",
    direccion: "Calle El Coronel 1, Edif. Cristianmar, 38650 Los Cristianos, Tenerife",
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
    direccion: "Av. de Ayyo S/N, 38670 Adeje, Tenerife",
    telefono: "",
    web: "https://www.decathlon.es/tiendas/tenerife",
    foto: "imagenes/tiendas/decathlon-tenerife.jpg",
    lat: 28.1219, lng: -16.7258
  },
  {
    id: "taller-outdoor-tenerife",
    nombre: "Taller Outdoor Tenerife",
    isla: "Tenerife", tipo: "Reparar",
    deporte: ["Senderismo","Trail Running","Escalada"],
    zona: "Norte",
    descripcion: "Reparación de material outdoor: botas de senderismo, mochilas, tiendas de campaña y material técnico. Técnicos especializados con piezas originales y servicio rápido.",
    direccion: "C/ San Francisco 25, 38002 Santa Cruz de Tenerife",
    telefono: "",
    web: "",
    foto: "imagenes/tiendas/taller-outdoor-tenerife.jpg",
    lat: null, lng: null
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
    direccion: "C/ Fondos del Segura 3, Las Palmas de Gran Canaria",
    telefono: "+34 928 232 890",
    web: "https://limasportcanarias.com",
    foto: "imagenes/tiendas/limasport-gc.jpg",
    lat: 28.4636, lng: -16.2518
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
  {
    id: "divecenter-arguineguin",
    nombre: "Dive Center Arguineguín",
    isla: "Gran Canaria", tipo: "Alquilar",
    deporte: ["Submarinismo"],
    zona: "Sur",
    descripcion: "Centro de buceo en el sur de Gran Canaria. Inmersiones guiadas, alquiler de equipo y cursos PADI. Acceso al Cabrón, uno de los mejores spots de buceo de las islas.",
    direccion: "Arguineguín, Gran Canaria",
    telefono: "+34 928 736 196",
    web: "",
    foto: "",
    lat: 27.7572, lng: -15.6833
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
    direccion: "Calle Las Palmas 5, 35580 Playa Blanca, Lanzarote",
    telefono: "+34 928 585 636",
    web: "https://www.kayaklanzarote.com",
    foto: "imagenes/tiendas/kayak-walk-lanzarote.jpg",
    lat: 28.8630, lng: -13.8360
  },
  {
    id: "papagayo-watersports",
    nombre: "Papagayo Watersports",
    isla: "Lanzarote", tipo: "Alquilar",
    deporte: ["Kayak","Surf","Submarinismo"],
    zona: "Sur",
    descripcion: "Alquiler de kayaks, paddle surf, máscaras y trajes de neopreno en Playa Blanca. Kayaks individuales, dobles, triples y cuádruples. Precios especiales para familias.",
    direccion: "Playa Las Coloradas s/n, 35580 Playa Blanca, Lanzarote",
    telefono: "",
    web: "https://papagayowatersports.com",
    foto: "",
    lat: 28.8600, lng: -13.8400
  },
  {
    id: "kayak-walk-lanzarote",
    nombre: "Kayak & Walk in Lanzarote",
    isla: "Lanzarote", tipo: "Alquilar",
    deporte: ["Kayak","Senderismo"],
    zona: "Sur",
    descripcion: "Alquiler de kayaks y material de snorkel en Playa Blanca. Rutas guiadas por las calas de Papagayo con paradas para buceo en fondos volcánicos únicos.",
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
  {
    id: "divecenter-corralejo",
    nombre: "Dive Center Corralejo",
    isla: "Fuerteventura", tipo: "Alquilar",
    deporte: ["Submarinismo"],
    zona: "Norte",
    descripcion: "Centro de buceo en Corralejo con acceso a los mejores spots de Fuerteventura. Alquiler de equipo, inmersiones guiadas y cursos PADI para todos los niveles.",
    direccion: "Corralejo, Fuerteventura",
    telefono: "+34 928 535 906",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "deepblue-fuerteventura",
    nombre: "Deep Blue Diving Fuerteventura",
    isla: "Fuerteventura", tipo: "Alquilar",
    deporte: ["Submarinismo"],
    zona: "Este",
    descripcion: "Centro de buceo en Caleta de Fuste. Dos salidas diarias a las 9:00 y 13:30. Acceso a los mejores arrecifes de Fuerteventura con barco propio y equipo completo.",
    direccion: "Caleta de Fuste, Fuerteventura",
    telefono: "+34 928 163 157",
    web: "",
    foto: "",
    lat: 28.3953, lng: -13.8631
  },
  {
    id: "decathlon-fuerteventura",
    nombre: "Decathlon Fuerteventura",
    isla: "Fuerteventura", tipo: "Comprar",
    deporte: ["Multideporte","Surf","Senderismo"],
    zona: "Norte",
    descripcion: "Equipamiento deportivo completo para surf, senderismo y multideporte en Fuerteventura. La opción más económica para equiparte antes de tus aventuras en la isla del viento.",
    direccion: "Puerto del Rosario, Fuerteventura",
    telefono: "",
    web: "https://www.decathlon.es/tiendas/fuerteventura",
    foto: "imagenes/tiendas/decathlon-tenerife.jpg",
    lat: null, lng: null
  },

  // ══════════════════════════════════════
  //  LA PALMA
  // ══════════════════════════════════════
  {
    id: "aventura-lapalma",
    nombre: "La Palma Aventura",
    isla: "La Palma", tipo: "Alquilar",
    deporte: ["Senderismo","Trail Running","Barranquismo"],
    zona: "Oeste",
    descripcion: "Alquiler de material para senderismo y barranquismo en La Palma. Guías locales especializados en la Caldera de Taburiente, la Ruta de los Volcanes y el Tajogaite.",
    direccion: "Santa Cruz de La Palma",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "transvulcania-shop",
    nombre: "Transvulcania Shop",
    isla: "La Palma", tipo: "Comprar",
    deporte: ["Trail Running","Senderismo"],
    zona: "Sur",
    descripcion: "Tienda oficial de la carrera Transvulcania, uno de los trail más duros del mundo. Material técnico de trail running, ropa y merchandising de las carreras de montaña de La Palma.",
    direccion: "Los Llanos de Aridane, La Palma",
    telefono: "",
    web: "https://transvulcania.info",
    foto: "",
    lat: 28.5004, lng: -13.8627
  },

  // ══════════════════════════════════════
  //  LA GOMERA
  // ══════════════════════════════════════
  {
    id: "gomera-bike",
    nombre: "Gomera Bike",
    isla: "La Gomera", tipo: "Alquilar",
    deporte: ["Ciclismo","Senderismo"],
    zona: "Sur",
    descripcion: "Alquiler de bicicletas de montaña y carretera en La Gomera. Rutas guiadas por los barrancos y el Parque Nacional de Garajonay. El mejor modo de explorar la isla.",
    direccion: "La Playa, Valle Gran Rey, La Gomera",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "adventure-capital-gomera",
    nombre: "Adventure Capital La Gomera",
    isla: "La Gomera", tipo: "Alquilar",
    deporte: ["Kayak","Senderismo","Multideporte"],
    zona: "Sur",
    descripcion: "Kayak por la costa sur de La Gomera, senderismo guiado y actividades multiaventura. Guías locales con gran conocimiento de los barrancos y senderos de la isla.",
    direccion: "Valle Gran Rey, La Gomera",
    telefono: "",
    web: "https://adventurecapital.es",
    foto: "",
    lat: null, lng: null
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
    lat: 28.0828, lng: -17.3270
  },
  {
    id: "hierro-rent",
    nombre: "El Hierro Rent & Sport",
    isla: "El Hierro", tipo: "Alquilar",
    deporte: ["Senderismo","Ciclismo","Multideporte"],
    zona: "Norte",
    descripcion: "Alquiler de bicicletas, material de senderismo y equipamiento outdoor en El Hierro. La isla más sostenible de Europa, ideal para explorar sin dejar huella.",
    direccion: "Valverde, El Hierro",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
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
    direccion: "Tenerife",
    telefono: "",
    web: "https://izas-outdoorcanarias.com",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "surf-point-tenerife",
    nombre: "Surf Point Tenerife",
    isla: "Tenerife", tipo: "Comprar",
    deporte: ["Surf","Kayak"],
    zona: "Norte",
    descripcion: "Tienda de surf en Santa Cruz de Tenerife. Tablas, trajes de neopreno, accesorios de surf y material de paddle surf. La referencia del surf en el norte de la isla.",
    direccion: "C/ Ángel Guimerá 13, Santa Cruz de Tenerife",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "neptuno-surf-tenerife",
    nombre: "Neptuno Surf Shop",
    isla: "Tenerife", tipo: "Comprar",
    deporte: ["Surf","Submarinismo"],
    zona: "Sur",
    descripcion: "Surf, bodyboard y deportes acuáticos en el sur de Tenerife. Tablas, neoprenos, leashes y todo el material para el océano Atlántico. Alquiler de material en temporada.",
    direccion: "Calle El Coronel 1, Edif. Cristianmar, 38650 Los Cristianos, Tenerife",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "barranquismo-tenerife",
    nombre: "Barrancos Canarios",
    isla: "Tenerife", tipo: "Alquilar",
    deporte: ["Barranquismo","Escalada","Senderismo"],
    zona: "Norte",
    descripcion: "Alquiler de material técnico para barranquismo: cuerdas, arneses, descensores y cascos. Guías homologados para los barrancos de Masca, Acha y Los Órganos.",
    direccion: "La Orotava, Tenerife",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "paragliding-tenerife",
    nombre: "Free Flight Tenerife",
    isla: "Tenerife", tipo: "Alquilar",
    deporte: ["Multideporte"],
    zona: "Sur",
    descripcion: "Vuelos en parapente biplaza sobre el sur de Tenerife con vistas al Teide y al Atlántico. Cursos de iniciación al vuelo libre. Las mejores condiciones térmicas de Europa.",
    direccion: "Av. Los Remedios 9, 38410 Los Realejos, Tenerife",
    telefono: "",
    web: "",
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
    direccion: "Las Palmas de Gran Canaria",
    telefono: "",
    web: "https://www.mandalaclimb.com",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "gran-canaria-outdoors",
    nombre: "Gran Canaria Outdoors",
    isla: "Gran Canaria", tipo: "Alquilar",
    deporte: ["Senderismo","Escalada","Barranquismo"],
    zona: "Sur",
    descripcion: "Senderismo guiado, alquiler de material outdoor y tienda de equipamiento en Gran Canaria. Rutas por el Roque Nublo, Barranco de Güigüi y los mejores senderos de la isla.",
    direccion: "Maspalomas, Gran Canaria",
    telefono: "",
    web: "https://www.senderismograncanaria.com",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "surf-shop-gc",
    nombre: "Las Canteras Surf Shop",
    isla: "Gran Canaria", tipo: "Comprar",
    deporte: ["Surf","Submarinismo"],
    zona: "Norte",
    descripcion: "Surf y deportes acuáticos en Las Canteras, la mejor playa urbana de España. Tablas, neoprenos, material de surf y clases para todos los niveles en la playa del Confital.",
    direccion: "Playa de Las Canteras, Las Palmas de Gran Canaria",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "buceo-gc",
    nombre: "Buceo en Gran Canaria",
    isla: "Gran Canaria", tipo: "Alquilar",
    deporte: ["Submarinismo"],
    zona: "Sur",
    descripcion: "Centro de buceo en San Agustín con acceso al Cabrón, Arinaga y la Barra. Alquiler de botellas, cursos PADI y salidas en barco a los mejores puntos de buceo de la isla.",
    direccion: "San Agustín, Gran Canaria",
    telefono: "+34 928 565 428",
    web: "",
    foto: "",
    lat: null, lng: null
  },

  // ══════════════════════════════════════
  //  LANZAROTE — más tiendas
  // ══════════════════════════════════════
  {
    id: "surf-lanzarote",
    nombre: "Famara Surf Shop",
    isla: "Lanzarote", tipo: "Comprar",
    deporte: ["Surf"],
    zona: "Norte",
    descripcion: "La tienda de surf más completa en Famara, el mejor spot de surf de Lanzarote. Tablas de alquiler, neoprenos, clases de surf y todo el material para el Atlántico Norte.",
    direccion: "Caleta de Famara, Lanzarote",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "bike-lanzarote",
    nombre: "Lanzarote Bike Station",
    isla: "Lanzarote", tipo: "Alquilar",
    deporte: ["Ciclismo"],
    zona: "Sur",
    descripcion: "Alquiler de bicicletas de carretera, MTB y e-bikes en Lanzarote. Rutas por los volcanes de Timanfaya y la costa de Los Ajaches. Servicio de asistencia en ruta.",
    direccion: "Puerto del Carmen, Lanzarote",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "senderismo-lanzarote",
    nombre: "Lanzarote Trekking",
    isla: "Lanzarote", tipo: "Alquilar",
    deporte: ["Senderismo","Trail Running"],
    zona: "Norte",
    descripcion: "Senderismo guiado por Lanzarote: Caldera Blanca, Los Ajaches y el GR 131. Alquiler de bastones y material de senderismo. Grupos reducidos con guías locales certificados.",
    direccion: "Arrecife, Lanzarote",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },

  // ══════════════════════════════════════
  //  FUERTEVENTURA — más tiendas
  // ══════════════════════════════════════
  {
    id: "kitesurf-fuerteventura",
    nombre: "Kite Paradise Fuerteventura",
    isla: "Fuerteventura", tipo: "Alquilar",
    deporte: ["Surf"],
    zona: "Sur",
    descripcion: "Escuela y alquiler de kitesurf en Sotavento, sede del Campeonato del Mundo. Clases desde cero, material de última generación y las mejores condiciones de viento de Europa.",
    direccion: "Playa de Sotavento, Fuerteventura",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "surf-school-fuerte",
    nombre: "Corralejo Surf School",
    isla: "Fuerteventura", tipo: "Alquilar",
    deporte: ["Surf"],
    zona: "Norte",
    descripcion: "Escuela de surf en Corralejo con alquiler de tablas y neoprenos. Los mejores profesores para aprender en las olas perfectas del norte de Fuerteventura.",
    direccion: "Corralejo, Fuerteventura",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "bike-fuerte",
    nombre: "Fuerteventura Bikes",
    isla: "Fuerteventura", tipo: "Alquilar",
    deporte: ["Ciclismo"],
    zona: "Norte",
    descripcion: "Alquiler de bicicletas de carretera y MTB en Fuerteventura. La isla es uno de los destinos ciclistas más populares de Europa por su clima y sus carreteras tranquilas.",
    direccion: "Corralejo, Fuerteventura",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },

  // ══════════════════════════════════════
  //  LA PALMA — más tiendas
  // ══════════════════════════════════════
  {
    id: "astro-lapalma",
    nombre: "La Palma Astro Experience",
    isla: "La Palma", tipo: "Alquilar",
    deporte: ["Multideporte"],
    zona: "Norte",
    descripcion: "Alquiler de telescopios y guías de astronomía bajo el mejor cielo de Europa. La Palma es Reserva Starlight. Noches de observación guiadas junto al Roque de los Muchachos.",
    direccion: "Garafía, La Palma",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "kayak-lapalma",
    nombre: "Kayak La Palma",
    isla: "La Palma", tipo: "Alquilar",
    deporte: ["Kayak","Submarinismo"],
    zona: "Oeste",
    descripcion: "Alquiler de kayaks y snorkel en la costa de Los Llanos de Aridane. Aguas cristalinas del Atlántico con fondos volcánicos únicos. Rutas guiadas al atardecer.",
    direccion: "Tazacorte, La Palma",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "bike-lapalma",
    nombre: "La Palma Bike Center",
    isla: "La Palma", tipo: "Alquilar",
    deporte: ["Ciclismo","Trail Running"],
    zona: "Este",
    descripcion: "Alquiler de bicicletas de montaña y carretera en La Palma. Descensos desde el Roque de los Muchachos y rutas por la espina volcánica. Servicio de shuttle incluido.",
    direccion: "Santa Cruz de La Palma",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },

  // ══════════════════════════════════════
  //  LA GOMERA — más tiendas
  // ══════════════════════════════════════
  {
    id: "gomera-trek",
    nombre: "Gomera Trek & Nature",
    isla: "La Gomera", tipo: "Alquilar",
    deporte: ["Senderismo","Trail Running"],
    zona: "Norte",
    descripcion: "Senderismo guiado por Garajonay y los barrancos de La Gomera. Alquiler de bastones, mochilas y material de senderismo. Guías locales con profundo conocimiento de la laurisilva.",
    direccion: "San Sebastián de La Gomera",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "kayak-gomera",
    nombre: "Kayak La Gomera",
    isla: "La Gomera", tipo: "Alquilar",
    deporte: ["Kayak","Submarinismo"],
    zona: "Sur",
    descripcion: "Kayak y snorkel en la costa sur de La Gomera. Rutas por los acantilados de basalto y cuevas marinas del sur. Salidas desde Playa de Santiago con guías certificados.",
    direccion: "La Playa, Valle Gran Rey, La Gomera",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },

  // ══════════════════════════════════════
  //  EL HIERRO — más tiendas
  // ══════════════════════════════════════
  {
    id: "surf-hierro",
    nombre: "El Hierro Surf & SUP",
    isla: "El Hierro", tipo: "Alquilar",
    deporte: ["Surf","Kayak"],
    zona: "Norte",
    descripcion: "Alquiler de tablas de surf, SUP y kayaks en El Hierro. La isla más auténtica de Canarias con spots de surf vírgenes sin masificación. Clases para principiantes.",
    direccion: "Frontera, El Hierro",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "buceo-restinga",
    nombre: "Buceo La Restinga",
    isla: "El Hierro", tipo: "Alquilar",
    deporte: ["Submarinismo"],
    zona: "Sur",
    descripcion: "Centro de buceo adicional en La Restinga con barco grande para salidas diarias. Nitrox disponible. El Tamboril y la zona de La Restinga son dos de los mejores spots de Europa.",
    direccion: "La Restinga, El Hierro",
    telefono: "+34 922 558 197",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "mountain-hierro",
    nombre: "El Hierro Mountain Guide",
    isla: "El Hierro", tipo: "Alquilar",
    deporte: ["Senderismo","Trail Running","Escalada"],
    zona: "Norte",
    descripcion: "Guías de montaña certificados en El Hierro. Ruta del Camino de Jinama, sabinar de La Llanía y yacimientos rupestres del Julan. Alquiler de material técnico de senderismo.",
    direccion: "Valverde, El Hierro",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },

  // ══════════════════════════════════════
  //  LA GRACIOSA
  // ══════════════════════════════════════
  {
    id: "bici-graciosa",
    nombre: "Bicis La Graciosa",
    isla: "La Graciosa", tipo: "Alquilar",
    deporte: ["Ciclismo","Senderismo"],
    zona: "Norte",
    descripcion: "Alquiler de bicicletas en Caleta de Sebo, la única forma de moverse por la isla sin asfalto. Bicicletas de arena para explorar las playas vírgenes y los volcanes de La Graciosa.",
    direccion: "Caleta de Sebo, La Graciosa",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  },
  {
    id: "kayak-graciosa",
    nombre: "Kayak & Snorkel La Graciosa",
    isla: "La Graciosa", tipo: "Alquilar",
    deporte: ["Kayak","Submarinismo"],
    zona: "Norte",
    descripcion: "Alquiler de kayaks y material de snorkel en La Graciosa. Exploración de las lagunas de Montaña Amarilla y la costa del Archipiélago Chinijo. Aguas turquesas de visibilidad excepcional.",
    direccion: "Caleta de Sebo, La Graciosa",
    telefono: "",
    web: "",
    foto: "",
    lat: null, lng: null
  }

]; // ← No borres este corchete

/* ============================================================
   RUTAS.JS — Base de datos de rutas y aventuras en Canarias
   ============================================================
   Para añadir una ruta nueva:
   1. Copia un bloque { ... }
   2. Pégalo dentro del array RUTAS, separado por coma
   3. Rellena los campos y guarda

   CAMPOS:
   id          → identificador único (sin espacios ni tildes)
   nombre      → nombre de la ruta
   isla        → "Tenerife" | "Gran Canaria" | "Lanzarote" |
                 "Fuerteventura" | "La Palma" | "La Gomera" |
                 "El Hierro" | "La Graciosa" | "Isla de Lobos"
   tipo        → "Senderismo" | "Kayak" | "Escalada" |
                 "Submarinismo" | "Ciclismo" | "Paragliding" |
                 "Surf" | "Espeleología" | "Fotografía"
   dificultad  → "Fácil" | "Media" | "Difícil" | "Extrema"
   duracion    → "Menos de 2h" | "2-4 horas" | "4-8 horas" |
                 "Día completo" | "Varios días"
   distancia   → número en km (pon 0 si no aplica)
   descripcion → texto corto, máximo 2 frases
   enlace      → URL de Wikiloc/AllTrails o "" si no tienes
   lat / lng   → coordenadas GPS del inicio de la ruta
   ============================================================ */

var RUTAS = [

    // ╔══════════════════════════════════════════════╗
  // ║              TENERIFE (30 rutas)             ║
  // ╚══════════════════════════════════════════════╝

  // ── PARQUE NACIONAL DEL TEIDE ──
  {
    id: "teide-montana-blanca",
    nombre: "Ascensión al Teide – Montaña Blanca (Sendero 7)",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Extrema",
    duracion: "4-8 horas", distancia: 9.0,
    descripcion: "La ruta más icónica de España. Desde Montaña Blanca (2.300 m) hasta La Rambleta (3.555 m). Requiere permiso para subir los últimos 200 m hasta la cima.",
    enlace: "https://www.alltrails.com/es/sendero/spain/santa-cruz-de-tenerife/montana-blanca-pico-del-teide",
    lat: 28.26032, lng: -16.60298
  },
  {
    id: "roques-garcia-teide",
    nombre: "Roques de García – Sendero 3 Teide",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 3.6,
    descripcion: "Circular por las formaciones volcánicas más espectaculares del Teide: Roque Cinchado, El Torrotito y el Llano de Ucanca. Apta para familias.",
    enlace: "https://www.alltrails.com/es/spain/tenerife/moderate",
    lat: 28.22328, lng: -16.63091
  },
  {
    id: "pico-viejo-teide",
    nombre: "Pico Viejo – Sendero 13",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 10.1,
    descripcion: "Ascenso al volcán hermano del Teide con vistas únicas al cráter de Pico Viejo. Pinar canario milenario y panorámicas de los conos volcánicos.",
    enlace: "https://www.alltrails.com/es/spain/tenerife/moderate",
    lat: 28.27008, lng: -16.63881
  },
  {
    id: "ruta-040-teide",
    nombre: "Ruta 0-4-0 Teide",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Extrema",
    duracion: "Varios días", distancia: 50.7,
    descripcion: "Del nivel del mar en Playa del Socorro hasta la cima del Teide y vuelta al mar. La ruta más extrema de Canarias: más de 3.700 m de desnivel.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/santa-cruz-de-tenerife",
    lat: 28.39403, lng: -16.60302
  },
  {
    id: "paisaje-lunar-vilaflor",
    nombre: "Vilaflor – Paisaje Lunar (PR-TF 72)",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 12.9,
    descripcion: "Circular desde Vilaflor por pinares hasta el Paisaje Lunar, formaciones de piedra pómez erosionada que parecen de otro planeta. Impresionante.",
    enlace: "https://www.alltrails.com/es/spain/tenerife/long",
    lat: 28.15967, lng: -16.63697
  },
  {
    id: "volcan-fasnia",
    nombre: "Volcán de Fasnia – Siete Fuentes",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 9.0,
    descripcion: "Sendero 20 del Parque Nacional del Teide, en la dorsal de Pedro Gil. Circular desde el Mirador del Corral del Niño (TF-24) entre los conos de la erupción de 1705, con retamas, codesos y lava oscura.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/fasnia",
    lat: 28.30257, lng: -16.52202
  },
  {
    id: "chinyero-san-jose",
    nombre: "San José de los Llanos – Chinyero",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 16.2,
    descripcion: "Ruta por las coladas del último volcán en erupción de Tenerife (1909). Lava negra entre pinos centenarios. Ideal para familias y niños.",
    enlace: "https://www.alltrails.com/es/spain/tenerife/easy",
    lat: 28.28421, lng: -16.76186
  },

  // ── PARQUE RURAL DE ANAGA ──
  {
    id: "anaga-afur-taganana",
    nombre: "Anaga – Afur a Taganana (Circular)",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 12.2,
    descripcion: "Una de las mejores rutas de Canarias. Laurisilva salvaje, barrancos profundos y la playa virgen del Tamadite. Joya del Macizo de Anaga.",
    enlace: "https://www.alltrails.com/es/spain/tenerife/long",
    lat: 28.55516, lng: -16.24896
  },
  {
    id: "anaga-roque-taborno",
    nombre: "Anaga – Roque Taborno",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 5.8,
    descripcion: "Sendero corto pero espectacular hasta el Roque Taborno. No apto para vértigo. Vistas únicas al Atlántico Norte y la costa salvaje de Anaga.",
    enlace: "https://www.webtenerife.com/elblog/2026/02/cuales-son-las-mejores-rutas-de-senderismo-en-tenerife-para-descubrir-su-naturaleza",
    lat: 28.55586, lng: -16.26501
  },
  {
    id: "anaga-cruz-carmen-hidalgo",
    nombre: "Cruz del Carmen – Punta del Hidalgo",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 11.4,
    descripcion: "Ruta lineal desde el corazón de Anaga hasta la costa. Pasa por Chinamada, pueblo de casas-cueva habitadas y acantilados de Punta del Hidalgo.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/la-laguna",
    lat: 28.53206, lng: -16.28002
  },
  {
    id: "anaga-bosque-enigmas",
    nombre: "Bosque de los Enigmas – Anaga",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 5.7,
    descripcion: "Circular sencilla desde el Mirador de Zapata por laurisilva bien señalizada. Perfecta para familias. Llevar ropa de abrigo por la humedad.",
    enlace: "https://www.alltrails.com/es/spain/tenerife/moderate",
    lat: 28.53061, lng: -16.2801
  },
  {
    id: "pijaral-tenerife",
    nombre: "Sendero de El Pijaral – Anaga",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 6.6,
    descripcion: "La laurisilva más protegida de Tenerife. Reserva Natural Integral de El Pijaral. Requiere permiso del Cabildo. Experiencia única e irrepetible.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/santa-cruz-de-tenerife",
    lat: 28.55622, lng: -16.1798
  },
  {
    id: "anaga-benijo-draguillo",
    nombre: "Benijo – Cruz del Draguillo (PR-TF 6.3)",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 5.2,
    descripcion: "Precioso recorrido con vistas a la costa de Anaga y al caserío del Draguillo. Iniciar pronto por el aparcamiento limitado. Arquitectura rural única.",
    enlace: "https://www.alltrails.com/es/spain/tenerife",
    lat: 28.57446, lng: -16.18747
  },

  // ── PARQUE RURAL DE TENO ──
  {
    id: "masca-barranco",
    nombre: "Barranco de Masca",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Extrema",
    duracion: "4-8 horas", distancia: 6.9,
    descripcion: "Descenso espectacular por el barranco más famoso de Tenerife hasta la playa. Requiere reserva previa en el Cabildo y regreso en barco.",
    enlace: "https://es.wikiloc.com/planet/discovery-es/rutas-senderismo-tenerife/",
    lat: 28.30506, lng: -16.84076
  },
  {
    id: "teno-risco-verde",
    nombre: "Teno – Monte del Agua – Risco Verde",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 8.3,
    descripcion: "Laurisilva del Monte del Agua hasta los miradores únicos del Risco Verde. Vistas a Masca, Santiago del Teide y el Teide al fondo.",
    enlace: "https://www.alltrails.com/es/spain/tenerife/long",
    lat: 28.31211, lng: -16.81578
  },
  {
    id: "teno-erjos-circular",
    nombre: "Erjos – Circular Parque Rural de Teno",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 11.2,
    descripcion: "Agradable circular por el Parque Rural de Teno con dos paisajes distintos: bosque húmedo y zona más árida. Cruz de Gala con vistas panorámicas.",
    enlace: "https://www.alltrails.com/es/spain/tenerife/long",
    lat: 28.32764, lng: -16.80452
  },
  {
    id: "teno-palmar-circular",
    nombre: "Valle de El Palmar – Teno Alto",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 9.9,
    descripcion: "Circular por el Valle de El Palmar hasta Teno Alto por bosque de brezos y laurisilva única en altura. Vistas excepcionales al norte de la isla.",
    enlace: "https://www.alltrails.com/es/spain/tenerife/long",
    lat: 28.3408, lng: -16.85032
  },

  // ── SUR Y OTROS ──
  {
    id: "barranco-infierno-adeje",
    nombre: "Barranco del Infierno – Adeje",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 6.9,
    descripcion: "Reserva Natural Especial. Sendero hasta cascada de 80 m con cuevas aborígenes y grabados rupestres. Requiere reserva previa obligatoria.",
    enlace: "https://www.barrancodelinfierno.es",
    lat: 28.12631, lng: -16.72364
  },
  {
    id: "roque-conde-arona",
    nombre: "Roque del Conde – Arona",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 5.3,
    descripcion: "Ascenso al Roque del Conde (1.001 m) con vistas de la Caldera del Rey y en días despejados La Palma, La Gomera y El Hierro.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/arona",
    lat: 28.10172, lng: -16.68705
  },
  {
    id: "malpais-guimar",
    nombre: "Malpaís de Güímar",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 9.5,
    descripcion: "Reserva Natural Especial con paisaje desértico volcánico rojizo. Tubos y cuevas volcánicas, miradores y flora endémica. Muy fotografiable.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/guimar",
    lat: 28.29855, lng: -16.37095
  },
  {
    id: "montana-roja-medano",
    nombre: "Montaña Roja – El Médano",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 8.2,
    descripcion: "Circular corta al volcán de 171 m que separa las mejores playas naturales del sur. Referente en el horizonte y vistas a Gran Canaria.",
    enlace: "https://www.alltrails.com/es/spain/tenerife/easy",
    lat: 28.04537, lng: -16.53716
  },
  {
    id: "rambla-castro",
    nombre: "Rambla de Castro – Costa Norte",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 8.5,
    descripcion: "Espacio protegido con bancales agrícolas históricos sobre los acantilados del norte. Playas de arena negra y vistas únicas al Atlántico.",
    enlace: "https://www.alltrails.com/es/spain/tenerife/moderate",
    lat: 28.39551, lng: -16.59379
  },
  {
    id: "los-organos-orotava",
    nombre: "Los Órganos – La Orotava",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 10.8,
    descripcion: "Espectacular circular por la Caldera y Los Órganos, columnas basálticas únicas. Gran variedad de paisajes, flora y desnivel considerable.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/la-orotava",
    lat: 28.35774, lng: -16.50231
  },
  {
    id: "anaga-sendero-sentidos",
    nombre: "Sendero de los Sentidos – Anaga",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 7.6,
    descripcion: "Triple ruta desde Cruz del Carmen con experiencia sensorial única entre laurisilva. Une Anaga con La Laguna. Muy didáctica y bien señalizada.",
    enlace: "https://www.alltrails.com/es/spain/tenerife/moderate",
    lat: 28.53083, lng: -16.27998
  },
  {
    id: "garachico-pr-tf-43",
    nombre: "Circular Garachico – PR-TF 43",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Extrema",
    duracion: "4-8 horas", distancia: 8.5,
    descripcion: "Circular bien señalizada desde el pueblo histórico de Garachico. Restos de lava volcánica, costa norte y pinar. Apto para todos los niveles.",
    enlace: "https://www.alltrails.com/es/spain/tenerife",
    lat: 28.37255, lng: -16.76641
  },
  {
    id: "corona-forestal-las-raices",
    nombre: "Las Raíces – Corona Forestal (PR-TF 25.1)",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 13.0,
    descripcion: "Agradable ruta por el bosque de Las Esperanzas en la Corona Forestal. Pino canario y eucalipto en la zona donde Franco planificó el alzamiento.",
    enlace: "https://www.alltrails.com/es/spain/tenerife/easy",
    lat: 28.42336, lng: -16.37985
  },
  {
    id: "taborno-circular-anaga",
    nombre: "Taborno – Carboneras – Llano Frío",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 11.8,
    descripcion: "Circular completa por el corazón de Anaga: Taborno, Carboneras, Chinamada, Llano Frío y vuelta por el PR-TF 2. Exige orientación y buen calzado.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/santa-cruz-de-tenerife",
    lat: 28.55617, lng: -16.26499
  },
  {
    id: "montana-amarilla-sur",
    nombre: "Montaña Amarilla – Punta de Panete",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 8.9,
    descripcion: "Circular corta al Monumento Natural de Montaña Amarilla. Capas de colores volcánicos entre la montaña y el océano. Puesta de sol espectacular.",
    enlace: "https://www.alltrails.com/es/spain/tenerife/easy",
    lat: 28.00946, lng: -16.63988
  },

  

  // ╔══════════════════════════════════════════════╗
  // ║          GRAN CANARIA (30 rutas)             ║
  // ╚══════════════════════════════════════════════╝

  // ── CUMBRES Y PARQUE NATURAL ──
  {
    id: "roque-nublo-circular",
    nombre: "Roque Nublo – Tejeda (Circular)",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 8.5,
    descripcion: "La ruta más emblemática de Gran Canaria. Desde Tejeda al monolito volcánico de 1.813 m. Desde 2025 requiere reserva previa en la web oficial.",
    enlace: "https://www.alltrails.com/es/spain/gran-canaria",
    lat: 27.9765, lng: -15.60028
  },
  {
    id: "roque-nublo-degollada",
    nombre: "Degollada Becerra – Roque Nublo",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Extrema",
    duracion: "Día completo", distancia: 20.0,
    descripcion: "Acceso al Roque Nublo desde la Degollada Becerra pasando por el Roque de La Rana y El Fraile. Vistas a Artenara y Acusa.",
    enlace: "https://www.alltrails.com/es/spain/gran-canaria/hard",
    lat: 27.98871, lng: -15.59331
  },
  {
    id: "pico-nieves-roque-nublo",
    nombre: "Llanos de la Pez – Pico de las Nieves – Roque Nublo (S-51)",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 15.6,
    descripcion: "Circular por las cumbres de GC desde el área recreativa de Llanos de la Pez. Pico de las Nieves (1.949 m) y Roque Nublo en una sola ruta.",
    enlace: "https://www.alltrails.com/es/spain/gran-canaria/long",
    lat: 27.97516, lng: -15.58366
  },
  {
    id: "pico-nieves-ascenso",
    nombre: "Ascensión al Pico de las Nieves",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 10.6,
    descripcion: "Subida al techo de Gran Canaria (1.949 m) desde el área recreativa de Tamadaba por pinar antiguo. Vistas al Roque Nublo, Bentayga y el Teide.",
    enlace: "https://www.s-cape.es/blog/gran-canaria-rutas-senderismo",
    lat: 27.96618, lng: -15.58366
  },
  {
    id: "artenara-cuevas-caballero",
    nombre: "Artenara – Cuevas del Caballero",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 9.0,
    descripcion: "Circular desde Artenara, el pueblo más alto de Gran Canaria. Bosques, crestas y las cuevas guanches del Caballero con leyendas locales.",
    enlace: "https://www.s-cape.es/blog/gran-canaria-rutas-senderismo",
    lat: 28.02018, lng: -15.64671
  },
  {
    id: "roque-bentayga-gc",
    nombre: "Roque Bentayga – Yacimiento Aborigen",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 8.7,
    descripcion: "Sendero hasta el lugar sagrado de los aborígenes canarios. Almogarenes, grabados rupestres y vistas al Roque Nublo y a la cuenca de Tejeda.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/tejeda",
    lat: 27.98967, lng: -15.63823
  },
  {
    id: "caldera-marteles-gc",
    nombre: "Caldera de Los Marteles – Tenteniguada (SL-1)",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 11.2,
    descripcion: "Circular oficial SL-1 por la Caldera de Los Marteles con vistas al Pico de las Nieves. Almendros en flor en enero–febrero, paisaje único.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/valsequillo-de-gran-canaria",
    lat: 27.96101, lng: -15.53514
  },

  // ── BARRANCOS Y NATURALEZA ──
  {
    id: "barranco-guayadeque",
    nombre: "Barranco de Guayadeque",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 6.2,
    descripcion: "Circular desde Cueva Bermeja, en el Barranco de Guayadeque, subiendo por Cueva Labrada hasta la cumbre del barranco. Monumento Natural entre Agüimes e Ingenio, con cientos de cuevas aborígenes excavadas en la roca.",
    enlace: "https://www.alltrails.com/es/spain/gran-canaria",
    lat: 27.93313, lng: -15.48217
  },
  {
    id: "barranco-guigui-gc",
    nombre: "Barranco de Güigüi – Playa Virgen",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 9.0,
    descripcion: "Una de las rutas más salvajes de Gran Canaria. Desciende al Barranco de Güigüi hasta una playa virgen inaccesible por carretera. Llevar mucha agua.",
    enlace: "https://www.alltrails.com/es/spain/gran-canaria/hard",
    lat: 27.92251, lng: -15.80839
  },
  {
    id: "barranco-cernicalos-gc",
    nombre: "Barranco de los Cernícalos",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 9.4,
    descripcion: "El barranco más húmedo de Gran Canaria. Cascadas, helechos gigantes y cernícalos sobrevolando el cauce. Muy verde y fresco todo el año.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/valsequillo-de-gran-canaria",
    lat: 27.98036, lng: -15.47328
  },
  {
    id: "caldera-bandama-gc",
    nombre: "Caldera de Bandama – Circular",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 7.1,
    descripcion: "Borde e interior de la Caldera de Bandama, cráter de 200 m de profundidad y 1 km de diámetro. Viñedos históricos en el fondo del cráter.",
    enlace: "https://www.alltrails.com/es/spain/gran-canaria",
    lat: 28.03583, lng: -15.46016
  },
  {
    id: "presa-soria-gc",
    nombre: "Presa de Soria – Cascada",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 11.3,
    descripcion: "Ruta por zona semidesértica hasta la Presa de las Niñas. Cuando llueve se forma una cascada espectacular. Casi sin sombra, llevar protección solar.",
    enlace: "https://www.alltrails.com/es/spain/gran-canaria/long",
    lat: 27.9113, lng: -15.66872
  },
  {
    id: "fataga-barranco-gc",
    nombre: "Barranco de Fataga – Parque Natural Ayagaures",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 10.6,
    descripcion: "Por el Parque Natural de Ayagaures en los alrededores del barranco de Fataga. Paisaje de palmeras canarias y acantilados ocres en el sur.",
    enlace: "https://www.alltrails.com/es/spain/gran-canaria/easy",
    lat: 27.86162, lng: -15.56673
  },
  {
    id: "pilancones-gc",
    nombre: "Parque Natural de Pilancones",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 15.0,
    descripcion: "Circular por el Parque Natural de Pilancones desde la Presa de la Angostura. Pino canario centenario y paisajes volcánicos del sur interior.",
    enlace: "https://www.alltrails.com/es/spain/gran-canaria/long",
    lat: 27.83603, lng: -15.6128
  },

  // ── TAMADABA Y COSTA NOROESTE ──
  {
    id: "tamadaba-circular-gc",
    nombre: "Circular Parque Natural de Tamadaba",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 10.1,
    descripcion: "Circular completa por el macizo de Tamadaba: pinos centenarios, Montaña Bibique, Presa de los Pérez y el Valle de Agaete. Impresionante.",
    enlace: "https://www.alltrails.com/es/spain/gran-canaria/hard",
    lat: 28.05681, lng: -15.68879
  },
  {
    id: "agaete-tamadaba-gc",
    nombre: "Agaete – Tamadaba (Lineal)",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 13.5,
    descripcion: "Ascenso desde Agaete al pinar de Tamadaba por el Camino de los Romeros. Perfecta para hacer solo ida y volver en guagua. Vistas al océano.",
    enlace: "https://www.alltrails.com/es/spain/gran-canaria/hard",
    lat: 28.04068, lng: -15.68874
  },
  {
    id: "valle-agaete-gc",
    nombre: "Valle de Agaete – El Sao",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "Día completo", distancia: 15.5,
    descripcion: "Por el Valle de Agaete hasta el barrio de El Sao y el Hornillo por caminos históricos. Frutales, riscos y el pinar de Tamadaba al fondo.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/agaete",
    lat: 28.08075, lng: -15.67182
  },
  {
    id: "azulejos-inagua-gc",
    nombre: "Los Azulejos – Reserva Natural de Inagua",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 18.2,
    descripcion: "Ruta por las rocas multicolores de Los Azulejos hasta la Reserva Natural Integral de Inagua. Paisaje único de colores volcánicos amarillos y verdes.",
    enlace: "https://www.alltrails.com/es/spain/gran-canaria/hard",
    lat: 27.9555, lng: -15.64926
  },

  // ── CAMINO DE SANTIAGO Y LARGO RECORRIDO ──
  {
    id: "camino-volcanes-gc",
    nombre: "GR 131 – Camino Entre Volcanes",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Extrema",
    duracion: "Día completo", distancia: 22.3,
    descripcion: "Gran travesía norte–sur por el corazón volcánico de Gran Canaria. Barrancos, cumbres y bosques encadenados. Una de las mejores de Canarias.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/las-palmas-de-gran-canaria",
    lat: 28.00604, lng: -15.59966
  },
  {
    id: "jacoba-canaria-gc",
    nombre: "Ruta Jacobea Canaria – Etapa 1",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Extrema",
    duracion: "Día completo", distancia: 30.9,
    descripcion: "Primera etapa del Camino de Santiago por Gran Canaria. Cruza la isla por pueblos históricos y paisajes volcánicos únicos de norte a sur.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias",
    lat: 27.73523, lng: -15.59889
  },

  // ── SUR Y COSTA ──
  {
    id: "dunas-maspalomas-gc",
    nombre: "Dunas de Maspalomas",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 12.1,
    descripcion: "Reserva Natural con dunas de hasta 10 m y laguna salobre. 8 km de senderos oficiales delimitados. Prohibido salirse del camino marcado.",
    enlace: "https://www.alltrails.com/es/spain/gran-canaria/easy",
    lat: 27.75988, lng: -15.56474
  },
  {
    id: "playa-cabron-gc",
    nombre: "Playa del Cabrón – Playa Cuervo Grande",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 6.4,
    descripcion: "Ruta costera por el litoral del este. Paisaje volcánico con tonos rojizos y turquesas. Ideal para combinar con baño en playas poco frecuentadas.",
    enlace: "https://welikecanarias.com/senderismo-en-gran-canaria-rutas/",
    lat: 27.86583, lng: -15.38793
  },
  {
    id: "arguineguin-anfi-gc",
    nombre: "Arguineguín – Playa de Anfi del Mar",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 10.0,
    descripcion: "Paseo costero entre Arguineguín y Anfi del Mar, por la playa de Las Marañuelas y Patalavaca, en el suroeste de Gran Canaria. Acantilados rojizos, calas y paseo marítimo.",
    enlace: "https://www.alltrails.com/es/spain/gran-canaria/easy",
    lat: 27.75796, lng: -15.68239
  },
  {
    id: "puerto-mogan-costa",
    nombre: "Puerto de Mogán – Paseo Costero",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 5.2,
    descripcion: "Agradable paseo por el puerto histórico de Mogán, sus playas y acantilados. El pueblo más pintoresco del suroeste de Gran Canaria.",
    enlace: "https://www.alltrails.com/es/spain/gran-canaria/easy",
    lat: 27.8206, lng: -15.76216
  },
  {
    id: "barranco-guiniguada-gc",
    nombre: "Barranco del Guiniguada – Las Palmas",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 16.2,
    descripcion: "Sendero urbano–natural desde Las Palmas hasta casi el Jardín Canario. El barranco más accesible de la isla, rehabilitado y bien señalizado.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/las-palmas-de-gran-canaria",
    lat: 28.09914, lng: -15.42217
  },
  {
    id: "firgas-circular-gc",
    nombre: "Circular de Firgas",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 6.9,
    descripcion: "Circular técnica por los alrededores de Firgas con tramos estrechos, expuestos y embarrados. Descargar mapa antes de salir. Paisaje muy variado.",
    enlace: "https://www.alltrails.com/es/spain/gran-canaria/hard",
    lat: 28.09039, lng: -15.55368
  },
  {
    id: "fortaleza-gc",
    nombre: "Patrimonio Arqueológico La Fortaleza",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 11.2,
    descripcion: "Ruta corta por el yacimiento arqueológico de La Fortaleza. Plantaciones de almendros y el lugar donde se conmemora la conquista de la isla.",
    enlace: "https://www.alltrails.com/es/spain/gran-canaria/easy",
    lat: 27.91292, lng: -15.54161
  },
  {
    id: "puerto-rico-trail-gc",
    nombre: "Puerto Rico – Palmeral Noruego",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 9.4,
    descripcion: "Ruta de trail muy expuesta con escaleras y piedra suelta desde Puerto Rico. Buenas vistas al mar y al interior de la isla. Apta para corredores.",
    enlace: "https://www.alltrails.com/es/spain/gran-canaria/long",
    lat: 27.77715, lng: -15.70064
  },
  {
    id: "playa-ingles-costa-gc",
    nombre: "Playa del Inglés – San Agustín (Costa)",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 10.1,
    descripcion: "Paseo costero accesible entre Playa del Inglés y el Balcón de San Agustín. Vistas al Atlántico, bares con terraza y ambiente playero.",
    enlace: "https://www.alltrails.com/es/spain/gran-canaria/long",
    lat: 27.77113, lng: -15.54054
  },

    // ╔══════════════════════════════════════════════╗
  // ║            LANZAROTE (30 rutas)              ║
  // ╚══════════════════════════════════════════════╝

  // ── TIMANFAYA ──
  {
    id: "caldera-blanca-lanzarote",
    nombre: "Caldera Blanca – Circular desde Tinajo",
    isla: "Lanzarote", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 13.8,
    descripcion: "La ruta libre más impresionante de Lanzarote. Coladas de lava hasta el cráter más grande de la isla (1.200 m de diámetro). Sin guía obligatorio.",
    enlace: "https://www.alltrails.com/es/spain/lanzarote/views",
    lat: 29.04375, lng: -13.69267
  },
  {
    id: "timanfaya-ruta-volcanes",
    nombre: "Ruta de los Volcanes – Timanfaya",
    isla: "Lanzarote", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 10.2,
    descripcion: "Sendero oficial del Parque Nacional (lun/mié/vie). Acceso entre cráteres, coladas de lava y ceniza. Requiere reserva previa obligatoria.",
    enlace: "https://www.miteco.gob.es/es/red-parques-nacionales/nuestros-parques/timanfaya/",
    lat: 29.00573, lng: -13.75309
  },
  {
    id: "timanfaya-golfo-litoral",
    nombre: "El Golfo – Ruta del Litoral",
    isla: "Lanzarote", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 11.5,
    descripcion: "Sendero lineal desde El Golfo hasta la Playa del Paso por la costa de lava solidificada. Ruta guiada oficial del PN de Timanfaya (miércoles).",
    enlace: "https://www.alltrails.com/es/spain/lanzarote/views",
    lat: 28.98549, lng: -13.83188
  },

  // ── NORTE – FAMARA Y CORONA ──
  {
    id: "monte-corona-lanzarote",
    nombre: "Volcán de La Corona – Desde Yé",
    isla: "Lanzarote", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 5.0,
    descripcion: "Circular desde Yé hasta el cráter del Monte Corona (609 m), el volcán cuya erupción, hace unos 21.000 años, formó el túnel de la Atlántida: el mayor tubo volcánico submarino del mundo, que continúa bajo el mar desde la Cueva de lo",
    enlace: "https://www.alltrails.com/es/spain/lanzarote",
    lat: 29.1958, lng: -13.48078
  },
  {
    id: "penas-chache-lanzarote",
    nombre: "Peñas del Chache – Punto más alto",
    isla: "Lanzarote", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 8.5,
    descripcion: "Ascenso al punto más alto de Lanzarote (670 m). Vistas espectaculares al acantilado de Famara y a La Graciosa. Sin sombra, llevar agua.",
    enlace: "https://www.alltrails.com/es/spain/lanzarote/views",
    lat: 29.1275, lng: -13.51429
  },
  {
    id: "famara-risco-lanzarote",
    nombre: "Risco de Famara – Mirador del Río",
    isla: "Lanzarote", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 12.6,
    descripcion: "Bajada por el Risco de Famara desde el Mirador del Río de César Manrique hasta la playa. Vistas a La Graciosa y pendiente pronunciada.",
    enlace: "https://www.alltrails.com/es/spain/lanzarote/views",
    lat: 29.17674, lng: -13.51098
  },
  {
    id: "haria-bosquecillo-lanzarote",
    nombre: "Haría – El Bosquecillo – Mirador",
    isla: "Lanzarote", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 8.6,
    descripcion: "Valle de las Mil Palmeras hasta El Bosquecillo, uno de los pocos bosques naturales de Lanzarote. Contraste total: palmeras, pinos y volcán.",
    enlace: "https://www.los-jameos.com/es/blog/rutas-de-senderismo-en-lanzarote",
    lat: 29.12761, lng: -13.51406
  },
  {
    id: "famara-cueva-cabras-lanzarote",
    nombre: "Caleta de Famara – Cueva de las Cabras y el risco",
    isla: "Lanzarote", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 10.8,
    descripcion: "Subida desde Caleta de Famara por la playa y la Cueva de las Cabras hasta el filo del risco, con el mirador sobre el acantilado, La Graciosa y el archipiélago Chinijo enfrente.",
    enlace: "https://www.alltrails.com/es/spain/lanzarote/easy",
    lat: 29.11659, lng: -13.56398
  },
  {
    id: "santa-catalina-norte",
    nombre: "Ruta al Cráter de Santa Catalina",
    isla: "Lanzarote", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 8.1,
    descripcion: "7 km hasta el cráter de Santa Catalina por paisaje volcánico único. Solo 9 personas por salida. Ruta guiada muy valorada en el norte.",
    enlace: "https://www.lanzarote.com/guia-viaje/excursiones/senderismo/",
    lat: 29.03096, lng: -13.686
  },

  // ── CENTRO Y GERIA ──
  {
    id: "la-geria-vinedos",
    nombre: "La Geria – Viñedos Volcánicos",
    isla: "Lanzarote", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 9.1,
    descripcion: "Ruta por la zona vinícola única en el mundo: uvas cultivadas en hoyos de ceniza volcánica negra. Combina senderismo y enoturismo en bodegas.",
    enlace: "https://www.elviajerofisgon.com/experiencias/guia-de-senderismo-en-lanzarote-rutas-senalizadas-y-consejos/",
    lat: 28.96895, lng: -13.71387
  },
  {
    id: "montana-colorada-lanzarote",
    nombre: "Montaña Colorada – Volcán Rojo",
    isla: "Lanzarote", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 4.7,
    descripcion: "Circular bien señalizado alrededor del volcán de color rojizo por óxidos de hierro. Con la Caldereta adyacente donde se cultivaron cereales.",
    enlace: "https://www.otroviajeenlamochila.com/senderismo-lanzarote/",
    lat: 28.99617, lng: -13.68454
  },
  {
    id: "caldera-cuervos",
    nombre: "Caldera de los Cuervos – Montaña Negra",
    isla: "Lanzarote", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 12.5,
    descripcion: "Vista única desde el interior del cráter de Los Cuervos. Bien conservado, rápido y con vistas panorámicas. Terreno polvoriento y seco.",
    enlace: "https://www.alltrails.com/es/spain/lanzarote/easy",
    lat: 28.99633, lng: -13.68476
  },
  {
    id: "montana-blanca-grietas",
    nombre: "Montaña Blanca – Las Grietas",
    isla: "Lanzarote", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 8.6,
    descripcion: "Sendero muy popular hasta Las Grietas, cañones volcánicos estrechos con paredes onduladas. Terreno resbaladizo, llevar calzado con grip.",
    enlace: "https://www.alltrails.com/es/spain/lanzarote/easy",
    lat: 28.98729, lng: -13.63918
  },
  {
    id: "montana-roja-sur",
    nombre: "Montaña Roja – Sur de Lanzarote",
    isla: "Lanzarote", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 3.4,
    descripcion: "Circular de 3 km por el cráter de Montaña Roja en el sur. Vistas a Playa Blanca, Papagayo y Faro Pechiguera. Ruta en sentido antihorario.",
    enlace: "https://www.otroviajeenlamochila.com/senderismo-lanzarote/",
    lat: 28.86909, lng: -13.84777
  },

  // ── LOS AJACHES Y SUR ──
  {
    id: "ajaches-cumbre-lanzarote",
    nombre: "Los Ajaches – Atalaya de Femés",
    isla: "Lanzarote", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 5.7,
    descripcion: "Subida a la Atalaya de Femés (608 m), el techo del macizo de Los Ajaches, desde el pueblo de Femés. Vistas a Playa Blanca, Papagayo y, con buen día, a Fuerteventura.",
    enlace: "https://www.otroviajeenlamochila.com/senderismo-lanzarote/",
    lat: 28.91357, lng: -13.77965
  },
  {
    id: "ajaches-barrancos-lanzarote",
    nombre: "Macizo de Los Ajaches – Barrancos",
    isla: "Lanzarote", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 6.3,
    descripcion: "Por la zona más antigua de Lanzarote: barrancos, playas vírgenes y miradores sobre el macizo. Paisaje semiárido con flora endémica.",
    enlace: "https://www.elviajerofisgon.com/experiencias/guia-de-senderismo-en-lanzarote-rutas-senalizadas-y-consejos/",
    lat: 28.90748, lng: -13.73436
  },
  {
    id: "playa-risco-lanzarote",
    nombre: "Risco de Famara – Playa del Risco",
    isla: "Lanzarote", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 9.0,
    descripcion: "Bajada desde el acantilado hasta la solitaria Playa del Risco. Vistas a La Graciosa en el descenso. Pendiente considerable, buen calzado.",
    enlace: "https://www.alltrails.com/es/spain/lanzarote/views",
    lat: 29.19654, lng: -13.49224
  },
  {
    id: "papagayo-playa-blanca",
    nombre: "Playa Blanca – Papagayo (Costera)",
    isla: "Lanzarote", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 6.9,
    descripcion: "Paseo costero desde Playa Blanca hasta las calas de Papagayo por acantilados volcánicos. Termina en la cala más espectacular del sur.",
    enlace: "https://www.alltrails.com/es/spain/lanzarote/easy",
    lat: 28.86117, lng: -13.79711
  },
  {
    id: "kayak-papagayo",
    nombre: "Kayak – Playas de Papagayo",
    isla: "Lanzarote", tipo: "Kayak", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 5.1,
    descripcion: "Ruta en kayak por las cristalinas calas de Papagayo con paradas para snorkel en fondos volcánicos. Una de las mejores experiencias acuáticas.",
    enlace: "https://kayakandwalkinlanzarote.com",
    lat: 28.85896, lng: -13.80181
  },

  // ── COSTA ESTE Y ARRECIFE ──
  {
    id: "costa-teguise-playas",
    nombre: "Costa Teguise – Ruta de Playas",
    isla: "Lanzarote", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 10.4,
    descripcion: "Circular costera desde Costa Teguise por Playa de las Cucharas, Los Charcos y Jabilillo. Zona turística con ambiente playero y accesos fáciles.",
    enlace: "https://www.alltrails.com/es/spain/lanzarote/easy",
    lat: 29.00626, lng: -13.48516
  },
  {
    id: "arrecife-charco-paseo",
    nombre: "Arrecife – Paseo Marítimo y Charco",
    isla: "Lanzarote", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 7.1,
    descripcion: "Agradable paseo por la capital: Parque Temático, Playa del Reducto, Castillo de San Gabriel y el encantador Charco de San Ginés.",
    enlace: "https://www.alltrails.com/es/spain/lanzarote/easy",
    lat: 28.95804, lng: -13.56172
  },
  {
    id: "puerto-calero-carmen",
    nombre: "Puerto Calero – Puerto del Carmen",
    isla: "Lanzarote", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 13.1,
    descripcion: "Sendero costero desde Puerto Calero hasta Puerto del Carmen por el Mirador del Puerto, Barranco Quiquere y Playa Pila de la Barrilla.",
    enlace: "https://www.alltrails.com/es/spain/lanzarote",
    lat: 28.9218, lng: -13.64216
  },

  // ── VALLES Y NORTE ──
  {
    id: "valles-norte-haria",
    nombre: "Valles del Norte – Haría",
    isla: "Lanzarote", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 12.0,
    descripcion: "Caminata guiada por los valles del norte de Lanzarote. Paisajes increíbles, fauna endémica y el mercado de Haría al finalizar. Traslados incluidos.",
    enlace: "https://www.lanzarote.com/guia-viaje/excursiones/senderismo/",
    lat: 29.1473, lng: -13.49901
  },
  {
    id: "cara-sur-lanzarote",
    nombre: "Cara Sur – Volcanes y Costa",
    isla: "Lanzarote", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 7.6,
    descripcion: "Ruta guiada por la cara sur de Lanzarote: volcanes, fauna y vistas espectaculares. Nivel de dificultad 4. 5 horas de recorrido intenso.",
    enlace: "https://www.lanzarote.com/guia-viaje/excursiones/senderismo/",
    lat: 29.11609, lng: -13.64005
  },
  {
    id: "santa-barbara-teguise",
    nombre: "Castillo de Santa Bárbara – Teguise",
    isla: "Lanzarote", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 4.9,
    descripcion: "Subida al Castillo de Santa Bárbara en lo alto de la Montaña de Guanapay. Vistas panorámicas a Teguise, la antigua capital, y la costa este.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/teguise",
    lat: 29.05913, lng: -13.56018
  },
  {
    id: "la-santa-tenesar",
    nombre: "La Santa – Tenesar",
    isla: "Lanzarote", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 20.1,
    descripcion: "Recorrido por paisaje volcánico con acantilados pronunciados desde La Santa hasta Tenesar. Tranquilidad total y vistas al Atlántico.",
    enlace: "https://www.lanzarote.com/guia-viaje/excursiones/senderismo/",
    lat: 29.10644, lng: -13.66791
  },
  {
    id: "gr131-lanzarote-completo",
    nombre: "GR 131 Lanzarote – Travesía",
    isla: "Lanzarote", tipo: "Senderismo", dificultad: "Extrema",
    duracion: "Varios días", distancia: 75.4,
    descripcion: "Travesía completa de norte a sur por Lanzarote. Volcanes, malpaíses, viñedos y costas. La gran ruta de largo recorrido de la isla.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/lanzarote",
    lat: 29.22313, lng: -13.45235
  },

    // ╔══════════════════════════════════════════════╗
  // ║          FUERTEVENTURA (20 rutas)            ║
  // ╚══════════════════════════════════════════════╝

  {
    id: "calderon-hondo-fuerte",
    nombre: "Calderón Hondo – Lajares (SL-FV 2)",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 5.9,
    descripcion: "La ruta más popular de Fuerteventura. Cráter perfectamente dibujado (278 m) con vistas a Lobos, Lanzarote y el Atlántico. Bien señalizada.",
    enlace: "https://www.alltrails.com/es/spain/fuerteventura",
    lat: 28.68919, lng: -13.93149
  },
  {
    id: "pico-zarza-fuerte",
    nombre: "Pico de la Zarza – Morro Jable (PR-FV 54)",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 15.2,
    descripcion: "Ascenso al punto más alto de Fuerteventura (807 m) con vistas a Cofete, las playas vírgenes y en días despejados hasta Gran Canaria.",
    enlace: "https://www.alltrails.com/es/spain/fuerteventura",
    lat: 28.05304, lng: -14.32351
  },
  {
    id: "cofete-gran-valle-fuerte",
    nombre: "Cofete – Gran Valle (PR-FV 55)",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 8.0,
    descripcion: "Una de las mejores rutas de Fuerteventura. Desciende por el Gran Valle hasta la playa salvaje de Cofete, 12 km de arena virgen. Muy exigente.",
    enlace: "https://www.komoot.com/es-es/guide/809/rutas-de-senderismo-en-fuerteventura",
    lat: 28.06361, lng: -14.37624
  },
  {
    id: "arco-penitas-fuerte",
    nombre: "Arco de las Peñitas – Barranco Malpaso (SL-FV 6)",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 5.5,
    descripcion: "Sendero hasta el Arco de las Peñitas por el barranco de Malpaso. Escalar piedras grandes, vegetación idílica y la Ermita de la Peña.",
    enlace: "https://www.alltrails.com/es/spain/fuerteventura",
    lat: 28.39359, lng: -14.08784
  },
  {
    id: "barranco-penitas-fuerte",
    nombre: "Betancuria – Barranco de Las Peñitas (SL-FV 27)",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 7.1,
    descripcion: "Ruta patrimonial por el cauce del río Palmas hasta la Ermita de la Virgen de la Peña, patrona de Fuerteventura. Los materiales más antiguos de Canarias.",
    enlace: "https://www.alltrails.com/es/spain/fuerteventura",
    lat: 28.39395, lng: -14.07254
  },
  {
    id: "gr131-fuerteventura",
    nombre: "GR 131 Fuerteventura – Travesía Completa",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Extrema",
    duracion: "Varios días", distancia: 157.1,
    descripcion: "152 km atravesando toda la isla de norte a sur entre volcanes, viento y largas etapas sin sombra. La gran travesía de Fuerteventura.",
    enlace: "https://www.alltrails.com/es/spain/fuerteventura",
    lat: 28.73766, lng: -13.82212
  },
  {
    id: "tindaya-fuerte",
    nombre: "Montaña de Tindaya",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 5.7,
    descripcion: "Ascenso a la montaña sagrada de los majos con grabados podomorlos únicos. Vistas al norte de la isla. Lugar de alto valor arqueológico y espiritual.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/la-oliva",
    lat: 28.59002, lng: -13.98241
  },
  {
    id: "malpais-arena-fuerte",
    nombre: "Malpaís de la Arena – Norte",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 7.5,
    descripcion: "Circular por el cono volcánico del Malpaís de la Arena rodeado de coladas de lava. Vistas hacia Corralejo y el Atlántico. Flora resistente al clima árido.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/la-oliva",
    lat: 28.62302, lng: -13.91535
  },
  {
    id: "volcan-escanfraga-fuerte",
    nombre: "Volcán de Escanfraga",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 6.6,
    descripcion: "Ascenso al volcán de Escanfraga con coladas basálticas y lavas solidificadas. Vistas al norte de la isla y contraste con las extensas llanuras.",
    enlace: "https://sendaecoway.com/blog/rutas-en-fuerteventura-5-mejores-senderismo/",
    lat: 28.6326, lng: -13.89566
  },
  {
    id: "ajuy-cuevas-fuerte",
    nombre: "Ajuy – Caleta Negra y Cuevas Marinas",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 5.4,
    descripcion: "Ruta costera a las cuevas marinas de Ajuy y los acantilados de Caleta Negra. Los materiales más antiguos de Canarias a nivel del mar.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/pajara",
    lat: 28.3992, lng: -14.15435
  },
  {
    id: "kitesurf-sotavento",
    nombre: "Kitesurf – Laguna de Sotavento",
    isla: "Fuerteventura", tipo: "Surf", dificultad: "Media",
    duracion: "Menos de 2h", distancia: 7.0,
    descripcion: "Sede del Mundial de Windsurf y Kitesurf. Laguna con aguas tranquilas y viento constante. Uno de los mejores spots de estos deportes en el mundo.",
    enlace: "https://profuerte.com",
    lat: 28.12643, lng: -14.25066
  },
  {
    id: "corralejo-dunas-fuerte",
    nombre: "Parque Natural de Corralejo – Dunas",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 12.1,
    descripcion: "Sendero por las grandes dunas blancas del norte junto al Parque Natural de Corralejo. Paisaje desértico con vistas a Lobos y Lanzarote.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/la-oliva",
    lat: 28.72618, lng: -13.84964
  },
  {
    id: "sendero-costa-fuerte",
    nombre: "Costa de Gran Tarajal – Ruta Costera",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Extrema",
    duracion: "Día completo", distancia: 27.4,
    descripcion: "Paseo costero por el sur entre playas tranquilas y acantilados de colores ocres. Zona alejada del turismo masivo con vistas al océano Atlántico.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/tuineje",
    lat: 28.21337, lng: -14.02277
  },
  {
    id: "playa-molinos-fuerte",
    nombre: "Playa de Los Molinos",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 9.8,
    descripcion: "Ruta hasta la Playa de Los Molinos con la Cueva Herminia visible solo en bajamar. Paisaje volcánico y tranquilidad absoluta en el noroeste.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/la-oliva",
    lat: 28.54263, lng: -14.06323
  },
  {
    id: "circular-lobos-fuerte",
    nombre: "Ruta Circular – Isla de Lobos",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 11.2,
    descripcion: "Circular completa por Lobos: La Caldera, El Puertito, Faro Martiño y Playa de La Concha. Requiere permiso gratuito y ferry desde Corralejo.",
    enlace: "https://www.alltrails.com/es/spain/fuerteventura",
    lat: 28.7367, lng: -13.82247
  },

  
  // ── FUERTEVENTURA (nuevas) ───────────────────────────────
  {
    id: "sendero-bayuyo-fuerte",
    nombre: "Sendero Bayuyo – Malpaís Norte",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 10.7,
    descripcion: "Ruta por el malpaís de lava del norte de Fuerteventura, formado por la alineación volcánica de Bayuyo hace decenas de miles de años. Vistas a Lanzarote, Lobos y el Atlántico desde los conos.",
    enlace: "https://www.alltrails.com/es/spain/fuerteventura",
    lat: 28.72231, lng: -13.88996
  },
  {
    id: "barrancos-puerto-fuerte",
    nombre: "Barrancos de Puerto – Centro",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 13.4,
    descripcion: "Circular por los barrancos del centro de la isla con 268 m de desnivel. Paisaje variado entre malpaíses, barrancos y llanuras volcánicas poco frecuentadas.",
    enlace: "https://www.senderosbtt.com/rutas-gps/rutas-de-senderismo/rutas-de-senderismo-en-fuerteventura/",
    lat: 28.49487, lng: -13.86254
  },
  {
    id: "balcon-asomada-fuerte",
    nombre: "Balcón de La Asomada",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 9.6,
    descripcion: "Ruta con vistas panorámicas desde el Balcón de La Asomada. Paisaje desértico árido con vistas al Atlántico. Sendero poco frecuentado ideal para la tranquilidad.",
    enlace: "https://www.alltrails.com/es/spain/fuerteventura",
    lat: 28.49855, lng: -13.87915
  },
  {
    id: "degollada-facay-fuerte",
    nombre: "Degollada de Facay",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "Día completo", distancia: 22.8,
    descripcion: "Una de las rutas más largas y exigentes del centro de Fuerteventura con 520 m de desnivel. Atraviesa paisajes volcánicos remotos con gran sensación de aislamiento.",
    enlace: "https://www.senderosbtt.com/rutas-gps/rutas-de-senderismo/rutas-de-senderismo-en-fuerteventura/",
    lat: 28.5315, lng: -13.93604
  },
  {
    id: "risco-paso-jandia",
    nombre: "Risco del Paso – Parque Natural Jandía",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 14.7,
    descripcion: "Circular técnica no apta para vértigo por Atalayeja Grande, Morro del Rinconcillo y la Playa Barlovento. Ruinas guanchas y vistas al Atlántico sur.",
    enlace: "https://www.alltrails.com/es/spain/fuerteventura/hard",
    lat: 28.11242, lng: -14.26524
  },
  {
    id: "tindaya-vallebron-tefia",
    nombre: "Tindaya – Vallebrón – Tefía (PR FV 9)",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 17.9,
    descripcion: "Larga circular desde Tindaya pasando por Vallebrón y Tefía. Montaña de Tindaya, Ermita de San Juan, Montaña de la Muda y vistas al norte de la isla.",
    enlace: "https://www.alltrails.com/es/spain/fuerteventura",
    lat: 28.55942, lng: -13.95928
  },
  {
    id: "playa-playitas-fuerte",
    nombre: "Las Playitas – Costa Sur Este",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 9.9,
    descripcion: "Circular con subibajas constantes y vistas a la costa este. Paisaje volcánico rojizo, playas poco frecuentadas y la sensación de explorar el sur más tranquilo.",
    enlace: "https://www.alltrails.com/es/spain/fuerteventura",
    lat: 28.22779, lng: -13.99249
  },
  {
    id: "sotavento-playa-circular",
    nombre: "Arenal Playa de Sotavento – Circular",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 15.5,
    descripcion: "Circular por el arenal de la Playa de Sotavento en Costa Calma. Laguna natural, dunas y el entorno donde se celebran los mundiales de kitesurf y windsurf.",
    enlace: "https://www.alltrails.com/es/spain/fuerteventura/easy",
    lat: 28.09043, lng: -14.28368
  },
  {
    id: "salinas-jandia-fuerte",
    nombre: "Salinas del Carmen – Ruta Costera",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 9.0,
    descripcion: "Paseo junto a las antiguas salinas del Carmen en el este de la isla. Museo de la Sal y paisaje costero único con aves limícolas en las balsas salineras.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/fuerteventura",
    lat: 28.39552, lng: -13.85538
  },
  {
    id: "islote-lobos-norte-fuerte",
    nombre: "Costa Norte – Corralejo",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 25.0,
    descripcion: "Ruta costera desde Corralejo por el GR-131 junto a las Dunas del Parque Natural, con vistas a Lobos y Lanzarote. Sendero de arena bien marcado.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/corralejo",
    lat: 28.74107, lng: -13.87097
  },
  {
    id: "montana-cardones-fuerte",
    nombre: "Montaña de Cardones – La Oliva",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 6.0,
    descripcion: "Ruta circular desde La Oliva hasta la Montaña de Cardones. Paisaje semidesértico poco frecuentado con vistas a los pueblos blancos del norte.",
    enlace: "https://www.alltrails.com/es/spain/fuerteventura/easy",
    lat: 28.63272, lng: -13.89578
  },
  {
    id: "betancuria-vega-rio-palmas",
    nombre: "Betancuria – Vega Río Palmas",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 11.5,
    descripcion: "Paseo histórico desde Betancuria, la antigua capital, hasta la Vega de Río Palmas por el barranco del Río Palmas. Agua, palmeras y la Ermita de la Peña.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/betancuria",
    lat: 28.42289, lng: -14.05779
  },
  {
    id: "gran-tarajal-caleta-fuerte",
    nombre: "Gran Tarajal – Caleta del Muerto",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 8.0,
    descripcion: "Ruta costera por acantilados volcánicos del sureste desde Gran Tarajal. Calas solitarias, colores rojizos y el silencio de la costa menos visitada.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/tuineje",
    lat: 28.2017, lng: -14.0017
  },
  {
    id: "pecenescal-barlovento-fuerte",
    nombre: "Barranco de Pecenescal – Playa Barlovento",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 15.4,
    descripcion: "Sendero GR-131/SL-FV11 técnico con tramos de mucho desnivel hasta la Playa Barlovento. No apta para vértigo. Paisaje salvaje del Parque Natural de Jandía.",
    enlace: "https://www.alltrails.com/es/spain/fuerteventura/hard",
    lat: 28.12709, lng: -14.28717
  },

    // ╔══════════════════════════════════════════════╗
  // ║             LA PALMA (18 rutas)              ║
  // ╚══════════════════════════════════════════════╝

  {
    id: "ruta-volcanes-lapalma",
    nombre: "Ruta de los Volcanes – GR 131",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 8.2,
    descripcion: "Ruta mítica desde el Refugio del Pilar por cráteres volcánicos hasta Fuencaliente. El Cráter del Hoyo Negro, vistas al Teide y la Gomera.",
    enlace: "https://www.alltrails.com/es/spain/la-palma",
    lat: 28.49339, lng: -17.84316
  },
  {
    id: "tajogaite-erupcion",
    nombre: "Volcán Tajogaite – Erupción 2021",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 7.2,
    descripcion: "Paisaje lunar reciente único en Europa. Coladas y el nuevo delta volcánico formado en 2021. La más impresionante y reciente de las rutas canarias.",
    enlace: "https://visitlapalma.es/senderos-la-palma/",
    lat: 28.6227, lng: -17.84254
  },
  {
    id: "caldera-taburiente-brecitos",
    nombre: "Los Brecitos – Cascada de Colores",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 14.5,
    descripcion: "Descenso desde Los Brecitos (taxi 4x4) por el Parque Nacional hasta la Cascada de Colores y el Barranco de las Angustias. Espectacular.",
    enlace: "https://guiaislascanarias.com/la-palma/rutas-senderos-la-palma/",
    lat: 28.71167, lng: -17.90061
  },
  {
    id: "nacientes-marcos-cordero",
    nombre: "Nacientes de Marcos y Cordero – Túneles",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 14.6,
    descripcion: "Sendero PR-LP 6 por el canal con 13 túneles. El túnel 12 tiene una cascada interior. Laurisilva increíble en el descenso. Requiere frontal y chubasquero.",
    enlace: "https://guiaislascanarias.com/la-palma/rutas-senderos-la-palma/",
    lat: 28.77243, lng: -17.81207
  },
  {
    id: "tazacorte-roque-muchachos",
    nombre: "Tazacorte – Roque de los Muchachos",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Extrema",
    duracion: "Día completo", distancia: 16.5,
    descripcion: "Más de 2.400 m de ascenso continuo desde el mar hasta la cima de La Palma (2.423 m). Una de las rutas más duras de todo el archipiélago.",
    enlace: "https://visitlapalma.es/senderos-la-palma/",
    lat: 28.65184, lng: -17.94764
  },
  {
    id: "roque-muchachos-cumbre",
    nombre: "Roque de los Muchachos – Cumbre GR 131",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 9.3,
    descripcion: "Tramo del GR 131 por la cumbre (2.423 m) entre observatorios. Desde el Pico de la Cruz al Roque, con vistas a todas las islas del archipiélago.",
    enlace: "https://guiaislascanarias.com/la-palma/rutas-senderos-la-palma/",
    lat: 28.75454, lng: -17.88515
  },
  {
    id: "tilos-lapalma",
    nombre: "Ruta de Los Tilos – Bosque Sagrado",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 7.4,
    descripcion: "Bosque de laurisilva Reserva de la Biosfera con el Salto de los Tilos. Vegetación endémica exuberante y sonido del agua constante.",
    enlace: "https://sendaecoway.com/blog/rutas-la-palma-5-mejores-senderismo/",
    lat: 28.79149, lng: -17.79933
  },
  
  {
    id: "pico-sabina-nieve-lp",
    nombre: "Pico de La Sabina – Pico de la Nieve (PR-LP 3)",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 8.6,
    descripcion: "Circular por los picos del sur de la cumbre. Bosques de pinos y matorrales, vistas a Tenerife y La Gomera. Mejor en sentido antihorario.",
    enlace: "https://www.alltrails.com/es/spain/la-palma",
    lat: 28.73338, lng: -17.82244
  },
  {
    id: "caldera-taburiente-integral",
    nombre: "Travesía Integral – Caldera de Taburiente",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 15.1,
    descripcion: "Travesía completa del Parque Nacional. Barrancos, cascadas, paredes de 2.000 m y uno de los paisajes más impresionantes de Canarias.",
    enlace: "https://visitlapalma.es/senderos-la-palma/",
    lat: 28.71182, lng: -17.90078
  },
  {
    id: "san-antonio-volcan-lapalma",
    nombre: "Volcán de San Antonio – Fuencaliente",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 9.5,
    descripcion: "Circular por los volcanes de Fuencaliente: el cráter del San Antonio, los Llanos del Azufre y el Teneguía, el que entró en erupción en 1971, con el mar y las salinas al fondo.",
    enlace: "https://visitlapalma.es/senderos-la-palma/",
    lat: 28.49202, lng: -17.85593
  },
  {
    id: "camino-faya-lapalma",
    nombre: "Camino de la Faya – Medianías Este",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 13.5,
    descripcion: "Sendero panorámico por las medianías del este conectando los pinares. Vistas al Atlántico y a los valles. Flora endémica de medianías.",
    enlace: "https://visitlapalma.es/senderos-la-palma/",
    lat: 28.60602, lng: -17.78025
  },

  
  // ── LA PALMA (nuevas) ────────────────────────────────────
  {
    id: "cubo-galga-lapalma",
    nombre: "El Cubo de La Galga – PR LP 5.1",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 9.0,
    descripcion: "Sendero por el bosque más húmedo del noreste de La Palma. Laurisilva densa, helechos gigantes y el sonido constante del agua en el barranco de La Galga.",
    enlace: "https://www.alltrails.com/es/spain/la-palma",
    lat: 28.76704, lng: -17.76983
  },
  {
    id: "birigoyo-pilar-lapalma",
    nombre: "Refugio El Pilar – Pico Birigoyo",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 6.6,
    descripcion: "Ascenso al Pico Birigoyo (1.800 m) desde el Refugio del Pilar por el GR 131. Vistas a la Ruta de los Volcanes y a la Caldera de Taburiente desde la cima.",
    enlace: "https://www.alltrails.com/es/spain/la-palma",
    lat: 28.61379, lng: -17.83625
  },
  {
    id: "cumbrecita-caldera-lp",
    nombre: "Mirador de La Cumbrecita – Caldera",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 9.3,
    descripcion: "Ruta panorámica desde el Mirador de La Cumbrecita al borde de la Caldera de Taburiente. Vistas aéreas al interior del parque. Requiere reserva de aparcamiento.",
    enlace: "https://visitlapalma.es/senderos-la-palma/",
    lat: 28.69765, lng: -17.8569
  },
  {
    id: "charco-azul-lapalma",
    nombre: "Charco Azul – Piscinas Naturales",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 3.2,
    descripcion: "Paseo corto hasta las piscinas naturales volcánicas de Charco Azul en el norte. Agua turquesa y tranquilidad absoluta rodeada de acantilados de lava.",
    enlace: "https://visitlapalma.es/senderos-la-palma/",
    lat: 28.79928, lng: -17.75996
  },
  {
    id: "barranco-angustias-lp",
    nombre: "Barranco de Las Angustias",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 22.0,
    descripcion: "Descenso por el cauce del Barranco de Las Angustias, salida de la Caldera de Taburiente. Cruzar el río varias veces sobre piedras. Tramo final muy exigente.",
    enlace: "https://guiaislascanarias.com/la-palma/rutas-senderos-la-palma/",
    lat: 28.64984, lng: -17.94566
  },
  {
    id: "pico-nieves-sabina-lp",
    nombre: "Pico de La Sabina – Pico de la Nieve (PR LP 3)",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 8.0,
    descripcion: "Circular bien marcada por los picos del sur de la cumbre. Bosques de pinos, chovas piquirrojas y vistas a Tenerife y La Gomera en días despejados.",
    enlace: "https://www.alltrails.com/es/spain/la-palma",
    lat: 28.73316, lng: -17.82215
  },
  {
    id: "tablado-gallegos-lp",
    nombre: "El Tablado – Gallegos (Costa Norte)",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 9.5,
    descripcion: "Costa norte salvaje entre barrancos, acantilados y caseríos remotos. Gran sensación de aislamiento. Hacer solo ida y volver en guagua desde Gallegos.",
    enlace: "https://www.s-cape.es/blog/la-palma-rutas-senderismo",
    lat: 28.83189, lng: -17.87633
  },
  {
    id: "revenaton-cumbrenorte-lp",
    nombre: "Pico de las Nieves – Reventón (GR 131)",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Extrema",
    duracion: "Día completo", distancia: 25.4,
    descripcion: "Ruta de altura desde el Pico de las Nieves (2.239 m) hasta el Paso del Reventón. Cornisas con vistas espectaculares. No apta para vértigo. Llevar abrigo.",
    enlace: "https://www.s-cape.es/blog/la-palma-rutas-senderismo",
    lat: 28.75445, lng: -17.88506
  },
  {
    id: "marcos-cordero-tuneles-lp",
    nombre: "Nacientes de Marcos y Cordero – 13 Túneles",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 9.5,
    descripcion: "El sendero PR-LP 6 más emblemático de La Palma. 13 túneles por canal de agua, cascada en el túnel 12. Requiere frontal y chubasquero. Reserva de aparcamiento.",
    enlace: "https://guiaislascanarias.com/la-palma/rutas-senderos-la-palma/",
    lat: 28.77177, lng: -17.81254
  },
  {
    id: "barranco-los-tilos-lp",
    nombre: "Bosque de Los Tilos – Reserva",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 2.7,
    descripcion: "Paseo por la Reserva de la Biosfera de Los Tilos. Laurisilva Patrimonio de la Humanidad con la cascada del Salto de los Tilos. Sendero llano y muy verde.",
    enlace: "https://visitlapalma.es/senderos-la-palma/",
    lat: 28.79164, lng: -17.79951
  },
  {
    id: "puntalarga-fuencaliente-lp",
    nombre: "Playa Puntalarga – Fuencaliente",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 13.4,
    descripcion: "Paseo hasta la Playa de Puntalarga, pequeña bahía de arena negra volcánica en Fuencaliente. Aguas tranquilas perfectas para baño. Junto al Volcán de San Antonio.",
    enlace: "https://visitlapalma.es/senderos-la-palma/",
    lat: 28.48787, lng: -17.84803
  },
  {
    id: "hoyo-negro-volcan-lp",
    nombre: "Cráter del Hoyo Negro – Ruta Volcanes",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 10.4,
    descripcion: "Tramo central de la Ruta de los Volcanes con el imponente Cráter del Hoyo Negro. Colores negros y rojizos, lava solidificada y el silencio de los volcanes.",
    enlace: "https://www.alltrails.com/es/spain/la-palma",
    lat: 28.61275, lng: -17.83595
  },
  {
    id: "jedey-los-llanos-lp",
    nombre: "Jedey – Los Llanos de Aridane",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 11.0,
    descripcion: "Ruta por los barrancos del Valle de Aridane con vistas a las coladas del Tajogaite 2021. Plataneras, senderos históricos y paisaje en regeneración volcánica.",
    enlace: "https://visitlapalma.es/senderos-la-palma/",
    lat: 28.66115, lng: -17.91884
  },
  {
    id: "barranco-bombas-agua-lp",
    nombre: "Barranco de Las Bombas de Agua",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 10.7,
    descripcion: "Circular por el norte de La Palma entre plataneras, barrancos y el contraste entre vegetación exuberante y acantilados costeros. Sendero poco frecuentado.",
    enlace: "https://visitlapalma.es/senderos-la-palma/",
    lat: 28.72435, lng: -17.75105
  },
  {
    id: "punta-lava-fuencaliente-lp",
    nombre: "Punta de La Lava – Delta Tajogaite",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 7.7,
    descripcion: "Sendero por el delta volcánico creado en 2021, donde la lava llegó al mar y creó 50 hectáreas de tierra nueva. El paisaje más reciente y único de Europa.",
    enlace: "https://visitlapalma.es/senderos-la-palma/",
    lat: 28.58648, lng: -17.91037
  },
  {
    id: "mirador-lomo-chozas-lp",
    nombre: "Mirador Lomo de Las Chozas – Caldera",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 4.8,
    descripcion: "Sendero con tramos junto a cornisas del borde de la Caldera de Taburiente hasta el Mirador de Los Roques. Precaución en este tramo por el acantilado.",
    enlace: "https://visitlapalma.es/senderos-la-palma/",
    lat: 28.69728, lng: -17.85694
  },
  {
    id: "malena-costa-lp",
    nombre: "Ruta Costera Norte – Barlovento",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 12.7,
    descripcion: "Costa norte salvaje de La Palma desde Barlovento. Acantilados, cuevas marinas y el paisaje atlántico más bravo de la isla. Poco señalizado, descargar mapa GPS.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/la-palma",
    lat: 28.82378, lng: -17.80542
  },

    // ╔══════════════════════════════════════════════╗
  // ║             LA GOMERA (10 rutas)             ║
  // ╚══════════════════════════════════════════════╝

  {
    id: "garajonay-cima-gomera",
    nombre: "Alto de Garajonay – Cima del Parque Nacional",
    isla: "La Gomera", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 9.6,
    descripcion: "Cima del Parque Nacional (1.487 m) entre laurisilva: un bosque relicto, superviviente de los que cubrían el Mediterráneo hace millones de años. En días claros se ven todas las islas occidentales.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/alajeró",
    lat: 28.12599, lng: -17.25821
  },
  {
    id: "gr131-lagomera",
    nombre: "GR 131 La Gomera – Travesía",
    isla: "La Gomera", tipo: "Senderismo", dificultad: "Extrema",
    duracion: "Día completo", distancia: 19.7,
    descripcion: "Atraviesa el Parque Nacional de Garajonay y los barrancos más profundos de La Gomera. Jornada exigente por la joya verde del archipiélago.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/san-sebastian-de-la-gomera",
    lat: 28.18059, lng: -17.26499
  },
  {
    id: "portelas-monte-agua",
    nombre: "Las Portelas – Monte del Agua",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 9.5,
    descripcion: "Circular por la laurisilva del Monte del Agua, en el Parque Rural de Teno, saliendo de Las Portelas. Bosque de niebla, helechos y laureles en uno de los rincones más húmedos de Tenerife.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/vallehermoso",
    lat: 28.32656, lng: -16.84551
  },
  {
    id: "barranco-valle-gran-rey",
    nombre: "Barranco de Valle Gran Rey",
    isla: "La Gomera", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "Día completo", distancia: 14.7,
    descripcion: "Descenso por el barranco más profundo de La Gomera hasta las playas de Valle Gran Rey. Paredes verticales y vegetación exuberante.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/valle-gran-rey",
    lat: 28.08903, lng: -17.33899
  },
  {
    id: "roque-cano-gomera",
    nombre: "Roque Cano – Vallehermoso",
    isla: "La Gomera", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 10.8,
    descripcion: "Ascenso hasta la formación basáltica que domina Vallehermoso. Vistas al norte de La Gomera y al océano Atlántico desde el roque.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/vallehermoso",
    lat: 28.16419, lng: -17.26229
  },
  {
    id: "gr132-lagomera",
    nombre: "GR 132 La Gomera – Vuelta a la Costa",
    isla: "La Gomera", tipo: "Senderismo", dificultad: "Extrema",
    duracion: "Varios días", distancia: 114.2,
    descripcion: "Gran ruta que rodea toda la isla por la costa norte. Acantilados, barrancos y pueblos remotos. Uno de los caminos más épicos de Canarias.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/san-sebastian-de-la-gomera",
    lat: 28.09143, lng: -17.11382
  },
  {
    id: "lagomera-benchijigua",
    nombre: "Benchijigua – Barranco Seco",
    isla: "La Gomera", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 12.1,
    descripcion: "Ruta por el corazón de La Gomera hasta Benchijigua, uno de los paisajes más dramáticos con roques basálticos y vegetación de medianías.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/alajeró",
    lat: 28.10904, lng: -17.21442
  },
  {
    id: "kayak-gomera",
    nombre: "Kayak – Costa Sur La Gomera",
    isla: "La Gomera", tipo: "Kayak", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 9.2,
    descripcion: "Ruta en kayak por la costa sur de La Gomera con acantilados, cuevas marinas y aguas cristalinas. Fauna marina abundante.",
    enlace: "https://adventurecapital.es",
    lat: 28.02623, lng: -17.19757
  },

  
  // ── LA GOMERA (nuevas) ───────────────────────────────────
  {
    id: "creces-garajonay-ruta5",
    nombre: "Las Creces – Circular Garajonay (Ruta 5)",
    isla: "La Gomera", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 6.2,
    descripcion: "El paraje de Las Creces por el bosque de laurisilva más pristino. Los vecinos venían a recolectar leña. Atmósfera de niebla, musgos y árboles centenarios.",
    enlace: "https://www.alltrails.com/es/spain/la-gomera",
    lat: 28.14313, lng: -17.28541
  },
  {
    id: "raso-bruma-gomera",
    nombre: "Raso de la Bruma – Circular Garajonay",
    isla: "La Gomera", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 10.0,
    descripcion: "Paseo fácil por fayal-brezal y laurisilva desde el área recreativa del Raso de la Bruma. Ideal para familias. Árboles cubiertos de musgo y helechos gigantes.",
    enlace: "https://trotandomundos.com/los-mejores-senderos-de-la-gomera/",
    lat: 28.14316, lng: -17.28543
  },
  {
    id: "canada-jorge-gomera",
    nombre: "Cañada de Jorge – Garajonay",
    isla: "La Gomera", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 4.7,
    descripcion: "Sendero corto por fayal-brezal en la vertiente sur de Garajonay. Canal histórico de agua en el fondo del barranco. Complemento perfecto al Raso de la Bruma.",
    enlace: "https://trotandomundos.com/los-mejores-senderos-de-la-gomera/",
    lat: 28.15066, lng: -17.29652
  },
  {
    id: "alajero-playa-santiago",
    nombre: "Alajeró – Playa de Santiago (Ruta 7)",
    isla: "La Gomera", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 12.3,
    descripcion: "Camino Natural de la Costa desde Alajeró hasta Playa de Santiago. Barrancos, acantilados y caseríos históricos. El sur más salvaje de La Gomera.",
    enlace: "https://trotandomundos.com/los-mejores-senderos-de-la-gomera/",
    lat: 28.06323, lng: -17.24015
  },
  {
    id: "barranco-arure-gomera",
    nombre: "Barranco de Arure – Valle Gran Rey",
    isla: "La Gomera", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 4.3,
    descripcion: "Descenso técnico por el Barranco de Arure con trepadas y saltos entre piedras. El paisaje cambia de palmeras a laurisilva húmeda. Requiere buen calzado.",
    enlace: "https://www.alltrails.com/es/spain/la-gomera/short",
    lat: 28.10624, lng: -17.32666
  },
  {
    id: "barranco-guarimiar-gomera",
    nombre: "Barranco de Guarimiar – Imada",
    isla: "La Gomera", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 9.6,
    descripcion: "Desde Imada (1.200 m) se baja al Barranco de Guarimiar entre bancales de piedra seca y laderas escarpadas, un ejemplo vivo de la arquitectura rural gomera.",
    enlace: "https://www.alltrails.com/es/spain/la-gomera",
    lat: 28.08731, lng: -17.24049
  },
  {
    id: "roque-agando-mirador",
    nombre: "Roque Agando – Mirador",
    isla: "La Gomera", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 4.5,
    descripcion: "Corto paseo hasta el mirador del Roque Agando, el monolito basáltico más famoso de La Gomera. Vistas al sur de la isla y al barranco de Santiago.",
    enlace: "https://www.alltrails.com/es/spain/la-gomera",
    lat: 28.1099, lng: -17.21422
  },
  {
    id: "circular-garajonay-18",
    nombre: "Gran Circular Garajonay (Ruta 18)",
    isla: "La Gomera", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 14.4,
    descripcion: "Circular completa por el corazón del Parque Nacional. Pajarito, Contadero, Mimbreras, Cedro, Reventón Oscuro y Tajaqué. La ruta más completa del parque.",
    enlace: "https://trotandomundos.com/los-mejores-senderos-de-la-gomera/",
    lat: 28.12163, lng: -17.21525
  },
  {
    id: "igualero-garajonay-cima",
    nombre: "Igualero – Alto de Garajonay",
    isla: "La Gomera", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 4.9,
    descripcion: "Ascenso al Alto de Garajonay desde Igualero por el GR 131 y el Camino de El Contadero. Vistas a La Palma, Tenerife y El Hierro desde la cima.",
    enlace: "https://www.alltrails.com/es/spain/la-gomera",
    lat: 28.10204, lng: -17.25127
  },
  {
    id: "vallehermoso-tamargada-gomera",
    nombre: "Vallehermoso – Tamargada – Garabato",
    isla: "La Gomera", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 10.1,
    descripcion: "Circular por los alrededores de Vallehermoso. Escaleras seminaturales talladas en roca, embalse de la Encantaderos y vegetación que invade los senderos.",
    enlace: "https://www.alltrails.com/es/spain/la-gomera",
    lat: 28.20258, lng: -17.25318
  },
  {
    id: "playa-santiago-alajero-gomera",
    nombre: "Playa de Santiago – Trekking Costa Sur",
    isla: "La Gomera", tipo: "Senderismo", dificultad: "Extrema",
    duracion: "Día completo", distancia: 23.2,
    descripcion: "Ruta costera desde Playa de Santiago hacia el este. Acantilados volcánicos, playas de arena negra y el contraste árido del sur de la isla.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/la-gomera",
    lat: 28.02864, lng: -17.19704
  },
  {
    id: "san-sebastian-garajonay-gomera",
    nombre: "San Sebastián – Garajonay (GR 132 tramo)",
    isla: "La Gomera", tipo: "Senderismo", dificultad: "Extrema",
    duracion: "Día completo", distancia: 17.6,
    descripcion: "Ascenso desde la capital San Sebastián hasta el Parque Nacional de Garajonay por caminos históricos. Aldeas, bancales y bosques en el camino a las nubes.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/san-sebastian-de-la-gomera",
    lat: 28.09115, lng: -17.11247
  },
  {
    id: "drago-milenario-gomera",
    nombre: "Drago de Agulo – Circular",
    isla: "La Gomera", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 6.8,
    descripcion: "Ruta desde Agulo por senderos entre plataneras y dragos hasta miradores con vistas al Teide. El pueblo más fotogénico de La Gomera con arquitectura única.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/agulo",
    lat: 28.18672, lng: -17.19607
  },

    {
    id: "cedro-chorro-gomera",
    nombre: "El Cedro – Chorro del Cedro",
    isla: "La Gomera", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 9.8,
    descripcion: "Circular por laurisilva en el corazón de Garajonay. El Chorro del Cedro es la única cascada permanente de La Gomera, en un entorno de bosque mágico y húmedo.",
    enlace: "https://www.alltrails.com/es/spain/la-gomera",
    lat: 28.13425, lng: -17.20211
  },
  {
    id: "chipude-valle-gran-rey",
    nombre: "Chipude – Valle Gran Rey (GR-132)",
    isla: "La Gomera", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 11.6,
    descripcion: "Desde Chipude con vistas a La Fortaleza, bajada por La Matanza y El Cercado hasta el Barranco de Argaga y las playas de Valle Gran Rey.",
    enlace: "https://www.s-cape.es/blog/la-gomera-rutas-senderismo",
    lat: 28.10966, lng: -17.28187
  },
  {
    id: "vallehermoso-hermigua-gomera",
    nombre: "Vallehermoso – Hermigua por Garajonay",
    isla: "La Gomera", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "Día completo", distancia: 18.2,
    descripcion: "Conecta dos de los pueblos más bonitos del norte atravesando el Parque Nacional de Garajonay. Desnivel de 600 m, laurisilva densa y vistas al norte de la isla.",
    enlace: "https://www.s-cape.es/blog/la-gomera-rutas-senderismo",
    lat: 28.17851, lng: -17.2657
  },
  {
    id: "las-hayas-vallehermoso-gr131",
    nombre: "Las Hayas – Vallehermoso (GR 131)",
    isla: "La Gomera", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 10.8,
    descripcion: "Tramo del GR 131 por el norte de La Gomera con bajada por escaleras naturales talladas en la roca. Vistas a la Presa de la Encantadora y al océano.",
    enlace: "https://es.wikiloc.com/rutas-senderismo/la-gomera-gr-131-las-hayas-vallehermoso-21492518",
    lat: 28.12927, lng: -17.29274
  },

    // ╔══════════════════════════════════════════════╗
  // ║              EL HIERRO (10 rutas)            ║
  // ╚══════════════════════════════════════════════╝

  {
    id: "camino-jinama",
    nombre: "Camino de Jinama",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 13.2,
    descripcion: "Camino histórico de las mudadas estacionales entre El Golfo y la cumbre de El Hierro: unos 1.000 m de desnivel en los 4 km del tramo empinado, dentro de una circular más larga por el Mirador de Jinama. Vista espectacular sobre el ",
    enlace: "https://www.spain.info/es/descubrir-espana/canarias-rutas-senderismo/",
    lat: 27.75498, lng: -18.00195
  },
  {
    id: "gr131-hierro",
    nombre: "GR 131 El Hierro – Travesía",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Extrema",
    duracion: "Varios días", distancia: 36.2,
    descripcion: "Travesía que cruza la isla más pequeña y sostenible de Canarias. Bosques de sabinas milenarias, volcanes y costa salvaje impresionante.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/valverde",
    lat: 27.82508, lng: -17.89612
  },
  {
    id: "malpaso-cumbre",
    nombre: "Malpaso – Cima de El Hierro",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 12.0,
    descripcion: "Ascenso al punto más alto de El Hierro (1.501 m). Bosques de pino canario y sabinas milenarias. Vistas a La Palma y La Gomera.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/el-hierro",
    lat: 27.71488, lng: -17.99633
  },
  {
    id: "camino-virgen-hierro",
    nombre: "Camino de La Virgen de Los Reyes",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Extrema",
    duracion: "Día completo", distancia: 27.1,
    descripcion: "Ruta de peregrinación histórica hasta la ermita de La Virgen de Los Reyes. Bosques de sabinas y laurisilva en entorno totalmente protegido.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/el-hierro",
    lat: 27.72998, lng: -18.12089
  },
  {
    id: "buceo-restinga",
    nombre: "Buceo – Reserva Marina La Restinga",
    isla: "El Hierro", tipo: "Submarinismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 0,
    descripcion: "Uno de los mejores puntos de buceo de Europa, en la Reserva Marina del Mar de Las Calmas. Visibilidad que a menudo supera los 30 m, tortugas, meros y fondos volcánicos con cuevas y arcos.",
    enlace: "https://adventurecapital.es",
    lat: 27.6411, lng: -17.9867
  },
  {
    id: "roque-bonanza-hierro",
    nombre: "Roque de La Bonanza – Frontera",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 10.5,
    descripcion: "Bajada desde el Mirador de Las Playas por el Camino de Isora hasta el Parador y el Roque de la Bonanza, el peñasco de 200 m que emerge del mar en la costa este de El Hierro.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/el-hierro",
    lat: 27.73099, lng: -17.97322
  },
  {
    id: "charco-manso-hierro",
    nombre: "Charco Manso – Costa Norte",
    isla: "El Hierro", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "Ruta costera hasta la piscina natural de Charco Manso en el extremo norte. Acceso por sendero entre malpaíses. Baño en aguas cristalinas.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/el-hierro",
    lat: 27.8481700, lng: -17.9232800
  },
  {
    id: "sabinosa-hierro",
    nombre: "Sabinosa – Bosque de Sabinas Milenarias",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 13.7,
    descripcion: "Sendero entre sabinas milenarias retorcidas por el viento, uno de los árboles más longevos de Canarias. Paisaje mágico y único en el mundo.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/el-hierro",
    lat: 27.74776, lng: -18.0983
  },

  
  // ── EL HIERRO (nuevas) ───────────────────────────────────
  {
    id: "llania-elhierro",
    nombre: "La Llanía – Circular por la Hoya de Fileba",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 5.7,
    descripcion: "Ruta naranja del sendero circular de La Llanía, en la cumbre de El Hierro: bosque de fayal-brezal y laurisilva, el cráter de la Hoya de Fileba y los miradores sobre el valle de El Golfo.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/el-hierro",
    lat: 27.73621, lng: -17.99679
  },
  {
    id: "punta-naos-hierro",
    nombre: "Punta Naos – Costa Sureste",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 10.1,
    descripcion: "Ruta costera por la Reserva Marina del Mar de Las Calmas hasta Punta Naos, en el sur de El Hierro. Piscinas naturales, acantilados volcánicos y una de las aguas con mejor visibilidad del Atlántico.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/el-hierro",
    lat: 27.64035, lng: -17.98251
  },
  {
    id: "tinor-circular-hierro",
    nombre: "Tiñor – Circular por Los Alisios",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 9.8,
    descripcion: "Circular por el bosque de Los Alisios desde Tiñor. Laurisilva húmeda y bosque de hayas con los garoeos, árboles que capturan agua de las nubes.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/valverde",
    lat: 27.78951, lng: -17.93382
  },
  {
    id: "pozo-calcosas-hierro",
    nombre: "Pozo de las Calcosas – Circular desde El Mocanal",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 6.6,
    descripcion: "Bajada desde El Mocanal hasta el mirador sobre el caserío del Pozo de las Calcosas, en la costa norte de El Hierro. Casas de piedra con techo de paja, piscinas naturales y acantilados sobre el Atlántico.",
    enlace: "https://www.wikiloc.com/hiking-trails/mocanal-mirador-del-pozo-de-las-calcosas-el-hierro-77347251",
    lat: 27.82172, lng: -17.94357
  },
  {
    id: "valverde-mercado-hierro",
    nombre: "Valverde – Mirador de La Peña",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 11.8,
    descripcion: "Paseo desde Valverde al famoso Mirador de La Peña diseñado por César Manrique. Vistas aéreas al El Golfo y a toda la bahía desde 700 m de altura.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/valverde",
    lat: 27.80756, lng: -17.91563
  },
  {
    id: "roques-salmor-hierro",
    nombre: "Roques de Salmor – Costa Norte",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 3.2,
    descripcion: "Senda litoral de Las Puntas, en Frontera, con los Roques de Salmor enfrente: los islotes donde sobrevive el lagarto gigante de El Hierro. No se puede desembarcar en ellos, pero se ven de cerca.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/el-hierro",
    lat: 27.79699, lng: -17.99127
  },
  
  {
    id: "ermita-reyes-hierro",
    nombre: "Ermita de Nuestra Señora de Los Reyes",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 8.4,
    descripcion: "Sendero de peregrinación hasta la ermita de la patrona de El Hierro. Bosque de sabinas y el silencio absoluto del extremo occidental de España.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/el-hierro",
    lat: 27.73019, lng: -18.12108
  },
  {
    id: "faro-orchilla-hierro",
    nombre: "Faro de Orchilla – Meridiano 0",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 3.9,
    descripcion: "Ruta hasta el Faro de Orchilla, en el punto más occidental de España. Aquí estuvo el Meridiano 0 del mundo hasta 1884, cuando se trasladó a Greenwich. Paisaje desértico y viento constante.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/el-hierro",
    lat: 27.71195, lng: -18.1417
  },
  {
    id: "tanajara-ruta-hierro",
    nombre: "Tanajara – Ruta del Lagarto Gigante",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 1.4,
    descripcion: "Sendero por la zona de cría del lagarto gigante de El Hierro, especie endémica recuperada del borde de la extinción. Acantilados y costa norte salvaje.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/el-hierro",
    lat: 27.77439, lng: -17.99896
  },
  {
    id: "bajada-jinama-golfo",
    nombre: "Bajada de Jinama – El Golfo",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 8.8,
    descripcion: "Descenso inverso del Camino de Jinama desde Las Playas hasta El Golfo. Paisaje que cambia de costa sur árida a El Golfo verde y fértil.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/el-hierro",
    lat: 27.75489, lng: -18.00208
  },
  {
    id: "ecoturismo-hierro-completo",
    nombre: "GR 131 El Hierro – Tramo Sur",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 17.6,
    descripcion: "Tramo sur del GR 131 desde La Restinga hasta El Pinar. Reserva Marina, bosques de pino canario y las cotas más altas del sur en un solo recorrido.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/el-hierro",
    lat: 27.72694, lng: -18.02517
  },
  {
    id: "isora-las-playas-hierro",
    nombre: "Isora – Las Playas (PR-EH 3)",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 7.8,
    descripcion: "Bajada por el PR-EH 3 desde Isora hasta Las Playas, en la costa este de El Hierro, con el mirador sobre el Mar de Las Calmas, el Roque de la Bonanza y el Parador al fondo.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/el-hierro",
    lat: 27.71346, lng: -17.97501
  },

    {
    id: "camino-golfo-tigaday-hierro",
    nombre: "Tigaday – Camino del Golfo",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 12.4,
    descripcion: "Subida desde Tigaday, en Frontera, por el Camino del Golfo hasta la cumbre, junto a La Llanía. Antiguo camino empedrado que une el valle de El Golfo con la meseta, entre plataneras, viñedos y laurisilva.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/el-hierro",
    lat: 27.75217, lng: -18.01317
  },
  {
    id: "punta-orchilla-hierro",
    nombre: "Punta Orchilla – Antiguo Meridiano 0",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 2.9,
    descripcion: "Sendero hasta la Punta de Orchilla, el extremo más occidental de España. Fue el meridiano de referencia del mundo hasta 1884. Costa salvaje de lava y mar abierto.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/el-hierro",
    lat: 27.71231, lng: -18.14203
  },
  {
    id: "pozo-salud-frontera",
    nombre: "Pozo de la Salud – Costa de Frontera",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 12.5,
    descripcion: "Ruta por la costa de El Golfo hasta el Pozo de la Salud, manantial con propiedades medicinales. Paisaje volcánico de plataformas de lava y charcos naturales.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/el-hierro",
    lat: 27.75639, lng: -18.10458
  },
  {
    id: "litoral-laspuntas-maceta-hierro",
    nombre: "Sendero Litoral de Las Puntas – La Maceta",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 5.2,
    descripcion: "Paseo litoral por la costa de El Golfo, de Las Puntas a la piscina natural de La Maceta. Pasarela de madera, charcos marinos, antiguos lavaderos y miradores con paneles sobre la flora y la fauna de la isla.",
    enlace: "https://www.wikiloc.com/hiking-trails/charco-de-la-maceta-sendero-litoral-de-las-puntas-el-charco-azul-y-el-pozo-de-la-salud-isla-de-el-h-87390562",
    lat: 27.78654, lng: -18.00818
  },
  {
    id: "mirador-bascos-hierro",
    nombre: "Mirador de Bascos – El Golfo",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 14.7,
    descripcion: "Circular por La Dehesa que enlaza el Camino del Cres, el Mirador de Bascos y el Sabinar, con la mejor vista aérea sobre el valle de El Golfo y las sabinas retorcidas por el viento.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/el-hierro",
    lat: 27.73018, lng: -18.12105
  },
  {
    id: "el-pinar-hierro",
    nombre: "El Pinar – Circular por el Bosque",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "Día completo", distancia: 16.9,
    descripcion: "Circular por el bosque de pinos centenarios de El Pinar en el sur de El Hierro. La mayor masa forestal de la isla con gran variedad de flora endémica.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/el-hierro",
    lat: 27.74771, lng: -18.09804
  },
  {
    id: "arenas-blancas-hierro",
    nombre: "Playa de Arenas Blancas – Costa Oeste",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 5.2,
    descripcion: "Bajada a la playa de Arenas Blancas, en la costa oeste de El Hierro, bajo el Sabinar. Arena clara de origen volcánico, acantilados y mar abierto, sin un alma alrededor.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/el-hierro",
    lat: 27.76829, lng: -18.12294
  },
  {
    id: "ruta-agua-garoe-hierro",
    nombre: "Ruta del Agua – Árbol Garoé",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 13.0,
    descripcion: "Sendero hasta el Árbol Garoé, el laurel que según la tradición bimbache abastecía de agua a la isla recogiendo la niebla. Recorre la zona de Los Dornajos y las charcas de la cumbre.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/el-hierro",
    lat: 27.7782, lng: -17.9555
  },

    // ╔══════════════════════════════════════════════╗
  // ║           LA GRACIOSA (10 rutas)             ║
  // ╚══════════════════════════════════════════════╝

  {
    id: "ruta-sur-graciosa",
    nombre: "Ruta Sur – Caleta de Sebo – Montaña Amarilla",
    isla: "La Graciosa", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 10.3,
    descripcion: "La ruta más popular de la isla. Bordea la costa sur desde Caleta de Sebo por Playa del Salado, Playa Francesa y Playa de la Cocina hasta Montaña Amarilla. Solo hay que seguir la costa.",
    enlace: "https://www.visitlagraciosa.com/rutas-senderismo-la-graciosa/",
    lat: 29.23015, lng: -13.50287
  },
  {
    id: "montana-amarilla-cima",
    nombre: "Montaña Amarilla – Subida a la Cima",
    isla: "La Graciosa", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 9.2,
    descripcion: "Subida corta pero exigente a la cima de Montaña Amarilla. Vistas aéreas de la Playa de la Cocina, el Atlántico y los charcos naturales para snorkel.",
    enlace: "https://www.alltrails.com/es/spain/la-graciosa",
    lat: 29.23058, lng: -13.50507
  },
  {
    id: "ruta-norte-conchas-bermeja",
    nombre: "Ruta Norte – Playa Las Conchas – Montaña Bermeja",
    isla: "La Graciosa", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 12.7,
    descripcion: "La ruta más completa. Desde Caleta de Sebo por Agujas Grandes hasta Playa Las Conchas y Montaña Bermeja (157 m). Vistas a Montaña Clara y todo el Archipiélago Chinijo.",
    enlace: "https://lanzarote3.com/senderismo-en-la-graciosa-mejores-rutas/",
    lat: 29.2318, lng: -13.50496
  },
  {
    id: "sebo-pedro-barba",
    nombre: "Caleta de Sebo – Pedro Barba",
    isla: "La Graciosa", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 18.5,
    descripcion: "Sendero costero entre los dos únicos pueblos de La Graciosa. Camino bien señalizado con postes numerados. Vistas al Risco de Famara y El Bufadero.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/caleta-de-sebo",
    lat: 29.23006, lng: -13.50274
  },
  {
    id: "punta-del-pobre-graciosa",
    nombre: "Ruta Este – Punta del Pobre",
    isla: "La Graciosa", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 14.1,
    descripcion: "Travesía hasta la Punta del Pobre por la costa este. Vistas a Montaña Clara, Roque del Oeste y Alegranza. Bordea el lado oeste de Lanzarote con Famara al fondo.",
    enlace: "https://lanzarote3.com/senderismo-en-la-graciosa-mejores-rutas/",
    lat: 29.2301, lng: -13.50266
  },
  {
    id: "barranco-conejos-graciosa",
    nombre: "Caleta de Sebo – Barranco de los Conejos",
    isla: "La Graciosa", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 9.1,
    descripcion: "Ruta poco conocida hacia la costa este por paisaje volcánico árido hasta una pequeña y solitaria cala. Ideal para desconectar y escapar de los senderos más transitados.",
    enlace: "https://guiaislascanarias.com/la-graciosa/rutas-senderismo-bici-la-graciosa/",
    lat: 29.23068, lng: -13.50367
  },
  {
    id: "vuelta-integral-graciosa",
    nombre: "Vuelta Integral a La Graciosa",
    isla: "La Graciosa", tipo: "Senderismo", dificultad: "Extrema",
    duracion: "Día completo", distancia: 29.1,
    descripcion: "La vuelta completa a toda la isla en un día: Majapalomas, Montaña Bermeja, Playa Las Conchas, Playa del Ámbar. Para senderistas experimentados con buen ritmo. Sin sombra ni agua.",
    enlace: "https://es.wikiloc.com/rutas-senderismo/integral-de-la-isla-la-graciosa-159757456",
    lat: 29.23246, lng: -13.50254
  },
  {
    id: "montana-bermeja-cima",
    nombre: "Montaña Bermeja – Cima Norte",
    isla: "La Graciosa", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 18.8,
    descripcion: "Ascenso a la Montaña Bermeja (157 m) en el norte de la isla. Vistas espectaculares a Montaña Clara, Alegranza, Playa Las Conchas y toda La Graciosa.",
    enlace: "https://www.alltrails.com/es/spain/la-graciosa",
    lat: 29.232, lng: -13.50425
  },
  {
    id: "snorkel-montana-amarilla",
    nombre: "Snorkel – Charcos de Montaña Amarilla",
    isla: "La Graciosa", tipo: "Submarinismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 4.0,
    descripcion: "Los charcos naturales detrás de Montaña Amarilla son los mejores de La Graciosa para snorkel. Aguas turquesas cristalinas con gran variedad de peces y fondos volcánicos.",
    enlace: "https://welikecanarias.com/senderismo-la-graciosa/",
    lat: 29.2147, lng: -13.4808
  },
  {
    id: "circular-norte-graciosa",
    nombre: "Circular Norte – Sebo, Bermeja, Conchas, Pedro Barba",
    isla: "La Graciosa", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 18.7,
    descripcion: "Circular por el norte: Caleta de Sebo, Montaña Bermeja, Playa Las Conchas y Pedro Barba. La mejor opción para conocer la mitad norte de la isla en una jornada.",
    enlace: "https://www.alltrails.com/es/spain/la-graciosa",
    lat: 29.23002, lng: -13.50277
  },

    {
    id: "playa-francesa-graciosa",
    nombre: "Playa Francesa – Graciosa",
    isla: "La Graciosa", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 6.0,
    descripcion: "Sendero en bicicleta o a pie hasta la Playa Francesa, la más cercana a Caleta de Sebo. Aguas turquesas protegidas y arena dorada sin masificación turística.",
    enlace: "https://www.alltrails.com/es/spain/la-graciosa",
    lat: 29.23038, lng: -13.5034
  },
  {
    id: "agujas-graciosa",
    nombre: "Las Agujas Grandes – Norte Salvaje",
    isla: "La Graciosa", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "Día completo", distancia: 24.7,
    descripcion: "Ruta hasta Las Agujas Grandes en el norte de La Graciosa. Formaciones volcánicas espectaculares y las vistas más salvajes de todo el Archipiélago Chinijo.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/la-graciosa",
    lat: 29.22977, lng: -13.50252
  },
  {
    id: "salinas-rio-lanzarote",
    nombre: "Salinas del Río – Historia Salinera",
    isla: "Lanzarote", tipo: "Fotografía", dificultad: "Media",
    duracion: "2-4h", distancia: 0,
    descripcion: "Las salinas más antiguas de Canarias, al pie del Risco de Famara y frente a La Graciosa: balsas de piedra todavía dibujadas en la orilla del Río, con el islote justo enfrente.",
    lat: 29.2185000, lng: -13.4927500
  },
  {
    id: "bufadero-graciosa",
    nombre: "El Bufadero – Costa Este",
    isla: "La Graciosa", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 4.0,
    descripcion: "Ruta costera por la costa este de La Graciosa hasta el Bufadero, formación volcánica donde el mar entra y expulsa agua con fuerza. Vistas a Lanzarote.",
    enlace: "https://www.alltrails.com/es/spain/la-graciosa",
    lat: 29.23, lng: -13.485
  },
  {
    id: "bici-graciosa",
    nombre: "Vuelta en Bici a La Graciosa",
    isla: "La Graciosa", tipo: "Ciclismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 27.8,
    descripcion: "La forma más popular de explorar La Graciosa. Caminos de arena y tierra entre playas, volcanes y paisajes únicos. Bicicletas de alquiler en Caleta de Sebo.",
    enlace: "https://guiaislascanarias.com/la-graciosa/rutas-senderismo-bici-la-graciosa/",
    lat: 29.23139, lng: -13.50218
  },

    // ╔══════════════════════════════════════════════╗
  // ║            ISLA DE LOBOS (8 rutas)           ║
  // ╚══════════════════════════════════════════════╝

  {
    id: "circular-lobos",
    nombre: "Ruta Circular Completa – Isla de Lobos",
    isla: "Isla de Lobos", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 11.5,
    descripcion: "La vuelta completa por el Parque Natural: El Puertito, La Caldera, Faro Martiño y Playa de La Concha. Requiere permiso gratuito online (máx. 200 personas/día).",
    enlace: "https://guiaislascanarias.com/fuerteventura/rutas-senderos-fuerteventura/",
    lat: 28.73691, lng: -13.82228
  },
  {
    id: "caldera-lobos",
    nombre: "La Caldera – Subida al Volcán",
    isla: "Isla de Lobos", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 11.1,
    descripcion: "Ascenso breve al volcán de La Caldera (127 m). Vistas panorámicas a Fuerteventura, Lanzarote y el Canal de La Bocaina. El punto más alto del islote.",
    enlace: "https://www.alltrails.com/es/spain/fuerteventura",
    lat: 28.73743, lng: -13.82189
  },
  {
    id: "snorkel-puertito-lobos",
    nombre: "Snorkel – El Puertito de Lobos",
    isla: "Isla de Lobos", tipo: "Submarinismo", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "Las mejores lagunas naturales del archipiélago para snorkel. Aguas turquesas protegidas del viento con gran variedad de peces tropicales y fondos volcánicos.",
    enlace: "https://www.islalobos.es",
    lat: 28.7489, lng: -13.8203
  },
  {
    id: "faro-martino-lobos",
    nombre: "Faro de Punta Martiño",
    isla: "Isla de Lobos", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 7.8,
    descripcion: "Ruta costera hasta el faro del siglo XIX en el extremo norte del islote. Entorno solitario con aves marinas, paisaje volcánico y vistas a Lanzarote.",
    enlace: "https://www.islalobos.es",
    lat: 28.7373, lng: -13.82205
  },
  {
    id: "playa-concha-lobos",
    nombre: "Playa de La Concha – Lobos",
    isla: "Isla de Lobos", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0.7,
    descripcion: "La playa más tranquila del islote. Arena volcánica fina y aguas cristalinas en el interior de la bahía protegida. Ideal para el baño y el descanso.",
    enlace: "https://www.alltrails.com/es/spain/fuerteventura",
    lat: 28.74216, lng: -13.82647
  },
  {
    id: "salinas-lobos",
    nombre: "Antiguas Salinas de Lobos",
    isla: "Isla de Lobos", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 2.0,
    descripcion: "Paseo hasta las antiguas salinas abandonadas del islote. Historia de la explotación salinera y aves zancudas que frecuentan las balsas en invierno.",
    enlace: "https://www.islalobos.es",
    lat: 28.7430900, lng: -13.8257400
  },
  {
    id: "north-coast-lobos",
    nombre: "Costa Norte – Lobos",
    isla: "Isla de Lobos", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 5.1,
    descripcion: "Sendero por la costa norte del islote con vistas a Lanzarote. Coladas de lava negra, pequeñas calas y la soledad de uno de los rincones más salvajes del archipiélago.",
    enlace: "https://guiaislascanarias.com/fuerteventura/rutas-senderos-fuerteventura/",
    lat: 28.76478, lng: -13.81556
  },
  {
    id: "birdwatching-lobos",
    nombre: "Observación de Aves – Lobos",
    isla: "Isla de Lobos", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 0,
    descripcion: "Lobos alberga pardelas, gaviotas de Audouin y otras aves marinas protegidas. La mejor época es primavera en plena nidificación. Llevar prismáticos.",
    enlace: "https://www.islalobos.es",
    lat: 28.7479400, lng: -13.8159500
  },


  {
    id: "costa-este-lobos",
    nombre: "Costa Este – Isla de Lobos",
    isla: "Isla de Lobos", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 5.8,
    descripcion: "Sendero por la costa este del islote con vistas a Lanzarote. Coladas de lava negra, pequeñas calas y la soledad de uno de los rincones más salvajes del archipiélago.",
    enlace: "https://www.islalobos.es",
    lat: 28.73686, lng: -13.82224
  },
  {
    id: "amanecer-lobos",
    nombre: "Amanecer en el Faro – Lobos",
    isla: "Isla de Lobos", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 3.7,
    descripcion: "Ruta nocturna para ver el amanecer desde el Faro de Punta Martiño. El cielo sin contaminación lumínica de Lobos permite ver la Vía Láctea hasta el alba.",
    enlace: "https://www.islalobos.es",
    lat: 28.7648900, lng: -13.8148600
  },
  {
    id: "cuevas-volcanicas-lobos",
    nombre: "Cuevas Volcánicas – Lobos",
    isla: "Isla de Lobos", tipo: "Espeleología", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 2.0,
    descripcion: "Exploración de pequeñas cuevas y tubos volcánicos en el interior del islote. Formaciones de lava solidificada únicas con fauna rupícola protegida.",
    enlace: "https://guiaislascanarias.com/fuerteventura/rutas-senderos-fuerteventura/",
    lat: 28.7519, lng: -13.8183
  },
  {
    id: "kayak-lobos",
    nombre: "Kayak – Vuelta a Isla de Lobos",
    isla: "Isla de Lobos", tipo: "Kayak", dificultad: "Media",
    duracion: "4-8 horas", distancia: 12.0,
    descripcion: "Vuelta completa al islote en kayak desde Corralejo. Fondos cristalinos, cuevas marinas y la impresionante perspectiva de Lobos desde el agua.",
    enlace: "https://profuerte.com",
    lat: 28.7506, lng: -13.8167
  },
  {
    id: "pesca-tradicional-lobos",
    nombre: "Ruta Historia – Puerto de Lobos",
    isla: "Isla de Lobos", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 10.4,
    descripcion: "Paseo por el pequeño puerto y las antiguas chozas de pescadores restauradas. Historia de los lobos de mar (focas monje) que dieron nombre al islote.",
    enlace: "https://www.islalobos.es",
    lat: 28.7368, lng: -13.82236
  },
  {
    id: "snorkel-concha-lobos",
    nombre: "Snorkel – Playa de La Concha",
    isla: "Isla de Lobos", tipo: "Submarinismo", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "La bahía protegida de La Concha es perfecta para el snorkel con niños. Aguas poco profundas, arena blanca y gran variedad de peces en un entorno paradisíaco.",
    enlace: "https://www.islalobos.es",
    lat: 28.7527, lng: -13.824
  },
  {
    id: "buceo-cabron-gc",
    nombre: "Buceo – Reserva de El Cabrón",
    isla: "Gran Canaria", tipo: "Submarinismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 0,
    descripcion: "La reserva marina más concurrida de Gran Canaria, en Arinaga. Caída de hasta 23 metros con alta concentración de especies, apta también para snorkel.",
    lat: 27.87394, lng: -15.38226
  },
  {
    id: "buceo-canteras-gc",
    nombre: "Buceo – Playa de Las Canteras",
    isla: "Gran Canaria", tipo: "Submarinismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 0,
    descripcion: "Uno de los puntos de buceo más accesibles de Canarias, junto a La Puntilla. Fondo de hasta 10 metros con arrecifes, praderas de algas y viejas multicolores. Ideal para bautizos.",
    lat: 28.14875, lng: -15.43274
  },
  {
    id: "buceo-catedral-gc",
    nombre: "Buceo – La Catedral",
    isla: "Gran Canaria", tipo: "Submarinismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 0,
    descripcion: "Una gran cueva submarina abovedada frente a La Isleta, con juegos de luces y sombras entre pasillos rocosos. Requiere experiencia previa; profundidad de hasta 40 metros.",
    lat: 27.8657, lng: -15.383
  },
  {
    id: "buceo-charco-verde-lapalma",
    nombre: "Buceo y Snorkel – Charco Verde",
    isla: "La Palma", tipo: "Snorkel", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "Cala protegida de arena negra con Bandera Azul, ideal para snorkel en familia. Junto a la reserva marina, con arcos y cuevas accesibles para todos los niveles.",
    lat: 28.57243, lng: -17.8993
  },
  {
    id: "buceo-puertito-adeje",
    nombre: "Snorkel – El Puertito de Adeje",
    isla: "Tenerife", tipo: "Snorkel", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 0,
    descripcion: "Microreserva marina con tortugas verdes en libertad y más de 50 especies. Caleta de arena negra ideal para snorkel y bautizos de buceo.",
    lat: 28.1124, lng: -16.76799
  },
  {
    id: "buceo-puerto-naos-lapalma",
    nombre: "Buceo y Snorkel – Puerto Naos",
    isla: "La Palma", tipo: "Submarinismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 0,
    descripcion: "La zona de buceo más completa de La Palma, con inmersiones desde la orilla hasta los 40 m. Coral negro, mantas y formaciones volcánicas en Playa Chica y Arco Verde.",
    lat: 28.58442, lng: -17.90967
  },
  {
    id: "buceo-radazul-tenerife",
    nombre: "Buceo – Radazul",
    isla: "Tenerife", tipo: "Submarinismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 0,
    descripcion: "Uno de los fondos marinos más limpios de Tenerife, ideal para iniciarse en el buceo. Aguas tranquilas de arena negra en el municipio de El Rosario.",
    lat: 28.40149, lng: -16.32136
  },
  {
    id: "buceo-sardina-del-norte-gc",
    nombre: "Buceo – Sardina del Norte",
    isla: "Gran Canaria", tipo: "Submarinismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 0,
    descripcion: "Una de las zonas de buceo más populares del norte de Gran Canaria, con fondos rocosos y gran variedad de vida marina en aguas tranquilas.",
    lat: 28.15128, lng: -15.69511
  },
  {
    id: "cenobio-valeron-gc",
    nombre: "Cenobio de Valerón",
    isla: "Gran Canaria", tipo: "Espeleología", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "Granero colectivo aborigen con más de 300 oquedades excavadas en la roca hace más de 800 años, en un escarpe sobre un profundo barranco. Circuito guiado con paneles y recreaciones.",
    lat: 28.13871, lng: -15.60378
  },
  {
    id: "ciclismo-anaga-picoingles",
    nombre: "La Laguna – Anaga vía Pico del Inglés",
    isla: "Tenerife", tipo: "Ciclismo", dificultad: "Fácil",
    duracion: "1-2 horas", distancia: 11.0,
    descripcion: "Bucle corto que parte de San Cristóbal de La Laguna y se adentra en el Parque Rural de Anaga pasando por el Pico del Inglés. Con solo 11 km y un desnivel moderado, es una introducción perfecta al ciclismo de montaña en Anaga.",
    lat: 28.53732, lng: -16.26844
  },
  {
    id: "ciclismo-corralejo-costacalma",
    nombre: "Corralejo – Costa Calma (Norte-Sur)",
    isla: "Fuerteventura", tipo: "Ciclismo", dificultad: "Extrema",
    duracion: "Más de 4h", distancia: 102.7,
    descripcion: "Travesía completa de norte a sur de Fuerteventura, entre Corralejo y Costa Calma. Con 103 km reales y viento alisio constante, es una de las travesías más largas y exigentes del archipiélago en cuanto a resistencia.",
    lat: 28.70725, lng: -13.84366
  },
  {
    id: "ciclismo-garachico-masca",
    nombre: "Garachico – Erjos – Masca",
    isla: "Tenerife", tipo: "Ciclismo", dificultad: "Extrema",
    duracion: "Más de 4h", distancia: 79.3,
    descripcion: "Ruta muy exigente de 79 km que conecta Garachico con el entorno de Masca pasando por el Puerto de Erjos. Con más de 3.100 m de desnivel acumulado, es una de las rutas más duras de Tenerife en distancia moderada.",
    lat: 28.37322, lng: -16.76459
  },
  {
    id: "ciclismo-maspalomas-ayaguares",
    nombre: "Maspalomas – Presa de la Gambuesa – Ayaguares",
    isla: "Gran Canaria", tipo: "Ciclismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 37.6,
    descripcion: "Una de las rutas cicloturistas más populares de Gran Canaria. Recorrido de 38 km por el Parque Natural de Pilancones, con terreno variado que combina zonas llanas con ascensos suaves.",
    lat: 27.76538, lng: -15.57835
  },
  {
    id: "ciclismo-miradorrio-haria",
    nombre: "Mirador del Río – Ascenso a Haría",
    isla: "Lanzarote", tipo: "Ciclismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 30.2,
    descripcion: "Pasa por el Mirador del Río, con vistas al Archipiélago Chinijo, e incluye el ascenso a Haría, conocido como el Valle de las Mil Palmeras. Este tramo forma parte del recorrido del Ironman Lanzarote.",
    lat: 29.14712, lng: -13.49891
  },
  {
    id: "ciclismo-mtb-lapalma",
    nombre: "Vuelta a La Palma en BTT/Gravel",
    isla: "La Palma", tipo: "Ciclismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 34.1,
    descripcion: "Recorrido en bicicleta de montaña o gravel por las pistas forestales y volcánicas de La Palma, alternando senderos entre pinares con tramos de carretera secundaria sin apenas tráfico.",
    lat: 28.6141, lng: -17.83594
  },
  {
    id: "ciclismo-piconieves-gc",
    nombre: "Subida al Pico de las Nieves",
    isla: "Gran Canaria", tipo: "Ciclismo", dificultad: "Difícil",
    duracion: "Más de 4h", distancia: 56.8,
    descripcion: "El gran clásico de subida de Gran Canaria, referencia de entrenamiento para ciclistas profesionales en pretemporada. Asciende hasta el punto más alto de la isla (1.949 m).",
    lat: 28.12732, lng: -15.45444
  },
  {
    id: "ciclismo-sur-tenerife",
    nombre: "Carretera del Sur (Costa Adeje–Los Cristianos–El Médano)",
    isla: "Tenerife", tipo: "Ciclismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 45.2,
    descripcion: "Recorrido de 45 km por el sur de Tenerife desde Costa Adeje hasta la zona de Granadilla, combinando tramos llanos junto a la costa con suaves ascensos hacia el interior.",
    lat: 28.07624, lng: -16.72905
  },
  {
    id: "ciclismo-teide-costaadeje",
    nombre: "Subida al Teide desde Costa Adeje",
    isla: "Tenerife", tipo: "Ciclismo", dificultad: "Extrema",
    duracion: "Más de 4h", distancia: 106.1,
    descripcion: "El gran clásico del ciclismo de carretera en Canarias, usado por equipos profesionales en pretemporada invernal. Ascenso desde el nivel del mar hasta el Parque Nacional del Teide.",
    lat: 28.07954, lng: -16.73127
  },
  {
    id: "ciclismo-timanfaya-lanzarote",
    nombre: "Ruta Timanfaya y Montañas del Fuego",
    isla: "Lanzarote", tipo: "Ciclismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 46.0,
    descripcion: "Ruta imprescindible para explorar el corazón volcánico de Lanzarote, a través de campos de lava y las vistas lunares del Parque Nacional de Timanfaya.",
    lat: 29.00123, lng: -13.61416
  },
  {
    id: "ciclismo-travesia-lanzarote",
    nombre: "Travesía Norte-Sur de Lanzarote",
    isla: "Lanzarote", tipo: "Ciclismo", dificultad: "Extrema",
    duracion: "Más de 4h", distancia: 117.3,
    descripcion: "Cruza la isla de sur a norte, desde Playa Blanca hasta Órzola y vuelta. Atraviesa prácticamente todos los paisajes de Lanzarote: campos de lava, viñedos de La Geria y costa volcánica.",
    lat: 28.92751, lng: -13.64179
  },
  {
    id: "ciclismo-vuelta-gomera",
    nombre: "Ciclismo – Vuelta a La Gomera",
    isla: "La Gomera", tipo: "Ciclismo", dificultad: "Fácil",
    duracion: "Día completo", distancia: 0,
    descripcion: "Vuelta completa a la isla en bicicleta de carretera, unos 110 km de carreteras tranquilas y con poco tráfico entre paisajes espectaculares. Exige buena forma física por el desnivel acumulado del recorrido circular.",
    lat: 28.0916, lng: -17.1133
  },
  {
    id: "ciclismo-vueltaisla-gc",
    nombre: "Vuelta a Gran Canaria",
    isla: "Gran Canaria", tipo: "Ciclismo", dificultad: "Extrema",
    duracion: "Más de 4h", distancia: 182.6,
    descripcion: "La gran vuelta completa a la isla, recorriendo Puerto de Mogán, La Aldea de San Nicolás, Agaete, Las Palmas de Gran Canaria y el sureste, por las carreteras GC-1, GC-500, GC-200 y GC-2.",
    lat: 28.13427, lng: -15.43717
  },
  {
    id: "cueva-belmaco-lapalma",
    nombre: "Cueva de Belmaco",
    isla: "La Palma", tipo: "Espeleología", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "El primer yacimiento con petroglifos descubierto en todo el archipiélago canario, ya en el siglo XVIII. Diez cuevas naturales con grabados rupestres benahoaritas, declarado Monumento Histórico Artístico, con centro de interpretaci",
    lat: 28.57822, lng: -17.77621
  },
  {
    id: "cueva-guanches-icod",
    nombre: "Cueva de los Guanches",
    isla: "Tenerife", tipo: "Espeleología", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "Tubo volcánico en Icod de los Vinos con las dataciones más antiguas de poblamiento humano de Canarias (siglo VI a.C.). Bien de Interés Cultural desde 2005, con restos de cabañas de piedra seca en las inmediaciones.",
    lat: 28.3697, lng: -16.7183
  },
  {
    id: "cueva-viento-icod",
    nombre: "Cueva del Viento",
    isla: "Tenerife", tipo: "Espeleología", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 0,
    descripcion: "Uno de los tubos volcánicos más largos del mundo (más de 18 km explorados), en las faldas del Teide sobre Icod de los Vinos. Visita guiada de pago con reserva previa (máximo 120 visitantes al día), con recorrido por galerías y exp",
    lat: 28.35201, lng: -16.70397
  },
  {
    id: "cuevas-pintadas-galdar",
    nombre: "Cuevas Pintadas de Gáldar",
    isla: "Gran Canaria", tipo: "Espeleología", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "Uno de los yacimientos arqueológicos más importantes de Canarias. Cueva artificial con pinturas geométricas guanches originales, protegidas bajo una cúpula de cristal. Acceso por pasarela, apto para todos.",
    lat: 28.14414, lng: -15.65517
  },
  {
    id: "fortaleza-chipude-gomera",
    nombre: "Fortaleza de Chipude",
    isla: "La Gomera", tipo: "Espeleología", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 0,
    descripcion: "Símbolo de la resistencia de los aborígenes gomeros frente a la conquista castellana. Yacimiento de altura con aras de sacrificio que aún se conservan, considerado uno de los lugares de culto más citados de la isla.",
    lat: 28.09992, lng: -17.27713
  },
  {
    id: "grabados-eljulan-hierro",
    nombre: "Grabados Rupestres de El Julan",
    isla: "El Hierro", tipo: "Espeleología", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 0,
    descripcion: "Extensa zona de inscripciones rupestres bimbaches en la vertiente sur de El Hierro, con caracteres que podrían pertenecer a la escritura líbico-bereber. Terreno agreste en el municipio de El Pinar, acceso exigente.",
    lat: 27.71345, lng: -18.05667
  },
  {
    id: "kayak-los-gigantes-tenerife",
    nombre: "Kayak – Acantilados de Los Gigantes",
    isla: "Tenerife", tipo: "Kayak", dificultad: "Media",
    duracion: "2-4 horas", distancia: 0,
    descripcion: "Remada junto a los espectaculares acantilados de Los Gigantes, de hasta 600 m de altura, con cuevas marinas accesibles solo desde el agua y avistamiento de cetáceos.",
    lat: 28.24735, lng: -16.84119
  },
  {
    id: "kayak-puertonaos-lapalma",
    nombre: "Kayak – Puerto Naos",
    isla: "La Palma", tipo: "Kayak", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 0,
    descripcion: "Aguas tranquilas y vistas al Atlántico, ideal para iniciarse en el kayak. Uno de los puntos más populares de La Palma para remar sin experiencia previa.",
    lat: 28.58442, lng: -17.90967
  },
  {
    id: "kayak-tazacorte-lapalma",
    nombre: "Kayak – Acantilados de Tazacorte",
    isla: "La Palma", tipo: "Kayak", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 0,
    descripcion: "Remo entre formaciones rocosas y acantilados en una de las zonas más soleadas de La Palma. Aguas claras que permiten ver el fondo marino.",
    lat: 28.65288, lng: -17.94392
  },
  {
    id: "kitesurf-el-medano-tenerife",
    nombre: "Kitesurf – El Médano",
    isla: "Tenerife", tipo: "Kitesurf", dificultad: "Media",
    duracion: "2-4 horas", distancia: 0,
    descripcion: "Uno de los mejores destinos de Europa para kitesurf y windsurf, con viento constante todo el año. El spot de Cabezo acoge competiciones internacionales.",
    lat: 28.04158, lng: -16.54298
  },
  {
    id: "kitesurf-famara-lanzarote",
    nombre: "Kitesurf – Playa de Famara",
    isla: "Lanzarote", tipo: "Kitesurf", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 0,
    descripcion: "5 km de playa bajo los acantilados de Famara, apta para todos los niveles de kitesurf. Vientos alisios constantes de mayo a septiembre y vistas a La Graciosa.",
    lat: 29.11714, lng: -13.56456
  },
  {
    id: "kitesurf-flagbeach-fuerte",
    nombre: "Kitesurf – Flag Beach",
    isla: "Fuerteventura", tipo: "Kitesurf", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 0,
    descripcion: "Spot de kitesurf en Corralejo, capital del surf de la isla. Buen acceso y ambiente internacional, con escuelas y alquiler de material cerca.",
    lat: 28.70872, lng: -13.83966
  },
  {
    id: "kitesurf-pozo-izquierdo-gc",
    nombre: "Kitesurf y Windsurf – Pozo Izquierdo",
    isla: "Gran Canaria", tipo: "Kitesurf", dificultad: "Difícil",
    duracion: "2-4 horas", distancia: 0,
    descripcion: "Referente mundial de windsurf y kitesurf, sede habitual del campeonato del mundo. Vientos alisios fuertes y constantes en la costa este de la isla.",
    lat: 27.82346, lng: -15.42413
  },
  {
    id: "mirador-abrante-gomera",
    nombre: "Mirador de Abrante",
    isla: "La Gomera", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "Voladizo de siete metros con suelo de cristal, asomado a unos 600 metros sobre Agulo y su valle. Una de las postales más espectaculares de Canarias, con Tenerife y el Teide enfrente.",
    lat: 28.18598, lng: -17.20117
  },
  {
    id: "mirador-aguaide-tenerife",
    nombre: "Mirador de Aguaide",
    isla: "Tenerife", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "Sobre un acantilado de 600 metros cerca de Chinamada, en Anaga. Se llega tras una breve caminata de unos 10 minutos y ofrece unas vistas espectaculares del macizo y el mar, consideradas de las mejores de la isla.",
    lat: 28.56485, lng: -16.29478
  },
  {
    id: "mirador-altogarajonay-gomera",
    nombre: "Alto de Garajonay",
    isla: "La Gomera", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "El punto más alto de la isla, a 1.487 metros, dentro del Parque Nacional de Garajonay. Vistas de 360 grados con el Teide, La Palma, El Hierro y, con suerte, Gran Canaria en el horizonte.",
    lat: 28.10956, lng: -17.2484
  },
  {
    id: "mirador-andenes-lapalma",
    nombre: "Mirador de Los Andenes",
    isla: "La Palma", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "A unos 2.000 metros de altitud, cerca del Roque de los Muchachos. Perspectiva privilegiada del trazado sinuoso del Barranco de Las Angustias y del Pinar de Garafía hacia el norte.",
    lat: 28.76111, lng: -17.86744
  },
  {
    id: "mirador-atalaya-tenerife",
    nombre: "Mirador de la Atalaya (El Tanque)",
    isla: "Tenerife", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "En la Isla Baja, permite admirar el municipio vecino de Garachico y sus alrededores desde las alturas. Un mirador poco conocido con un pueblo pequeño y encantador junto a él.",
    lat: 28.36704, lng: -16.76765
  },
  {
    id: "mirador-atalayaartenara-gc",
    nombre: "Mirador de la Atalaya (Artenara)",
    isla: "Gran Canaria", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "Vistas al Macizo de Tamadaba y a las casas-cueva excavadas en el barranco. El Teide asoma por detrás de Tamadaba en días despejados, desde el pueblo más alto de Gran Canaria.",
    lat: 28.02304, lng: -15.64743
  },
  {
    id: "mirador-balcontamadaba-gc",
    nombre: "Mirador del Balcón (Andén Verde)",
    isla: "Gran Canaria", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "En el sur del Parque Natural de Tamadaba, con vista panorámica de los acantilados de la costa noroeste conocidos como la Cola de Dragón, y el océano Atlántico.",
    lat: 28.01939, lng: -15.78513
  },
  {
    id: "mirador-bandama-gc",
    nombre: "Mirador Pico de Bandama",
    isla: "Gran Canaria", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "En el borde del cráter de un volcán, con una vista de 360 grados que abarca desde la capital, Las Palmas, hasta el campo de golf y la caldera del propio volcán. Uno de los miradores más famosos cerca de la ciudad.",
    lat: 28.03753, lng: -15.45786
  },
  {
    id: "mirador-barrancogomeros-lapalma",
    nombre: "Mirador Barranco Los Gomeros",
    isla: "La Palma", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "Vistas espectaculares del océano Atlántico y la costa escarpada. Un homenaje a la comunidad gomera que aportó su esfuerzo a la agricultura en la isla, con una escultura de una canaria silbando.",
    lat: 28.70351, lng: -17.75518
  },
  {
    id: "mirador-bentayga-gc",
    nombre: "Mirador del Roque Bentayga",
    isla: "Gran Canaria", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "Imponente silueta rocosa con vistas hacia el Barranco de Guayadeque y la Caldera de Tejeda. Un yacimiento arqueológico aborigen además de mirador natural.",
    lat: 27.99147, lng: -15.64194
  },
  {
    id: "mirador-charcoclicos-lanzarote",
    nombre: "Mirador del Charco de los Clicos",
    isla: "Lanzarote", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "Antiguo cráter volcánico junto al mar, con arenas negras y rocas volcánicas que crean un paisaje espectacular. Diversas especies de aves y fauna marina se pueden observar desde el mirador.",
    lat: 28.97652, lng: -13.8277
  },
  {
    id: "mirador-chipeque-tenerife",
    nombre: "Mirador de Chipeque",
    isla: "Tenerife", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "En la carretera de La Esperanza (TF-24), uno de los miradores más famosos de la isla para ver el mar de nubes rompiendo contra la ladera, con el Teide de fondo en días despejados.",
    lat: 28.37395, lng: -16.46383
  },
  {
    id: "mirador-concepcion-lapalma",
    nombre: "Mirador de la Concepción",
    isla: "La Palma", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "Al borde de un antiguo cráter volcánico declarado Monumento Natural, en Breña Alta. Uno de los mejores puntos para contemplar Santa Cruz de La Palma, su puerto y casco histórico desde las alturas.",
    lat: 28.67357, lng: -17.77842
  },
  {
    id: "mirador-cruzdelcarmen-anaga",
    nombre: "Mirador Cruz del Carmen",
    isla: "Tenerife", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "Puerta de entrada al bosque de laurisilva de Anaga, Reserva de la Biosfera. Vistas sobre montañas cubiertas de niebla y el propio bosque milenario, con centro de visitantes justo al lado.",
    lat: 28.53033, lng: -16.28046
  },
  {
    id: "mirador-cruztejeda-gc",
    nombre: "Mirador Cruz de Tejeda",
    isla: "Gran Canaria", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "Punto emblemático en el corazón geográfico de Gran Canaria, con vistas a los profundos barrancos que descienden hacia el mar desde el centro de la isla. Acceso en coche por carreteras con curvas pronunciadas.",
    lat: 28.00648, lng: -15.60005
  },
  {
    id: "mirador-curvaqueso-gomera",
    nombre: "Mirador de la Curva del Queso",
    isla: "La Gomera", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "Con vistas al Valle Gran Rey y el mar al fondo, cerca de donde nace el inmenso Barranco de Gran Rey. Un encuadre muy fotografiado por su forma curva característica.",
    lat: 28.11482, lng: -17.32091
  },
  {
    id: "mirador-degolladabecerra-gc",
    nombre: "Degollada de Becerra",
    isla: "Gran Canaria", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "Entre Tejeda y Vega de San Mateo, con una de las mejores panorámicas hacia el Roque Nublo y el Roque Bentayga desde el mismo punto, sin necesidad de caminar.",
    lat: 27.98816, lng: -15.5936
  },
  {
    id: "mirador-degolladayeguas-gc",
    nombre: "Degollada de las Yeguas",
    isla: "Gran Canaria", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "Entre Fataga y San Bartolomé de Tirajana, con vistas al Barranco de Fataga y su vegetación semidesértica de tabaibas y cardones. Cerca se encuentra la Necrópolis de Arteara, un yacimiento arqueológico aborigen.",
    lat: 27.8193100, lng: -15.5794100
  },
  {
    id: "mirador-delmolino-gc",
    nombre: "Mirador del Molino",
    isla: "Gran Canaria", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "Entre Artenara y La Aldea de San Nicolás, con vistas a la presa de Parralillo. El contraste entre el azul del agua embalsada y el barranco volcánico oscuro hace de este uno de los rincones más fotogénicos de la isla.",
    lat: 27.99247, lng: -15.69427
  },
  {
    id: "mirador-delrio-lanzarote",
    nombre: "Mirador del Río",
    isla: "Lanzarote", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "Obra de César Manrique suspendida a 400 metros de altura, con una de las postales más impactantes de Canarias: La Graciosa y el Archipiélago Chinijo con sus aguas turquesas. Mejor a partir del mediodía, cuando se levantan las nube",
    lat: 29.21446, lng: -13.4812
  },
  {
    id: "mirador-elarenal-tenerife",
    nombre: "Mirador de la Playa de las Arenas",
    isla: "Tenerife", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "En Buenavista del Norte, extremo noroeste de la isla. Los tinerfeños dicen que desde aquí se contemplan los mejores atardeceres, con las olas rompiendo contra la arena negra volcánica.",
    lat: 28.3722000, lng: -16.8707500
  },
  {
    id: "mirador-eltime-lapalma",
    nombre: "Mirador de El Time",
    isla: "La Palma", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "En días despejados, la vista alcanza el puerto y la playa de Tazacorte, e incluso la silueta lejana de El Hierro en el horizonte. Tras la erupción del Tajogaite se convirtió en un punto privilegiado para observar el nuevo paisaje ",
    lat: 28.66352, lng: -17.94234
  },
  {
    id: "mirador-entallada-fuerte",
    nombre: "Mirador Faro de la Entallada",
    isla: "Fuerteventura", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "En el punto más próximo al continente africano de toda Canarias, a solo 100 kilómetros. Vistas majestuosas de la costa sur de Fuerteventura desde el municipio de Tuineje.",
    lat: 28.23027, lng: -13.94857
  },
  {
    id: "mirador-faneque-gc",
    nombre: "Mirador de Faneque",
    isla: "Gran Canaria", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 0,
    descripcion: "Frente al acantilado marino más alto de Canarias (unos 1.000 metros de caída al mar), en la costa noroeste de la isla. Un lugar sobrecogedor para fotografiar la escala real de los acantilados grancanarios.",
    lat: 28.06177, lng: -15.71676
  },
  {
    id: "mirador-femes-lanzarote",
    nombre: "Mirador de Femés",
    isla: "Lanzarote", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "En el pequeño y encantador pueblo de Femés, sur de Lanzarote. Domina buena parte del valle, la zona de Playa Blanca a lo lejos y, en días despejados, la isla de Fuerteventura en el horizonte.",
    lat: 28.91292, lng: -13.78002
  },
  {
    id: "mirador-fortaleza-vilaflor",
    nombre: "Mirador de Vilaflor",
    isla: "Tenerife", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "En la subida hacia el Teide desde el sur, con vistas al pinar de Vilaflor (el más alto de España) y las cumbres. Buen punto para fotografiar el contraste entre el verde del pinar canario y el paisaje volcánico.",
    lat: 28.1716400, lng: -16.6449400
  },
  {
    id: "mirador-garachico-tenerife",
    nombre: "Mirador de Garachico",
    isla: "Tenerife", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "Combina el elemento urbano con el natural: el pueblo de Garachico visto desde arriba, con las formaciones volcánicas de la costa que sepultaron parte del antiguo puerto en la erupción de 1706.",
    lat: 28.37226, lng: -16.76973
  },
  {
    id: "mirador-garanona-tenerife",
    nombre: "Mirador de La Garañona",
    isla: "Tenerife", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "Alzado sobre un acantilado en El Sauzal, con panorámicas de la costa norte y del Valle de La Orotava. Un lugar tranquilo y poco masificado, ideal para fotografiar sin aglomeraciones.",
    lat: 28.4822, lng: -16.43452
  },
  {
    id: "mirador-guinate-lanzarote",
    nombre: "Mirador de Guinate",
    isla: "Lanzarote", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "Más discreto que el Mirador del Río pero igual de impresionante, con vistas sobre los acantilados, el océano y el Archipiélago Chinijo, con La Graciosa en primer plano.",
    lat: 29.18473, lng: -13.50116
  },
  {
    id: "mirador-guiseayoze-fuerte",
    nombre: "Mirador de Guise y Ayoze",
    isla: "Fuerteventura", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "En lo alto de la degollada que da acceso a Betancuria, con esculturas de bronce de 4 metros de los dos reyes aborígenes de la isla. Vistas a los paisajes suaves y redondeados del norte y al barranco que desciende hacia Betancuria.",
    lat: 28.44089, lng: -14.05645
  },
  {
    id: "mirador-haria-lanzarote",
    nombre: "Mirador de Haría",
    isla: "Lanzarote", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "Mirador de la LZ-10 colgado sobre el valle de Malpaso, con Haría al fondo entre palmeras y dragos. Es el balcón clásico del norte de Lanzarote y el contrapunto verde al resto de la isla.",
    lat: 29.1318200, lng: -13.5135100
  },
  {
    id: "mirador-helechos-lanzarote",
    nombre: "Mirador de Los Valles",
    isla: "Lanzarote", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "Parada de la LZ-10 sobre Los Valles y el valle de Temisa, ya camino de Haría. Se ven los bancales y los muros de piedra escalonando la ladera, con el Risco de Famara cerrando el horizonte.",
    lat: 29.12768, lng: -13.51318
  },
  {
    id: "mirador-hermigua-gomera",
    nombre: "Mirador de Hermigua",
    isla: "La Gomera", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "Rodeado de vegetación abundante y decenas de especies autóctonas que crecen libremente. Vistas al valle de Hermigua, uno de los más verdes de la isla.",
    lat: 28.14241, lng: -17.19742
  },
  {
    id: "mirador-humboldt-tenerife",
    nombre: "Mirador de Humboldt",
    isla: "Tenerife", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "Uno de los miradores más fotografiados de Tenerife, en la carretera hacia La Orotava. Se ve todo el Valle de La Orotava en abanico hasta el mar, con el Teide asomando detrás si el día está despejado.",
    lat: 28.40779, lng: -16.50718
  },
  {
    id: "mirador-igualero-gomera",
    nombre: "Mirador de Igualero",
    isla: "La Gomera", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "A 1.321 metros de altitud, en el límite con el Parque Nacional de Garajonay. Una de las vistas más completas de la isla desde el interior.",
    lat: 28.09956, lng: -17.25473
  },
  {
    id: "mirador-jardina-tenerife",
    nombre: "Mirador de Jardina",
    isla: "Tenerife", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "Cerca de San Cristóbal de La Laguna, regala una panorámica abierta con el Teide al fondo en días despejados. Actúa como frontera natural entre la vega de La Laguna y la entrada al Macizo de Anaga.",
    lat: 28.52413, lng: -16.28806
  },
  {
    id: "mirador-jinama-hierro",
    nombre: "Mirador de Jinama",
    isla: "El Hierro", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "En el borde de El Golfo, con una vista vertiginosa de 1.000 metros sobre el valle. Punto de inicio del histórico Camino de Jinama, que desciende hasta la costa.",
    lat: 27.76312, lng: -17.98071
  },
  {
    id: "mirador-lapena-hierro",
    nombre: "Mirador de La Peña",
    isla: "El Hierro", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "Diseño de César Manrique en Guarazoca, con vistas al valle de El Golfo y sus 15 km de acantilados. Uno de los mejores lugares de Canarias para ver el cielo estrellado.",
    lat: 27.80688, lng: -17.98082
  },
  {
    id: "mirador-laruleta-tenerife",
    nombre: "Mirador de La Ruleta",
    isla: "Tenerife", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "En el Parque Nacional del Teide, con vistas espectaculares del volcán, los Roques de García y el Llano de Ucanca. Ideal para amaneceres tranquilos y fotografía del paisaje volcánico.",
    lat: 28.2231, lng: -16.63127
  },
  {
    id: "mirador-lascoloradas-laspalmas",
    nombre: "Mirador de Las Coloradas",
    isla: "Gran Canaria", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "En la propia ciudad de Las Palmas de Gran Canaria, con una perspectiva única de la capital y la playa de Las Canteras. El más urbano y accesible de los miradores de la isla, ideal para un atardecer rápido sin salir de la ciudad.",
    lat: 28.16673, lng: -15.43548
  },
  {
    id: "mirador-losroques-gomera",
    nombre: "Mirador de los Roques",
    isla: "La Gomera", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "Mirador de carretera en la GM-2, con los roques de Agando, Zarcita, Ojila y Carmona justo enfrente: antiguos conductos volcánicos solidificados que hoy forman uno de los paisajes más reconocibles del Parque Nacional de Garajonay.",
    lat: 28.10902, lng: -17.21459
  },
  {
    id: "mirador-malpaso-hierro",
    nombre: "Mirador de Malpaso",
    isla: "El Hierro", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "En el punto más alto de la isla, ofrece una vista privilegiada de toda El Hierro y, en días despejados, de las vecinas La Gomera, La Palma y Tenerife con el Teide en el horizonte. Rodeado de pinos canarios y flora endémica.",
    lat: 27.72921, lng: -18.04046
  },
  {
    id: "mirador-morroagando-gomera",
    nombre: "Mirador del Morro de Agando",
    isla: "La Gomera", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "Se llega tras caminar unos 500 metros y cruzar un puente de madera sobre la carretera. Vistas al Parque Nacional de Garajonay y a la Reserva Natural Integral de Benchijigua.",
    lat: 28.10905, lng: -17.2191
  },
  {
    id: "mirador-morrovelosa-fuerte",
    nombre: "Mirador Morro Velosa",
    isla: "Fuerteventura", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "Diseño de César Manrique a 669 m de altitud, entre el Parque Rural de Betancuria y el valle de Santa Inés. La mejor vista del norte y centro de Fuerteventura.",
    lat: 28.43855, lng: -14.05011
  },
  {
    id: "mirador-naricesteide-tenerife",
    nombre: "Mirador de las Narices del Teide",
    isla: "Tenerife", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "Vistas directas a las coladas de lava de la última erupción del Teide, hace casi 225 años. Punto tranquilo y poco conocido, perfecto para atardeceres sobre el mar de nubes sin las multitudes de otros miradores del parque.",
    lat: 28.23839, lng: -16.69825
  },
  {
    id: "mirador-palmarejo-gomera",
    nombre: "Mirador del Palmarejo",
    isla: "La Gomera", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "También conocido como mirador César Manrique, sobre el imponente barranco de Valle Gran Rey. Arquitectura que se camufla entre la roca, con jardines de plantas autóctonas.",
    lat: 28.11926, lng: -17.3157
  },
  {
    id: "mirador-picoingles-tenerife",
    nombre: "Mirador del Pico del Inglés",
    isla: "Tenerife", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "Uno de los miradores más famosos de Anaga, con impresionantes vistas de las montañas y el océano. Ideal para fotografiar el característico mar de nubes que se forma entre los barrancos del macizo.",
    lat: 28.53301, lng: -16.264
  },
  {
    id: "mirador-piconieves-gc",
    nombre: "Mirador del Pico de las Nieves",
    isla: "Gran Canaria", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "El punto más alto de Gran Canaria, a 1.949 metros. Ofrece una vista panorámica que abarca prácticamente toda la isla junto a sus roques más icónicos: Nublo, Rana y Bentayga. Si hay alisios, se forma un mar de nubes a los pies del ",
    lat: 27.96203, lng: -15.5719
  },
  {
    id: "mirador-poetas-gc",
    nombre: "Mirador de los Poetas",
    isla: "Gran Canaria", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "En Artenara, con esculturas de acero y placas con fragmentos de poemas repartidas por el mirador. Ofrece una amplia vista de todo el pueblo y sus otros miradores.",
    lat: 28.02166, lng: -15.64556
  },
  {
    id: "mirador-puntadeteno-tenerife",
    nombre: "Mirador de Punta de Teno",
    isla: "Tenerife", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 0,
    descripcion: "El extremo más occidental de Tenerife, con el faro y acantilados que caen al Atlántico. Uno de los mejores puntos de la isla para fotografiar el atardecer; el acceso en coche está restringido, se llega en guagua desde Buenavista d",
    lat: 28.34161, lng: -16.92078
  },
  {
    id: "mirador-puntahidalgo-tenerife",
    nombre: "Mirador de Punta del Hidalgo",
    isla: "Tenerife", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "Su altitud permite ver el Teide por un lado y el océano Atlántico abierto por el otro, en el extremo norte de la isla. Un encuadre poco habitual que combina volcán y costa en la misma fotografía.",
    lat: 28.5763700, lng: -16.3287800
  },
  {
    id: "mirador-roqueblanco-gomera",
    nombre: "Mirador Roque Blanco",
    isla: "La Gomera", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "Contempla una de las zonas más recónditas de la isla, El Teón, con una de las mejores concentraciones de madroños de La Gomera. Las vistas alcanzan la cuenca de Vallehermoso.",
    lat: 28.17036, lng: -17.24146
  },
  {
    id: "mirador-roquemuchachos-lapalma",
    nombre: "Mirador Roque de los Muchachos",
    isla: "La Palma", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "El mirador más alto de la isla, a más de 2.400 metros. Domina la Caldera de Taburiente desde una perspectiva aérea impresionante, y en días claros permite ver Tenerife, La Gomera y El Hierro. Uno de los mejores lugares del mundo p",
    lat: 28.75473, lng: -17.88528
  },
  {
    id: "mirador-roquenublo-gc",
    nombre: "Mirador Roque Nublo",
    isla: "Gran Canaria", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 0,
    descripcion: "El monolito más simbólico de Gran Canaria, 80 metros de roca que se alzan hasta los 1.813 m, en el corazón del Parque Rural del Nublo. Desde su base se domina un paisaje de pinares y caseríos, con el Teide al fondo en días claros.",
    lat: 27.9765500, lng: -15.6002100
  },
  {
    id: "mirador-unamuno-gc",
    nombre: "Mirador de Unamuno",
    isla: "Gran Canaria", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "En Artenara, presidido por una estatua del escritor Miguel de Unamuno, que describió esta vista de la Caldera de Tejeda como una tempestad petrificada. Vistas al Roque Nublo y al Roque Bentayga.",
    lat: 28.01942, lng: -15.64632
  },
  {
    id: "mirador-vallehermoso-gomera",
    nombre: "Mirador de Vallehermoso",
    isla: "La Gomera", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "En la carretera GM-1, justo antes de llegar a Vallehermoso, ofrece las mejores vistas de esta localidad. Mirando hacia atrás se distingue el Roque Cano en los altos.",
    lat: 28.15724, lng: -17.2455
  },
  {
    id: "pinar-hierro-circular",
    nombre: "El Pinar – Circular por el Bosque",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 8.0,
    descripcion: "Circular tranquila por el Pinar de El Hierro, uno de los bosques de pino canario más densos del archipiélago. Fácil, sombreada y perfecta para familias.",
    lat: 27.72, lng: -17.98
  },
  {
    id: "poblado-zonzamas-lanzarote",
    nombre: "Poblado de Zonzamas",
    isla: "Lanzarote", tipo: "Espeleología", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "Uno de los yacimientos majos más importantes de Lanzarote, en Teguise, con estructuras habitacionales de piedra en superficie. Tradicionalmente vinculado a la sede del último Guanarteme de la isla antes de la conquista.",
    lat: 29.00063, lng: -13.56781
  },
  {
    id: "risco-caido-gc",
    nombre: "Risco Caído",
    isla: "Gran Canaria", tipo: "Espeleología", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 0,
    descripcion: "Santuario rupestre aborigen declarado Patrimonio de la Humanidad por la UNESCO, en pleno Parque Rural del Nublo cerca de Artenara. Visita imprescindible de la Canarias prehispánica.",
    lat: 28.02055, lng: -15.64749
  },
  {
    id: "surf-americas-tenerife",
    nombre: "Surf – Playa de Las Américas",
    isla: "Tenerife", tipo: "Surf", dificultad: "Fácil",
    duracion: "Variable (según oleaje)", distancia: 0,
    descripcion: "El epicentro del surf en el sur de Tenerife, con varios picos para todos los niveles como 'El Medio' y escuelas de surf durante todo el año.",
    lat: 28.06014, lng: -16.73349
  },
  {
    id: "surf-cotillo-fuerte",
    nombre: "Surf – El Cotillo",
    isla: "Fuerteventura", tipo: "Surf", dificultad: "Fácil",
    duracion: "Variable (según oleaje)", distancia: 0,
    descripcion: "Pueblo pesquero del norte de Fuerteventura con varios picos de surf de calidad y las famosas lagunas turquesas de Los Lagos para bañarse en aguas tranquilas.",
    lat: 28.68986, lng: -14.01101
  },
  {
    id: "surf-el-confital-gc",
    nombre: "Surf – El Confital",
    isla: "Gran Canaria", tipo: "Surf", dificultad: "Media",
    duracion: "2-4 horas", distancia: 0,
    descripcion: "La ola de \u2018Las Monjas\u2019 en pleno Las Palmas de Gran Canaria. Junto a La Cícer, en Las Canteras, es uno de los spots favoritos de los surfistas locales.",
    lat: 28.15959, lng: -15.43581
  },
  {
    id: "surf-el-socorro-tenerife",
    nombre: "Surf – Playa de El Socorro",
    isla: "Tenerife", tipo: "Surf", dificultad: "Media",
    duracion: "2-4 horas", distancia: 0,
    descripcion: "Una de las playas más constantes de Tenerife para surfear, con arena volcánica negra y olas de izquierda y derecha para todos los niveles. Mejor época: noviembre-marzo.",
    lat: 28.39424, lng: -16.60284
  },
  {
    id: "surf-elfronton-gc",
    nombre: "Surf y Bodyboard – El Frontón",
    isla: "Gran Canaria", tipo: "Surf", dificultad: "Fácil",
    duracion: "Variable (según oleaje)", distancia: 0,
    descripcion: "Uno de los spots de bodyboard más reconocidos internacionalmente, cerca de Gáldar. Olas potentes y espectaculares, parada habitual del circuito mundial de bodyboard.",
    lat: 28.12587, lng: -15.58472
  },
  {
    id: "surf-famara-lanzarote",
    nombre: "Surf – Playa de Famara",
    isla: "Lanzarote", tipo: "Surf", dificultad: "Fácil",
    duracion: "Variable (según oleaje)", distancia: 0,
    descripcion: "El spot de surf más famoso de Lanzarote, bajo los acantilados de Famara. Olas consistentes todo el año y varias escuelas de surf en el pueblo.",
    lat: 29.11714, lng: -13.56456
  },
  {
    id: "surf-la-izquierda-punta-hidalgo",
    nombre: "Surf – La Izquierda (Punta del Hidalgo)",
    isla: "Tenerife", tipo: "Surf", dificultad: "Difícil",
    duracion: "2-4 horas", distancia: 0,
    descripcion: "Legendario point break al pie de los acantilados de Punta del Hidalgo. Izquierdas largas y rápidas con secciones tubulares, para surfistas con experiencia.",
    lat: 28.56913, lng: -16.32438
  },
  {
    id: "surf-majanicho-fuerte",
    nombre: "Surf – Fuerteventura (Majanicho)",
    isla: "Fuerteventura", tipo: "Surf", dificultad: "Fácil",
    duracion: "Variable (según oleaje)", distancia: 0,
    descripcion: "La ola más famosa del norte de Fuerteventura, junto al pueblo de Majanicho (no confundir con la isla de El Hierro). Derecha rápida y tubera sobre fondo volcánico, solo alto nivel.",
    lat: 28.73926, lng: -13.9396
  },
  {
    id: "surf-nogales-lapalma",
    nombre: "Surf – Playa de Nogales",
    isla: "La Palma", tipo: "Surf", dificultad: "Fácil",
    duracion: "Variable (según oleaje)", distancia: 0,
    descripcion: "El punto de surf más conocido del noreste de La Palma, en Puntallana. Arena negra volcánica y olas de calidad para nivel intermedio.",
    lat: 28.75961, lng: -17.7404
  },
  {
    id: "surf-quemao-lanzarote",
    nombre: "Surf – El Quemao",
    isla: "Lanzarote", tipo: "Surf", dificultad: "Fácil",
    duracion: "Variable (según oleaje)", distancia: 0,
    descripcion: "Una de las olas más potentes y respetadas de Canarias, en La Santa. Izquierda de hasta 5 metros con tubos famosos a nivel mundial. Solo para surfistas expertos.",
    lat: 29.10904, lng: -13.66559
  },
  {
    id: "tablado-gallegos-lapalma",
    nombre: "El Tablado – Gallegos (Costa Norte)",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 9.0,
    descripcion: "Costa norte salvaje entre barrancos y acantilados, plantaciones en terrazas y caseríos remotos. Gran sensación de aislamiento. Solo ida.",
    lat: 28.79, lng: -17.805
  }
]; // ← No borres este corchete ni el punto y coma

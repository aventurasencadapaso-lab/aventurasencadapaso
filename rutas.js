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
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "Día completo", distancia: 18,
    descripcion: "La ruta más icónica de España. Desde Montaña Blanca (2.300 m) hasta La Rambleta (3.555 m). Requiere permiso para subir los últimos 200 m hasta la cima.",
    enlace: "https://www.alltrails.com/es/sendero/spain/santa-cruz-de-tenerife/montana-blanca-pico-del-teide",
    lat: 28.2743, lng: -16.6426
  },
  {
    id: "roques-garcia-teide",
    nombre: "Roques de García – Sendero 3 Teide",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 4,
    descripcion: "Circular por las formaciones volcánicas más espectaculares del Teide: Roque Cinchado, El Torrotito y el Llano de Ucanca. Apta para familias.",
    enlace: "https://www.alltrails.com/es/spain/tenerife/moderate",
    lat: 28.2253, lng: -16.6139
  },
  {
    id: "pico-viejo-teide",
    nombre: "Pico Viejo – Sendero 13",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 12,
    descripcion: "Ascenso al volcán hermano del Teide con vistas únicas al cráter de Pico Viejo. Pinar canario milenario y panorámicas de los conos volcánicos.",
    enlace: "https://www.alltrails.com/es/spain/tenerife/moderate",
    lat: 28.2636, lng: -16.6819
  },
  {
    id: "ruta-040-teide",
    nombre: "Ruta 0-4-0 Teide",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Extrema",
    duracion: "Día completo", distancia: 42,
    descripcion: "Del nivel del mar en Playa del Socorro hasta la cima del Teide y vuelta al mar. La ruta más extrema de Canarias: más de 3.700 m de desnivel.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/santa-cruz-de-tenerife",
    lat: 28.5022, lng: -16.7044
  },
  {
    id: "paisaje-lunar-vilaflor",
    nombre: "Vilaflor – Paisaje Lunar (PR-TF 72)",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 13,
    descripcion: "Circular desde Vilaflor por pinares hasta el Paisaje Lunar, formaciones de piedra pómez erosionada que parecen de otro planeta. Impresionante.",
    enlace: "https://www.alltrails.com/es/spain/tenerife/long",
    lat: 28.1582, lng: -16.6419
  },
  {
    id: "volcan-fasnia",
    nombre: "Volcán de Fasnia – Siete Fuentes",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 7,
    descripcion: "Sendero 20 del Teide por los conos volcánicos de la erupción de 1705. Negro intenso de la lava con tajinastes rojos y azules en primavera.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/fasnia",
    lat: 28.2369, lng: -16.4569
  },
  {
    id: "chinyero-san-jose",
    nombre: "San José de los Llanos – Chinyero",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 4,
    descripcion: "Ruta por las coladas del último volcán en erupción de Tenerife (1909). Lava negra entre pinos centenarios. Ideal para familias y niños.",
    enlace: "https://www.alltrails.com/es/spain/tenerife/easy",
    lat: 28.3469, lng: -16.7944
  },

  // ── PARQUE RURAL DE ANAGA ──
  {
    id: "anaga-afur-taganana",
    nombre: "Anaga – Afur a Taganana (Circular)",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 14,
    descripcion: "Una de las mejores rutas de Canarias. Laurisilva salvaje, barrancos profundos y la playa virgen del Tamadite. Joya del Macizo de Anaga.",
    enlace: "https://www.alltrails.com/es/spain/tenerife/long",
    lat: 28.5667, lng: -16.1833
  },
  {
    id: "anaga-roque-taborno",
    nombre: "Anaga – Roque Taborno",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 4,
    descripcion: "Sendero corto pero espectacular hasta el Roque Taborno. No apto para vértigo. Vistas únicas al Atlántico Norte y la costa salvaje de Anaga.",
    enlace: "https://www.webtenerife.com/elblog/2026/02/cuales-son-las-mejores-rutas-de-senderismo-en-tenerife-para-descubrir-su-naturaleza",
    lat: 28.5720, lng: -16.1956
  },
  {
    id: "anaga-cruz-carmen-hidalgo",
    nombre: "Cruz del Carmen – Punta del Hidalgo",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 14,
    descripcion: "Ruta lineal desde el corazón de Anaga hasta la costa. Pasa por Chinamada, pueblo de casas-cueva habitadas y acantilados de Punta del Hidalgo.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/la-laguna",
    lat: 28.5642, lng: -16.2817
  },
  {
    id: "anaga-bosque-enigmas",
    nombre: "Bosque de los Enigmas – Anaga",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 5,
    descripcion: "Circular sencilla desde el Mirador de Zapata por laurisilva bien señalizada. Perfecta para familias. Llevar ropa de abrigo por la humedad.",
    enlace: "https://www.alltrails.com/es/spain/tenerife/moderate",
    lat: 28.5511, lng: -16.2378
  },
  {
    id: "anaga-taganana-tamadite",
    nombre: "Taganana – Playa del Tamadite",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 8,
    descripcion: "Ruta lineal hasta la playa del Tamadite, arena negra volcánica solo accesible a pie. La marea baja revela la playa en todo su esplendor.",
    enlace: "https://www.alltrails.com/es/spain/tenerife/moderate",
    lat: 28.5594, lng: -16.1633
  },
  {
    id: "pijaral-tenerife",
    nombre: "Sendero de El Pijaral – Anaga",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 12,
    descripcion: "La laurisilva más protegida de Tenerife. Reserva Natural Integral de El Pijaral. Requiere permiso del Cabildo. Experiencia única e irrepetible.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/santa-cruz-de-tenerife",
    lat: 28.5780, lng: -16.1620
  },
  {
    id: "anaga-benijo-draguillo",
    nombre: "Benijo – Cruz del Draguillo (PR-TF 6.3)",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 7,
    descripcion: "Precioso recorrido con vistas a la costa de Anaga y al caserío del Draguillo. Iniciar pronto por el aparcamiento limitado. Arquitectura rural única.",
    enlace: "https://www.alltrails.com/es/spain/tenerife",
    lat: 28.5811, lng: -16.1619
  },

  // ── PARQUE RURAL DE TENO ──
  {
    id: "masca-barranco",
    nombre: "Barranco de Masca",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 6,
    descripcion: "Descenso espectacular por el barranco más famoso de Tenerife hasta la playa. Requiere reserva previa en el Cabildo y regreso en barco.",
    enlace: "https://es.wikiloc.com/planet/discovery-es/rutas-senderismo-tenerife/",
    lat: 28.3483, lng: -16.8469
  },
  {
    id: "teno-risco-verde",
    nombre: "Teno – Monte del Agua – Risco Verde",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 14,
    descripcion: "Laurisilva del Monte del Agua hasta los miradores únicos del Risco Verde. Vistas a Masca, Santiago del Teide y el Teide al fondo.",
    enlace: "https://www.alltrails.com/es/spain/tenerife/long",
    lat: 28.3619, lng: -16.8533
  },
  {
    id: "teno-erjos-circular",
    nombre: "Erjos – Circular Parque Rural de Teno",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 8,
    descripcion: "Agradable circular por el Parque Rural de Teno con dos paisajes distintos: bosque húmedo y zona más árida. Cruz de Gala con vistas panorámicas.",
    enlace: "https://www.alltrails.com/es/spain/tenerife/long",
    lat: 28.3467, lng: -16.8028
  },
  {
    id: "teno-palmar-circular",
    nombre: "Valle de El Palmar – Teno Alto",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 11,
    descripcion: "Circular por el Valle de El Palmar hasta Teno Alto por bosque de brezos y laurisilva única en altura. Vistas excepcionales al norte de la isla.",
    enlace: "https://www.alltrails.com/es/spain/tenerife/long",
    lat: 28.3658, lng: -16.8250
  },

  // ── SUR Y OTROS ──
  {
    id: "barranco-infierno-adeje",
    nombre: "Barranco del Infierno – Adeje",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 8,
    descripcion: "Reserva Natural Especial. Sendero hasta cascada de 80 m con cuevas aborígenes y grabados rupestres. Requiere reserva previa obligatoria.",
    enlace: "https://www.barrancodelinfierno.es",
    lat: 28.1064, lng: -16.7261
  },
  {
    id: "roque-conde-arona",
    nombre: "Roque del Conde – Arona",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 5,
    descripcion: "Ascenso al Roque del Conde (1.001 m) con vistas de la Caldera del Rey y en días despejados La Palma, La Gomera y El Hierro.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/arona",
    lat: 28.1342, lng: -16.6831
  },
  {
    id: "malpais-guimar",
    nombre: "Malpaís de Güímar",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 8,
    descripcion: "Reserva Natural Especial con paisaje desértico volcánico rojizo. Tubos y cuevas volcánicas, miradores y flora endémica. Muy fotografiable.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/guimar",
    lat: 28.3139, lng: -16.3994
  },
  {
    id: "montana-roja-medano",
    nombre: "Montaña Roja – El Médano",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 4,
    descripcion: "Circular corta al volcán de 171 m que separa las mejores playas naturales del sur. Referente en el horizonte y vistas a Gran Canaria.",
    enlace: "https://www.alltrails.com/es/spain/tenerife/easy",
    lat: 28.0453, lng: -16.5344
  },
  {
    id: "rambla-castro",
    nombre: "Rambla de Castro – Costa Norte",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 7,
    descripcion: "Espacio protegido con bancales agrícolas históricos sobre los acantilados del norte. Playas de arena negra y vistas únicas al Atlántico.",
    enlace: "https://www.alltrails.com/es/spain/tenerife/moderate",
    lat: 28.3856, lng: -16.6189
  },
  {
    id: "los-organos-orotava",
    nombre: "Los Órganos – La Orotava",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 16,
    descripcion: "Espectacular circular por la Caldera y Los Órganos, columnas basálticas únicas. Gran variedad de paisajes, flora y desnivel considerable.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/la-orotava",
    lat: 28.3912, lng: -16.5264
  },
  {
    id: "anaga-sendero-sentidos",
    nombre: "Sendero de los Sentidos – Anaga",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 6,
    descripcion: "Triple ruta desde Cruz del Carmen con experiencia sensorial única entre laurisilva. Une Anaga con La Laguna. Muy didáctica y bien señalizada.",
    enlace: "https://www.alltrails.com/es/spain/tenerife/moderate",
    lat: 28.5578, lng: -16.2778
  },
  {
    id: "garachico-pr-tf-43",
    nombre: "Circular Garachico – PR-TF 43",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 9,
    descripcion: "Circular bien señalizada desde el pueblo histórico de Garachico. Restos de lava volcánica, costa norte y pinar. Apto para todos los niveles.",
    enlace: "https://www.alltrails.com/es/spain/tenerife",
    lat: 28.3728, lng: -16.7700
  },
  {
    id: "corona-forestal-las-raices",
    nombre: "Las Raíces – Corona Forestal (PR-TF 25.1)",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 8,
    descripcion: "Agradable ruta por el bosque de Las Esperanzas en la Corona Forestal. Pino canario y eucalipto en la zona donde Franco planificó el alzamiento.",
    enlace: "https://www.alltrails.com/es/spain/tenerife/easy",
    lat: 28.4333, lng: -16.4253
  },
  {
    id: "taborno-circular-anaga",
    nombre: "Taborno – Carboneras – Llano Frío",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 17,
    descripcion: "Circular completa por el corazón de Anaga: Taborno, Carboneras, Chinamada, Llano Frío y vuelta por el PR-TF 2. Exige orientación y buen calzado.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/santa-cruz-de-tenerife",
    lat: 28.5742, lng: -16.2003
  },
  {
    id: "montana-amarilla-sur",
    nombre: "Montaña Amarilla – Punta de Panete",
    isla: "Tenerife", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 3,
    descripcion: "Circular corta al Monumento Natural de Montaña Amarilla. Capas de colores volcánicos entre la montaña y el océano. Puesta de sol espectacular.",
    enlace: "https://www.alltrails.com/es/spain/tenerife/easy",
    lat: 28.0044, lng: -16.6911
  },

  

  // ╔══════════════════════════════════════════════╗
  // ║          GRAN CANARIA (30 rutas)             ║
  // ╚══════════════════════════════════════════════╝

  // ── CUMBRES Y PARQUE NATURAL ──
  {
    id: "roque-nublo-circular",
    nombre: "Roque Nublo – Tejeda (Circular)",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 10,
    descripcion: "La ruta más emblemática de Gran Canaria. Desde Tejeda al monolito volcánico de 1.813 m. Desde 2025 requiere reserva previa en la web oficial.",
    enlace: "https://www.alltrails.com/es/spain/gran-canaria",
    lat: 27.9694, lng: -15.5772
  },
  {
    id: "roque-nublo-degollada",
    nombre: "Degollada Becerra – Roque Nublo",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 7,
    descripcion: "Acceso al Roque Nublo desde la Degollada Becerra pasando por el Roque de La Rana y El Fraile. Vistas a Artenara y Acusa.",
    enlace: "https://www.alltrails.com/es/spain/gran-canaria/hard",
    lat: 27.9750, lng: -15.5853
  },
  {
    id: "pico-nieves-roque-nublo",
    nombre: "Llanos de la Pez – Pico de las Nieves – Roque Nublo (S-51)",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 14,
    descripcion: "Circular por las cumbres de GC desde el área recreativa de Llanos de la Pez. Pico de las Nieves (1.949 m) y Roque Nublo en una sola ruta.",
    enlace: "https://www.alltrails.com/es/spain/gran-canaria/long",
    lat: 27.9650, lng: -15.5908
  },
  {
    id: "pico-nieves-ascenso",
    nombre: "Ascensión al Pico de las Nieves",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 11,
    descripcion: "Subida al techo de Gran Canaria (1.949 m) desde el área recreativa de Tamadaba por pinar antiguo. Vistas al Roque Nublo, Bentayga y el Teide.",
    enlace: "https://www.s-cape.es/blog/gran-canaria-rutas-senderismo",
    lat: 27.9717, lng: -15.5669
  },
  {
    id: "artenara-cuevas-caballero",
    nombre: "Artenara – Cuevas del Caballero",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 10,
    descripcion: "Circular desde Artenara, el pueblo más alto de Gran Canaria. Bosques, crestas y las cuevas guanches del Caballero con leyendas locales.",
    enlace: "https://www.s-cape.es/blog/gran-canaria-rutas-senderismo",
    lat: 28.0117, lng: -15.6425
  },
  {
    id: "roque-bentayga-gc",
    nombre: "Roque Bentayga – Yacimiento Aborigen",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 4,
    descripcion: "Sendero hasta el lugar sagrado de los aborígenes canarios. Almogarenes, grabados rupestres y vistas al Roque Nublo y a la cuenca de Tejeda.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/tejeda",
    lat: 27.9872, lng: -15.6153
  },
  {
    id: "caldera-marteles-gc",
    nombre: "Caldera de Los Marteles – Tenteniguada (SL-1)",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 11,
    descripcion: "Circular oficial SL-1 por la Caldera de Los Marteles con vistas al Pico de las Nieves. Almendros en flor en enero–febrero, paisaje único.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/valsequillo-de-gran-canaria",
    lat: 27.9708, lng: -15.4853
  },

  // ── BARRANCOS Y NATURALEZA ──
  {
    id: "barranco-guayadeque",
    nombre: "Barranco de Guayadeque",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 7,
    descripcion: "Monumento Natural con cientos de cuevas aborígenes, ermita rupestre y restaurantes-cueva. Vegetación exuberante. Acceso con reserva desde 2025.",
    enlace: "https://www.alltrails.com/es/spain/gran-canaria",
    lat: 27.8997, lng: -15.4025
  },
  {
    id: "barranco-guigui-gc",
    nombre: "Barranco de Güigüi – Playa Virgen",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "Día completo", distancia: 16,
    descripcion: "Una de las rutas más salvajes de Gran Canaria. Desciende al Barranco de Güigüi hasta una playa virgen inaccesible por carretera. Llevar mucha agua.",
    enlace: "https://www.alltrails.com/es/spain/gran-canaria/hard",
    lat: 27.8792, lng: -15.7228
  },
  {
    id: "barranco-cernicalos-gc",
    nombre: "Barranco de los Cernícalos",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 9,
    descripcion: "El barranco más húmedo de Gran Canaria. Cascadas, helechos gigantes y cernícalos sobrevolando el cauce. Muy verde y fresco todo el año.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/valsequillo-de-gran-canaria",
    lat: 27.9500, lng: -15.4167
  },
  {
    id: "caldera-bandama-gc",
    nombre: "Caldera de Bandama – Circular",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 5,
    descripcion: "Borde e interior de la Caldera de Bandama, cráter de 200 m de profundidad y 1 km de diámetro. Viñedos históricos en el fondo del cráter.",
    enlace: "https://www.alltrails.com/es/spain/gran-canaria",
    lat: 28.0181, lng: -15.4458
  },
  {
    id: "presa-soria-gc",
    nombre: "Presa de Soria – Cascada",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 8,
    descripcion: "Ruta por zona semidesértica hasta la Presa de las Niñas. Cuando llueve se forma una cascada espectacular. Casi sin sombra, llevar protección solar.",
    enlace: "https://www.alltrails.com/es/spain/gran-canaria/long",
    lat: 27.8883, lng: -15.6136
  },
  {
    id: "fataga-barranco-gc",
    nombre: "Barranco de Fataga – Parque Natural Ayagaures",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 6,
    descripcion: "Por el Parque Natural de Ayagaures en los alrededores del barranco de Fataga. Paisaje de palmeras canarias y acantilados ocres en el sur.",
    enlace: "https://www.alltrails.com/es/spain/gran-canaria/easy",
    lat: 27.8381, lng: -15.5597
  },
  {
    id: "pilancones-gc",
    nombre: "Parque Natural de Pilancones",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 13,
    descripcion: "Circular por el Parque Natural de Pilancones desde la Presa de la Angostura. Pino canario centenario y paisajes volcánicos del sur interior.",
    enlace: "https://www.alltrails.com/es/spain/gran-canaria/long",
    lat: 27.8683, lng: -15.6019
  },

  // ── TAMADABA Y COSTA NOROESTE ──
  {
    id: "tamadaba-circular-gc",
    nombre: "Circular Parque Natural de Tamadaba",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 18,
    descripcion: "Circular completa por el macizo de Tamadaba: pinos centenarios, Montaña Bibique, Presa de los Pérez y el Valle de Agaete. Impresionante.",
    enlace: "https://www.alltrails.com/es/spain/gran-canaria/hard",
    lat: 28.0833, lng: -15.6667
  },
  {
    id: "agaete-tamadaba-gc",
    nombre: "Agaete – Tamadaba (Lineal)",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 13,
    descripcion: "Ascenso desde Agaete al pinar de Tamadaba por el Camino de los Romeros. Perfecta para hacer solo ida y volver en guagua. Vistas al océano.",
    enlace: "https://www.alltrails.com/es/spain/gran-canaria/hard",
    lat: 28.0994, lng: -15.7094
  },
  {
    id: "valle-agaete-gc",
    nombre: "Valle de Agaete – El Sao",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 13,
    descripcion: "Por el Valle de Agaete hasta el barrio de El Sao y el Hornillo por caminos históricos. Frutales, riscos y el pinar de Tamadaba al fondo.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/agaete",
    lat: 28.0994, lng: -15.7094
  },
  {
    id: "azulejos-inagua-gc",
    nombre: "Los Azulejos – Reserva Natural de Inagua",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 14,
    descripcion: "Ruta por las rocas multicolores de Los Azulejos hasta la Reserva Natural Integral de Inagua. Paisaje único de colores volcánicos amarillos y verdes.",
    enlace: "https://www.alltrails.com/es/spain/gran-canaria/hard",
    lat: 27.9178, lng: -15.7356
  },

  // ── CAMINO DE SANTIAGO Y LARGO RECORRIDO ──
  {
    id: "camino-volcanes-gc",
    nombre: "GR 131 – Camino Entre Volcanes",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "Varios días", distancia: 47,
    descripcion: "Gran travesía norte–sur por el corazón volcánico de Gran Canaria. Barrancos, cumbres y bosques encadenados. Una de las mejores de Canarias.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/las-palmas-de-gran-canaria",
    lat: 28.1248, lng: -15.4300
  },
  {
    id: "jacoba-canaria-gc",
    nombre: "Ruta Jacobea Canaria – Etapa 1",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 17,
    descripcion: "Primera etapa del Camino de Santiago por Gran Canaria. Cruza la isla por pueblos históricos y paisajes volcánicos únicos de norte a sur.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias",
    lat: 28.1248, lng: -15.4300
  },

  // ── SUR Y COSTA ──
  {
    id: "dunas-maspalomas-gc",
    nombre: "Dunas de Maspalomas",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 8,
    descripcion: "Reserva Natural con dunas de hasta 10 m y laguna salobre. 8 km de senderos oficiales delimitados. Prohibido salirse del camino marcado.",
    enlace: "https://www.alltrails.com/es/spain/gran-canaria/easy",
    lat: 27.7397, lng: -15.5761
  },
  {
    id: "playa-cabron-gc",
    nombre: "Playa del Cabrón – Playa Cuervo Grande",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 5,
    descripcion: "Ruta costera por el litoral del este. Paisaje volcánico con tonos rojizos y turquesas. Ideal para combinar con baño en playas poco frecuentadas.",
    enlace: "https://welikecanarias.com/senderismo-en-gran-canaria-rutas/",
    lat: 27.9025, lng: -15.3608
  },
  {
    id: "amadores-tauro-gc",
    nombre: "Playa de Amadores – Playa de Tauro",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 5,
    descripcion: "Paseo costero entre las playas más populares del suroeste. Acantilados de colores rojizos y vistas al Atlántico con parada en playa virgen.",
    enlace: "https://www.alltrails.com/es/spain/gran-canaria/easy",
    lat: 27.8008, lng: -15.7283
  },
  {
    id: "puerto-mogan-costa",
    nombre: "Puerto de Mogán – Paseo Costero",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 4,
    descripcion: "Agradable paseo por el puerto histórico de Mogán, sus playas y acantilados. El pueblo más pintoresco del suroeste de Gran Canaria.",
    enlace: "https://www.alltrails.com/es/spain/gran-canaria/easy",
    lat: 27.8253, lng: -15.7703
  },
  {
    id: "barranco-guiniguada-gc",
    nombre: "Barranco del Guiniguada – Las Palmas",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 9,
    descripcion: "Sendero urbano–natural desde Las Palmas hasta casi el Jardín Canario. El barranco más accesible de la isla, rehabilitado y bien señalizado.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/las-palmas-de-gran-canaria",
    lat: 28.1008, lng: -15.4267
  },
  {
    id: "firgas-circular-gc",
    nombre: "Circular de Firgas",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 12,
    descripcion: "Circular técnica por los alrededores de Firgas con tramos estrechos, expuestos y embarrados. Descargar mapa antes de salir. Paisaje muy variado.",
    enlace: "https://www.alltrails.com/es/spain/gran-canaria/hard",
    lat: 28.0594, lng: -15.5044
  },
  {
    id: "fortaleza-gc",
    nombre: "Patrimonio Arqueológico La Fortaleza",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 3,
    descripcion: "Ruta corta por el yacimiento arqueológico de La Fortaleza. Plantaciones de almendros y el lugar donde se conmemora la conquista de la isla.",
    enlace: "https://www.alltrails.com/es/spain/gran-canaria/easy",
    lat: 27.9794, lng: -15.5622
  },
  {
    id: "puerto-rico-trail-gc",
    nombre: "Puerto Rico – Palmeral Noruego",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 8,
    descripcion: "Ruta de trail muy expuesta con escaleras y piedra suelta desde Puerto Rico. Buenas vistas al mar y al interior de la isla. Apta para corredores.",
    enlace: "https://www.alltrails.com/es/spain/gran-canaria/long",
    lat: 27.7906, lng: -15.7072
  },
  {
    id: "playa-ingles-costa-gc",
    nombre: "Playa del Inglés – San Agustín (Costa)",
    isla: "Gran Canaria", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 5,
    descripcion: "Paseo costero accesible entre Playa del Inglés y el Balcón de San Agustín. Vistas al Atlántico, bares con terraza y ambiente playero.",
    enlace: "https://www.alltrails.com/es/spain/gran-canaria/long",
    lat: 27.7594, lng: -15.5608
  },

    // ╔══════════════════════════════════════════════╗
  // ║            LANZAROTE (30 rutas)              ║
  // ╚══════════════════════════════════════════════╝

  // ── TIMANFAYA ──
  {
    id: "caldera-blanca-lanzarote",
    nombre: "Caldera Blanca – Circular desde Tinajo",
    isla: "Lanzarote", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 10,
    descripcion: "La ruta libre más impresionante de Lanzarote. Coladas de lava hasta el cráter más grande de la isla (1.200 m de diámetro). Sin guía obligatorio.",
    enlace: "https://www.alltrails.com/es/spain/lanzarote/views",
    lat: 29.0077, lng: -13.7588
  },
  {
    id: "timanfaya-ruta-volcanes",
    nombre: "Ruta de los Volcanes – Timanfaya",
    isla: "Lanzarote", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 9,
    descripcion: "Sendero oficial del Parque Nacional (lun/mié/vie). Acceso entre cráteres, coladas de lava y ceniza. Requiere reserva previa obligatoria.",
    enlace: "https://www.miteco.gob.es/es/red-parques-nacionales/nuestros-parques/timanfaya/",
    lat: 29.0180, lng: -13.7630
  },
  {
    id: "timanfaya-golfo-litoral",
    nombre: "El Golfo – Ruta del Litoral",
    isla: "Lanzarote", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 3,
    descripcion: "Sendero lineal desde El Golfo hasta la Playa del Paso por la costa de lava solidificada. Ruta guiada oficial del PN de Timanfaya (miércoles).",
    enlace: "https://www.alltrails.com/es/spain/lanzarote/views",
    lat: 29.0433, lng: -13.8294
  },

  // ── NORTE – FAMARA Y CORONA ──
  {
    id: "monte-corona-lanzarote",
    nombre: "Volcán de La Corona – Desde Yé",
    isla: "Lanzarote", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 6,
    descripcion: "Circular desde Yé hasta el cráter del Monte Corona (609 m), el volcán que originó el mayor tubo volcánico de Europa. Vistas a La Graciosa.",
    enlace: "https://www.alltrails.com/es/spain/lanzarote",
    lat: 29.1714, lng: -13.4675
  },
  {
    id: "penas-chache-lanzarote",
    nombre: "Peñas del Chache – Punto más alto",
    isla: "Lanzarote", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 11,
    descripcion: "Ascenso al punto más alto de Lanzarote (670 m). Vistas espectaculares al acantilado de Famara y a La Graciosa. Sin sombra, llevar agua.",
    enlace: "https://www.alltrails.com/es/spain/lanzarote/views",
    lat: 29.1556, lng: -13.5422
  },
  {
    id: "famara-risco-lanzarote",
    nombre: "Risco de Famara – Mirador del Río",
    isla: "Lanzarote", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 5,
    descripcion: "Bajada por el Risco de Famara desde el Mirador del Río de César Manrique hasta la playa. Vistas a La Graciosa y pendiente pronunciada.",
    enlace: "https://www.alltrails.com/es/spain/lanzarote/views",
    lat: 29.2133, lng: -13.4781
  },
  {
    id: "haria-bosquecillo-lanzarote",
    nombre: "Haría – El Bosquecillo – Mirador",
    isla: "Lanzarote", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 12,
    descripcion: "Valle de las Mil Palmeras hasta El Bosquecillo, uno de los pocos bosques naturales de Lanzarote. Contraste total: palmeras, pinos y volcán.",
    enlace: "https://www.los-jameos.com/es/blog/rutas-de-senderismo-en-lanzarote",
    lat: 29.1317, lng: -13.4919
  },
  {
    id: "haria-mirador-lanzarote",
    nombre: "Haría – Subida al Mirador",
    isla: "Lanzarote", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 5,
    descripcion: "Desde el pueblo blanco de Haría hasta un mirador con vistas al océano. Camino cómodo con paisaje de palmeras canarias y vegetación norteña.",
    enlace: "https://www.alltrails.com/es/spain/lanzarote/easy",
    lat: 29.1317, lng: -13.4919
  },
  {
    id: "guatiza-famara-gr131",
    nombre: "GR 131 Lanzarote – Tramo Norte",
    isla: "Lanzarote", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 11,
    descripcion: "Tramo del GR 131 entre Guatiza y Famara por campos de cactus, malpaíses y el paisaje lunar del norte. Ruta oficial bien señalizada.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/teguise",
    lat: 29.0917, lng: -13.4883
  },
  {
    id: "santa-catalina-norte",
    nombre: "Ruta al Cráter de Santa Catalina",
    isla: "Lanzarote", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 7,
    descripcion: "7 km hasta el cráter de Santa Catalina por paisaje volcánico único. Solo 9 personas por salida. Ruta guiada muy valorada en el norte.",
    enlace: "https://www.lanzarote.com/guia-viaje/excursiones/senderismo/",
    lat: 29.1544, lng: -13.4856
  },

  // ── CENTRO Y GERIA ──
  {
    id: "la-geria-vinedos",
    nombre: "La Geria – Viñedos Volcánicos",
    isla: "Lanzarote", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 9,
    descripcion: "Ruta por la zona vinícola única en el mundo: uvas cultivadas en hoyos de ceniza volcánica negra. Combina senderismo y enoturismo en bodegas.",
    enlace: "https://www.elviajerofisgon.com/experiencias/guia-de-senderismo-en-lanzarote-rutas-senalizadas-y-consejos/",
    lat: 28.9819, lng: -13.6614
  },
  {
    id: "montana-colorada-lanzarote",
    nombre: "Montaña Colorada – Volcán Rojo",
    isla: "Lanzarote", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 3,
    descripcion: "Circular bien señalizado alrededor del volcán de color rojizo por óxidos de hierro. Con la Caldereta adyacente donde se cultivaron cereales.",
    enlace: "https://www.otroviajeenlamochila.com/senderismo-lanzarote/",
    lat: 28.9744, lng: -13.6667
  },
  {
    id: "caldera-cuervos",
    nombre: "Caldera de los Cuervos – Montaña Negra",
    isla: "Lanzarote", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 3,
    descripcion: "Vista única desde el interior del cráter de Los Cuervos. Bien conservado, rápido y con vistas panorámicas. Terreno polvoriento y seco.",
    enlace: "https://www.alltrails.com/es/spain/lanzarote/easy",
    lat: 28.9656, lng: -13.6922
  },
  {
    id: "montana-blanca-grietas",
    nombre: "Montaña Blanca – Las Grietas",
    isla: "Lanzarote", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 4,
    descripcion: "Sendero muy popular hasta Las Grietas, cañones volcánicos estrechos con paredes onduladas. Terreno resbaladizo, llevar calzado con grip.",
    enlace: "https://www.alltrails.com/es/spain/lanzarote/easy",
    lat: 28.9211, lng: -13.6733
  },
  {
    id: "montana-roja-sur",
    nombre: "Montaña Roja – Sur de Lanzarote",
    isla: "Lanzarote", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 3,
    descripcion: "Circular de 3 km por el cráter de Montaña Roja en el sur. Vistas a Playa Blanca, Papagayo y Faro Pechiguera. Ruta en sentido antihorario.",
    enlace: "https://www.otroviajeenlamochila.com/senderismo-lanzarote/",
    lat: 28.8617, lng: -13.8394
  },

  // ── LOS AJACHES Y SUR ──
  {
    id: "ajaches-cumbre-lanzarote",
    nombre: "Los Ajaches – Cima y Caldera Colorada",
    isla: "Lanzarote", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 14,
    descripcion: "Ruta dura al punto más alto de Los Ajaches. Caldera Colorada, la bomba volcánica más grande del mundo y vistas a toda la costa sur.",
    enlace: "https://www.otroviajeenlamochila.com/senderismo-lanzarote/",
    lat: 28.8672, lng: -13.7617
  },
  {
    id: "ajaches-barrancos-lanzarote",
    nombre: "Macizo de Los Ajaches – Barrancos",
    isla: "Lanzarote", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 10,
    descripcion: "Por la zona más antigua de Lanzarote: barrancos, playas vírgenes y miradores sobre el macizo. Paisaje semiárido con flora endémica.",
    enlace: "https://www.elviajerofisgon.com/experiencias/guia-de-senderismo-en-lanzarote-rutas-senalizadas-y-consejos/",
    lat: 28.8672, lng: -13.7617
  },
  {
    id: "playa-risco-lanzarote",
    nombre: "Risco de Famara – Playa del Risco",
    isla: "Lanzarote", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 5,
    descripcion: "Bajada desde el acantilado hasta la solitaria Playa del Risco. Vistas a La Graciosa en el descenso. Pendiente considerable, buen calzado.",
    enlace: "https://www.alltrails.com/es/spain/lanzarote/views",
    lat: 29.1983, lng: -13.5111
  },
  {
    id: "papagayo-playa-blanca",
    nombre: "Playa Blanca – Papagayo (Costera)",
    isla: "Lanzarote", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 8,
    descripcion: "Paseo costero desde Playa Blanca hasta las calas de Papagayo por acantilados volcánicos. Termina en la cala más espectacular del sur.",
    enlace: "https://www.alltrails.com/es/spain/lanzarote/easy",
    lat: 28.8625, lng: -13.8144
  },
  {
    id: "kayak-papagayo",
    nombre: "Kayak – Playas de Papagayo",
    isla: "Lanzarote", tipo: "Kayak", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 8,
    descripcion: "Ruta en kayak por las cristalinas calas de Papagayo con paradas para snorkel en fondos volcánicos. Una de las mejores experiencias acuáticas.",
    enlace: "https://kayakandwalkinlanzarote.com",
    lat: 28.8514, lng: -13.8278
  },

  // ── COSTA ESTE Y ARRECIFE ──
  {
    id: "costa-teguise-playas",
    nombre: "Costa Teguise – Ruta de Playas",
    isla: "Lanzarote", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 8,
    descripcion: "Circular costera desde Costa Teguise por Playa de las Cucharas, Los Charcos y Jabilillo. Zona turística con ambiente playero y accesos fáciles.",
    enlace: "https://www.alltrails.com/es/spain/lanzarote/easy",
    lat: 28.9983, lng: -13.5089
  },
  {
    id: "arrecife-charco-paseo",
    nombre: "Arrecife – Paseo Marítimo y Charco",
    isla: "Lanzarote", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 5,
    descripcion: "Agradable paseo por la capital: Parque Temático, Playa del Reducto, Castillo de San Gabriel y el encantador Charco de San Ginés.",
    enlace: "https://www.alltrails.com/es/spain/lanzarote/easy",
    lat: 28.9635, lng: -13.5478
  },
  {
    id: "puerto-calero-carmen",
    nombre: "Puerto Calero – Puerto del Carmen",
    isla: "Lanzarote", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 7,
    descripcion: "Sendero costero desde Puerto Calero hasta Puerto del Carmen por el Mirador del Puerto, Barranco Quiquere y Playa Pila de la Barrilla.",
    enlace: "https://www.alltrails.com/es/spain/lanzarote",
    lat: 28.9231, lng: -13.6694
  },

  // ── VALLES Y NORTE ──
  {
    id: "valles-norte-haria",
    nombre: "Valles del Norte – Haría",
    isla: "Lanzarote", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 10,
    descripcion: "Caminata guiada por los valles del norte de Lanzarote. Paisajes increíbles, fauna endémica y el mercado de Haría al finalizar. Traslados incluidos.",
    enlace: "https://www.lanzarote.com/guia-viaje/excursiones/senderismo/",
    lat: 29.1317, lng: -13.4919
  },
  {
    id: "cara-sur-lanzarote",
    nombre: "Cara Sur – Volcanes y Costa",
    isla: "Lanzarote", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 12,
    descripcion: "Ruta guiada por la cara sur de Lanzarote: volcanes, fauna y vistas espectaculares. Nivel de dificultad 4. 5 horas de recorrido intenso.",
    enlace: "https://www.lanzarote.com/guia-viaje/excursiones/senderismo/",
    lat: 28.9000, lng: -13.7200
  },
  {
    id: "santa-barbara-teguise",
    nombre: "Castillo de Santa Bárbara – Teguise",
    isla: "Lanzarote", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 3,
    descripcion: "Subida al Castillo de Santa Bárbara en lo alto de la Montaña de Guanapay. Vistas panorámicas a Teguise, la antigua capital, y la costa este.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/teguise",
    lat: 29.0583, lng: -13.5619
  },
  {
    id: "la-santa-tenesar",
    nombre: "La Santa – Tenesar",
    isla: "Lanzarote", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 7,
    descripcion: "Recorrido de 7 km por paisaje volcánico con acantilados pronunciados desde La Santa hasta Tenesar. Tranquilidad total y vistas al Atlántico.",
    enlace: "https://www.lanzarote.com/guia-viaje/excursiones/senderismo/",
    lat: 29.0694, lng: -13.6533
  },
  {
    id: "gr131-lanzarote-completo",
    nombre: "GR 131 Lanzarote – Travesía",
    isla: "Lanzarote", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "Varios días", distancia: 80,
    descripcion: "Travesía completa de norte a sur por Lanzarote. Volcanes, malpaíses, viñedos y costas. La gran ruta de largo recorrido de la isla.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/lanzarote",
    lat: 29.0917, lng: -13.4883
  },

    // ╔══════════════════════════════════════════════╗
  // ║          FUERTEVENTURA (20 rutas)            ║
  // ╚══════════════════════════════════════════════╝

  {
    id: "calderon-hondo-fuerte",
    nombre: "Calderón Hondo – Lajares (SL-FV 2)",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 5,
    descripcion: "La ruta más popular de Fuerteventura. Cráter perfectamente dibujado (278 m) con vistas a Lobos, Lanzarote y el Atlántico. Bien señalizada.",
    enlace: "https://www.alltrails.com/es/spain/fuerteventura",
    lat: 28.6572, lng: -13.9203
  },
  {
    id: "pico-zarza-fuerte",
    nombre: "Pico de la Zarza – Morro Jable (PR-FV 54)",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 13,
    descripcion: "Ascenso al punto más alto de Fuerteventura (807 m) con vistas a Cofete, las playas vírgenes y en días despejados hasta Gran Canaria.",
    enlace: "https://www.alltrails.com/es/spain/fuerteventura",
    lat: 28.0956, lng: -14.3783
  },
  {
    id: "cofete-gran-valle-fuerte",
    nombre: "Cofete – Gran Valle (PR-FV 55)",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 14,
    descripcion: "Una de las mejores rutas de Fuerteventura. Desciende por el Gran Valle hasta la playa salvaje de Cofete, 12 km de arena virgen. Muy exigente.",
    enlace: "https://www.komoot.com/es-es/guide/809/rutas-de-senderismo-en-fuerteventura",
    lat: 28.0703, lng: -14.3972
  },
  {
    id: "arco-penitas-fuerte",
    nombre: "Arco de las Peñitas – Barranco Malpaso (SL-FV 6)",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 5,
    descripcion: "Sendero hasta el Arco de las Peñitas por el barranco de Malpaso. Escalar piedras grandes, vegetación idílica y la Ermita de la Peña.",
    enlace: "https://www.alltrails.com/es/spain/fuerteventura",
    lat: 28.3939, lng: -14.1450
  },
  {
    id: "barranco-penitas-fuerte",
    nombre: "Betancuria – Barranco de Las Peñitas (SL-FV 27)",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 2,
    descripcion: "Ruta patrimonial por el cauce del río Palmas hasta la Ermita de la Virgen de la Peña, patrona de Fuerteventura. Los materiales más antiguos de Canarias.",
    enlace: "https://www.alltrails.com/es/spain/fuerteventura",
    lat: 28.3733, lng: -14.0567
  },
  {
    id: "gr131-fuerteventura",
    nombre: "GR 131 Fuerteventura – Travesía Completa",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "Varios días", distancia: 152,
    descripcion: "152 km atravesando toda la isla de norte a sur entre volcanes, viento y largas etapas sin sombra. La gran travesía de Fuerteventura.",
    enlace: "https://www.alltrails.com/es/spain/fuerteventura",
    lat: 28.3587, lng: -14.0531
  },
  {
    id: "tindaya-fuerte",
    nombre: "Montaña de Tindaya",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 5,
    descripcion: "Ascenso a la montaña sagrada de los majos con grabados podomorlos únicos. Vistas al norte de la isla. Lugar de alto valor arqueológico y espiritual.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/la-oliva",
    lat: 28.5919, lng: -13.9969
  },
  {
    id: "malpais-arena-fuerte",
    nombre: "Malpaís de la Arena – Norte",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 6,
    descripcion: "Circular por el cono volcánico del Malpaís de la Arena rodeado de coladas de lava. Vistas hacia Corralejo y el Atlántico. Flora resistente al clima árido.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/la-oliva",
    lat: 28.6208, lng: -13.9011
  },
  {
    id: "volcan-escanfraga-fuerte",
    nombre: "Volcán de Escanfraga",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 8,
    descripcion: "Ascenso al volcán de Escanfraga con coladas basálticas y lavas solidificadas. Vistas al norte de la isla y contraste con las extensas llanuras.",
    enlace: "https://sendaecoway.com/blog/rutas-en-fuerteventura-5-mejores-senderismo/",
    lat: 28.5722, lng: -14.0194
  },
  {
    id: "ajuy-cuevas-fuerte",
    nombre: "Ajuy – Caleta Negra y Cuevas Marinas",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 3,
    descripcion: "Ruta costera a las cuevas marinas de Ajuy y los acantilados de Caleta Negra. Los materiales más antiguos de Canarias a nivel del mar.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/pajara",
    lat: 28.3939, lng: -14.1692
  },
  {
    id: "kitesurf-sotavento",
    nombre: "Kitesurf – Laguna de Sotavento",
    isla: "Fuerteventura", tipo: "Surf", dificultad: "Media",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "Sede del Mundial de Windsurf y Kitesurf. Laguna con aguas tranquilas y viento constante. Uno de los mejores spots de estos deportes en el mundo.",
    enlace: "https://profuerte.com",
    lat: 28.1294, lng: -14.2292
  },
  {
    id: "corralejo-dunas-fuerte",
    nombre: "Parque Natural de Corralejo – Dunas",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 7,
    descripcion: "Sendero por las grandes dunas blancas del norte junto al Parque Natural de Corralejo. Paisaje desértico con vistas a Lobos y Lanzarote.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/la-oliva",
    lat: 28.7361, lng: -13.8636
  },
  {
    id: "sendero-costa-fuerte",
    nombre: "Costa de Gran Tarajal – Ruta Costera",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 9,
    descripcion: "Paseo costero por el sur entre playas tranquilas y acantilados de colores ocres. Zona alejada del turismo masivo con vistas al océano Atlántico.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/tuineje",
    lat: 28.2164, lng: -14.0133
  },
  {
    id: "playa-molinos-fuerte",
    nombre: "Playa de Los Molinos",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 6,
    descripcion: "Ruta hasta la Playa de Los Molinos con la Cueva Herminia visible solo en bajamar. Paisaje volcánico y tranquilidad absoluta en el noroeste.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/la-oliva",
    lat: 28.6069, lng: -13.9592
  },
  {
    id: "circular-lobos-fuerte",
    nombre: "Ruta Circular – Isla de Lobos",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 8,
    descripcion: "Circular completa por Lobos: La Caldera, El Puertito, Faro Martiño y Playa de La Concha. Requiere permiso gratuito y ferry desde Corralejo.",
    enlace: "https://www.alltrails.com/es/spain/fuerteventura",
    lat: 28.7506, lng: -13.8167
  },

  
  // ── FUERTEVENTURA (nuevas) ───────────────────────────────
  {
    id: "sendero-bayuyo-fuerte",
    nombre: "Sendero Bayuyo – Malpaís Norte",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 8,
    descripcion: "Ruta por el enorme malpaís de lava del norte, producto de una erupción hace 10.000 años. Vistas a Lanzarote, Lobos y el Atlántico desde los conos volcánicos.",
    enlace: "https://www.alltrails.com/es/spain/fuerteventura",
    lat: 28.6511, lng: -13.8869
  },
  {
    id: "barrancos-puerto-fuerte",
    nombre: "Barrancos de Puerto – Centro",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 11,
    descripcion: "Circular por los barrancos del centro de la isla con 268 m de desnivel. Paisaje variado entre malpaíses, barrancos y llanuras volcánicas poco frecuentadas.",
    enlace: "https://www.senderosbtt.com/rutas-gps/rutas-de-senderismo/rutas-de-senderismo-en-fuerteventura/",
    lat: 28.4167, lng: -14.0000
  },
  {
    id: "balcon-asomada-fuerte",
    nombre: "Balcón de La Asomada",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 10,
    descripcion: "Ruta con vistas panorámicas desde el Balcón de La Asomada. Paisaje desértico árido con vistas al Atlántico. Sendero poco frecuentado ideal para la tranquilidad.",
    enlace: "https://www.alltrails.com/es/spain/fuerteventura",
    lat: 28.3833, lng: -14.0167
  },
  {
    id: "degollada-facay-fuerte",
    nombre: "Degollada de Facay",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 17,
    descripcion: "Una de las rutas más largas y exigentes del centro de Fuerteventura con 520 m de desnivel. Atraviesa paisajes volcánicos remotos con gran sensación de aislamiento.",
    enlace: "https://www.senderosbtt.com/rutas-gps/rutas-de-senderismo/rutas-de-senderismo-en-fuerteventura/",
    lat: 28.3500, lng: -14.0333
  },
  {
    id: "risco-paso-jandia",
    nombre: "Risco del Paso – Parque Natural Jandía",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 13,
    descripcion: "Circular técnica no apta para vértigo por Atalayeja Grande, Morro del Rinconcillo y la Playa Barlovento. Ruinas guanchas y vistas al Atlántico sur.",
    enlace: "https://www.alltrails.com/es/spain/fuerteventura/hard",
    lat: 28.1833, lng: -14.2667
  },
  {
    id: "morro-jandia-cumbre",
    nombre: "Morro de La Zona – Cumbre Jandía",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 14,
    descripcion: "Ascenso por la sierra de Jandía al Morro de La Zona con vistas a Cofete y las playas vírgenes del sur. Paisaje abrupto con barrancos y montañas de 800 m.",
    enlace: "https://www.alltrails.com/es/spain/fuerteventura",
    lat: 28.0833, lng: -14.3667
  },
  {
    id: "tindaya-vallebron-tefia",
    nombre: "Tindaya – Vallebrón – Tefía (PR FV 9)",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 16,
    descripcion: "Larga circular desde Tindaya pasando por Vallebrón y Tefía. Montaña de Tindaya, Ermita de San Juan, Montaña de la Muda y vistas al norte de la isla.",
    enlace: "https://www.alltrails.com/es/spain/fuerteventura",
    lat: 28.5750, lng: -13.9917
  },
  {
    id: "playa-playitas-fuerte",
    nombre: "Las Playitas – Costa Sur Este",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 9,
    descripcion: "Circular con subibajas constantes y vistas a la costa este. Paisaje volcánico rojizo, playas poco frecuentadas y la sensación de explorar el sur más tranquilo.",
    enlace: "https://www.alltrails.com/es/spain/fuerteventura",
    lat: 28.2167, lng: -13.9833
  },
  {
    id: "sotavento-playa-circular",
    nombre: "Arenal Playa de Sotavento – Circular",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 8,
    descripcion: "Circular por el arenal de la Playa de Sotavento en Costa Calma. Laguna natural, dunas y el entorno donde se celebran los mundiales de kitesurf y windsurf.",
    enlace: "https://www.alltrails.com/es/spain/fuerteventura/easy",
    lat: 28.1500, lng: -14.2083
  },
  {
    id: "salinas-jandia-fuerte",
    nombre: "Salinas del Carmen – Ruta Costera",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 4,
    descripcion: "Paseo junto a las antiguas salinas del Carmen en el este de la isla. Museo de la Sal y paisaje costero único con aves limícolas en las balsas salineras.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/fuerteventura",
    lat: 28.2208, lng: -13.9972
  },
  {
    id: "islote-lobos-norte-fuerte",
    nombre: "Costa Norte – Corralejo",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 7,
    descripcion: "Ruta costera desde Corralejo por el GR-131 junto a las Dunas del Parque Natural, con vistas a Lobos y Lanzarote. Sendero de arena bien marcado.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/corralejo",
    lat: 28.7150, lng: -13.8700
  },
  {
    id: "montana-cardones-fuerte",
    nombre: "Montaña de Cardones – La Oliva",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 6,
    descripcion: "Ruta circular desde La Oliva hasta la Montaña de Cardones. Paisaje semidesértico poco frecuentado con vistas a los pueblos blancos del norte.",
    enlace: "https://www.alltrails.com/es/spain/fuerteventura/easy",
    lat: 28.6083, lng: -13.9583
  },
  {
    id: "betancuria-vega-rio-palmas",
    nombre: "Betancuria – Vega Río Palmas",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 6,
    descripcion: "Paseo histórico desde Betancuria, la antigua capital, hasta la Vega de Río Palmas por el barranco del Río Palmas. Agua, palmeras y la Ermita de la Peña.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/betancuria",
    lat: 28.4233, lng: -14.0567
  },
  {
    id: "gran-tarajal-caleta-fuerte",
    nombre: "Gran Tarajal – Caleta del Muerto",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 8,
    descripcion: "Ruta costera por acantilados volcánicos del sureste desde Gran Tarajal. Calas solitarias, colores rojizos y el silencio de la costa menos visitada.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/tuineje",
    lat: 28.2017, lng: -14.0017
  },
  {
    id: "pecenescal-barlovento-fuerte",
    nombre: "Barranco de Pecenescal – Playa Barlovento",
    isla: "Fuerteventura", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 12,
    descripcion: "Sendero GR-131/SL-FV11 técnico con tramos de mucho desnivel hasta la Playa Barlovento. No apta para vértigo. Paisaje salvaje del Parque Natural de Jandía.",
    enlace: "https://www.alltrails.com/es/spain/fuerteventura/hard",
    lat: 28.1167, lng: -14.3333
  },

    // ╔══════════════════════════════════════════════╗
  // ║             LA PALMA (18 rutas)              ║
  // ╚══════════════════════════════════════════════╝

  {
    id: "ruta-volcanes-lapalma",
    nombre: "Ruta de los Volcanes – GR 131",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "Día completo", distancia: 24,
    descripcion: "Ruta mítica desde el Refugio del Pilar por cráteres volcánicos hasta Fuencaliente. El Cráter del Hoyo Negro, vistas al Teide y la Gomera.",
    enlace: "https://www.alltrails.com/es/spain/la-palma",
    lat: 28.5256, lng: -17.8589
  },
  {
    id: "tajogaite-erupcion",
    nombre: "Volcán Tajogaite – Erupción 2021",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 10,
    descripcion: "Paisaje lunar reciente único en Europa. Coladas y el nuevo delta volcánico formado en 2021. La más impresionante y reciente de las rutas canarias.",
    enlace: "https://visitlapalma.es/senderos-la-palma/",
    lat: 28.6114, lng: -17.8644
  },
  {
    id: "caldera-taburiente-brecitos",
    nombre: "Los Brecitos – Cascada de Colores",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 14,
    descripcion: "Descenso desde Los Brecitos (taxi 4x4) por el Parque Nacional hasta la Cascada de Colores y el Barranco de las Angustias. Espectacular.",
    enlace: "https://guiaislascanarias.com/la-palma/rutas-senderos-la-palma/",
    lat: 28.7118, lng: -17.8636
  },
  {
    id: "nacientes-marcos-cordero",
    nombre: "Nacientes de Marcos y Cordero – Túneles",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 13,
    descripcion: "Sendero PR-LP 6 por el canal con 13 túneles. El túnel 12 tiene una cascada interior. Laurisilva increíble en el descenso. Requiere frontal y chubasquero.",
    enlace: "https://guiaislascanarias.com/la-palma/rutas-senderos-la-palma/",
    lat: 28.7600, lng: -17.8300
  },
  {
    id: "tazacorte-roque-muchachos",
    nombre: "Tazacorte – Roque de los Muchachos",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Extrema",
    duracion: "Día completo", distancia: 28,
    descripcion: "Más de 2.400 m de ascenso continuo desde el mar hasta la cima de La Palma (2.423 m). Una de las rutas más duras de todo el archipiélago.",
    enlace: "https://visitlapalma.es/senderos-la-palma/",
    lat: 28.6401, lng: -17.9356
  },
  {
    id: "roque-muchachos-cumbre",
    nombre: "Roque de los Muchachos – Cumbre GR 131",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 10,
    descripcion: "Tramo del GR 131 por la cumbre (2.423 m) entre observatorios. Desde el Pico de la Cruz al Roque, con vistas a todas las islas del archipiélago.",
    enlace: "https://guiaislascanarias.com/la-palma/rutas-senderos-la-palma/",
    lat: 28.7544, lng: -17.8833
  },
  {
    id: "tilos-lapalma",
    nombre: "Ruta de Los Tilos – Bosque Sagrado",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 8,
    descripcion: "Bosque de laurisilva Reserva de la Biosfera con el Salto de los Tilos. Vegetación endémica exuberante y sonido del agua constante.",
    enlace: "https://sendaecoway.com/blog/rutas-la-palma-5-mejores-senderismo/",
    lat: 28.7803, lng: -17.7886
  },
  {
    id: "tablado-gallegos-lapalma",
    nombre: "El Tablado – Gallegos (Costa Norte)",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 9,
    descripcion: "Costa norte salvaje entre barrancos y acantilados, plantaciones en terrazas y caseríos remotos. Gran sensación de aislamiento. Solo ida.",
    enlace: "https://www.s-cape.es/blog/la-palma-rutas-senderismo",
    lat: 28.7900, lng: -17.8050
  },
  {
    id: "pico-sabina-nieve-lp",
    nombre: "Pico de La Sabina – Pico de la Nieve (PR-LP 3)",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 12,
    descripcion: "Circular por los picos del sur de la cumbre. Bosques de pinos y matorrales, vistas a Tenerife y La Gomera. Mejor en sentido antihorario.",
    enlace: "https://www.alltrails.com/es/spain/la-palma",
    lat: 28.5900, lng: -17.8394
  },
  {
    id: "caldera-taburiente-integral",
    nombre: "Travesía Integral – Caldera de Taburiente",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "Varios días", distancia: 35,
    descripcion: "Travesía completa del Parque Nacional. Barrancos, cascadas, paredes de 2.000 m y uno de los paisajes más impresionantes de Canarias.",
    enlace: "https://visitlapalma.es/senderos-la-palma/",
    lat: 28.7118, lng: -17.8636
  },
  {
    id: "san-antonio-volcan-lapalma",
    nombre: "Volcán de San Antonio – Fuencaliente",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 2,
    descripcion: "Sendero muy accesible alrededor del cráter del Volcán de San Antonio. Vistas al nuevo delta del Tajogaite y al faro de Fuencaliente.",
    enlace: "https://visitlapalma.es/senderos-la-palma/",
    lat: 28.4578, lng: -17.8453
  },
  {
    id: "camino-faya-lapalma",
    nombre: "Camino de la Faya – Medianías Este",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 14,
    descripcion: "Sendero panorámico por las medianías del este conectando los pinares. Vistas al Atlántico y a los valles. Flora endémica de medianías.",
    enlace: "https://visitlapalma.es/senderos-la-palma/",
    lat: 28.5614, lng: -17.7972
  },

  
  // ── LA PALMA (nuevas) ────────────────────────────────────
  {
    id: "cubo-galga-lapalma",
    nombre: "El Cubo de La Galga – PR LP 5.1",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 7,
    descripcion: "Sendero por el bosque más húmedo del noreste de La Palma. Laurisilva densa, helechos gigantes y el sonido constante del agua en el barranco de La Galga.",
    enlace: "https://www.alltrails.com/es/spain/la-palma",
    lat: 28.7694, lng: -17.7819
  },
  {
    id: "birigoyo-pilar-lapalma",
    nombre: "Refugio El Pilar – Pico Birigoyo",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 8,
    descripcion: "Ascenso al Pico Birigoyo (1.800 m) desde el Refugio del Pilar por el GR 131. Vistas a la Ruta de los Volcanes y a la Caldera de Taburiente desde la cima.",
    enlace: "https://www.alltrails.com/es/spain/la-palma",
    lat: 28.5500, lng: -17.8500
  },
  {
    id: "cumbrecita-caldera-lp",
    nombre: "Mirador de La Cumbrecita – Caldera",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 6,
    descripcion: "Ruta panorámica desde el Mirador de La Cumbrecita al borde de la Caldera de Taburiente. Vistas aéreas al interior del parque. Requiere reserva de aparcamiento.",
    enlace: "https://visitlapalma.es/senderos-la-palma/",
    lat: 28.7000, lng: -17.8750
  },
  {
    id: "charco-azul-lapalma",
    nombre: "Charco Azul – Piscinas Naturales",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 3,
    descripcion: "Paseo corto hasta las piscinas naturales volcánicas de Charco Azul en el norte. Agua turquesa y tranquilidad absoluta rodeada de acantilados de lava.",
    enlace: "https://visitlapalma.es/senderos-la-palma/",
    lat: 28.7917, lng: -17.8444
  },
  {
    id: "barranco-angustias-lp",
    nombre: "Barranco de Las Angustias",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 12,
    descripcion: "Descenso por el cauce del Barranco de Las Angustias, salida de la Caldera de Taburiente. Cruzar el río varias veces sobre piedras. Tramo final muy exigente.",
    enlace: "https://guiaislascanarias.com/la-palma/rutas-senderos-la-palma/",
    lat: 28.6886, lng: -17.9283
  },
  {
    id: "pico-nieves-sabina-lp",
    nombre: "Pico de La Sabina – Pico de la Nieve (PR LP 3)",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 11,
    descripcion: "Circular bien marcada por los picos del sur de la cumbre. Bosques de pinos, chovas piquirrojas y vistas a Tenerife y La Gomera en días despejados.",
    enlace: "https://www.alltrails.com/es/spain/la-palma",
    lat: 28.5900, lng: -17.8394
  },
  {
    id: "pico-cruz-roque-lp",
    nombre: "Pico de la Cruz – Roque de los Muchachos (GR 131)",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 10,
    descripcion: "Tramo del GR 131 por la crestería a más de 2.300 m. Vistas a la Caldera, Mirador de Los Andenes y el observatorio astronómico más importante del hemisferio norte.",
    enlace: "https://guiaislascanarias.com/la-palma/rutas-senderos-la-palma/",
    lat: 28.7544, lng: -17.8833
  },
  {
    id: "tablado-gallegos-lp",
    nombre: "El Tablado – Gallegos (Costa Norte)",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 9,
    descripcion: "Costa norte salvaje entre barrancos, acantilados y caseríos remotos. Gran sensación de aislamiento. Hacer solo ida y volver en guagua desde Gallegos.",
    enlace: "https://www.s-cape.es/blog/la-palma-rutas-senderismo",
    lat: 28.7900, lng: -17.8050
  },
  {
    id: "revenaton-cumbrenorte-lp",
    nombre: "Pico de las Nieves – Reventón (GR 131)",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 8,
    descripcion: "Ruta de altura desde el Pico de las Nieves (2.239 m) hasta el Paso del Reventón. Cornisas con vistas espectaculares. No apta para vértigo. Llevar abrigo.",
    enlace: "https://www.s-cape.es/blog/la-palma-rutas-senderismo",
    lat: 28.7200, lng: -17.8600
  },
  {
    id: "marcos-cordero-tuneles-lp",
    nombre: "Nacientes de Marcos y Cordero – 13 Túneles",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 13,
    descripcion: "El sendero PR-LP 6 más emblemático de La Palma. 13 túneles por canal de agua, cascada en el túnel 12. Requiere frontal y chubasquero. Reserva de aparcamiento.",
    enlace: "https://guiaislascanarias.com/la-palma/rutas-senderos-la-palma/",
    lat: 28.7600, lng: -17.8300
  },
  {
    id: "barranco-los-tilos-lp",
    nombre: "Bosque de Los Tilos – Reserva",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 5,
    descripcion: "Paseo por la Reserva de la Biosfera de Los Tilos. Laurisilva Patrimonio de la Humanidad con la cascada del Salto de los Tilos. Sendero llano y muy verde.",
    enlace: "https://visitlapalma.es/senderos-la-palma/",
    lat: 28.7803, lng: -17.7886
  },
  {
    id: "puntalarga-fuencaliente-lp",
    nombre: "Playa Puntalarga – Fuencaliente",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 3,
    descripcion: "Paseo hasta la Playa de Puntalarga, pequeña bahía de arena negra volcánica en Fuencaliente. Aguas tranquilas perfectas para baño. Junto al Volcán de San Antonio.",
    enlace: "https://visitlapalma.es/senderos-la-palma/",
    lat: 28.4483, lng: -17.8417
  },
  {
    id: "hoyo-negro-volcan-lp",
    nombre: "Cráter del Hoyo Negro – Ruta Volcanes",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 10,
    descripcion: "Tramo central de la Ruta de los Volcanes con el imponente Cráter del Hoyo Negro. Colores negros y rojizos, lava solidificada y el silencio de los volcanes.",
    enlace: "https://www.alltrails.com/es/spain/la-palma",
    lat: 28.5100, lng: -17.8433
  },
  {
    id: "jedey-los-llanos-lp",
    nombre: "Jedey – Los Llanos de Aridane",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 11,
    descripcion: "Ruta por los barrancos del Valle de Aridane con vistas a las coladas del Tajogaite 2021. Plataneras, senderos históricos y paisaje en regeneración volcánica.",
    enlace: "https://visitlapalma.es/senderos-la-palma/",
    lat: 28.6200, lng: -17.9100
  },
  {
    id: "barranco-bombas-agua-lp",
    nombre: "Barranco de Las Bombas de Agua",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 6,
    descripcion: "Circular por el norte de La Palma entre plataneras, barrancos y el contraste entre vegetación exuberante y acantilados costeros. Sendero poco frecuentado.",
    enlace: "https://visitlapalma.es/senderos-la-palma/",
    lat: 28.7500, lng: -17.8200
  },
  {
    id: "punta-lava-fuencaliente-lp",
    nombre: "Punta de La Lava – Delta Tajogaite",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 5,
    descripcion: "Sendero por el delta volcánico creado en 2021, donde la lava llegó al mar y creó 50 hectáreas de tierra nueva. El paisaje más reciente y único de Europa.",
    enlace: "https://visitlapalma.es/senderos-la-palma/",
    lat: 28.4400, lng: -17.8600
  },
  {
    id: "mirador-lomo-chozas-lp",
    nombre: "Mirador Lomo de Las Chozas – Caldera",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 14,
    descripcion: "Sendero con tramos junto a cornisas del borde de la Caldera de Taburiente hasta el Mirador de Los Roques. Precaución en este tramo por el acantilado.",
    enlace: "https://visitlapalma.es/senderos-la-palma/",
    lat: 28.7100, lng: -17.8800
  },
  {
    id: "malena-costa-lp",
    nombre: "Ruta Costera Norte – Barlovento",
    isla: "La Palma", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 12,
    descripcion: "Costa norte salvaje de La Palma desde Barlovento. Acantilados, cuevas marinas y el paisaje atlántico más bravo de la isla. Poco señalizado, descargar mapa GPS.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/la-palma",
    lat: 28.7833, lng: -17.8000
  },

    // ╔══════════════════════════════════════════════╗
  // ║             LA GOMERA (10 rutas)             ║
  // ╚══════════════════════════════════════════════╝

  {
    id: "garajonay-cima-gomera",
    nombre: "Alto de Garajonay – Cima del Parque Nacional",
    isla: "La Gomera", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 9,
    descripcion: "Cima del Parque Nacional (1.487 m) por laurisilva milenaria. Vistas a todas las islas en días claros. El bosque más antiguo de Europa.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/alajeró",
    lat: 28.1142, lng: -17.2456
  },
  {
    id: "gr131-lagomera",
    nombre: "GR 131 La Gomera – Travesía",
    isla: "La Gomera", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "Día completo", distancia: 36,
    descripcion: "Atraviesa el Parque Nacional de Garajonay y los barrancos más profundos de La Gomera. Jornada exigente por la joya verde del archipiélago.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/san-sebastian-de-la-gomera",
    lat: 28.1073, lng: -17.2452
  },
  {
    id: "portelas-monte-agua",
    nombre: "Las Portelas – Monte del Agua",
    isla: "La Gomera", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 14,
    descripcion: "Laurisilva muy bien conservada en el Parque Rural de Teno gomero. Vistas al norte de La Gomera y senderos de niebla únicos en Europa.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/vallehermoso",
    lat: 28.1847, lng: -17.2767
  },
  {
    id: "barranco-valle-gran-rey",
    nombre: "Barranco de Valle Gran Rey",
    isla: "La Gomera", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 12,
    descripcion: "Descenso por el barranco más profundo de La Gomera hasta las playas de Valle Gran Rey. Paredes verticales y vegetación exuberante.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/valle-gran-rey",
    lat: 28.0947, lng: -17.3253
  },
  {
    id: "roque-cano-gomera",
    nombre: "Roque Cano – Vallehermoso",
    isla: "La Gomera", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 7,
    descripcion: "Ascenso hasta la formación basáltica que domina Vallehermoso. Vistas al norte de La Gomera y al océano Atlántico desde el roque.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/vallehermoso",
    lat: 28.1878, lng: -17.2633
  },
  {
    id: "gr132-lagomera",
    nombre: "GR 132 La Gomera – Vuelta a la Costa",
    isla: "La Gomera", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "Varios días", distancia: 130,
    descripcion: "Gran ruta que rodea toda la isla por la costa norte. Acantilados, barrancos y pueblos remotos. Uno de los caminos más épicos de Canarias.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/san-sebastian-de-la-gomera",
    lat: 28.0833, lng: -17.1133
  },
  {
    id: "lagomera-benchijigua",
    nombre: "Benchijigua – Barranco Seco",
    isla: "La Gomera", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 11,
    descripcion: "Ruta por el corazón de La Gomera hasta Benchijigua, uno de los paisajes más dramáticos con roques basálticos y vegetación de medianías.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/alajeró",
    lat: 28.0833, lng: -17.2167
  },
  {
    id: "kayak-gomera",
    nombre: "Kayak – Costa Sur La Gomera",
    isla: "La Gomera", tipo: "Kayak", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 10,
    descripcion: "Ruta en kayak por la costa sur de La Gomera con acantilados, cuevas marinas y aguas cristalinas. Fauna marina abundante.",
    enlace: "https://adventurecapital.es",
    lat: 28.0700, lng: -17.1367
  },

  
  // ── LA GOMERA (nuevas) ───────────────────────────────────
  {
    id: "laguna-grande-garajonay",
    nombre: "Laguna Grande – Circular Garajonay",
    isla: "La Gomera", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 6,
    descripcion: "Circular desde La Laguna Grande por el Parque Nacional. Bosque de laurisilva con musgo y helechos gigantes. Ruta familiar bien señalizada y muy fotogénica.",
    enlace: "https://www.alltrails.com/es/spain/la-gomera",
    lat: 28.1153, lng: -17.2369
  },
  {
    id: "creces-garajonay-ruta5",
    nombre: "Las Creces – Circular Garajonay (Ruta 5)",
    isla: "La Gomera", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 8,
    descripcion: "El paraje de Las Creces por el bosque de laurisilva más pristino. Los vecinos venían a recolectar leña. Atmósfera de niebla, musgos y árboles centenarios.",
    enlace: "https://www.alltrails.com/es/spain/la-gomera",
    lat: 28.1100, lng: -17.2500
  },
  {
    id: "raso-bruma-gomera",
    nombre: "Raso de La Bruma – Fayal Brezal",
    isla: "La Gomera", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 3,
    descripcion: "Paseo corto pero mágico por fayal-brezal atlántico. Árboles con líquenes, helechos y niebla persistente. Ideal para familias o como calentamiento del día.",
    enlace: "https://trotandomundos.com/los-mejores-senderos-de-la-gomera/",
    lat: 28.1200, lng: -17.2400
  },
  {
    id: "canada-jorge-gomera",
    nombre: "Cañada de Jorge",
    isla: "La Gomera", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 4,
    descripcion: "Corta ruta por fayal-brezal en el sur del Parque de Garajonay. Canal histórico de agua en el fondo del barranco. Perfecta para completar la ruta del Raso.",
    enlace: "https://trotandomundos.com/los-mejores-senderos-de-la-gomera/",
    lat: 28.1180, lng: -17.2420
  },
  {
    id: "alajero-playa-santiago",
    nombre: "Alajeró – Playa de Santiago (Camino de La Costa)",
    isla: "La Gomera", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 10,
    descripcion: "Camino Natural de la Costa entre Alajeró y Playa de Santiago. Barrancos profundos, bancales históricos y el Roque Agando dominando el horizonte.",
    enlace: "https://trotandomundos.com/los-mejores-senderos-de-la-gomera/",
    lat: 28.0608, lng: -17.2192
  },
  {
    id: "barranco-arure-gomera",
    nombre: "Barranco de Arure – Valle Gran Rey",
    isla: "La Gomera", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 7,
    descripcion: "Descenso técnico por el Barranco de Arure con trepadas y saltos entre piedras. El paisaje cambia de palmeras a laurisilva húmeda. Requiere buen calzado.",
    enlace: "https://www.alltrails.com/es/spain/la-gomera/short",
    lat: 28.0947, lng: -17.3253
  },
  {
    id: "barranco-guarimiar-gomera",
    nombre: "Barranco de Guarimiar – Imada",
    isla: "La Gomera", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 11,
    descripcion: "Desde Imada (1.200 m) bajando por bancales de piedra seca y laderas escarpadas hacia el Barranco de Guarimiar. Arquitectura rural única en arquitectura gomera.",
    enlace: "https://www.alltrails.com/es/spain/la-gomera",
    lat: 28.0833, lng: -17.2167
  },
  {
    id: "roque-agando-mirador",
    nombre: "Roque Agando – Mirador",
    isla: "La Gomera", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 2,
    descripcion: "Corto paseo hasta el mirador del Roque Agando, el monolito basáltico más famoso de La Gomera. Vistas al sur de la isla y al barranco de Santiago.",
    enlace: "https://www.alltrails.com/es/spain/la-gomera",
    lat: 28.0994, lng: -17.2156
  },
  {
    id: "circular-garajonay-18",
    nombre: "Gran Circular Garajonay (Ruta 18)",
    isla: "La Gomera", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "Día completo", distancia: 16,
    descripcion: "Circular completa por el corazón del Parque Nacional. Pajarito, Contadero, Mimbreras, Cedro, Reventón Oscuro y Tajaqué. La ruta más completa del parque.",
    enlace: "https://trotandomundos.com/los-mejores-senderos-de-la-gomera/",
    lat: 28.1073, lng: -17.2452
  },
  {
    id: "igualero-garajonay-cima",
    nombre: "Igualero – Alto de Garajonay",
    isla: "La Gomera", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 5,
    descripcion: "Ascenso al Alto de Garajonay desde Igualero por el GR 131 y el Camino El Contadero. Vistas a La Palma, Tenerife, El Hierro y La Palma desde la cima.",
    enlace: "https://www.alltrails.com/es/spain/la-gomera",
    lat: 28.1100, lng: -17.2500
  },
  {
    id: "vallehermoso-tamargada-gomera",
    nombre: "Vallehermoso – Tamargada – Garabato",
    isla: "La Gomera", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 10,
    descripcion: "Circular por los alrededores de Vallehermoso. Escaleras seminaturales talladas en roca, embalse de la Encantaderos y vegetación que invade los senderos.",
    enlace: "https://www.alltrails.com/es/spain/la-gomera",
    lat: 28.1878, lng: -17.2633
  },
  {
    id: "los-roques-gomera",
    nombre: "Los Roques – Mirador Paisaje Lunar",
    isla: "La Gomera", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 6,
    descripcion: "Ruta entre los Roques de La Gomera — Agando, Zarcita, Ojila y La Caldera — formaciones basálticas únicas en el interior de la isla. Muy fotogénico.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/la-gomera",
    lat: 28.0950, lng: -17.2200
  },
  {
    id: "playa-santiago-alajero-gomera",
    nombre: "Playa de Santiago – Trekking Costa Sur",
    isla: "La Gomera", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 9,
    descripcion: "Ruta costera desde Playa de Santiago hacia el este. Acantilados volcánicos, playas de arena negra y el contraste árido del sur de la isla.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/la-gomera",
    lat: 28.0600, lng: -17.1900
  },
  {
    id: "san-sebastian-garajonay-gomera",
    nombre: "San Sebastián – Garajonay (GR 132 tramo)",
    isla: "La Gomera", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 14,
    descripcion: "Ascenso desde la capital San Sebastián hasta el Parque Nacional de Garajonay por caminos históricos. Aldeas, bancales y bosques en el camino a las nubes.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/san-sebastian-de-la-gomera",
    lat: 28.0919, lng: -17.1119
  },
  {
    id: "drago-milenario-gomera",
    nombre: "Drago de Agulo – Circular",
    isla: "La Gomera", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 5,
    descripcion: "Ruta desde Agulo por senderos entre plataneras y dragos hasta miradores con vistas al Teide. El pueblo más fotogénico de La Gomera con arquitectura única.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/agulo",
    lat: 28.1911, lng: -17.1939
  },

    {
    id: "cedro-chorro-gomera",
    nombre: "El Cedro – Chorro del Cedro",
    isla: "La Gomera", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 7,
    descripcion: "Circular por laurisilva en el corazón de Garajonay. El Chorro del Cedro es la única cascada permanente de La Gomera, en un entorno de bosque mágico y húmedo.",
    enlace: "https://www.alltrails.com/es/spain/la-gomera",
    lat: 28.1167, lng: -17.2333
  },
  {
    id: "chipude-valle-gran-rey",
    nombre: "Chipude – Valle Gran Rey (GR-132)",
    isla: "La Gomera", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 12,
    descripcion: "Desde Chipude con vistas a La Fortaleza, bajada por La Matanza y El Cercado hasta el Barranco de Argaga y las playas de Valle Gran Rey.",
    enlace: "https://www.s-cape.es/blog/la-gomera-rutas-senderismo",
    lat: 28.0628, lng: -17.2892
  },
  {
    id: "vallehermoso-hermigua-gomera",
    nombre: "Vallehermoso – Hermigua por Garajonay",
    isla: "La Gomera", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 12,
    descripcion: "Conecta dos de los pueblos más bonitos del norte atravesando el Parque Nacional de Garajonay. Desnivel de 600 m, laurisilva densa y vistas al norte de la isla.",
    enlace: "https://www.s-cape.es/blog/la-gomera-rutas-senderismo",
    lat: 28.1878, lng: -17.2633
  },
  {
    id: "alajero-playa-santiago",
    nombre: "Alajeró – Playa de Santiago (Ruta 7)",
    isla: "La Gomera", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 11,
    descripcion: "Camino Natural de la Costa desde Alajeró hasta Playa de Santiago. Barrancos, acantilados y caseríos históricos. El sur más salvaje de La Gomera.",
    enlace: "https://trotandomundos.com/los-mejores-senderos-de-la-gomera/",
    lat: 28.0408, lng: -17.2317
  },
  {
    id: "raso-bruma-gomera",
    nombre: "Raso de la Bruma – Circular Garajonay",
    isla: "La Gomera", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 3,
    descripcion: "Paseo fácil por fayal-brezal y laurisilva desde el área recreativa del Raso de la Bruma. Ideal para familias. Árboles cubiertos de musgo y helechos gigantes.",
    enlace: "https://www.alltrails.com/es/spain/la-gomera/short",
    lat: 28.1100, lng: -17.2400
  },
  {
    id: "canada-jorge-gomera",
    nombre: "Cañada de Jorge – Garajonay",
    isla: "La Gomera", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 4,
    descripcion: "Sendero corto por fayal-brezal en la vertiente sur de Garajonay. Canal histórico de agua en el fondo del barranco. Complemento perfecto al Raso de la Bruma.",
    enlace: "https://trotandomundos.com/los-mejores-senderos-de-la-gomera/",
    lat: 28.1050, lng: -17.2450
  },
  {
    id: "las-hayas-vallehermoso-gr131",
    nombre: "Las Hayas – Vallehermoso (GR 131)",
    isla: "La Gomera", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 13,
    descripcion: "Tramo del GR 131 por el norte de La Gomera con bajada por escaleras naturales talladas en la roca. Vistas a la Presa de la Encantadora y al océano.",
    enlace: "https://es.wikiloc.com/rutas-senderismo/la-gomera-gr-131-las-hayas-vallehermoso-21492518",
    lat: 28.1303, lng: -17.2761
  },

    // ╔══════════════════════════════════════════════╗
  // ║              EL HIERRO (10 rutas)            ║
  // ╚══════════════════════════════════════════════╝

  {
    id: "camino-jinama",
    nombre: "Camino de Jinama",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Extrema",
    duracion: "4-8 horas", distancia: 14,
    descripcion: "Ruta legendaria: 1.000 m de desnivel en 4 km. Camino histórico de las mudadas estacionales. Vista espectacular sobre El Golfo desde la ermita.",
    enlace: "https://www.spain.info/es/descubrir-espana/canarias-rutas-senderismo/",
    lat: 27.7914, lng: -18.0311
  },
  {
    id: "gr131-hierro",
    nombre: "GR 131 El Hierro – Travesía",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "Varios días", distancia: 70,
    descripcion: "Travesía que cruza la isla más pequeña y sostenible de Canarias. Bosques de sabinas milenarias, volcanes y costa salvaje impresionante.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/valverde",
    lat: 27.8139, lng: -17.9147
  },
  {
    id: "malpaso-cumbre",
    nombre: "Malpaso – Cima de El Hierro",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 12,
    descripcion: "Ascenso al punto más alto de El Hierro (1.501 m). Bosques de pino canario y sabinas milenarias. Vistas a La Palma y La Gomera.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/el-hierro",
    lat: 27.7347, lng: -18.0197
  },
  {
    id: "camino-virgen-hierro",
    nombre: "Camino de La Virgen de Los Reyes",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 16,
    descripcion: "Ruta de peregrinación histórica hasta la ermita de La Virgen de Los Reyes. Bosques de sabinas y laurisilva en entorno totalmente protegido.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/el-hierro",
    lat: 27.7700, lng: -18.1500
  },
  {
    id: "buceo-restinga",
    nombre: "Buceo – Reserva Marina La Restinga",
    isla: "El Hierro", tipo: "Submarinismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 0,
    descripcion: "Uno de los mejores spots de buceo de Europa. Aguas con 50 m de visibilidad, tortugas marinas, manta rayas y fondos volcánicos únicos.",
    enlace: "https://adventurecapital.es",
    lat: 27.6411, lng: -17.9867
  },
  {
    id: "roque-bonanza-hierro",
    nombre: "Roque de La Bonanza – Frontera",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 8,
    descripcion: "Sendero por el Parque Rural de Frontera hasta el Roque de La Bonanza. Paisaje volcánico único y vistas al Mar de Las Calmas.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/el-hierro",
    lat: 27.8025, lng: -18.0544
  },
  {
    id: "charco-manso-hierro",
    nombre: "Charco Manso – Costa Norte",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 5,
    descripcion: "Ruta costera hasta la piscina natural de Charco Manso en el extremo norte. Acceso por sendero entre malpaíses. Baño en aguas cristalinas.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/el-hierro",
    lat: 27.8322, lng: -17.9261
  },
  {
    id: "sabinosa-hierro",
    nombre: "Sabinosa – Bosque de Sabinas Milenarias",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 7,
    descripcion: "Sendero entre sabinas milenarias retorcidas por el viento, uno de los árboles más longevos de Canarias. Paisaje mágico y único en el mundo.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/el-hierro",
    lat: 27.7933, lng: -18.1375
  },

  
  // ── EL HIERRO (nuevas) ───────────────────────────────────
  {
    id: "llania-elhierro",
    nombre: "La Llanía – Sabinas Milenarias",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 5,
    descripcion: "El bosque de sabinas milenarias más impresionante de Canarias. Árboles retorcidos por el viento durante siglos. Paisaje mágico único en el Mediterráneo.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/el-hierro",
    lat: 27.7850, lng: -18.0783
  },
  {
    id: "el-golfo-circular-hierro",
    nombre: "El Golfo – Circular desde Las Puntas",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 10,
    descripcion: "Circular por el caldero volcánico de El Golfo, la bahía más hermosa de El Hierro. Vides, plataneras y el contraste entre la lava negra y el mar azul.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/frontera",
    lat: 27.8050, lng: -18.0694
  },
  {
    id: "punta-naos-hierro",
    nombre: "Punta Naos – Costa Sureste",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 6,
    descripcion: "Ruta costera por la Reserva Marina de La Restinga hasta Punta Naos. Piscinas naturales, acantilados volcánicos y la mayor concentración de estrellas de Europa.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/el-hierro",
    lat: 27.6500, lng: -17.9750
  },
  {
    id: "tiñor-circular-hierro",
    nombre: "Tiñor – Circular por Los Alisios",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 7,
    descripcion: "Circular por el bosque de Los Alisios desde Tiñor. Laurisilva húmeda y bosque de hayas con los garoeos, árboles que capturan agua de las nubes.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/valverde",
    lat: 27.7903, lng: -17.9503
  },
  {
    id: "valverde-mercado-hierro",
    nombre: "Valverde – Mirador de La Peña",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 4,
    descripcion: "Paseo desde Valverde al famoso Mirador de La Peña diseñado por César Manrique. Vistas aéreas al El Golfo y a toda la bahía desde 700 m de altura.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/valverde",
    lat: 27.8139, lng: -17.9147
  },
  {
    id: "roques-salmor-hierro",
    nombre: "Roques de Salmor – Costa Norte",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 7,
    descripcion: "Ruta costera hasta los Roques de Salmor, hábitat del lagarto gigante endémico de El Hierro. Acantilados volcánicos y el mar abierto del Atlántico norte.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/el-hierro",
    lat: 27.8400, lng: -17.9100
  },
  {
    id: "pinar-hierro-circular",
    nombre: "El Pinar – Circular por el Bosque",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 8,
    descripcion: "Circular tranquila por el Pinar de El Hierro, uno de los bosques de pino canario más densos del archipiélago. Fácil, sombreada y perfecta para familias.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/el-hierro",
    lat: 27.7200, lng: -17.9800
  },
  {
    id: "pozo-la-salud-hierro",
    nombre: "Pozo de La Salud – Costa Oeste",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 6,
    descripcion: "Ruta costera hasta el famoso Pozo de La Salud con aguas mineromedicinales. Paisaje de lava negra y el horizonte abierto del Atlántico en el oeste de la isla.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/el-hierro",
    lat: 27.7800, lng: -18.1400
  },
  {
    id: "ermita-reyes-hierro",
    nombre: "Ermita de Nuestra Señora de Los Reyes",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 5,
    descripcion: "Sendero de peregrinación hasta la ermita de la patrona de El Hierro. Bosque de sabinas y el silencio absoluto del extremo occidental de España.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/el-hierro",
    lat: 27.7600, lng: -18.1600
  },
  {
    id: "faro-orchilla-hierro",
    nombre: "Faro de Orchilla – Meridiano 0",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 8,
    descripcion: "Ruta hasta el Faro de Orchilla, el punto más occidental de España. Hasta el siglo XVII fue el Meridiano 0 del mundo. Paisaje desértico y viento constante.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/el-hierro",
    lat: 27.7100, lng: -18.1400
  },
  {
    id: "tanajara-ruta-hierro",
    nombre: "Tanajara – Ruta del Lagarto Gigante",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 7,
    descripcion: "Sendero por la zona de cría del lagarto gigante de El Hierro, especie endémica recuperada del borde de la extinción. Acantilados y costa norte salvaje.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/el-hierro",
    lat: 27.8333, lng: -17.9100
  },
  {
    id: "bajada-jinama-golfo",
    nombre: "Bajada de Jinama – El Golfo",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "4-8 horas", distancia: 10,
    descripcion: "Descenso inverso del Camino de Jinama desde Las Playas hasta El Golfo. Paisaje que cambia de costa sur árida a El Golfo verde y fértil.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/el-hierro",
    lat: 27.7914, lng: -18.0311
  },
  {
    id: "ecoturismo-hierro-completo",
    nombre: "GR 131 El Hierro – Tramo Sur",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "Día completo", distancia: 22,
    descripcion: "Tramo sur del GR 131 desde La Restinga hasta El Pinar. Reserva Marina, bosques de pino canario y las cotas más altas del sur en un solo recorrido.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/el-hierro",
    lat: 27.6411, lng: -17.9867
  },
  {
    id: "mirador-isora-hierro",
    nombre: "Mirador de Isora – Costa Este",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 5,
    descripcion: "Ruta corta hasta el Mirador de Isora con vistas aéreas a la costa este y al Mar de Las Calmas. El agua más tranquila del archipiélago en días sin viento.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/el-hierro",
    lat: 27.6900, lng: -17.9650
  },

    {
    id: "llania-hierro",
    nombre: "La Llanía – Sabinar Milenario",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 7,
    descripcion: "Paseo por el sabinar más extenso del mundo con árboles de más de 1.000 años. Las sabinas retorcidas por el viento crean paisajes únicos e irrepetibles.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/el-hierro",
    lat: 27.7933, lng: -18.1167
  },
  {
    id: "punta-orchilla-hierro",
    nombre: "Punta Orchilla – Antiguo Meridiano 0",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 6,
    descripcion: "Sendero hasta el faro de Punta Orchilla, el punto más occidental de España. Fue el meridiano 0 del mundo durante siglos. Costa salvaje e impresionante.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/el-hierro",
    lat: 27.6969, lng: -18.1600
  },
  {
    id: "pozo-salud-frontera",
    nombre: "Pozo de la Salud – Costa de Frontera",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 9,
    descripcion: "Ruta por la costa de El Golfo hasta el Pozo de la Salud, manantial con propiedades medicinales. Paisaje volcánico de plataformas de lava y charcos naturales.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/el-hierro",
    lat: 27.8100, lng: -18.1100
  },
  {
    id: "riscos-herques-hierro",
    nombre: "Riscos de Herques – Costa Sur",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 11,
    descripcion: "Ruta costera por los impresionantes Riscos de Herques en el sur de El Hierro. Acantilados de más de 200 m sobre el océano y flora endémica de El Hierro.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/el-hierro",
    lat: 27.6600, lng: -17.9800
  },
  {
    id: "mirador-bascos-hierro",
    nombre: "Mirador de Bascos – El Golfo",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 3,
    descripcion: "Sendero corto hasta el mejor mirador sobre El Golfo. Vista aérea de la bahía más bonita de El Hierro con el Roque de Salmor al fondo.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/el-hierro",
    lat: 27.8350, lng: -18.0800
  },
  {
    id: "el-pinar-hierro",
    nombre: "El Pinar – Circular por el Bosque",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 8,
    descripcion: "Circular por el bosque de pinos centenarios de El Pinar en el sur de El Hierro. La mayor masa forestal de la isla con gran variedad de flora endémica.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/el-hierro",
    lat: 27.6800, lng: -17.9500
  },
  {
    id: "taceron-hierro",
    nombre: "Playa de Tacerón – Costa Salvaje",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 7,
    descripcion: "Ruta hasta la Playa de Tacerón, una de las más aisladas de El Hierro. Arena negra volcánica y aguas cristalinas solo accesible a pie por sendero costero.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/el-hierro",
    lat: 27.6500, lng: -18.0100
  },
  {
    id: "ruta-mencey-hierro",
    nombre: "Ruta del Mencey – Patrimonio Bimbache",
    isla: "El Hierro", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 13,
    descripcion: "Sendero histórico por los principales yacimientos arqueológicos bimbaches. Grabados rupestres del Julan, uno de los más importantes de Canarias.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/el-hierro",
    lat: 27.7100, lng: -18.0400
  },

    // ╔══════════════════════════════════════════════╗
  // ║           LA GRACIOSA (10 rutas)             ║
  // ╚══════════════════════════════════════════════╝

  {
    id: "ruta-sur-graciosa",
    nombre: "Ruta Sur – Caleta de Sebo – Montaña Amarilla",
    isla: "La Graciosa", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 6,
    descripcion: "La ruta más popular de la isla. Bordea la costa sur desde Caleta de Sebo por Playa del Salado, Playa Francesa y Playa de la Cocina hasta Montaña Amarilla. Solo hay que seguir la costa.",
    enlace: "https://www.visitlagraciosa.com/rutas-senderismo-la-graciosa/",
    lat: 29.2167, lng: -13.5019
  },
  {
    id: "montana-amarilla-cima",
    nombre: "Montaña Amarilla – Subida a la Cima",
    isla: "La Graciosa", tipo: "Senderismo", dificultad: "Media",
    duracion: "Menos de 2h", distancia: 2,
    descripcion: "Subida (1,8 km, dificultad alta) a la cima de Montaña Amarilla. Vistas aéreas de la Playa de la Cocina, el Atlántico y los charcos naturales para snorkel.",
    enlace: "https://www.alltrails.com/es/spain/la-graciosa",
    lat: 29.2147, lng: -13.4808
  },
  {
    id: "ruta-norte-conchas-bermeja",
    nombre: "Ruta Norte – Playa Las Conchas – Montaña Bermeja",
    isla: "La Graciosa", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 18,
    descripcion: "La ruta más completa. Desde Caleta de Sebo por Agujas Grandes hasta Playa Las Conchas y Montaña Bermeja (157 m). Vistas a Montaña Clara y todo el Archipiélago Chinijo.",
    enlace: "https://lanzarote3.com/senderismo-en-la-graciosa-mejores-rutas/",
    lat: 29.2592, lng: -13.5064
  },
  {
    id: "sebo-pedro-barba",
    nombre: "Caleta de Sebo – Pedro Barba",
    isla: "La Graciosa", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 6,
    descripcion: "Sendero costero entre los dos únicos pueblos de La Graciosa. Camino bien señalizado con postes numerados. Vistas al Risco de Famara y El Bufadero.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/caleta-de-sebo",
    lat: 29.2333, lng: -13.5003
  },
  {
    id: "punta-del-pobre-graciosa",
    nombre: "Ruta Este – Punta del Pobre",
    isla: "La Graciosa", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 13,
    descripcion: "Travesía hasta la Punta del Pobre por la costa este. Vistas a Montaña Clara, Roque del Oeste y Alegranza. Bordea el lado oeste de Lanzarote con Famara al fondo.",
    enlace: "https://lanzarote3.com/senderismo-en-la-graciosa-mejores-rutas/",
    lat: 29.2400, lng: -13.4750
  },
  {
    id: "barranco-conejos-graciosa",
    nombre: "Caleta de Sebo – Barranco de los Conejos",
    isla: "La Graciosa", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 7,
    descripcion: "Ruta poco conocida hacia la costa este por paisaje volcánico árido hasta una pequeña y solitaria cala. Ideal para desconectar y escapar de los senderos más transitados.",
    enlace: "https://guiaislascanarias.com/la-graciosa/rutas-senderismo-bici-la-graciosa/",
    lat: 29.2250, lng: -13.4889
  },
  {
    id: "vuelta-integral-graciosa",
    nombre: "Vuelta Integral a La Graciosa",
    isla: "La Graciosa", tipo: "Senderismo", dificultad: "Difícil",
    duracion: "Día completo", distancia: 28,
    descripcion: "La vuelta completa a toda la isla en un día: Majapalomas, Montaña Bermeja, Playa Las Conchas, Playa del Ámbar. Para senderistas experimentados con buen ritmo. Sin sombra ni agua.",
    enlace: "https://es.wikiloc.com/rutas-senderismo/integral-de-la-isla-la-graciosa-159757456",
    lat: 29.2333, lng: -13.5003
  },
  {
    id: "montana-bermeja-cima",
    nombre: "Montaña Bermeja – Cima Norte",
    isla: "La Graciosa", tipo: "Senderismo", dificultad: "Media",
    duracion: "2-4 horas", distancia: 10,
    descripcion: "Ascenso a la Montaña Bermeja (157 m) en el norte de la isla. Vistas espectaculares a Montaña Clara, Alegranza, Playa Las Conchas y toda La Graciosa.",
    enlace: "https://www.alltrails.com/es/spain/la-graciosa",
    lat: 29.2636, lng: -13.5097
  },
  {
    id: "snorkel-montana-amarilla",
    nombre: "Snorkel – Charcos de Montaña Amarilla",
    isla: "La Graciosa", tipo: "Submarinismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 4,
    descripcion: "Los charcos naturales detrás de Montaña Amarilla son los mejores de La Graciosa para snorkel. Aguas turquesas cristalinas con gran variedad de peces y fondos volcánicos.",
    enlace: "https://welikecanarias.com/senderismo-la-graciosa/",
    lat: 29.2147, lng: -13.4808
  },
  {
    id: "circular-norte-graciosa",
    nombre: "Circular Norte – Sebo, Bermeja, Conchas, Pedro Barba",
    isla: "La Graciosa", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 15,
    descripcion: "Circular por el norte: Caleta de Sebo, Montaña Bermeja, Playa Las Conchas y Pedro Barba. La mejor opción para conocer la mitad norte de la isla en una jornada.",
    enlace: "https://www.alltrails.com/es/spain/la-graciosa",
    lat: 29.2333, lng: -13.5003
  },

    {
    id: "playa-francesa-graciosa",
    nombre: "Playa Francesa – Graciosa",
    isla: "La Graciosa", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 5,
    descripcion: "Sendero en bicicleta o a pie hasta la Playa Francesa, la más cercana a Caleta de Sebo. Aguas turquesas protegidas y arena dorada sin masificación turística.",
    enlace: "https://www.alltrails.com/es/spain/la-graciosa",
    lat: 29.2250, lng: -13.5100
  },
  {
    id: "agujas-graciosa",
    nombre: "Las Agujas Grandes – Norte Salvaje",
    isla: "La Graciosa", tipo: "Senderismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 12,
    descripcion: "Ruta hasta Las Agujas Grandes en el norte de La Graciosa. Formaciones volcánicas espectaculares y las vistas más salvajes de todo el Archipiélago Chinijo.",
    enlace: "https://es.wikiloc.com/rutas/senderismo/espana/canarias/la-graciosa",
    lat: 29.2650, lng: -13.5050
  },
  {
    id: "salinas-graciosa",
    nombre: "Antiguas Salinas – Historia Salinera",
    isla: "La Graciosa", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 2,
    descripcion: "Paseo hasta las antiguas salinas abandonadas de La Graciosa. Historia de la explotación salinera y aves zancudas que frecuentan las balsas en invierno.",
    enlace: "https://www.alltrails.com/es/spain/la-graciosa",
    lat: 29.2200, lng: -13.5000
  },
  {
    id: "bufadero-graciosa",
    nombre: "El Bufadero – Costa Este",
    isla: "La Graciosa", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 4,
    descripcion: "Ruta costera por la costa este de La Graciosa hasta el Bufadero, formación volcánica donde el mar entra y expulsa agua con fuerza. Vistas a Lanzarote.",
    enlace: "https://www.alltrails.com/es/spain/la-graciosa",
    lat: 29.2300, lng: -13.4850
  },
  {
    id: "bici-graciosa",
    nombre: "Vuelta en Bici a La Graciosa",
    isla: "La Graciosa", tipo: "Ciclismo", dificultad: "Media",
    duracion: "4-8 horas", distancia: 25,
    descripcion: "La forma más popular de explorar La Graciosa. Caminos de arena y tierra entre playas, volcanes y paisajes únicos. Bicicletas de alquiler en Caleta de Sebo.",
    enlace: "https://guiaislascanarias.com/la-graciosa/rutas-senderismo-bici-la-graciosa/",
    lat: 29.2333, lng: -13.5003
  },

    // ╔══════════════════════════════════════════════╗
  // ║            ISLA DE LOBOS (8 rutas)           ║
  // ╚══════════════════════════════════════════════╝

  {
    id: "circular-lobos",
    nombre: "Ruta Circular Completa – Isla de Lobos",
    isla: "Isla de Lobos", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 8,
    descripcion: "La vuelta completa por el Parque Natural: El Puertito, La Caldera, Faro Martiño y Playa de La Concha. Requiere permiso gratuito online (máx. 200 personas/día).",
    enlace: "https://guiaislascanarias.com/fuerteventura/rutas-senderos-fuerteventura/",
    lat: 28.7506, lng: -13.8167
  },
  {
    id: "caldera-lobos",
    nombre: "La Caldera – Subida al Volcán",
    isla: "Isla de Lobos", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 3,
    descripcion: "Ascenso breve al volcán de La Caldera (127 m). Vistas panorámicas a Fuerteventura, Lanzarote y el Canal de La Bocaina. El punto más alto del islote.",
    enlace: "https://www.alltrails.com/es/spain/fuerteventura",
    lat: 28.7528, lng: -13.8208
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
    duracion: "2-4 horas", distancia: 5,
    descripcion: "Ruta costera hasta el faro del siglo XIX en el extremo norte del islote. Entorno solitario con aves marinas, paisaje volcánico y vistas a Lanzarote.",
    enlace: "https://www.islalobos.es",
    lat: 28.7628, lng: -13.8106
  },
  {
    id: "playa-concha-lobos",
    nombre: "Playa de La Concha – Lobos",
    isla: "Isla de Lobos", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 2,
    descripcion: "La playa más tranquila del islote. Arena volcánica fina y aguas cristalinas en el interior de la bahía protegida. Ideal para el baño y el descanso.",
    enlace: "https://www.alltrails.com/es/spain/fuerteventura",
    lat: 28.7481, lng: -13.8250
  },
  {
    id: "salinas-lobos",
    nombre: "Antiguas Salinas de Lobos",
    isla: "Isla de Lobos", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 2,
    descripcion: "Paseo hasta las antiguas salinas abandonadas del islote. Historia de la explotación salinera y aves zancudas que frecuentan las balsas en invierno.",
    enlace: "https://www.islalobos.es",
    lat: 28.7472, lng: -13.8186
  },
  {
    id: "north-coast-lobos",
    nombre: "Costa Norte – Lobos",
    isla: "Isla de Lobos", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 4,
    descripcion: "Sendero por la costa norte del islote con vistas a Lanzarote. Coladas de lava negra, pequeñas calas y la soledad de uno de los rincones más salvajes del archipiélago.",
    enlace: "https://guiaislascanarias.com/fuerteventura/rutas-senderos-fuerteventura/",
    lat: 28.7600, lng: -13.8150
  },
  {
    id: "birdwatching-lobos",
    nombre: "Observación de Aves – Lobos",
    isla: "Isla de Lobos", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 5,
    descripcion: "Isla de Lobos es hogar de pardelas, gaviotas de Audouin y otras aves marinas. Llevar prismáticos. La mejor época es primavera, en época de nidificación.",
    enlace: "https://www.islalobos.es",
    lat: 28.7506, lng: -13.8167
  },


  {
    id: "costa-este-lobos",
    nombre: "Costa Este – Isla de Lobos",
    isla: "Isla de Lobos", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 4,
    descripcion: "Sendero por la costa este del islote con vistas a Lanzarote. Coladas de lava negra, pequeñas calas y la soledad de uno de los rincones más salvajes del archipiélago.",
    enlace: "https://www.islalobos.es",
    lat: 28.7600, lng: -13.8150
  },
  {
    id: "birdwatching-lobos",
    nombre: "Observación de Aves – Lobos",
    isla: "Isla de Lobos", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 5,
    descripcion: "Lobos alberga pardelas, gaviotas de Audouin y otras aves marinas protegidas. La mejor época es primavera en plena nidificación. Llevar prismáticos.",
    enlace: "https://www.islalobos.es",
    lat: 28.7506, lng: -13.8167
  },
  {
    id: "amanecer-lobos",
    nombre: "Amanecer en el Faro – Lobos",
    isla: "Isla de Lobos", tipo: "Fotografía", dificultad: "Fácil",
    duracion: "2-4 horas", distancia: 6,
    descripcion: "Ruta nocturna para ver el amanecer desde el Faro de Punta Martiño. El cielo sin contaminación lumínica de Lobos permite ver la Vía Láctea hasta el alba.",
    enlace: "https://www.islalobos.es",
    lat: 28.7628, lng: -13.8106
  },
  {
    id: "cuevas-volcánicas-lobos",
    nombre: "Cuevas Volcánicas – Lobos",
    isla: "Isla de Lobos", tipo: "Espeleología", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 2,
    descripcion: "Exploración de pequeñas cuevas y tubos volcánicos en el interior del islote. Formaciones de lava solidificada únicas con fauna rupícola protegida.",
    enlace: "https://guiaislascanarias.com/fuerteventura/rutas-senderos-fuerteventura/",
    lat: 28.7519, lng: -13.8183
  },
  {
    id: "kayak-lobos",
    nombre: "Kayak – Vuelta a Isla de Lobos",
    isla: "Isla de Lobos", tipo: "Kayak", dificultad: "Media",
    duracion: "4-8 horas", distancia: 12,
    descripcion: "Vuelta completa al islote en kayak desde Corralejo. Fondos cristalinos, cuevas marinas y la impresionante perspectiva de Lobos desde el agua.",
    enlace: "https://profuerte.com",
    lat: 28.7506, lng: -13.8167
  },
  {
    id: "pesca-tradicional-lobos",
    nombre: "Ruta Historia – Puerto de Lobos",
    isla: "Isla de Lobos", tipo: "Senderismo", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 1,
    descripcion: "Paseo por el pequeño puerto y las antiguas chozas de pescadores restauradas. Historia de los lobos de mar (focas monje) que dieron nombre al islote.",
    enlace: "https://www.islalobos.es",
    lat: 28.7489, lng: -13.8175
  },
  {
    id: "snorkel-concha-lobos",
    nombre: "Snorkel – Playa de La Concha",
    isla: "Isla de Lobos", tipo: "Submarinismo", dificultad: "Fácil",
    duracion: "Menos de 2h", distancia: 0,
    descripcion: "La bahía protegida de La Concha es perfecta para el snorkel con niños. Aguas poco profundas, arena blanca y gran variedad de peces en un entorno paradisíaco.",
    enlace: "https://www.islalobos.es",
    lat: 28.7481, lng: -13.8250
  },
]; // ← No borres este corchete ni el punto y coma

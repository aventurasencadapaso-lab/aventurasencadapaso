const menuToggle = document.querySelector('.menu-toggle');
const menuTop = document.querySelector('.menu-top');
const dropdowns = document.querySelectorAll('.dropdown');

if (menuToggle && menuTop) {
  menuToggle.addEventListener('click', () => {
    menuTop.classList.toggle('open');
    menuToggle.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', menuTop.classList.contains('open') ? 'true' : 'false');
  });
}

function closeMobileMenu() {
  if (menuTop && menuTop.classList.contains('open')) {
    menuTop.classList.remove('open');
    menuToggle?.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  }
  dropdowns.forEach((dropdown) => dropdown.classList.remove('open'));
}

dropdowns.forEach((dropdown) => {
  const trigger = dropdown.querySelector(':scope > a');
  const submenu = dropdown.querySelector('.submenu');

  if (!trigger || !submenu) return;

  trigger.addEventListener('click', (event) => {
    if (window.innerWidth <= 900) {
      event.preventDefault();
      dropdown.classList.toggle('open');
    }
  });
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 900) {
    closeMobileMenu();
  }
});

document.addEventListener('click', (event) => {
  if (window.innerWidth > 900) return;
  if (!event.target.closest('.barra-superior')) {
    closeMobileMenu();
  }
});

document.querySelectorAll('.share-menu').forEach((shareMenu) => {
  const shareBtn = shareMenu.querySelector('.share-btn');
  if (!shareBtn) return;

  shareBtn.addEventListener('click', (event) => {
    if (window.innerWidth > 900) return;
    event.preventDefault();
    event.stopPropagation();
    shareMenu.classList.toggle('open');
  });
});

document.addEventListener('click', (event) => {
  if (window.innerWidth > 900) return;
  document.querySelectorAll('.share-menu.open').forEach((shareMenu) => {
    if (!shareMenu.contains(event.target)) {
      shareMenu.classList.remove('open');
    }
  });
});
// ======================================
// BASE DE DATOS DE CARRERAS
// ======================================

const carreras = [

{
    id:"transgc",
    fecha:"2026-02-27",
    nombre:"Transgrancanaria",
    isla:"Gran Canaria",
    distancia:126,
    web:"https://transgrancanaria.net",
    lat:28.1248,
    lng:-15.4300
},

{
    id:"bluetrail",
    fecha:"2026-03-20",
    nombre:"Tenerife Bluetrail",
    isla:"Tenerife",
    distancia:73,
    web:"https://tenerife.utmb.world",
    lat:28.2916,
    lng:-16.6291
},

{
    id:"transvulcania",
    fecha:"2026-05-09",
    nombre:"Transvulcania",
    isla:"La Palma",
    distancia:74,
    web:"https://transvulcania.com",
    lat:28.6836,
    lng:-17.7642
}

];

// ======================================
// BUSCADOR Y LISTA
// ======================================

const lista = document.getElementById("listaCarreras");
const searchInput = document.getElementById("searchInput");
const islaFilter = document.getElementById("islaFilter");

function renderCarreras(){

    if(!lista) return;

    lista.innerHTML = "";

    const busqueda = searchInput?.value.toLowerCase() || "";
    const islaSeleccionada = islaFilter?.value || "";

    const carrerasFiltradas = carreras.filter(carrera => {
        const matchNombre = carrera.nombre.toLowerCase().includes(busqueda);
        const matchIsla = islaSeleccionada === "" || carrera.isla === islaSeleccionada;
        return matchNombre && matchIsla;
    });

    if(carrerasFiltradas.length === 0){
        lista.innerHTML = `<p>No se encontraron carreras para la búsqueda.</p>`;
        return;
    }

    carrerasFiltradas.forEach(carrera => {
        const item = document.createElement("li");
        item.innerHTML = `<strong>${carrera.nombre}</strong> - ${carrera.isla} - ${carrera.distancia} km`;
        lista.appendChild(item);
    });
}

searchInput?.addEventListener("input", renderCarreras);
islaFilter?.addEventListener("change", renderCarreras);

renderCarreras();

// ======================================
// MAPA DE CANARIAS
// ======================================

if(typeof L !== "undefined"){

    const mapaDiv =
    document.getElementById("mapaCanarias");

    if(mapaDiv){

        const mapa = L.map("mapaCanarias").setView(
            [28.35, -15.6],
            8
        );

        L.tileLayer(
            "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            {
                attribution:"© OpenStreetMap"
            }
        ).addTo(mapa);

        carreras.forEach(carrera=>{

            L.marker([
                carrera.lat,
                carrera.lng
            ])
            .addTo(mapa)
            .bindPopup(`
                <strong>${carrera.nombre}</strong><br>
                ${carrera.isla}<br>
                ${carrera.fecha}<br>
                <a href="${carrera.web}" target="_blank">
                Abrir carrera
                </a>
            `);

        });

    }

}
const clearBtn =
document.getElementById("clearFilters");

clearBtn?.addEventListener("click",()=>{

    searchInput.value = "";

    islaFilter.value = "";

    const distanciaFilter =
    document.getElementById("distanciaFilter");

    if(distanciaFilter){
        distanciaFilter.value = "";
    }

    renderCarreras();

});

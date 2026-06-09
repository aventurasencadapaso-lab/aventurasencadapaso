(function () {
  'use strict';

  var input = document.getElementById('txtBuscador');
  var filtroIsla = document.getElementById('filtroIsla');
  var filtroTipo = document.getElementById('filtroTipo');
  var filtroDif = document.getElementById('filtroDificultad');
  var filtroDur = document.getElementById('filtroDuracion');
  var btnLimpiarIn = document.getElementById('btnLimpiarInput');
  var btnLimpiarTd = document.getElementById('btnLimpiarTodo');
  var contador = document.getElementById('contadorResultados');
  var msgVacio = document.getElementById('msgVacio');
  var cards = document.querySelectorAll('.aventura-card');

  var cardData = Array.from(cards).map(function (card) {
    return {
      el: card,
      isla: (card.dataset.isla || '').toLowerCase(),
      tipo: (card.dataset.tipo || '').toLowerCase(),
      dificultad: (card.dataset.dificultad || '').toLowerCase(),
      duracion: (card.dataset.duracion || '').toLowerCase(),
      tags: (card.dataset.tags || '').toLowerCase(),
      titulo: (card.querySelector('h3') ? card.querySelector('h3').textContent : '').toLowerCase(),
      desc: (card.querySelector('p') ? card.querySelector('p').textContent : '').toLowerCase(),
    };
  });

  function filtrar() {
    var txt = input.value.trim().toLowerCase();
    var isla = filtroIsla.value.toLowerCase();
    var tipo = filtroTipo.value.toLowerCase();
    var dif = filtroDif.value.toLowerCase();
    var dur = filtroDur.value.toLowerCase();

    var hayFiltro = txt || isla || tipo || dif || dur;

    if (btnLimpiarIn) {
      btnLimpiarIn.classList.toggle('visible', !!txt);
    }
    if (btnLimpiarTd) {
      btnLimpiarTd.classList.toggle('visible', !!hayFiltro);
    }

    var visibles = 0;

    cardData.forEach(function (d) {

      var ok = true;

      if (txt) {
        var haystack = [
          d.titulo,
          d.desc,
          d.tags,
          d.isla,
          d.tipo,
          d.dificultad,
          d.duracion
        ].join(' ');

        var palabras = txt.split(/\s+/).filter(Boolean);

        ok = palabras.every(function (p) {
          return haystack.includes(p);
        });
      }

      if (ok && isla && d.isla !== isla) ok = false;
      if (ok && tipo && d.tipo !== tipo) ok = false;
      if (ok && dif && d.dificultad !== dif) ok = false;
      if (ok && dur && d.duracion !== dur) ok = false;

      if (ok) {
        d.el.classList.remove('oculta');
        visibles++;
      } else {
        d.el.classList.add('oculta');
      }
    });

    if (hayFiltro) {
      contador.textContent =
        visibles === 1
          ? '1 aventura encontrada'
          : visibles + ' aventuras encontradas';
    } else {
      contador.textContent =
        cardData.length + ' aventuras disponibles';
    }

    msgVacio.style.display =
      visibles === 0 ? 'block' : 'none';
  }

  function limpiarTodo() {
    input.value = '';
    filtroIsla.value = '';
    filtroTipo.value = '';
    filtroDif.value = '';
    filtroDur.value = '';
    filtrar();
  }

  input.addEventListener('input', filtrar);
  filtroIsla.addEventListener('change', filtrar);
  filtroTipo.addEventListener('change', filtrar);
  filtroDif.addEventListener('change', filtrar);
  filtroDur.addEventListener('change', filtrar);

  if (btnLimpiarIn) {
    btnLimpiarIn.addEventListener('click', function (event) {
      event.preventDefault();
      input.value = '';
      input.focus();
      filtrar();
    });
  }

  if (btnLimpiarTd) {
    btnLimpiarTd.addEventListener('click', function (event) {
      event.preventDefault();
      limpiarTodo();
    });
  }

  filtrar();

})();
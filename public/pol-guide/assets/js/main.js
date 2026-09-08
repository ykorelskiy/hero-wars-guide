/* =========================================================
   Путь легенд — Астрид и Лукас · Hero Wars: Dominion Era
   Калькулятор бюджета энергии + навигация
   ========================================================= */
(function () {
  'use strict';

  /* =======================================================
     1. ДАННЫЕ: ГЛАВЫ И СТОИМОСТЬ
     ======================================================= */

  var CHAPTERS = [
    { num: 1, name: 'Узники кошмара',   cost: 0   },
    { num: 2, name: 'Незнакомые лица',  cost: 0   },
    { num: 3, name: 'Похищенный свет',  cost: 50  },
    { num: 4, name: 'Тень на пороге',   cost: 160 },
    { num: 5, name: 'Осколки памяти',   cost: 320 },
    { num: 6, name: 'Сердце тишины',    cost: 530 },
    { num: 7, name: 'Финальная глава',  cost: 790 }
  ];

  var MEDALLION_TABLE = [
    { spend: 0,   energy: 0   },
    { spend: 3,   energy: 3   },
    { spend: 6,   energy: 6   },
    { spend: 10,  energy: 10  },
    { spend: 20,  energy: 20  },
    { spend: 30,  energy: 30  },
    { spend: 50,  energy: 50  },
    { spend: 100, energy: 100 },
    { spend: 120, energy: 110 },
    { spend: 150, energy: 120 }
  ];

  /* =======================================================
     2. КАЛЬКУЛЯТОР БЮДЖЕТА
     ======================================================= */

  function getMedallionEnergy(spend) {
    spend = parseInt(spend, 10) || 0;
    var energy = 0;
    for (var i = 0; i < MEDALLION_TABLE.length; i++) {
      if (MEDALLION_TABLE[i].spend <= spend) {
        energy = MEDALLION_TABLE[i].energy;
      }
    }
    return energy;
  }

  function getMaxChapter(total) {
    var max = null;
    for (var i = 0; i < CHAPTERS.length; i++) {
      if (total >= CHAPTERS[i].cost) {
        max = CHAPTERS[i];
      }
    }
    return max;
  }

  function getNextChapter(current) {
    if (!current) return CHAPTERS[0];
    for (var i = 0; i < CHAPTERS.length; i++) {
      if (CHAPTERS[i].num === current.num + 1) return CHAPTERS[i];
    }
    return null;
  }

  function initCalc() {
    var widget = document.getElementById('calcWidget');
    if (!widget) return;

    var inpFree       = document.getElementById('inpFreeQuests');
    var inpGifts      = document.getElementById('inpDevGifts');
    var inpBP         = document.getElementById('inpBattlePass');
    var inpGT         = document.getElementById('inpGoldenTicket');
    var inpMed        = document.getElementById('inpMedallions');
    var inpEm         = document.getElementById('inpEmeralds');

    var outTotal      = document.getElementById('outTotal');
    var outChapter    = document.getElementById('outChapter');
    var outNext       = document.getElementById('outNext');
    var calcNote      = document.getElementById('calcNote');

    function recalc() {
      var total = 0;

      if (inpFree && inpFree.checked)  total += 438; // квесты + витрина
      if (inpGifts && inpGifts.checked) total += 48;  // 3 подарка × 16
      if (inpBP && inpBP.checked)       total += 40;  // Battle Pass

      // Золотой билет даёт 150 (вместо 40 Battle Pass) + VIP 18
      if (inpGT && inpGT.checked) {
        if (inpBP && inpBP.checked) {
          // Убираем 40 Battle Pass и добавляем 150+18
          total -= 40;
          total += 150 + 18;
        } else {
          total += 150 + 18;
        }
      }

      total += getMedallionEnergy(inpMed ? inpMed.value : 0);
      total += parseInt(inpEm ? inpEm.value : 0, 10) || 0;

      var maxCh   = getMaxChapter(total);
      var nextCh  = getNextChapter(maxCh);

      outTotal.textContent   = total;
      outChapter.textContent = maxCh ? ('Гл. ' + maxCh.num + ' ✓') : '—';

      if (nextCh) {
        var need = nextCh.cost - total;
        outNext.textContent = need > 0
          ? 'ещё ' + need + ' до Гл.' + nextCh.num
          : 'Гл.' + nextCh.num + ' открыта!';

        if (need <= 0) {
          outNext.style.color = 'var(--green)';
          calcNote.textContent = '✓ Глава ' + nextCh.num + ' (' + nextCh.name + ') уже доступна с этим бюджетом!';
        } else {
          outNext.style.color = 'var(--text-dim)';
          var tips = [];
          if (!inpGifts.checked) tips.push('+ подарки разработчиков (до 48)');
          if (!inpBP.checked) tips.push('+ Battle Pass (40)');
          calcNote.textContent = need + ' кристаллов не хватает. ' + (tips.length ? 'Попробуйте: ' + tips.join(', ') + '.' : '');
        }
      } else {
        outNext.textContent = '—';
        outNext.style.color = 'var(--gold)';
        calcNote.textContent = '🎉 Максимальный бюджет достигнут — все 7 глав открыты!';
      }

      // Подсветка
      outTotal.style.color = total >= 790 ? 'var(--green)' : total >= 530 ? 'var(--gold)' : 'var(--text)';
    }

    // Слушатели
    [inpFree, inpGifts, inpBP, inpGT].forEach(function (el) {
      if (el) el.addEventListener('change', recalc);
    });
    [inpMed, inpEm].forEach(function (el) {
      if (el) el.addEventListener('change', recalc);
    });

    // Блокировка Battle Pass при Золотом билете
    if (inpGT) {
      inpGT.addEventListener('change', function () {
        if (inpBP) {
          inpBP.disabled = inpGT.checked;
          if (inpGT.checked) inpBP.checked = false;
        }
        recalc();
      });
    }

    recalc(); // первичный расчёт
  }

  /* =======================================================
     3. НАВИГАЦИЯ И SCROLLSPY
     ======================================================= */

  function initNav() {
    var toggle  = document.getElementById('navToggle');
    var sidebar = document.getElementById('sidebar');
    if (!toggle || !sidebar) return;

    toggle.addEventListener('click', function () {
      var open = sidebar.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    sidebar.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        if (window.innerWidth <= 1024) {
          sidebar.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
        }
      });
    });

    document.addEventListener('click', function (e) {
      if (window.innerWidth > 1024) return;
      if (!sidebar.contains(e.target) && !toggle.contains(e.target)) {
        sidebar.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  function initScrollSpy() {
    var links = Array.prototype.slice.call(
      document.querySelectorAll('#toc a[href^="#"]')
    );
    if (!links.length) return;

    var sections = links.map(function (a) {
      return document.querySelector(a.getAttribute('href'));
    }).filter(Boolean);

    function update() {
      var pos = window.scrollY + 120;
      var current = sections[0];
      for (var i = 0; i < sections.length; i++) {
        if (sections[i].offsetTop <= pos) current = sections[i];
      }
      links.forEach(function (a) {
        a.classList.toggle('active', a.getAttribute('href') === '#' + current.id);
      });
    }

    var ticking = false;
    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () { update(); ticking = false; });
    }, { passive: true });

    update();
  }

  function initToTop() {
    var btn = document.getElementById('toTop');
    if (!btn) return;
    window.addEventListener('scroll', function () {
      btn.classList.toggle('show', window.scrollY > 600);
    }, { passive: true });
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* =======================================================
     4. СТАРТ
     ======================================================= */

  function init() {
    initCalc();
    initNav();
    initScrollSpy();
    initToTop();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Debug
  window.PolCalc = { CHAPTERS: CHAPTERS };

})();

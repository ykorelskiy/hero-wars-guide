/* =========================================================
   Путь легенд (Астрид и Лукас) — F2P гайд
   Интерактивная логика: калькулятор бюджета, навигация
   ========================================================= */

const CHAPTERS = [
  { num: 1, name: 'Узники кошмара',   cost: 0   },
  { num: 2, name: 'Незнакомые лица',  cost: 0   },
  { num: 3, name: 'Похищенный свет',  cost: 50  },
  { num: 4, name: 'Тень на пороге',   cost: 160 },
  { num: 5, name: 'Осколки памяти',   cost: 320 },
  { num: 6, name: 'Сердце тишины',    cost: 530 },
  { num: 7, name: 'Финальная глава',  cost: 790 }
];

const MEDALLION_TABLE = [
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

function getMedallionEnergy(spend) {
  spend = parseInt(spend, 10) || 0;
  let energy = 0;
  for (let i = 0; i < MEDALLION_TABLE.length; i++) {
    if (MEDALLION_TABLE[i].spend <= spend) {
      energy = MEDALLION_TABLE[i].energy;
    }
  }
  return energy;
}

function getMaxChapter(total) {
  let max = null;
  for (let i = 0; i < CHAPTERS.length; i++) {
    if (total >= CHAPTERS[i].cost) {
      max = CHAPTERS[i];
    }
  }
  return max;
}

function getNextChapter(current) {
  if (!current) return CHAPTERS[0];
  for (let i = 0; i < CHAPTERS.length; i++) {
    if (CHAPTERS[i].num === current.num + 1) return CHAPTERS[i];
  }
  return null;
}

function initCalc() {
  const widget = document.getElementById('polCalcWidget');
  if (!widget) return;

  const inpFree       = document.getElementById('polInpFreeQuests');
  const inpGifts      = document.getElementById('polInpDevGifts');
  const inpBP         = document.getElementById('polInpBattlePass');
  const inpGT         = document.getElementById('polInpGoldenTicket');
  const inpMed        = document.getElementById('polInpMedallions');
  const inpEm         = document.getElementById('polInpEmeralds');

  const outTotal      = document.getElementById('polOutTotal');
  const outChapter    = document.getElementById('polOutChapter');
  const outNext       = document.getElementById('polOutNext');
  const calcNote      = document.getElementById('polCalcNote');

  function recalc() {
    let total = 0;

    if (inpFree && inpFree.checked)   total += 438; // квесты + витрина
    if (inpGifts && inpGifts.checked) total += 48;  // 3 подарка × 16
    if (inpBP && inpBP.checked)       total += 40;  // Battle Pass

    // Золотой билет даёт 150 (вместо 40 Battle Pass) + VIP 18
    if (inpGT && inpGT.checked) {
      if (inpBP && inpBP.checked) {
        total -= 40;
        total += 150 + 18;
      } else {
        total += 150 + 18;
      }
    }

    total += getMedallionEnergy(inpMed ? inpMed.value : 0);
    total += parseInt(inpEm ? inpEm.value : 0, 10) || 0;

    const maxCh   = getMaxChapter(total);
    const nextCh  = getNextChapter(maxCh);

    if (outTotal)   outTotal.textContent   = total;
    if (outChapter) outChapter.textContent = maxCh ? ('Гл. ' + maxCh.num + ' ✓') : '—';

    if (outNext && calcNote) {
      if (nextCh) {
        const need = nextCh.cost - total;
        outNext.textContent = need > 0
          ? 'ещё ' + need + ' до Гл.' + nextCh.num
          : 'Гл.' + nextCh.num + ' открыта!';

        if (need <= 0) {
          outNext.style.color = 'var(--pol-green)';
          calcNote.textContent = '✓ Глава ' + nextCh.num + ' (' + nextCh.name + ') уже доступна с этим бюджетом!';
        } else {
          outNext.style.color = 'var(--pol-text-dim)';
          const tips = [];
          if (inpGifts && !inpGifts.checked) tips.push('+ подарки разработчиков (до 48)');
          if (inpBP && !inpBP.checked && (!inpGT || !inpGT.checked)) tips.push('+ Battle Pass (40)');
          calcNote.textContent = need + ' кристаллов не хватает. ' + (tips.length ? 'Попробуйте: ' + tips.join(', ') + '.' : '');
        }
      } else {
        outNext.textContent = '—';
        outNext.style.color = 'var(--pol-gold)';
        calcNote.textContent = '🎉 Максимальный бюджет достигнут — все 7 глав открыты!';
      }
    }

    if (outTotal) {
      outTotal.style.color = total >= 790 ? 'var(--pol-green)' : total >= 530 ? 'var(--pol-gold)' : 'var(--pol-text)';
    }
  }

  [inpFree, inpGifts, inpBP, inpGT].forEach(el => {
    if (el) el.addEventListener('change', recalc);
  });
  [inpMed, inpEm].forEach(el => {
    if (el) el.addEventListener('input', recalc);
    if (el) el.addEventListener('change', recalc);
  });

  if (inpGT) {
    inpGT.addEventListener('change', () => {
      if (inpBP) {
        inpBP.disabled = inpGT.checked;
        if (inpGT.checked) inpBP.checked = false;
      }
      recalc();
    });
  }

  recalc();
}

function initNav() {
  const toggle  = document.getElementById('polNavToggle');
  const sidebar = document.getElementById('polSidebar');
  if (!toggle || !sidebar) return;

  toggle.addEventListener('click', () => {
    const open = sidebar.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  sidebar.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      if (window.innerWidth <= 1024) {
        sidebar.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  document.addEventListener('click', e => {
    if (window.innerWidth > 1024) return;
    if (!sidebar.contains(e.target) && !toggle.contains(e.target)) {
      sidebar.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

function initScrollSpy() {
  const links = Array.from(document.querySelectorAll('#polToc a[href^="#"]'));
  if (!links.length) return;

  const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);

  function update() {
    const pos = window.scrollY + 120;
    let current = sections[0];

    for (let i = 0; i < sections.length; i++) {
      if (sections[i].offsetTop <= pos) current = sections[i];
    }

    if (current) {
      links.forEach(a => {
        const on = a.getAttribute('href') === '#' + current.id;
        a.classList.toggle('active', on);
      });
    }
  }

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(() => {
      update();
      ticking = false;
    });
  }, { passive: true });

  update();
}

function initToTop() {
  const btn = document.getElementById('polToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 600);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

export function initPolGuide() {
  initCalc();
  initNav();
  initScrollSpy();
  initToTop();
}

window.PolCalc = { CHAPTERS };

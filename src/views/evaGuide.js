/* =========================================================
   Freedom Protocol (Протокол Свободы — Ева) — F2P гайд
   Интерактивная логика: калькулятор, графики планов, навигация
   ========================================================= */

const TOME_STEP = {
  2: 10, 3: 20, 4: 30, 5: 40, 6: 50, 7: 60, 8: 70, 9: 80,
  10: 80, 11: 80, 12: 80, 13: 80, 14: 80, 15: 80
};

const GRAIL_STEP = {
  2: 10, 3: 20, 4: 30, 5: 40, 6: 50, 7: 60, 8: 70, 9: 80, 10: 90,
  11: 100, 12: 100, 13: 100, 14: 100, 15: 100, 16: 100, 17: 100, 18: 100
};

const TOME_BONUS = {
  2: 1000, 3: 4000, 4: 9000, 5: 16000, 6: 25000, 7: 36000, 8: 49000,
  9: 64000, 10: 72000, 11: 80000, 12: 88000, 13: 96000, 14: 104000, 15: 112000
};

const CHAPTERS = {
  1: { amuletLvl: 1,  amuletCost: 0,   coins: 10000,  sapph: 1,  name: 'Глава I · Огни Протокола',     boss: 'Страж Зоны A' },
  2: { amuletLvl: 5,  amuletCost: 50,  coins: 30000,  sapph: 3,  name: 'Глава II · Прорыв Легенд',      boss: 'Разрушитель Врат' },
  3: { amuletLvl: 10, amuletCost: 160, coins: 50000,  sapph: 5,  name: 'Глава III · Пепел Бездны',     boss: 'Тень Алтаря' },
  4: { amuletLvl: 15, amuletCost: 320, coins: 70000,  sapph: 7,  name: 'Глава IV · Голос Руин',        boss: 'Ядро Системы' },
  5: { amuletLvl: 20, amuletCost: 530, coins: 120000, sapph: 17, name: 'Глава V · Корни Свободы',      boss: 'Безмолвный Владыка' },
  6: { amuletLvl: 25, amuletCost: 790, coins: 170000, sapph: 27, name: 'Глава VI · Протокол "Ева"',    boss: 'Страж Истока' },
  7: { amuletLvl: 25, amuletCost: 790, coins: 220000, sapph: 37, name: 'Глава VII · Архидемон I',      boss: 'Архидемон 750M' },
  8: { amuletLvl: 25, amuletCost: 790, coins: 270000, sapph: 47, name: 'Глава VIII · Архидемон II',     boss: 'Архидемон Предел' },
  9: { amuletLvl: 25, amuletCost: 790, coins: 320000, sapph: 57, name: 'Глава IX · Архидемон III',    boss: 'Архидемон Финал' }
};

const PULL_BASE   = 2800;
const JACKPOT     = 0.10;
const STONES_PULL = 15;

const STARS = [
  { star: 1, need: 10 },
  { star: 2, need: 30 },
  { star: 3, need: 80 },
  { star: 4, need: 180 },
  { star: 5, need: 330 },
  { star: 6, need: 630 }
];

function cumulativeCost(stepTable, lvl) {
  let total = 0;
  for (let L = 2; L <= lvl; L++) {
    total += stepTable[L] || 0;
  }
  return total;
}

export function simulateEva(budget, tomeLvl, grailLvl, chapter) {
  const ch = CHAPTERS[chapter];
  if (!ch) return null;

  const tomeCost   = cumulativeCost(TOME_STEP, tomeLvl);
  const grailCost  = cumulativeCost(GRAIL_STEP, grailLvl);
  const amuletCost = ch.amuletCost;

  const spent = tomeCost + grailCost + amuletCost;
  if (spent > budget) {
    return { ok: false, spent, budget, short: spent - budget };
  }

  let coins = 0;

  for (let L = 2; L <= tomeLvl; L++) {
    coins += TOME_BONUS[L] || 0;
  }

  coins += (amuletCost + grailCost) * 100 * tomeLvl;

  const left = budget - spent;
  const rate = 500 + 100 * tomeLvl;
  coins += left * rate;

  coins += ch.coins;

  const pullCost = PULL_BASE - 100 * grailLvl;
  const pulls    = coins / pullCost;

  const stones = pulls * (1 - JACKPOT) * STONES_PULL;
  const sapph  = ch.sapph + pulls * JACKPOT;

  return {
    ok: true,
    spent,
    left,
    rate,
    coins: Math.round(coins),
    pullCost,
    pulls,
    stones: Math.round(stones),
    sapph: Math.round(sapph),
    tomeCost,
    grailCost,
    amuletCost,
    amuletLvl: ch.amuletLvl,
    chapterName: ch.name,
    bossName: ch.boss
  };
}

function starsFor(stones) {
  let result = 0;
  for (let i = 0; i < STARS.length; i++) {
    if (stones >= STARS[i].need) result = STARS[i].star;
  }
  return result;
}

function fmt(n) {
  return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, '\u00A0');
}

let isEvaInitialized = false;

export function initEvaGuide() {
  if (isEvaInitialized) return;
  isEvaInitialized = true;

  initCalculator();
  buildBars('evaBarsStones', 'stones', false);
  buildBars('evaBarsSapph', 'sapph', true);
  animateBarsOnView();
  initNav();
  initScrollSpy();

  window.EvaCalc = {
    simulate: simulateEva,
    starsFor,
    CHAPTERS
  };
}

function initCalculator() {
  const widget = document.getElementById('evaCalcWidget');
  if (!widget) return;

  const inputs = {
    budget:  document.getElementById('evaInpBudget'),
    tome:    document.getElementById('evaInpTome'),
    grail:   document.getElementById('evaInpGrail'),
    chapter: document.getElementById('evaInpChapter')
  };

  const outputs = {
    budget:  document.getElementById('evaOutBudget'),
    tome:    document.getElementById('evaOutTome'),
    grail:   document.getElementById('evaOutGrail'),
    chapter: document.getElementById('evaOutChapter')
  };

  const results = {
    spent:  document.getElementById('evaResSpent'),
    left:   document.getElementById('evaResLeft'),
    coins:  document.getElementById('evaResCoins'),
    pull:   document.getElementById('evaResPull'),
    pulls:  document.getElementById('evaResPulls'),
    stones: document.getElementById('evaResStones'),
    stars:  document.getElementById('evaResStars'),
    sapph:  document.getElementById('evaResSapph')
  };

  const msgBox = document.getElementById('evaCalcMsg');

  function render() {
    const budget  = parseInt(inputs.budget.value, 10);
    const tome    = parseInt(inputs.tome.value, 10);
    const grail   = parseInt(inputs.grail.value, 10);
    const chapter = parseInt(inputs.chapter.value, 10);

    if (outputs.budget)  outputs.budget.textContent  = budget;
    if (outputs.tome)    outputs.tome.textContent    = tome;
    if (outputs.grail)   outputs.grail.textContent   = grail;
    if (outputs.chapter) outputs.chapter.textContent = chapter;

    const r = simulateEva(budget, tome, grail, chapter);

    if (!r || !r.ok) {
      const short = r ? r.short : 0;
      if (results.spent)  results.spent.textContent  = fmt(r ? r.spent : 0);
      if (results.left)   results.left.textContent   = '—';
      if (results.coins)  results.coins.textContent  = '—';
      if (results.pull)   results.pull.textContent   = '—';
      if (results.pulls)  results.pulls.textContent  = '—';
      if (results.stones) results.stones.textContent = '—';
      if (results.stars)  results.stars.textContent  = '—';
      if (results.sapph)  results.sapph.textContent  = '—';

      if (msgBox) {
        msgBox.className = 'calc-msg show err';
        msgBox.textContent =
          'Не хватает ' + fmt(short) + ' кристаллов. ' +
          'Нужно ' + fmt(r ? r.spent : 0) + ', а бюджет ' + fmt(budget) + '. ' +
          'Понизьте уровень реликвий или целевую главу.';
      }
      return;
    }

    if (results.spent)  results.spent.textContent  = fmt(r.spent);
    if (results.left)   results.left.textContent   = fmt(r.left);
    if (results.coins)  results.coins.textContent  = fmt(r.coins);
    if (results.pull)   results.pull.textContent   = fmt(r.pullCost);
    if (results.pulls)  results.pulls.textContent  = r.pulls.toFixed(1);
    if (results.stones) results.stones.textContent = fmt(r.stones);
    if (results.sapph)  results.sapph.textContent  = fmt(r.sapph);

    const stars = starsFor(r.stones);
    if (results.stars) results.stars.textContent = stars > 0 ? ('Ева ' + stars + '★') : 'меньше 1★';

    const best = findBest(budget, chapter);
    const diff = best.stones - r.stones;

    if (msgBox) {
      if (diff <= 20) {
        msgBox.className = 'calc-msg show ok';
        msgBox.textContent =
          'Оптимальная раскладка для главы ' + chapter + ' при бюджете ' + budget +
          ': Том ' + best.tome + ', Грааль ' + best.grail +
          ', Амулет ' + r.amuletLvl + ' (' + fmt(r.amuletCost) + ' кр.). ' +
          'Вы у оптимума.';
      } else {
        msgBox.className = 'calc-msg show err';
        msgBox.textContent =
          'Можно лучше: Том ' + best.tome + ', Грааль ' + best.grail +
          ' даст ~' + fmt(best.stones) + ' камень души (+' + fmt(diff) + ').';
      }
    }
  }

  function findBest(budget, chapter) {
    let best = { stones: -1, tome: 1, grail: 1 };
    for (let t = 1; t <= 15; t++) {
      for (let g = 1; g <= 18; g++) {
        const r = simulateEva(budget, t, g, chapter);
        if (r && r.ok && r.stones > best.stones) {
          best = { stones: r.stones, tome: t, grail: g, sapph: r.sapph };
        }
      }
    }
    return best;
  }

  Object.keys(inputs).forEach(k => {
    if (inputs[k]) inputs[k].addEventListener('input', render);
  });

  widget.querySelectorAll('[data-preset]').forEach(btn => {
    btn.addEventListener('click', () => {
      const p = btn.getAttribute('data-preset').split(',');
      if (inputs.budget)  inputs.budget.value  = p[0];
      if (inputs.tome)    inputs.tome.value    = p[1];
      if (inputs.grail)   inputs.grail.value   = p[2];
      if (inputs.chapter) inputs.chapter.value = p[3];
      render();
    });
  });

  render();
}

const PLANS = [
  { name: 'F2P Эконом (Глава 4)', budget: 320, tome: 5, grail: 3, chapter: 4 },
  { name: 'F2P Оптимум (Глава 5)', budget: 530, tome: 6, grail: 4, chapter: 5, best: true },
  { name: 'Максимум F2P (Глава 6)', budget: 790, tome: 7, grail: 5, chapter: 6 }
];

function buildBars(containerId, key, gold) {
  const box = document.getElementById(containerId);
  if (!box) return;

  const data = PLANS.map(p => {
    const r = simulateEva(p.budget, p.tome, p.grail, p.chapter);
    return { name: p.name, value: r && r.ok ? r[key] : 0, best: !!p.best };
  });

  const max = Math.max(...data.map(d => d.value));

  box.innerHTML = '';
  data.forEach(d => {
    const row = document.createElement('div');
    row.className = 'bar-row' + (d.best ? ' is-best' : '');

    const name = document.createElement('div');
    name.className = 'bar-name';
    name.textContent = d.name;

    const track = document.createElement('div');
    track.className = 'bar-track';

    const fill = document.createElement('div');
    fill.className = 'bar-fill' + (gold ? ' gold' : '');
    fill.setAttribute('data-target', max > 0 ? (d.value / max * 100) : 0);
    track.appendChild(fill);

    const val = document.createElement('div');
    val.className = 'bar-val';
    val.textContent = fmt(d.value);

    row.appendChild(name);
    row.appendChild(track);
    row.appendChild(val);
    box.appendChild(row);
  });
}

function animateBarsOnView() {
  const fills = document.querySelectorAll('#guide-container-eva .bar-fill');
  if (!fills.length) return;

  if (!('IntersectionObserver' in window)) {
    fills.forEach(f => { f.style.width = f.getAttribute('data-target') + '%'; });
    return;
  }

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.width = e.target.getAttribute('data-target') + '%';
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.25 });

  fills.forEach(f => { obs.observe(f); });
}

function initNav() {
  const toggle  = document.getElementById('evaNavToggle');
  const sidebar = document.getElementById('evaSidebar');
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
  const links = Array.from(document.querySelectorAll('#evaToc a[href^="#"]'));
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

/* =========================================================
   Титаны Dominion Era — Универсальный калькулятор контрпиков
   Hero Wars: Dominion Era
   ========================================================= */

const EL = {
  water:      { n: 'Вода',      i: '💧', c: 'var(--water)', tagClass: 'tag-water' },
  fire:       { n: 'Огонь',     i: '🔥', c: 'var(--fire)',  tagClass: 'tag-fire' },
  earth:      { n: 'Земля',     i: '🌍', c: 'var(--earth)', tagClass: 'tag-earth' },
  light:      { n: 'Свет',      i: '⚪', c: 'var(--light)', tagClass: 'tag-light' },
  dark:       { n: 'Тьма',      i: '🌑', c: 'var(--dark)',  tagClass: 'tag-dark' },
  distortion: { n: 'Искажение', i: '🌀', c: 'var(--purple)',tagClass: 'tag-distortion' }
};

const ORDER = ['water', 'fire', 'earth', 'light', 'dark', 'distortion'];

// Универсальный список всех титанов (все считаются равной силы)
// o = orderRank (чем меньше, тем ближе к передовой линии)
const TITANS_ROSTER = [
  { id: 'sigurd',   n: 'Сигурд',   e: 'water',      r: 'Танк передней линии', o: 1 },
  { id: 'brustar',  n: 'Брустар',  e: 'dark',       r: 'Танк передней линии', o: 2 },
  { id: 'rigel',    n: 'Ригель',   e: 'light',      r: 'Танк передней линии', o: 3 },
  { id: 'moloch',   n: 'Молох',    e: 'fire',       r: 'Танк передней линии', o: 4 },
  { id: 'angus',    n: 'Ангус',    e: 'earth',      r: 'Танк передней линии', o: 5 },
  { id: 'mairi',    n: 'Маири',    e: 'water',      r: 'Поддержка',          o: 6 },
  { id: 'mort',     n: 'Морт',     e: 'dark',       r: 'Поддержка / Лекарь', o: 7 },
  { id: 'iyari',    n: 'Ияри',     e: 'light',      r: 'Поддержка / Лекарь', o: 8 },
  { id: 'ignis',    n: 'Игнис',    e: 'fire',       r: 'Поддержка',          o: 9 },
  { id: 'avalon',   n: 'Авалон',   e: 'earth',      r: 'Поддержка / Щиты',   o: 10 },
  { id: 'hyperion', n: 'Гиперион', e: 'water',      r: 'Супертитан / Лекарь',o: 11 },
  { id: 'nova',     n: 'Нова',     e: 'water',      r: 'Контроль / Стрелок', o: 12 },
  { id: 'keros',    n: 'Керос',    e: 'dark',       r: 'Урон',               o: 13 },
  { id: 'amon',     n: 'Амон',     e: 'light',      r: 'Урон',               o: 14 },
  { id: 'araji',    n: 'Араджи',   e: 'fire',       r: 'Супертитан / Урон',  o: 15 },
  { id: 'vulcan',   n: 'Вулкан',   e: 'fire',       r: 'Урон',               o: 16 },
  { id: 'eden',     n: 'Эдем',     e: 'earth',      r: 'Супертитан / Контроль', o: 17 },
  { id: 'silva',    n: 'Сильва',   e: 'earth',      r: 'Урон',               o: 18 },
  { id: 'tenebris', n: 'Тенебрис', e: 'dark',       r: 'Супертитан / Урон',  o: 19 },
  { id: 'alecto',   n: 'Алекто',   e: 'distortion', r: 'Стрелок / Искажение',o: 20 },
  { id: 'valdur',   n: 'Валдур',   e: 'distortion', r: 'Призыватель / Искажение', o: 21 }
];

export function getNetScore(el, enemy) {
  let plus = 0;
  if (el === 'water')      plus = (enemy.fire || 0) + (enemy.distortion || 0);
  else if (el === 'fire')  plus = (enemy.earth || 0) + (enemy.distortion || 0);
  else if (el === 'earth') plus = (enemy.water || 0) + (enemy.distortion || 0);
  else if (el === 'light') plus = (enemy.dark || 0);
  else if (el === 'dark')  plus = (enemy.light || 0);
  else if (el === 'distortion') plus = (enemy.light || 0) + (enemy.dark || 0);

  let minus = 0;
  if (el === 'fire')       minus = (enemy.water || 0);
  else if (el === 'earth') minus = (enemy.fire || 0);
  else if (el === 'water') minus = (enemy.earth || 0);
  else if (el === 'light') minus = (enemy.dark || 0) + (enemy.distortion || 0);
  else if (el === 'dark')  minus = (enemy.light || 0) + (enemy.distortion || 0);
  else if (el === 'distortion') minus = (enemy.water || 0) + (enemy.fire || 0) + (enemy.earth || 0);

  return { plus, minus, net: plus - minus };
}

let enemyState = { fire: 0, water: 0, earth: 0, light: 0, dark: 0, distortion: 0 };
let enemyTotemState = null;

let isTitansInitialized = false;

export function initTitansGuide() {
  if (isTitansInitialized) return;
  isTitansInitialized = true;

  initUniversalCalculator();
  initNav();
  initScrollSpy();

  window.TitanCalc = {
    getNetScore,
    enemyState,
    TITANS_ROSTER
  };
}

function fmt(n) {
  return String(Math.round(n));
}

function initUniversalCalculator() {
  const enemyRowsBox = document.getElementById('titanEnemyRows');
  const totemBox = document.getElementById('titanEtotem');

  if (!enemyRowsBox) return;

  drawEnemyRows();
  drawTotemButtons();
  calculateUniversalSquad();

  // Attach global bump/setTotem handlers
  window.bumpTitanEnemy = function (el, delta) {
    const total = Object.values(enemyState).reduce((a, b) => a + b, 0);
    if (delta > 0 && total >= 5) return;
    enemyState[el] = Math.max(0, (enemyState[el] || 0) + delta);
    const countEl = document.getElementById(`cnt_${el}`);
    if (countEl) countEl.textContent = enemyState[el];
    calculateUniversalSquad();
  };

  window.setTitanTotem = function (el) {
    enemyTotemState = el;
    drawTotemButtons();
    calculateUniversalSquad();
  };

  window.clearTitanEnemy = function () {
    ORDER.forEach(el => { enemyState[el] = 0; });
    enemyTotemState = null;
    drawEnemyRows();
    drawTotemButtons();
    calculateUniversalSquad();
  };
}

function drawEnemyRows() {
  const box = document.getElementById('titanEnemyRows');
  if (!box) return;

  box.innerHTML = ORDER.map(el => `
    <div class="erow" style="display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid var(--line);">
      <div class="ename" style="flex:1;font-weight:600;display:flex;align-items:center;gap:8px;">
        <span class="dot" style="background:${EL[el].c};width:10px;height:10px;border-radius:50%;display:inline-block;"></span>
        ${EL[el].i} ${EL[el].n}
      </div>
      <button class="btn" onclick="bumpTitanEnemy('${el}', -1)" style="width:34px;height:34px;border-radius:8px;border:1px solid var(--line);background:var(--card2);color:var(--txt);font-size:18px;cursor:pointer;">−</button>
      <div class="cnt" id="cnt_${el}" style="width:32px;text-align:center;font-size:18px;font-weight:700;">${enemyState[el] || 0}</div>
      <button class="btn" onclick="bumpTitanEnemy('${el}', 1)" style="width:34px;height:34px;border-radius:8px;border:1px solid var(--line);background:var(--card2);color:var(--txt);font-size:18px;cursor:pointer;">+</button>
    </div>
  `).join('');
}

function drawTotemButtons() {
  const box = document.getElementById('titanEtotem');
  if (!box) return;

  let html = `<button class="tbtn ${enemyTotemState === null ? 'on' : ''}" onclick="setTitanTotem(null)" style="padding:6px 12px;border-radius:8px;border:1px solid var(--line);background:var(--card2);color:var(--dim);font-size:13px;cursor:pointer;margin-right:6px;">нет</button>`;
  html += ORDER.map(el => `
    <button class="tbtn ${enemyTotemState === el ? 'on' : ''}" onclick="setTitanTotem('${el}')" style="padding:6px 12px;border-radius:8px;border:1px solid var(--line);background:var(--card2);color:var(--dim);font-size:13px;cursor:pointer;margin-right:6px;margin-bottom:6px;">
      ${EL[el].i} ${EL[el].n}
    </button>
  `).join('');

  box.innerHTML = html;
}

function calculateUniversalSquad() {
  const totalEnemy = Object.values(enemyState).reduce((a, b) => a + b, 0);
  const totalLine = document.getElementById('titanTotalLine');
  if (totalLine) {
    totalLine.textContent = `Выбрано титанов врага: ${totalEnemy} из 5`;
    totalLine.className = 'total' + (totalEnemy === 5 ? ' ok' : (totalEnemy > 5 ? ' warn' : ''));
  }

  drawMatrix(totalEnemy);

  const resultBox = document.getElementById('titanResultBox');
  if (!resultBox) return;

  if (!totalEnemy) {
    resultBox.innerHTML = '<div class="empty" style="text-align:center;color:var(--dim);padding:24px;">Добавьте титанов противника кнопками «+» выше</div>';
    return;
  }

  // Score titans based on net elemental advantage and team balance
  const scoredTitans = TITANS_ROSTER.map(t => {
    const s = getNetScore(t.e, enemyState);
    // Base score from elemental advantage
    let score = s.net * 10;
    // Small priority boost for tanks (o <= 5) to ensure a stable frontline
    if (t.o <= 5) score += 2;
    // Supertitan utility bonus
    if (t.r.includes('Супертитан')) score += 1;

    return { ...t, ...s, score };
  }).sort((a, b) => b.score - a.score || a.o - b.o);

  // Pick top 5, sorted by orderRank for battle order
  const squad = scoredTitans.slice(0, 5).sort((a, b) => a.o - b.o);
  const bench = scoredTitans.slice(5);

  let html = '<div class="squad" style="display:flex;flex-direction:column;gap:10px;">';
  squad.forEach((t, i) => {
    const cls = t.net > 0 ? 'b-good' : (t.net < 0 ? 'b-bad' : 'b-neut');
    const lbl = t.net > 0 ? `+${t.net} бонус` : (t.net < 0 ? `${t.net} штраф` : 'нейтрален');
    const borderColor = t.net > 0 ? 'var(--good)' : (t.net < 0 ? 'var(--bad)' : 'var(--neut)');

    html += `
      <div class="slot" style="display:flex;align-items:center;gap:12px;background:var(--card2);border-radius:10px;padding:12px 14px;border-left:4px solid ${borderColor};">
        <div class="num" style="width:24px;height:24px;border-radius:50%;background:var(--line);color:var(--dim);font-size:12px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;">${i + 1}</div>
        <div class="info" style="flex:1;min-width:0;">
          <div class="tname" style="font-weight:700;font-size:15px;color:var(--txt);">
            ${EL[t.e].i} ${t.n}
          </div>
          <div class="trole" style="font-size:12.5px;color:var(--dim);margin-top:2px;">
            ${t.r} · бьёт ${t.plus}, бьют ${t.minus}
          </div>
        </div>
        <div class="badge ${cls}" style="font-size:12px;font-weight:700;padding:4px 10px;border-radius:6px;">${lbl}</div>
      </div>
    `;
  });
  html += '</div>';

  // Tactical Warnings & Notes
  const front = squad[0];
  if (front && front.net < 0) {
    html += `
      <div class="note n-warn" style="margin-top:12px;padding:12px;border-radius:8px;background:rgba(255,92,108,.1);border-left:3px solid var(--bad);font-size:13px;">
        ⚠️ <b>${front.n}</b> встанет на переднюю линию, но получает штраф уязвимости (${front.net}). Будьте осторожны с его выживаемостью.
      </div>
    `;
  }

  const nets = ORDER.map(e => getNetScore(e, enemyState).net);
  if (Math.max(...nets) <= 0) {
    html += `
      <div class="note n-tip" style="margin-top:12px;padding:12px;border-radius:8px;background:rgba(255,210,61,.1);border-left:3px solid var(--light);font-size:13px;">
        💡 У врага сбалансированный состав — стихийный контрпик не дает явного перевеса. Выставляйте ваших самых прокачанных титанов.
      </div>
    `;
  }

  if (enemyTotemState) {
    const count = enemyState[enemyTotemState] || 0;
    html += `
      <div class="note n-totem" style="margin-top:12px;padding:12px;border-radius:8px;background:rgba(160,107,255,.12);border-left:3px solid var(--purple);font-size:13px;">
        🗿 У врага заявлен тотем ${EL[enemyTotemState].i} ${EL[enemyTotemState].n}. 
        ${count >= 3 ? 'Тотем активен (3+ титана этой стихии).' : `⚠️ Для вызова тотема нужно минимум 3 титана этой стихии (указано ${count}).`}
      </div>
    `;
  }

  // Universal disclaimer note
  html += `
    <div class="note n-info" style="margin-top:12px;padding:10px 12px;border-radius:8px;background:rgba(77,157,224,.1);border-left:3px solid var(--blue);font-size:12.5px;color:var(--text-dim);">
      ℹ️ <b>Универсальный расчет:</b> Все титаны предполагаются равного уровня развития. Калькулятор показывает наилучший тактический состав по взаимодействию стихий и ролей в бою.
    </div>
  `;

  // Bench (substitutes)
  if (bench.length) {
    html += '<div class="bench" style="display:flex;flex-wrap:wrap;gap:6px;margin-top:12px;">';
    bench.slice(0, 6).forEach(t => {
      const isBad = t.net < 0;
      html += `<span class="chip ${isBad ? 'no' : ''}" style="font-size:12px;padding:4px 8px;border-radius:6px;background:var(--card2);color:var(--dim);border:1px solid var(--line);">${EL[t.e].i} ${t.n} ${t.net > 0 ? '+' + t.net : t.net}</span>`;
    });
    html += '</div>';
  }

  resultBox.innerHTML = html;
}

function drawMatrix(totalEnemy) {
  const box = document.getElementById('titanMatrix');
  if (!box) return;

  if (!totalEnemy) {
    box.innerHTML = '<div class="empty" style="text-align:center;color:var(--dim);padding:16px;">—</div>';
    return;
  }

  const rows = ORDER.map(el => ({ el, ...getNetScore(el, enemyState) })).sort((a, b) => b.net - a.net);

  let html = `
    <table style="width:100%;border-collapse:collapse;font-size:13.5px;">
      <thead>
        <tr style="border-bottom:1px solid var(--line);text-align:left;color:var(--dim);font-size:12px;">
          <th style="padding:8px;">Стихия</th>
          <th style="padding:8px;">Бьёт (+)</th>
          <th style="padding:8px;">Бьют (−)</th>
          <th style="padding:8px;">Итог</th>
          <th style="padding:8px;">Вердикт</th>
        </tr>
      </thead>
      <tbody>
  `;

  rows.forEach(r => {
    const color = r.net > 0 ? 'var(--good)' : (r.net < 0 ? 'var(--bad)' : 'var(--neut)');
    const verdict = r.net >= 2 ? '🔥 Костяк состава' : (r.net === 1 ? '👍 Отлично' : (r.net === 0 ? '⚪ Нейтрально' : '❌ Не брать'));

    html += `
      <tr style="border-bottom:1px solid rgba(46,53,89,.4);">
        <td style="padding:8px;font-weight:600;">
          <span class="dot" style="background:${EL[r.el].c};width:8px;height:8px;border-radius:50%;display:inline-block;margin-right:6px;"></span>
          ${EL[r.el].i} ${EL[r.el].n}
        </td>
        <td style="padding:8px;">${r.plus}</td>
        <td style="padding:8px;">${r.minus}</td>
        <td style="padding:8px;font-weight:700;color:${color}">${r.net > 0 ? '+' : ''}${r.net}</td>
        <td style="padding:8px;color:${color};font-weight:600;">${verdict}</td>
      </tr>
    `;
  });

  html += '</tbody></table>';
  box.innerHTML = html;
}

function initNav() {
  const toggle  = document.getElementById('titansNavToggle');
  const sidebar = document.getElementById('titansSidebar');
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
  const links = Array.from(document.querySelectorAll('#titansToc a[href^="#"]'));
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

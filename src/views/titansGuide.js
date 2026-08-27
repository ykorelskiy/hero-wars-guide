/* =========================================================
   Титаны Dominion Era — гайд по стихиям, контрпикам, тотемам
   Интерактивная логика: калькулятор контрпиков, навигация
   ========================================================= */

const ELEMENTS = {
  water: {
    label: 'Вода',
    beats: ['fire', 'distortion']
  },
  fire: {
    label: 'Огонь',
    beats: ['earth', 'distortion']
  },
  earth: {
    label: 'Земля',
    beats: ['water', 'distortion']
  },
  light: {
    label: 'Свет',
    beats: ['dark']
  },
  dark: {
    label: 'Тьма',
    beats: ['light']
  },
  distortion: {
    label: 'Искажение',
    beats: ['light', 'dark']
  }
};

const TAG_CLASS = {
  water: 'tag-water', fire: 'tag-fire', earth: 'tag-earth',
  light: 'tag-light', dark: 'tag-dark', distortion: 'tag-distortion'
};

export function counterInfo(enemyKey) {
  const beats = [];
  const losesTo = [];
  const neutral = [];

  Object.keys(ELEMENTS).forEach(key => {
    if (key === enemyKey) return;
    const el = ELEMENTS[key];
    const enemy = ELEMENTS[enemyKey];

    const iBeatEnemy = el.beats.indexOf(enemyKey) !== -1;
    const enemyBeatsMe = enemy.beats.indexOf(key) !== -1;

    if (iBeatEnemy) {
      beats.push(key);
    } else if (enemyBeatsMe) {
      losesTo.push(key);
    } else {
      neutral.push(key);
    }
  });

  return { beats, losesTo, neutral };
}

let isTitansInitialized = false;

export function initTitansGuide() {
  if (isTitansInitialized) return;
  isTitansInitialized = true;

  initCounterCalculator();
  initNav();
  initScrollSpy();

  window.TitanCounter = {
    ELEMENTS,
    counterInfo
  };
}

function renderChips(container, keys) {
  if (!container) return;
  container.innerHTML = '';
  if (!keys.length) {
    const empty = document.createElement('span');
    empty.style.cssText = 'font-size:12.5px;color:var(--text-faint);font-style:italic;';
    empty.textContent = 'нет подходящих стихий';
    container.appendChild(empty);
    return;
  }
  keys.forEach(key => {
    const chip = document.createElement('span');
    chip.className = 'tag ' + (TAG_CLASS[key] || '');
    chip.textContent = ELEMENTS[key].label;
    container.appendChild(chip);
  });
}

function initCounterCalculator() {
  const widget = document.getElementById('titansCounterWidget');
  if (!widget) return;

  const select = document.getElementById('titansInpEnemy');
  const beatsBox = document.getElementById('titansCounterBeats');
  const losesBox = document.getElementById('titansCounterLoses');
  const neutralBox = document.getElementById('titansCounterNeutral');
  const note = document.getElementById('titansCounterNote');

  if (!select) return;

  function render() {
    const enemyKey = select.value;
    const info = counterInfo(enemyKey);
    const enemyLabel = ELEMENTS[enemyKey].label;

    renderChips(beatsBox, info.beats);
    renderChips(losesBox, info.losesTo);
    renderChips(neutralBox, info.neutral);

    let noteText = 'Против ' + enemyLabel.toLowerCase() + ': ';
    if (info.beats.length) {
      noteText += 'ставьте ' + info.beats.map(k => ELEMENTS[k].label).join(', ') +
        ' — получите бонус урона и (в защите) бонус брони.';
    } else {
      noteText += 'ни одна стихия не получает прямого бонуса урона — бой пойдёт по голым характеристикам.';
    }
    if (enemyKey === 'distortion') {
      noteText += ' Помните: Искажение в защите прикрыто от всей доски, включая себя.';
    }

    if (note) note.textContent = noteText;
  }

  select.addEventListener('change', render);
  render();
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

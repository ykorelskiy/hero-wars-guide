/* =========================================================
   Герои Dominion Era — гайд по классам, контрпикам, связкам
   Интерактивная логика: калькулятор контрпиков по типам угроз
   ========================================================= */

const THREATS = {
  control: {
    advice: 'Ищите героев с иммунитетом к конкретному эффекту контроля или со снятием негативных статусов с союзников до того, как эффект успеет сработать повторно.',
    classes: ['Контроль', 'Поддержка']
  },
  heal: {
    advice: 'Нужен эффект анти-хила — снижение или блокировка лечения. Флаг Упадка тоже неплохо помогает против команд, завязанных на постоянное восстановление здоровья.',
    classes: ['Контроль', 'Целитель']
  },
  crit: {
    advice: 'Герои, наказывающие противника за критический удар, превращают ставку врага на крит в его же слабость. Чем чаще враг критует — тем больнее получает в ответ.',
    classes: ['Поддержка', 'Маг']
  },
  shield: {
    advice: 'Обычный урон бесполезен против неуязвимости и несъёмных щитов — нужны эффекты игнорирования щита или снятия неуязвимости, а не просто рост силы атаки.',
    classes: ['Воин', 'Стрелок']
  },
  displace: {
    advice: 'Возьмите героя, защищающего союзников от смещения (отбрасывания или притягивания) — постоянный сброс позиции разваливает построение сильнее прямого урона.',
    classes: ['Танк', 'Поддержка']
  },
  magic: {
    advice: 'Против высокого магического урона важны магическая защита и герои с уменьшением магического урона по команде. Танк с упором на магическую защиту держит удар лучше, чем просто высокое здоровье.',
    classes: ['Танк', 'Поддержка']
  },
  physical: {
    advice: 'Против высокого физического урона важны броня и уклонение. Танк с упором на броню и герои со снижением физического урона команде нейтрализуют бёрст-состав быстрее, чем встречный урон.',
    classes: ['Танк', 'Целитель']
  }
};

let isHeroesGuideInitialized = false;

export function initHeroesGuideView() {
  if (isHeroesGuideInitialized) return;
  isHeroesGuideInitialized = true;

  initThreatCalculator();
  initNav();
  initScrollSpy();

  window.HeroCounter = {
    THREATS
  };
}

function initThreatCalculator() {
  const widget = document.getElementById('heroesCounterWidget');
  if (!widget) return;

  const select = document.getElementById('heroesInpThreat');
  const adviceBox = document.getElementById('heroesCounterAdvice');
  const classesBox = document.getElementById('heroesCounterClasses');

  if (!select || !adviceBox || !classesBox) return;

  function render() {
    const threat = THREATS[select.value];
    if (!threat) return;

    adviceBox.textContent = threat.advice;

    classesBox.innerHTML = '';
    threat.classes.forEach(label => {
      const chip = document.createElement('span');
      chip.className = 'tag';
      chip.textContent = label;
      classesBox.appendChild(chip);
    });
  }

  select.addEventListener('change', render);
  render();
}

function initNav() {
  const toggle  = document.getElementById('heroesNavToggle');
  const sidebar = document.getElementById('heroesSidebar');
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
  const links = Array.from(document.querySelectorAll('#heroesToc a[href^="#"]'));
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

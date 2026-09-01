/* =========================================================
   Стронгфордская Викторина (День Знаний) — Интерактивная логика
   Hero Wars: Dominion Era
   ========================================================= */

import { QUIZ_CATEGORIES, QUIZ_QUESTIONS } from '../data/quizData.js';

let isQuizInitialized = false;
let activeCategory = 'all';

export function initQuizGuide() {
  if (isQuizInitialized) return;
  isQuizInitialized = true;

  initCategoryChips();
  initSearch();
  renderQAList();
  initNavToggle();
  initScrollSpy();
}

function initCategoryChips() {
  const container = document.getElementById('quizCategoryChips');
  if (!container) return;

  container.innerHTML = '';
  QUIZ_CATEGORIES.forEach(cat => {
    const chip = document.createElement('button');
    chip.className = `quiz-chip ${cat.id === activeCategory ? 'active' : ''}`;
    chip.innerHTML = `${cat.icon} ${cat.name}`;
    chip.addEventListener('click', () => {
      activeCategory = cat.id;
      document.querySelectorAll('#quizCategoryChips .quiz-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      renderQAList();
    });
    container.appendChild(chip);
  });
}

function initSearch() {
  const input = document.getElementById('quizSearchInput');
  if (!input) return;

  input.addEventListener('input', () => {
    renderQAList();
  });
}

function renderQAList() {
  const container = document.getElementById('quizQAList');
  const countEl = document.getElementById('quizMatchCount');
  const searchInput = document.getElementById('quizSearchInput');
  if (!container) return;

  const query = searchInput ? searchInput.value.trim().toLowerCase() : '';

  const filtered = QUIZ_QUESTIONS.filter(q => {
    const matchesCat = activeCategory === 'all' || q.category === activeCategory;
    const matchesQuery = !query ||
      q.question.toLowerCase().includes(query) ||
      q.answer.toLowerCase().includes(query);
    return matchesCat && matchesQuery;
  });

  if (countEl) {
    countEl.textContent = `Найдено вопросов: ${filtered.length} из ${QUIZ_QUESTIONS.length}`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align:center;padding:40px;color:var(--quiz-text-dim);">
        <p style="font-size:1.5rem;margin-bottom:8px;">🔍 Ничего не найдено</p>
        <p>Попробуйте изменить запрос или выберите категорию «Все вопросы».</p>
      </div>
    `;
    return;
  }

  container.innerHTML = '';
  filtered.forEach(item => {
    const el = document.createElement('div');
    el.className = 'quiz-qa-item';

    const catObj = QUIZ_CATEGORIES.find(c => c.id === item.category);
    const catName = catObj ? catObj.name : item.category;

    el.innerHTML = `
      <div style="flex:1;">
        <div style="display:flex;gap:8px;align-items:center;margin-bottom:4px;">
          <span class="quiz-qa-tag">${catName}</span>
        </div>
        <div class="quiz-qa-q">${item.question}</div>
        <div class="quiz-qa-a">Ответ: ${item.answer}</div>
      </div>
      <button class="quiz-copy-btn" data-answer="${item.answer}">📋 Копировать</button>
    `;

    const copyBtn = el.querySelector('.quiz-copy-btn');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(item.answer).then(() => {
          showToast(`Ответ «${item.answer}» скопирован!`);
        }).catch(() => {
          showToast(`Ответ: ${item.answer}`);
        });
      });
    }

    container.appendChild(el);
  });
}


function showToast(msg) {
  let toast = document.getElementById('quizToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'quizToast';
    toast.className = 'quiz-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

function initNavToggle() {
  const toggle = document.getElementById('quizNavToggle');
  const sidebar = document.getElementById('quizSidebar');
  if (!toggle || !sidebar) return;

  toggle.addEventListener('click', () => {
    const open = sidebar.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

function initScrollSpy() {
  const links = Array.from(document.querySelectorAll('#quizToc a[href^="#"]'));
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

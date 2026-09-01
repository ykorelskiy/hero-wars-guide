/* =========================================================
   Стронгфордская Викторина (День Знаний) — Интерактивная логика
   Hero Wars: Dominion Era
   ========================================================= */

import { QUIZ_CATEGORIES, QUIZ_QUESTIONS } from '../data/quizData.js';

let isQuizInitialized = false;
let activeCategory = 'all';
let currentSimIndex = 0;
let simQuestions = [];
let simScore = 0;
let simStreak = 0;
let simTimer = null;
let simTimeLeft = 30;

export function initQuizGuide() {
  if (isQuizInitialized) return;
  isQuizInitialized = true;

  initCategoryChips();
  initSearch();
  renderQAList();
  initSimulator();
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

/* ---------- Simulator Engine ---------- */
function initSimulator() {
  const startBtn = document.getElementById('quizSimStartBtn');
  if (startBtn) {
    startBtn.addEventListener('click', startQuizSimulation);
  }
}

function startQuizSimulation() {
  simQuestions = [...QUIZ_QUESTIONS].sort(() => 0.5 - Math.random()).slice(0, 10);
  currentSimIndex = 0;
  simScore = 0;
  simStreak = 0;

  document.getElementById('quizSimStartScreen').style.display = 'none';
  document.getElementById('quizSimActiveScreen').style.display = 'block';

  renderSimQuestion();
}

function renderSimQuestion() {
  clearInterval(simTimer);
  simTimeLeft = 30;

  if (currentSimIndex >= simQuestions.length) {
    finishQuizSimulation();
    return;
  }

  const q = simQuestions[currentSimIndex];
  const qNum = document.getElementById('quizSimQNum');
  const qText = document.getElementById('quizSimQText');
  const optionsBox = document.getElementById('quizSimOptions');
  const scoreEl = document.getElementById('quizSimScore');
  const streakEl = document.getElementById('quizSimStreak');
  const timerEl = document.getElementById('quizSimTimer');

  if (qNum) qNum.textContent = `Вопрос ${currentSimIndex + 1} из ${simQuestions.length}`;
  if (qText) qText.textContent = q.question;
  if (scoreEl) scoreEl.textContent = simScore;
  if (streakEl) streakEl.textContent = simStreak;
  if (timerEl) timerEl.textContent = `${simTimeLeft}с`;

  simTimer = setInterval(() => {
    simTimeLeft--;
    if (timerEl) timerEl.textContent = `${simTimeLeft}с`;
    if (simTimeLeft <= 0) {
      clearInterval(simTimer);
      handleSimAnswer(null, q.answer);
    }
  }, 1000);

  if (!optionsBox) return;
  optionsBox.innerHTML = '';

  const shuffledOptions = [...q.options].sort(() => 0.5 - Math.random());

  shuffledOptions.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option-btn';
    btn.textContent = opt;
    btn.addEventListener('click', () => handleSimAnswer(opt, q.answer));
    optionsBox.appendChild(btn);
  });
}

function handleSimAnswer(selectedOpt, correctAns) {
  clearInterval(simTimer);
  const optionsBox = document.getElementById('quizSimOptions');
  const buttons = optionsBox ? optionsBox.querySelectorAll('.quiz-option-btn') : [];

  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correctAns) {
      btn.classList.add('correct');
    }
    if (selectedOpt && btn.textContent === selectedOpt && selectedOpt !== correctAns) {
      btn.classList.add('wrong');
    }
  });

  if (selectedOpt === correctAns) {
    let pts = 10;
    if (simTimeLeft >= 20) pts += 10;
    else if (simTimeLeft >= 10) pts += 5;
    else pts += 2;
    simScore += pts;
    simStreak++;
  } else {
    simScore += 5; // Incorrect answer fallback: 5 points
    simStreak = 0;
  }

  setTimeout(() => {
    currentSimIndex++;
    renderSimQuestion();
  }, 1500);
}

function finishQuizSimulation() {
  document.getElementById('quizSimActiveScreen').style.display = 'none';
  const finishScreen = document.getElementById('quizSimFinishScreen');
  if (!finishScreen) return;

  finishScreen.style.display = 'block';

  const finalScoreEl = document.getElementById('quizSimFinalScore');
  const accuracyEl = document.getElementById('quizSimAccuracy');

  if (finalScoreEl) finalScoreEl.textContent = `${simScore} очков`;
  if (accuracyEl) accuracyEl.textContent = `${Math.round((simScore / (simQuestions.length * 20)) * 100)}%`;

  const restartBtn = document.getElementById('quizSimRestartBtn');
  if (restartBtn) {
    restartBtn.onclick = () => {
      finishScreen.style.display = 'none';
      startQuizSimulation();
    };
  }
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

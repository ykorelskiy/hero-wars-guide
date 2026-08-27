import './style.css';
import './styles/valdur.css';
import './styles/alecto.css';
import './styles/titans.css';
import './styles/heroesGuide.css';
import { loadAllData, getHeroes, getTeams, isOfflineMode } from './data/dataService.js';
import { initNavigation } from './components/navigation.js';
import { initAdvisor } from './views/advisor.js';
import { initWikiView } from './views/wiki.js';
import { initTeams } from './views/teams.js';
import { initMatrix } from './views/matrix.js';
import { initValdurGuide } from './views/valdurGuide.js';
import { initAlectoGuide } from './views/alectoGuide.js';
import { initTitansGuide } from './views/titansGuide.js';
import { initHeroesGuideView } from './views/heroesGuideView.js';

function renderBadges() {
  const box = document.getElementById('statBadges');
  if (!box) return;
  const teams = getTeams();
  const heroes = getHeroes();
  const sCount = teams.filter(t => t.tier === 'S').length;
  const aCount = teams.filter(t => t.tier === 'A').length;
  const offline = isOfflineMode();

  box.innerHTML = `
    <span class="bg"><b>${heroes.length}</b> героев в Вики</span>
    <span class="bg"><b>${teams.length}</b> мета-команд</span>
    <span class="bg"><b>${sCount}</b> S-тир · <b>${aCount}</b> A-тир</span>
    ${offline ? '<span class="bg offline">⚡ Offline-режим</span>' : '<span class="bg">🟢 Supabase DB</span>'}
  `;
}

async function boot() {
  const removeOverlay = () => {
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) {
      overlay.style.opacity = '0';
      setTimeout(() => overlay.remove(), 300);
    }
  };

  // Fallback timer: max 3.5s loading overlay
  const fallbackTimer = setTimeout(removeOverlay, 3500);

  try {
    await loadAllData();
    initNavigation();
    initAdvisor();
    initWikiView();
    initTeams();
    initMatrix();
    initValdurGuide();
    initAlectoGuide();
    initTitansGuide();
    initHeroesGuideView();
    renderBadges();
  } catch (err) {
    console.error('Fatal boot error:', err);
  } finally {
    clearTimeout(fallbackTimer);
    removeOverlay();
  }
}

boot();

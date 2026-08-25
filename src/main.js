import './style.css';
import { loadAllData, getHeroes, getTeams, isOfflineMode } from './data/dataService.js';
import { initNavigation } from './components/navigation.js';
import { initAdvisor } from './views/advisor.js';
import { initTeams } from './views/teams.js';
import { initMatrix } from './views/matrix.js';

function renderBadges() {
  const box = document.getElementById('statBadges');
  if (!box) return;
  const teams = getTeams();
  const heroes = getHeroes();
  const sCount = teams.filter(t => t.tier === 'S').length;
  const aCount = teams.filter(t => t.tier === 'A').length;
  const offline = isOfflineMode();

  box.innerHTML = `
    <span class="bg"><b>${teams.length}</b> команд в базе</span>
    <span class="bg"><b>${heroes.length}</b> героев учтено</span>
    <span class="bg"><b>${sCount}</b> S-тир · <b>${aCount}</b> A-тир</span>
    ${offline ? '<span class="bg offline">⚡ Offline-режим</span>' : '<span class="bg">🟢 Supabase DB</span>'}
  `;
}

async function boot() {
  await loadAllData();
  initNavigation();
  initAdvisor();
  initTeams();
  initMatrix();
  renderBadges();

  // Remove loading overlay
  const overlay = document.getElementById('loadingOverlay');
  if (overlay) {
    overlay.style.opacity = '0';
    setTimeout(() => overlay.remove(), 300);
  }
}

boot();

import { getTeams, heroById } from '../data/dataService.js';
import { openModal } from '../components/modal.js';

let tierFilter = 'all';

export function initTeams() {
  document.querySelectorAll('#tierFilter .fb').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#tierFilter .fb').forEach(b => b.classList.remove('on'));
      btn.classList.add('on');
      tierFilter = btn.dataset.tier;
      renderTeamsGrid();
    });
  });

  renderTeamsGrid();
}

export function renderTeamsGrid() {
  const grid = document.getElementById('teamsGrid');
  if (!grid) return;
  grid.innerHTML = '';

  getTeams().forEach(team => {
    if (tierFilter !== 'all' && team.tier !== tierFilter) return;
    const tc = team.tier === 'S' ? 'var(--s)' : team.tier === 'A' ? 'var(--a)' : 'var(--b)';
    const card = document.createElement('div');
    card.className = 'card';
    card.style.setProperty('--tc', tc);
    card.innerHTML = `
      <div class="ctop">
        <div>
          <div class="cname">${team.name}</div>
          <div class="ctag">${team.tag}</div>
        </div>
        <div class="tier">${team.tier}</div>
      </div>
      <div class="hs">
        ${team.lineup.map(l => `<span class="hp ${l.key ? 'key' : ''}">${heroById(l.hero)?.name || l.hero}</span>`).join('')}
      </div>
      <div class="hook">${team.hook}</div>
      <div class="card-more">Открыть полный разбор →</div>
    `;
    card.addEventListener('click', () => openModal(team.id));
    grid.appendChild(card);
  });
}

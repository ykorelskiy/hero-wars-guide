import { getHeroes, getAdvice, teamById, heroById, logBattleRecommendation } from '../data/dataService.js';

let selected = new Set();

export function initAdvisor() {
  const searchInput = document.getElementById('heroSearch');
  const clearBtn = document.getElementById('clearSel');
  const analyzeBtn = document.getElementById('analyzeBtn');

  if (searchInput) {
    searchInput.addEventListener('input', e => renderHeroGrid(e.target.value));
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      selected.clear();
      renderHeroGrid(searchInput?.value || '');
      renderSelList();
    });
  }

  if (analyzeBtn) {
    analyzeBtn.addEventListener('click', handleAnalyze);
  }

  renderHeroGrid();
  renderSelList();
}

function renderHeroGrid(filter = '') {
  const grid = document.getElementById('heroGrid');
  if (!grid) return;
  grid.innerHTML = '';
  const f = filter.trim().toLowerCase();
  
  getHeroes().forEach(h => {
    if (f && !h.name.toLowerCase().includes(f)) return;
    const avatarSrc = h.avatar_url || `https://hero-wars.fandom.com/wiki/Special:Redirect/file/${encodeURIComponent(h.name)}_Icon.png`;
    const chip = document.createElement('div');
    chip.className = 'hero-chip' + (selected.has(h.id) ? ' picked' : '');
    chip.innerHTML = `
      <div style="display:flex;align-items:center;gap:6px;justify-content:center;">
        <img src="${avatarSrc}" alt="${h.name}" class="chip-avatar-img" onerror="this.style.display='none'" />
        <span>${h.name}</span>
      </div>
      <span class="role">${h.role}</span>
    `;
    chip.addEventListener('click', () => toggleHero(h.id));
    grid.appendChild(chip);
  });
}

function toggleHero(id) {
  if (selected.has(id)) selected.delete(id);
  else selected.add(id);
  
  const searchInput = document.getElementById('heroSearch');
  renderHeroGrid(searchInput ? searchInput.value : '');
  renderSelList();
}

function renderSelList() {
  const list = document.getElementById('selList');
  const btn = document.getElementById('analyzeBtn');
  if (!list || !btn) return;

  if (selected.size === 0) {
    list.innerHTML = '<p class="empty-hint">Пока никто не выбран</p>';
    btn.disabled = true;
    document.getElementById('resultBox')?.classList.remove('show');
    return;
  }
  btn.disabled = false;
  list.innerHTML = '';
  selected.forEach(id => {
    const h = heroById(id);
    if (!h) return;
    const avatarSrc = h.avatar_url || `https://hero-wars.fandom.com/wiki/Special:Redirect/file/${encodeURIComponent(h.name)}_Icon.png`;
    const chip = document.createElement('div');
    chip.className = 'sel-chip';
    chip.innerHTML = `
      <img src="${avatarSrc}" alt="${h.name}" class="chip-avatar-img" onerror="this.style.display='none'" />
      <span>${h.name}</span>
      <span class="rm" data-id="${id}">×</span>
    `;
    chip.querySelector('.rm').addEventListener('click', (e) => {
      e.stopPropagation();
      toggleHero(id);
    });
    list.appendChild(chip);
  });
}

function detectArchetype() {
  const counts = {};
  selected.forEach(id => {
    const h = heroById(id);
    if (!h) return;
    (h.archetypes || []).forEach(a => {
      if (a === 'counter') return;
      counts[a] = (counts[a] || 0) + 1;
    });
  });
  let best = null, bestCount = 0;
  Object.entries(counts).forEach(([a, c]) => {
    if (c > bestCount) { best = a; bestCount = c; }
  });
  return best || 'unknown';
}

function findRiskyCounters(teamId) {
  const team = teamById(teamId);
  if (!team) return [];
  const risky = [];
  selected.forEach(id => {
    const hit = team.counters.find(c => c.hero === id);
    if (hit) risky.push({ hero: heroById(id), why: hit.why });
  });
  return risky;
}

async function handleAnalyze() {
  const archetype = detectArchetype();
  const adviceMap = getAdvice();
  const advice = adviceMap[archetype] || adviceMap.unknown;
  const box = document.getElementById('resultBox');
  if (!box) return;

  let html = `
    <div class="res-archetype">
      <div class="lbl">Распознанный архетип врага</div>
      <div class="nm">${advice.label}</div>
      <div class="dsc">${advice.desc}</div>
    </div>
  `;

  advice.counterTeams.forEach((teamId, idx) => {
    const team = teamById(teamId);
    if (!team) return;
    const reason = advice.reason[teamId] || '';
    const risky = findRiskyCounters(teamId);

    html += `
      <div class="res-recommend">
        <div class="lbl">${idx === 0 ? '✅ Рекомендуемый ответ' : '🔁 Альтернативный ответ'} #${idx + 1}</div>
        <div class="nm">${team.name}</div>
        <div class="res-lineup">
          ${team.lineup.map(l => `<span class="rp">${heroById(l.hero)?.name || l.hero}</span>`).join('')}
        </div>
        <div class="why">${reason}</div>
      </div>
    `;

    if (risky.length) {
      html += `<div class="res-warn"><b>⚠️ Осторожно:</b> во вражеской команде есть герои, которые контрят именно ${team.name}:<br>`;
      risky.forEach(r => html += `— <b>${r.hero.name}</b>: ${r.why}<br>`);
      html += `</div>`;
    }
  });

  box.innerHTML = html;
  box.classList.add('show');
  box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

  // Log recommendation asynchronously
  logBattleRecommendation(selected, archetype, advice.counterTeams);
}

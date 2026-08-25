import { getHeroes } from '../data/dataService.js';
import { openWikiModal } from '../components/wikiModal.js';

let filters = {
  search: '',
  stat: 'all',
  role: 'all',
  position: 'all',
  faction: 'all'
};

export function initWikiView() {
  const searchInput = document.getElementById('wikiSearch');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      filters.search = e.target.value.trim().toLowerCase();
      renderWikiGrid();
    });
  }

  // Filter bar buttons binding
  setupFilterGroup('wikiStatFilter', 'stat');
  setupFilterGroup('wikiRoleFilter', 'role');
  setupFilterGroup('wikiPosFilter', 'position');
  setupFilterGroup('wikiFactionFilter', 'faction');

  const resetBtn = document.getElementById('wikiResetFilters');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      filters = { search: '', stat: 'all', role: 'all', position: 'all', faction: 'all' };
      if (searchInput) searchInput.value = '';
      document.querySelectorAll('.wiki-filter-bar .fb').forEach(b => {
        b.classList.toggle('on', b.dataset.val === 'all');
      });
      renderWikiGrid();
    });
  }

  renderWikiGrid();
}

function setupFilterGroup(containerId, filterKey) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.querySelectorAll('.fb').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.fb').forEach(b => b.classList.remove('on'));
      btn.classList.add('on');
      filters[filterKey] = btn.dataset.val;
      renderWikiGrid();
    });
  });
}

export function renderWikiGrid() {
  const grid = document.getElementById('wikiGrid');
  const countBadge = document.getElementById('wikiMatchCount');
  if (!grid) return;

  grid.innerHTML = '';
  const heroes = getHeroes();

  const filtered = heroes.filter(h => {
    // 1. Search name
    if (filters.search && !h.name.toLowerCase().includes(filters.search)) return false;
    // 2. Main stat
    if (filters.stat !== 'all' && h.main_stat !== filters.stat) return false;
    // 3. Role
    if (filters.role !== 'all') {
      if (filters.role === 'Боец' && !['Боец', 'Керри'].includes(h.role)) return false;
      if (filters.role !== 'Боец' && h.role !== filters.role) return false;
    }
    // 4. Position
    if (filters.position !== 'all' && (h.position || 'Передняя линия') !== filters.position) return false;
    // 5. Faction
    if (filters.faction !== 'all' && (h.faction || '').indexOf(filters.faction) === -1) return false;

    return true;
  });

  if (countBadge) {
    countBadge.textContent = `Показано: ${filtered.length} из ${heroes.length} героев`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = '<div class="bx warn" style="grid-column:1/-1;text-align:center;padding:30px;">Герои с выбранными фильтрами не найдены. Попробуйте сбросить фильтры.</div>';
    return;
  }

  filtered.forEach(hero => {
    const statColor = hero.main_stat === 'Сила' ? 'var(--s)' : 
                      hero.main_stat === 'Ловкость' ? 'var(--green)' : 
                      'var(--cyan)';

    const iconFallback = hero.main_stat === 'Сила' ? '🛡️' : hero.main_stat === 'Ловкость' ? '🏹' : '🔮';
    const avatarSrc = hero.avatar_url || `https://hero-wars.fandom.com/wiki/Special:Redirect/file/${encodeURIComponent(hero.name)}_Icon.png`;

    const card = document.createElement('div');
    card.className = 'card wiki-hero-card';
    card.style.setProperty('--tc', statColor);
    card.innerHTML = `
      <div class="ctop">
        <div style="display:flex;gap:12px;align-items:center;">
          <div class="hero-avatar-wrap" style="border:2px solid ${statColor}">
            <img src="${avatarSrc}" alt="${hero.name}" class="hero-avatar-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
            <div class="hero-avatar-fallback" style="display:none;background:rgba(255,255,255,0.08);width:100%;height:100%;align-items:center;justify-content:center;font-size:1.4rem;">${iconFallback}</div>
          </div>
          <div>
            <div class="cname">${hero.name}</div>
            <div class="ctag">${hero.position || 'Передняя линия'}</div>
          </div>
        </div>
        <div class="tier" style="font-size:0.75rem;padding:3px 8px;background:${statColor};">${hero.main_stat || 'Стат'}</div>
      </div>

      <div class="hs" style="margin:8px 0;">
        <span class="hp key" style="background:${statColor}">${hero.role}</span>
        <span class="hp">${hero.faction || 'Путь вечности'}</span>
      </div>

      <div class="hook" style="font-size:0.83rem;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;line-height:1.5;">
        ${hero.description || 'Описание героя доступно в Вики.'}
      </div>

      <div class="card-more" style="margin-top:10px;">Открыть полную Вики ⭐ →</div>
    `;
    
    card.addEventListener('click', () => openWikiModal(hero.id));
    grid.appendChild(card);
  });
}

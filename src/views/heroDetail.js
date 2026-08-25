import { heroById } from '../data/dataService.js';
import { getPatronPetsForHero } from '../data/petsData.js';
import { navigateTo } from '../components/navigation.js';
import { getHeroTier, TIER_RANKS } from '../data/tierData.js';

export function renderHeroDetail(heroId) {
  const wrap = document.getElementById('heroDetailWrap');
  if (!wrap) return;

  const hero = heroById(heroId);
  if (!hero) {
    wrap.innerHTML = `
      <div style="padding:40px; text-align:center;">
        <h3 style="color:#ef4444;">Герой "${heroId}" не найден</h3>
        <button class="analyze-btn" style="margin-top:20px; max-width:200px;" id="heroBackBtn">← Назад в Вики</button>
      </div>
    `;
    document.getElementById('heroBackBtn')?.addEventListener('click', () => navigateTo('wiki'));
    return;
  }

  const statColor = hero.main_stat === 'Сила' ? '#ef4444' : 
                    hero.main_stat === 'Ловкость' ? '#10b981' : 
                    '#06b6d4';

  const iconFallback = hero.main_stat === 'Сила' ? '🛡️' : hero.main_stat === 'Ловкость' ? '🏹' : '🔮';
  const avatarSrc = hero.avatar_url || `/assets/heroes/${hero.id}.png`;

  const tier = getHeroTier(hero.id);
  const tierInfo = TIER_RANKS[tier] || TIER_RANKS['A'];

  // Compatible Pets for Patronage
  const patronPets = getPatronPetsForHero(hero.id);

  const petsBadgesHtml = (patronPets.length > 0)
    ? patronPets.map(p => `
        <div class="pet-patron-badge" data-pet="${p.id}" style="display:flex; align-items:center; gap:10px; background:rgba(30, 41, 59, 0.85); border:1px solid rgba(245, 158, 11, 0.3); border-radius:12px; padding:10px 14px; cursor:pointer; transition:all 0.2s ease;">
          <img src="${p.icon}" alt="${p.name}" style="width:36px; height:36px; border-radius:50%; object-fit:cover; border:2px solid #f59e0b;" onerror="this.src='/images/heroes/cain.png'" />
          <div>
            <div style="font-weight:800; color:#ffffff; font-size:0.95rem;">🐾 ${p.name}</div>
            <div style="color:#fbbf24; font-size:0.8rem;">${p.role}</div>
          </div>
          <span style="margin-left:auto; color:#f59e0b; font-size:1.2rem;">→</span>
        </div>
      `).join('')
    : '<div style="color:#94a3b8; font-size:0.9rem;">Нет информации по особым связям патронажа.</div>';

  const skillsHtml = (hero.skills && hero.skills.length > 0)
    ? hero.skills.map((s, i) => `
        <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255, 255, 255, 0.12); border-left: 4px solid ${statColor}; border-radius: 14px; padding: 18px; margin-bottom: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.3);">
          <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:10px; margin-bottom: 10px;">
            <div style="display:flex; align-items:center; gap:10px;">
              <span style="background:${statColor}; color:#0f172a; font-weight:900; width:32px; height:32px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:1rem;">${i + 1}</span>
              <span style="font-size:1.2rem; font-weight:800; color:#ffffff;">${s.name}</span>
              <span style="background:rgba(255,255,255,0.1); color:#f59e0b; padding:4px 12px; border-radius:12px; font-size:0.83rem; font-weight:600;">${s.type}</span>
            </div>
            ${s.max_val ? `<div style="background: rgba(245, 158, 11, 0.15); border: 1px solid rgba(245, 158, 11, 0.3); color: #fbbf24; padding: 4px 12px; border-radius: 8px; font-size: 0.88rem; font-weight: 700;">🏆 130 ур: ${s.max_val}</div>` : ''}
          </div>

          <div style="color: #cbd5e1; font-size: 0.95rem; line-height: 1.6; margin-bottom: 12px; background: rgba(255,255,255,0.03); padding: 12px 16px; border-radius: 10px;">
            ${s.desc}
          </div>

          <div style="display:grid; grid-template-columns: 1fr; gap:10px;">
            ${s.depends_on ? `<div style="background: rgba(6, 182, 212, 0.1); border: 1px solid rgba(6, 182, 212, 0.25); color: #38bdf8; padding: 8px 14px; border-radius: 8px; font-size: 0.9rem; font-weight: 600;">🎯 <b>Зависит от:</b> <span style="color:#ffffff;">${s.depends_on}</span></div>` : ''}
            ${s.formula ? `<div style="background: rgba(30, 41, 59, 0.9); border: 1px solid rgba(255, 255, 255, 0.15); padding: 10px 14px; border-radius: 8px; font-size: 0.92rem; color: #f8fafc;">📐 <b>Формула расчёта:</b> <span style="color:#facc15; font-weight:700;">${s.formula}</span></div>` : ''}
            ${s.per_lvl ? `<div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.25); color: #34d399; padding: 8px 14px; border-radius: 8px; font-size: 0.9rem; font-weight: 600;">📈 <b>Прирост за уровень:</b> <span style="color:#ffffff;">${s.per_lvl}</span></div>` : ''}
          </div>
        </div>
      `).join('')
    : '<div class="bx info">Подробное описание умений обновляется...</div>';

  const artifactsHtml = (hero.artifacts && hero.artifacts.length > 0)
    ? hero.artifacts.map(a => `
        <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255, 255, 255, 0.12); border-left: 4px solid ${statColor}; border-radius: 12px; padding: 16px; margin-bottom: 14px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <b style="color: #ffffff; font-size: 1.1rem;">Слот ${a.slot}: ${a.name}</b>
            <span style="background: rgba(255, 255, 255, 0.1); color: #cbd5e1; padding: 3px 12px; border-radius: 6px; font-size: 0.82rem;">${a.type}</span>
          </div>
          ${a.team_buff ? `<div style="color: #f59e0b; font-weight: 700; font-size: 0.92rem; margin-bottom: 8px;">⚡ Командная активация (9 сек): ${a.team_buff}</div>` : ''}
          ${a.stats ? `<div style="color: #94a3b8; font-size: 0.9rem; margin-bottom: 8px;">📊 Параметры артефакта: ${a.stats}</div>` : ''}
          <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px; margin-top: 8px; font-size: 0.88rem;">
            <div style="background:rgba(255,255,255,0.04); padding:8px 12px; border-radius:6px; color:#cbd5e1;">⭐ <b>1★ (Базовый):</b> ${a.star1 || '10% прокачка'}</div>
            <div style="background:rgba(16, 185, 129, 0.15); border:1px solid rgba(16, 185, 129, 0.3); padding:8px 12px; border-radius:6px; color:#34d399; font-weight:700;">🌟 <b>6★ (Абсолют):</b> ${a.star6 || '100% прокачка'}</div>
          </div>
        </div>
      `).join('')
    : '<div class="bx info">Подробное описание артефактов обновляется...</div>';

  wrap.innerHTML = `
    <div style="margin-bottom:20px;">
      <button class="mini-btn" id="heroBackBtn" style="padding:10px 20px; font-size:0.95rem;">← Назад в Каталог Героев</button>
    </div>

    <!-- Hero Header Banner -->
    <div style="background: radial-gradient(circle at center, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.98) 100%); border: 1px solid rgba(255, 255, 255, 0.15); border-radius: 20px; padding: 24px; margin-bottom: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
      <div style="display:flex; gap:20px; align-items:center; flex-wrap:wrap;">
        <div style="width:84px; height:84px; border-radius:20px; border:4px solid ${statColor}; overflow:hidden; position:relative; flex-shrink:0;">
          <img src="${avatarSrc}" alt="${hero.name}" style="width:100%; height:100%; object-fit:cover;" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
          <div style="display:none; background:rgba(255,255,255,0.08); width:100%; height:100%; align-items:center; justify-content:center; font-size:2.5rem;">${iconFallback}</div>
        </div>

        <div>
          <h2 style="font-size:2rem; font-weight:900; color:#ffffff; margin-bottom:4px;">${hero.name}</h2>
          <div style="color:#94a3b8; font-size:1rem; margin-bottom:8px;">${hero.role} · ${hero.main_stat} · ${hero.position || 'Передняя линия'}</div>
          <div style="display:flex; gap:8px; flex-wrap:wrap; align-items:center;">
            <span style="background:${tierInfo.color}; color:#ffffff; font-weight:900; padding:4px 12px; border-radius:8px; font-size:0.9rem; box-shadow:0 2px 10px ${tierInfo.color}66;">🏆 ${tier} TIER (alexandregames 2026)</span>
            <span style="background:${statColor}; color:#0f172a; font-weight:800; padding:4px 12px; border-radius:8px; font-size:0.85rem;">${hero.faction || 'Путь вечности'}</span>
            <span style="background:rgba(255,255,255,0.1); color:#ffffff; font-weight:700; padding:4px 12px; border-radius:8px; font-size:0.85rem;">Dominion Era</span>
          </div>
        </div>
      </div>

      <!-- Splash Art Image Container -->
      <div style="text-align:center; margin-top:24px; background: rgba(3, 7, 18, 0.6); border:1px solid rgba(255,255,255,0.1); border-radius:16px; padding:24px;">
        <img src="/images/heroes/${hero.id}.png" alt="Официальный арт ${hero.name}" style="max-height:420px; max-width:100%; object-fit:contain; filter: drop-shadow(0 10px 30px ${statColor}66);" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';" />
        <div style="display:none; color:#94a3b8; padding:20px; font-size:0.9rem;">🎨 Полноразмерный арт базового облика ${hero.name}</div>
      </div>
    </div>

    <!-- HERO DESCRIPTION SECTION -->
    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255, 255, 255, 0.14); border-radius: 16px; padding: 22px; margin-bottom: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.3);">
      <h3 style="color:#ffffff; font-size:1.3rem; margin-bottom:12px; display:flex; align-items:center; gap:8px;">
        📜 Описание и Механика Персонажа
      </h3>
      <div style="background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); padding:16px 20px; border-radius:12px; color:#e2e8f0; font-size:1.02rem; line-height:1.75;">
        ${hero.description || 'Подробное описание роли, истории и игровых синергий персонажа в игре Hero Wars: Dominion Era.'}
      </div>
    </div>

    <!-- PATRONAGE SECTION -->
    <div style="background: rgba(15, 23, 42, 0.75); border:1px solid rgba(245, 158, 11, 0.3); border-radius:16px; padding:20px; margin-bottom:24px;">
      <h3 style="color:#f59e0b; font-size:1.2rem; margin-bottom:12px; display:flex; align-items:center; gap:8px;">
        🐾 Доступный Патронаж Питомцев (${patronPets.length})
      </h3>
      <p style="color:#cbd5e1; font-size:0.9rem; margin-bottom:14px;">Кликните по питомцу для перехода на его подробную страницу и формулы навыков:</p>
      <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap:12px;">
        ${petsBadgesHtml}
      </div>
    </div>

    <!-- SKILLS SECTION -->
    <div style="margin-bottom:28px;">
      <h3 style="color:#ffffff; font-size:1.3rem; margin-bottom:14px;">⚡ Умения, Зависимости и Математические Формулы (1–130 ур.)</h3>
      ${skillsHtml}
    </div>

    <!-- ARTIFACTS SECTION -->
    <div style="margin-bottom:28px;">
      <h3 style="color:#ffffff; font-size:1.3rem; margin-bottom:14px;">🗡️ Формула Прогрессии Артефактов (1★ → 6★ Звёзд)</h3>
      ${artifactsHtml}
    </div>
  `;

  // Bind Events
  document.getElementById('heroBackBtn')?.addEventListener('click', () => navigateTo('wiki'));

  wrap.querySelectorAll('.pet-patron-badge').forEach(btn => {
    btn.addEventListener('click', () => {
      const petId = btn.dataset.pet;
      if (petId) navigateTo('pet-detail', petId);
    });
  });
}

import { heroById } from '../data/dataService.js';
import { getPatronPetsForHero } from '../data/petsData.js';
import { navigateTo } from '../components/navigation.js';
import { getHeroTier, TIER_RANKS } from '../data/tierData.js';
import { getHeroGuide } from '../data/heroGuidesData.js';
import { getHeroSkills } from '../data/heroSkillsData.js';

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
  const heroGuide = getHeroGuide(hero.id);

  // Compatible Pets for Patronage
  const patronPets = getPatronPetsForHero(hero.id);

  const petsBadgesHtml = patronPets.length > 0
    ? patronPets.map(p => `
        <div class="pet-badge-card" style="display:flex; align-items:center; gap:12px; background:rgba(30, 41, 59, 0.7); border:1px solid rgba(245, 158, 11, 0.3); border-radius:12px; padding:10px 14px; cursor:pointer;" data-pet-id="${p.id}">
          <img src="${p.icon}" alt="${p.name}" style="width:44px; height:44px; object-fit:contain; border-radius:50%; background:rgba(0,0,0,0.3); border:2px solid #f59e0b;" onerror="this.src='/images/pets/fenris.png';" />
          <div>
            <div style="font-weight:700; color:#ffffff; font-size:0.95rem;">${p.name}</div>
            <div style="font-size:0.8rem; color:#f59e0b;">${p.role}</div>
          </div>
        </div>
      `).join('')
    : '<div style="color:#94a3b8; font-size:0.9rem; padding:10px;">Нет прямых данных о патронаже питомцев</div>';

  const officialSkills = getHeroSkills(hero.id);

  const skillsHtml = officialSkills.map((s, index) => `
        <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255, 255, 255, 0.12); border-left: 4px solid ${statColor}; border-radius: 12px; padding: 18px; margin-bottom: 16px;">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px; flex-wrap:wrap; gap:8px;">
            <div style="display:flex; align-items:center; gap:12px;">
              <img src="/images/skills/${hero.id}_skill_${index + 1}.png" onerror="this.style.display='none'" style="width:52px;height:52px;border-radius:10px;border:2px solid ${statColor}44; object-fit:cover; background:rgba(0,0,0,0.3);" alt="Skill ${index + 1}" />
              <div>
                <b style="color: #ffffff; font-size: 1.1rem; display:block;">${s.name || s.name_en || 'Умение ' + (index+1)}</b>
                ${s.name_en && s.name !== s.name_en ? `<span style="color:#64748b; font-size:0.8rem; font-style:italic;">${s.name_en}</span>` : ''}
              </div>
            </div>
            <div style="display:flex; flex-direction:column; align-items:flex-end; gap:4px;">
              <span style="background: rgba(255, 255, 255, 0.1); color: #cbd5e1; padding: 3px 12px; border-radius: 6px; font-size: 0.82rem; font-weight: 600;">${s.type}</span>
              ${s.priority ? `<span style="background: rgba(250,204,21,0.15); color: #facc15; border:1px solid rgba(250,204,21,0.3); padding: 2px 10px; border-radius: 6px; font-size: 0.78rem; font-weight: 700;">🏆 Приоритет: ${s.priority}</span>` : ''}
            </div>
          </div>
          <div style="color: #cbd5e1; font-size: 0.95rem; line-height: 1.6; margin-bottom: 12px;">${s.desc}</div>
          ${s.explanation ? `<div style="background: rgba(14, 165, 233, 0.08); border-left: 3px solid rgba(14, 165, 233, 0.4); border-radius: 6px; padding: 12px 14px; margin-bottom: 12px; font-size: 0.92rem; color: #bae6fd; line-height: 1.5;">💡 <b>Разбор механики:</b> ${s.explanation}</div>` : ''}
          <div style="display:grid; grid-template-columns: 1fr; gap:8px;">
            ${s.depends_on ? `<div style="background: rgba(6, 182, 212, 0.1); border: 1px solid rgba(6, 182, 212, 0.25); color: #38bdf8; padding: 8px 14px; border-radius: 8px; font-size: 0.88rem; font-weight: 600;">🎯 <b>Зависит от:</b> <span style="color:#ffffff;">${s.depends_on}</span></div>` : ''}
            ${s.formula ? `<div style="background: rgba(30, 41, 59, 0.9); border: 1px solid rgba(255, 255, 255, 0.15); padding: 10px 14px; border-radius: 8px; font-size: 0.88rem; color: #f8fafc;">📐 <b>Формула:</b> <span style="color:#facc15; font-weight:700;">${s.formula}</span></div>` : ''}
            ${s.per_lvl ? `<div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.25); color: #34d399; padding: 8px 14px; border-radius: 8px; font-size: 0.88rem; font-weight: 600;">📈 <b>Прирост за уровень:</b> <span style="color:#ffffff;">${s.per_lvl}</span></div>` : ''}
          </div>
        </div>
      `).join('');

  // Артефакты берём из guide (heroGuidesData), т.к. там полная информация из Alexandre Games
  const artifactsSource = (heroGuide.artifacts && heroGuide.artifacts.length > 0)
    ? heroGuide.artifacts
    : (hero.artifacts && hero.artifacts.length > 0 ? hero.artifacts : []);

  const artifactsHtml = artifactsSource.length > 0
    ? artifactsSource.map((a, ai) => `
        <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255, 255, 255, 0.12); border-left: 4px solid ${statColor}; border-radius: 12px; padding: 18px; margin-bottom: 14px;">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:10px; flex-wrap:wrap; gap:8px;">
            <div style="display:flex; align-items:center; gap:12px;">
              ${a.icon ? `<img src="${a.icon}" onerror="this.style.display='none'" style="width:48px;height:48px;border-radius:8px;object-fit:contain;background:rgba(0,0,0,0.3);border:1px solid rgba(255,255,255,0.15);" />` : `<div style="width:48px;height:48px;border-radius:8px;background:rgba(250,204,21,0.15);border:1px solid rgba(250,204,21,0.3);display:flex;align-items:center;justify-content:center;font-size:1.5rem;">🗡️</div>`}
              <div>
                <b style="color: #ffffff; font-size: 1.05rem; display:block;">${a.name || a.name_ru || 'Артефакт ' + (ai+1)}</b>
                <span style="color: #64748b; font-size:0.82rem;">${a.slot || (ai === 0 ? 'Оружие' : ai === 1 ? 'Книга' : 'Кольцо')}</span>
              </div>
            </div>
            ${a.priority ? `<span style="background:rgba(250,204,21,0.15); color:#facc15; border:1px solid rgba(250,204,21,0.3); padding:4px 12px; border-radius:8px; font-size:0.82rem; font-weight:700; align-self:center;">🏆 ${a.priority}</span>` : ''}
          </div>
          ${a.desc ? `<div style="color:#cbd5e1; font-size:0.9rem; line-height:1.6;">${a.desc}</div>` : ''}
          ${a.team_buff ? `<div style="color: #f59e0b; font-weight: 700; font-size: 0.9rem; margin-top: 8px;">⚡ Бафф команды: ${a.team_buff}</div>` : ''}
        </div>
      `).join('')
    : '<div style="color:#94a3b8; font-size:0.9rem; padding:12px;">Информация об артефактах обновляется после полного обхода сайта Alexandre Games.</div>';

  // Skins HTML
  const skinsHtml = (heroGuide.skins && heroGuide.skins.length > 0)
    ? heroGuide.skins.map(sk => `
        <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); padding:14px 18px; border-radius:12px; margin-bottom:10px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
            <b style="color:#ffffff; font-size:1.05rem;">${sk.name}</b>
            <span style="color:#facc15; font-size:0.85rem; font-weight:700;">${sk.priority}</span>
          </div>
          <div style="color:#34d399; font-size:0.9rem; font-weight:600; margin-bottom:4px;">${sk.bonus}</div>
          <div style="color:#cbd5e1; font-size:0.88rem; line-height:1.5;">${sk.reason}</div>
        </div>
      `).join('')
    : '<div style="color:#cbd5e1; font-size:0.9rem;">Приоритет скинов рассчитывается исходя из ключевого профильного атрибута.</div>';

  // Glyphs HTML
  const glyphsHtml = (heroGuide.glyphs && heroGuide.glyphs.length > 0)
    ? heroGuide.glyphs.map(gl => `
        <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); padding:12px 16px; border-radius:10px; margin-bottom:8px; display:flex; justify-content:space-between; align-items:center;">
          <div>
            <b style="color:#ffffff; font-size:0.95rem;">${gl.name}</b>
            <div style="color:#38bdf8; font-size:0.85rem;">${gl.bonus}</div>
          </div>
          <span style="background:rgba(250, 204, 21, 0.15); color:#facc15; border:1px solid rgba(250, 204, 21, 0.3); padding:4px 10px; border-radius:6px; font-size:0.82rem; font-weight:700;">${gl.priority}</span>
        </div>
      `).join('')
    : '<div style="color:#cbd5e1; font-size:0.9rem;">Сначала прокачиваем Главный Атрибут и Пробивание, затем Здоровье и Защиту.</div>';

  wrap.innerHTML = `
    <div style="margin-bottom:20px;">
      <button class="mini-btn" id="heroBackBtn" style="padding:10px 20px; font-size:0.95rem;">← Назад в Каталог Героев</button>
    </div>

    <!-- Hero Header Banner -->
    <div style="background: radial-gradient(circle at center, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.98) 100%); border: 1px solid rgba(255, 255, 255, 0.15); border-radius: 20px; padding: 24px; margin-bottom: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
      <div style="display:flex; gap:20px; align-items:center; flex-wrap:wrap;">
        <div style="width:84px; height:84px; border-radius:20px; border:4px solid ${statColor}; overflow:hidden; position:relative; flex-shrink:0;">
          <img src="/assets/heroes/${hero.id}.png" alt="${hero.name}" style="width:100%; height:100%; object-fit:cover;" onerror="this.src='/images/heroes/${hero.id}.png';" />
          <div style="display:none; background:rgba(255,255,255,0.08); width:100%; height:100%; align-items:center; justify-content:center; font-size:2.5rem;">${iconFallback}</div>
        </div>

        <div>
          <h2 style="font-size:2rem; font-weight:900; color:#ffffff; margin-bottom:4px;">${hero.name}</h2>
          <div style="color:#94a3b8; font-size:1rem; margin-bottom:8px;">${hero.role} · ${hero.main_stat} · ${hero.position || 'Передняя линия'}</div>
          <div style="display:flex; gap:8px; flex-wrap:wrap; align-items:center;">
            <span style="background:${tierInfo.color}; color:#ffffff; font-weight:900; padding:4px 12px; border-radius:8px; font-size:0.9rem; box-shadow:0 2px 10px ${tierInfo.color}66;">🏆 ${tier} TIER</span>
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
        📜 Разбор Механики и Роли Персонажа
      </h3>
      <div style="background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); padding:16px 20px; border-radius:12px; color:#e2e8f0; font-size:1.02rem; line-height:1.75;">
        ${heroGuide.overview || hero.description || 'Подробный разбор роли персонажа в игре Hero Wars: Dominion Era.'}
      </div>
    </div>

    <!-- STRATEGIC GUIDE SECTION -->
    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: 16px; padding: 22px; margin-bottom: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.3);">
      <h3 style="color:#34d399; font-size:1.3rem; margin-bottom:14px; display:flex; align-items:center; gap:8px;">
        💡 Стратегический Гайд (Плюсы, Минусы, Контр-пики, Флаги, Питомцы)
      </h3>

      <!-- Pros & Cons -->
      ${(heroGuide.pros?.length > 0 || heroGuide.cons?.length > 0) ? `
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:14px; margin-bottom:14px;">
        ${heroGuide.pros?.length > 0 ? `
        <div style="background:rgba(16, 185, 129, 0.08); border:1px solid rgba(16, 185, 129, 0.25); padding:16px; border-radius:12px;">
          <b style="color:#34d399; font-size:0.95rem; display:block; margin-bottom:8px;">✅ Достоинства:</b>
          <ul style="margin:0; padding-left:18px; color:#cbd5e1; font-size:0.88rem; line-height:1.6;">
            ${heroGuide.pros.map(p => `<li>${p}</li>`).join('')}
          </ul>
        </div>` : ''}
        ${heroGuide.cons?.length > 0 ? `
        <div style="background:rgba(239, 68, 68, 0.08); border:1px solid rgba(239, 68, 68, 0.25); padding:16px; border-radius:12px;">
          <b style="color:#f87171; font-size:0.95rem; display:block; margin-bottom:8px;">❌ Недостатки:</b>
          <ul style="margin:0; padding-left:18px; color:#cbd5e1; font-size:0.88rem; line-height:1.6;">
            ${heroGuide.cons.map(c => `<li>${c}</li>`).join('')}
          </ul>
        </div>` : ''}
      </div>` : ''}

      <!-- Synergy / Best Teams -->
      ${Array.isArray(heroGuide.best_teams) && heroGuide.best_teams.length > 0 ? `
      <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(16,185,129,0.2); padding:16px; border-radius:12px; margin-bottom:14px;">
        <b style="color:#10b981; font-size:0.95rem; display:block; margin-bottom:10px;">🤝 Лучшая Синергия и Команды:</b>
        <div style="display:flex; flex-direction:column; gap:8px;">
          ${heroGuide.best_teams.map(t => `
          <div style="background:rgba(16,185,129,0.06); padding:10px 14px; border-radius:8px; border-left:3px solid rgba(16,185,129,0.4);">
            <b style="color:#6ee7b7; font-size:0.88rem;">${t.hero || t.name || t}</b>
            ${t.reason || t.desc ? `<div style="color:#94a3b8; font-size:0.83rem; margin-top:3px;">${t.reason || t.desc}</div>` : ''}
          </div>`).join('')}
        </div>
      </div>` : ''}

      <!-- Counters -->
      ${Array.isArray(heroGuide.counters) && heroGuide.counters.length > 0 ? `
      <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(239,68,68,0.2); padding:16px; border-radius:12px; margin-bottom:14px;">
        <b style="color:#ef4444; font-size:0.95rem; display:block; margin-bottom:10px;">⚔️ Контр-пики против ${hero.name}:</b>
        <div style="display:flex; flex-direction:column; gap:8px;">
          ${heroGuide.counters.map(c => `
          <div style="background:rgba(239,68,68,0.06); padding:10px 14px; border-radius:8px; border-left:3px solid rgba(239,68,68,0.4);">
            <b style="color:#fca5a5; font-size:0.88rem;">${c.hero || c}</b>
            ${c.reason ? `<div style="color:#94a3b8; font-size:0.83rem; margin-top:3px;">${c.reason}</div>` : ''}
          </div>`).join('')}
        </div>
      </div>` : (heroGuide.counters && typeof heroGuide.counters === 'string' ? `
      <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(239,68,68,0.2); padding:16px; border-radius:12px; margin-bottom:14px;">
        <b style="color:#ef4444; font-size:0.95rem; display:block; margin-bottom:8px;">⚔️ Контр-пики:</b>
        <p style="color:#cbd5e1; font-size:0.9rem; line-height:1.6; margin:0;">${heroGuide.counters}</p>
      </div>` : '')}

      <!-- War Flags -->
      ${Array.isArray(heroGuide.war_flags) && heroGuide.war_flags.length > 0 ? `
      <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(167,139,250,0.2); padding:16px; border-radius:12px; margin-bottom:14px;">
        <b style="color:#a78bfa; font-size:0.95rem; display:block; margin-bottom:10px;">🚩 Рекомендуемые Боевые Знамёна (War Flags):</b>
        <div style="display:flex; flex-direction:column; gap:8px;">
          ${heroGuide.war_flags.map(wf => `
          <div style="background:rgba(167,139,250,0.06); padding:10px 14px; border-radius:8px; border-left:3px solid rgba(167,139,250,0.4);">
            <b style="color:#c4b5fd; font-size:0.88rem;">${wf.name || wf}</b>
            ${wf.desc ? `<div style="color:#94a3b8; font-size:0.83rem; margin-top:3px;">${wf.desc}</div>` : ''}
          </div>`).join('')}
        </div>
      </div>` : (heroGuide.war_flags && typeof heroGuide.war_flags === 'string' ? `
      <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(167,139,250,0.2); padding:16px; border-radius:12px; margin-bottom:14px;">
        <b style="color:#a78bfa; font-size:0.95rem; display:block; margin-bottom:8px;">🚩 Боевые Знамёна:</b>
        <p style="color:#cbd5e1; font-size:0.9rem; line-height:1.6; margin:0;">${heroGuide.war_flags}</p>
      </div>` : '')}

      <!-- Patronage from guide -->
      ${Array.isArray(heroGuide.patronage) && heroGuide.patronage.length > 0 ? `
      <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(245,158,11,0.2); padding:16px; border-radius:12px;">
        <b style="color:#f59e0b; font-size:0.95rem; display:block; margin-bottom:10px;">🐾 Лучший Патронаж Питомцев (из Alexandre Games):</b>
        <div style="display:flex; flex-direction:column; gap:8px;">
          ${heroGuide.patronage.map(p => `
          <div style="background:rgba(245,158,11,0.06); padding:10px 14px; border-radius:8px; border-left:3px solid rgba(245,158,11,0.4);">
            <b style="color:#fcd34d; font-size:0.88rem;">${p.place || p.pet || p}</b>
            ${p.desc ? `<div style="color:#94a3b8; font-size:0.83rem; margin-top:3px;">${p.desc}</div>` : ''}
          </div>`).join('')}
        </div>
      </div>` : ''}

    </div>

    <!-- SKINS EVOLUTION PRIORITY SECTION -->
    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(250, 204, 21, 0.25); border-radius: 16px; padding: 22px; margin-bottom: 24px;">
      <h3 style="color:#facc15; font-size:1.3rem; margin-bottom:14px;">⭐ Приоритет Прокачки Обликов (Skins Upgrade Order)</h3>
      ${skinsHtml}
    </div>

    <!-- GLYPHS PRIORITY SECTION -->
    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(56, 189, 248, 0.25); border-radius: 16px; padding: 22px; margin-bottom: 24px;">
      <h3 style="color:#38bdf8; font-size:1.3rem; margin-bottom:14px;">💎 Приоритет Прокачки Символов (Glyphs Evolution Order)</h3>
      ${glyphsHtml}
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

  wrap.querySelectorAll('.pet-badge-card').forEach(card => {
    card.addEventListener('click', () => {
      const petId = card.dataset.petId;
      if (petId) navigateTo('pet-detail', petId);
    });
  });
}

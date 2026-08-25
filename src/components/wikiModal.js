import { heroById } from '../data/dataService.js';

export function openWikiModal(heroId) {
  const hero = heroById(heroId);
  if (!hero) return;

  let ovl = document.getElementById('wikiModal');
  if (!ovl) {
    ovl = document.createElement('div');
    ovl.id = 'wikiModal';
    ovl.className = 'ovl';
    document.body.appendChild(ovl);
  }

  const statColor = hero.main_stat === 'Сила' ? '#ef4444' : 
                    hero.main_stat === 'Ловкость' ? '#10b981' : 
                    '#06b6d4';

  ovl.style.setProperty('--tc', statColor);

  const iconFallback = hero.main_stat === 'Сила' ? '🛡️' : hero.main_stat === 'Ловкость' ? '🏹' : '🔮';
  const avatarSrc = hero.avatar_url || `/assets/heroes/${hero.id}.png`;

  const skillsHtml = (hero.skills && hero.skills.length > 0)
    ? hero.skills.map((s, i) => `
        <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255, 255, 255, 0.12); border-left: 4px solid ${statColor}; border-radius: 14px; padding: 16px; margin-bottom: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.3);">
          
          <!-- Шапка умения -->
          <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:10px; margin-bottom: 10px;">
            <div style="display:flex; align-items:center; gap:10px;">
              <span style="background:${statColor}; color:#0f172a; font-weight:900; width:30px; height:30px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:0.95rem;">${i + 1}</span>
              <span style="font-size:1.15rem; font-weight:800; color:#ffffff;">${s.name}</span>
              <span style="background:rgba(255,255,255,0.1); color:#f59e0b; padding:3px 10px; border-radius:12px; font-size:0.8rem; font-weight:600;">${s.type}</span>
            </div>
            ${s.max_val ? `
              <div style="background: rgba(245, 158, 11, 0.15); border: 1px solid rgba(245, 158, 11, 0.3); color: #fbbf24; padding: 4px 12px; border-radius: 8px; font-size: 0.85rem; font-weight: 700;">
                🏆 130 ур: ${s.max_val}
              </div>
            ` : ''}
          </div>

          <!-- Описание умения -->
          <div style="color: #cbd5e1; font-size: 0.93rem; line-height: 1.55; margin-bottom: 12px; background: rgba(255,255,255,0.03); padding: 10px 14px; border-radius: 8px;">
            ${s.desc}
          </div>

          <!-- Блок Зависимости и Математических Формул -->
          <div style="display:grid; grid-template-columns: 1fr; gap:10px;">
            ${s.depends_on ? `
              <div style="background: rgba(6, 182, 212, 0.1); border: 1px solid rgba(6, 182, 212, 0.25); color: #38bdf8; padding: 8px 12px; border-radius: 8px; font-size: 0.88rem; font-weight: 600;">
                🎯 <b>Зависит от:</b> <span style="color:#ffffff;">${s.depends_on}</span>
              </div>
            ` : ''}

            ${s.formula ? `
              <div style="background: rgba(30, 41, 59, 0.9); border: 1px solid rgba(255, 255, 255, 0.15); padding: 10px 14px; border-radius: 8px; font-size: 0.9rem; color: #f8fafc;">
                📐 <b>Формула расчёта:</b> <span style="color:#facc15; font-weight:700;">${s.formula}</span>
              </div>
            ` : ''}

            ${s.per_lvl ? `
              <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.25); color: #34d399; padding: 8px 12px; border-radius: 8px; font-size: 0.88rem; font-weight: 600;">
                📈 <b>Прирост за уровень:</b> <span style="color:#ffffff;">${s.per_lvl}</span>
              </div>
            ` : ''}
          </div>
        </div>
      `).join('')
    : '<div class="bx info">Подробное описание умений обновляется...</div>';

  const artifactsHtml = (hero.artifacts && hero.artifacts.length > 0)
    ? `
        <!-- Формула прогрессии артефактов -->
        <div style="background: rgba(30, 41, 59, 0.85); border: 1px solid rgba(245, 158, 11, 0.3); border-radius: 12px; padding: 14px; margin-bottom: 16px; color: #e2e8f0; font-size: 0.88rem; line-height: 1.5;">
          <div style="color: #f59e0b; font-weight: 800; font-size: 0.95rem; margin-bottom: 6px;">📐 Как рассчитываются показатели артефактов?</div>
          <div><b>Формула параметра:</b> <span style="color: #facc15;">Базовое значение × Звёздный коэффициент × Множитель уровня (1–100/130)</span></div>
          <div style="margin-top: 6px; display: flex; gap: 8px; flex-wrap: wrap; font-size: 0.82rem; color: #94a3b8;">
            <span style="background: rgba(255,255,255,0.06); padding: 2px 8px; border-radius: 4px;">1★ = 10%</span>
            <span style="background: rgba(255,255,255,0.06); padding: 2px 8px; border-radius: 4px;">2★ = 20%</span>
            <span style="background: rgba(255,255,255,0.06); padding: 2px 8px; border-radius: 4px;">3★ = 30%</span>
            <span style="background: rgba(255,255,255,0.06); padding: 2px 8px; border-radius: 4px;">4★ = 55%</span>
            <span style="background: rgba(255,255,255,0.06); padding: 2px 8px; border-radius: 4px;">5★ = 80%</span>
            <span style="background: rgba(16, 185, 129, 0.2); color: #34d399; padding: 2px 8px; border-radius: 4px; font-weight: bold;">6★ = 100% (Абсолют)</span>
          </div>
          <div style="margin-top: 8px; font-size: 0.83rem; color: #38bdf8;">
            ⚡ <b>Шанс срабатывания Оружия (Слот 1):</b> 1★ = 30% шанс при ульте, 2★ = 60%, <b>3★+ = 100% гарантированно</b> на 9 секунд для всей команды!
          </div>
        </div>

        ${hero.artifacts.map(a => `
          <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255, 255, 255, 0.12); border-left: 4px solid ${statColor}; border-radius: 12px; padding: 14px; margin-bottom: 12px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
              <b style="color: #ffffff; font-size: 1.05rem;">Слот ${a.slot}: ${a.name}</b>
              <span style="background: rgba(255, 255, 255, 0.1); color: #cbd5e1; padding: 2px 10px; border-radius: 6px; font-size: 0.8rem;">${a.type}</span>
            </div>
            
            ${a.team_buff ? `<div style="color: #f59e0b; font-weight: 700; font-size: 0.9rem; margin-bottom: 8px;">⚡ Командная активация (9 сек): ${a.team_buff}</div>` : ''}
            ${a.stats ? `<div style="color: #94a3b8; font-size: 0.88rem; margin-bottom: 8px;">📊 Параметры артефакта: ${a.stats}</div>` : ''}
            
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px; margin-top: 8px; font-size: 0.85rem;">
              <div style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); padding: 8px 12px; border-radius: 6px; color: #cbd5e1;">
                ⭐ <b>1★ (База):</b> ${a.star1 || 'Стартовый урон'}
              </div>
              <div style="background: rgba(16, 185, 129, 0.12); border: 1px solid rgba(16, 185, 129, 0.3); padding: 8px 12px; border-radius: 6px; color: #34d399; font-weight: bold;">
                🌟 <b>6★ (Абсолют):</b> ${a.star6 || '100% прокачка'}
              </div>
            </div>
          </div>
        `).join('')}
      `
    : '<div class="bx info">Подробное описание артефактов обновляется...</div>';

  ovl.innerHTML = `
    <div class="md" style="max-width:720px; background:#0b0f19; color:#f8fafc; border:1px solid rgba(255,255,255,0.15); border-radius:18px;">
      <div class="mdh" style="border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:16px;">
        <div style="display:flex; gap:16px; align-items:center;">
          <div class="hero-avatar-wrap" style="width:68px; height:68px; border-radius:16px; border:3px solid ${statColor};">
            <img src="${avatarSrc}" alt="${hero.name}" class="hero-avatar-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
            <div class="hero-avatar-fallback" style="display:none; background:rgba(255,255,255,0.08); width:100%; height:100%; align-items:center; justify-content:center; font-size:2rem;">${iconFallback}</div>
          </div>
          <div>
            <h3 style="font-size:1.6rem; font-weight:800; color:#ffffff; margin-bottom:2px;">${hero.name}</h3>
            <div class="mm" style="color:#94a3b8; font-size:0.9rem;">${hero.role} · ${hero.main_stat} · ${hero.position || 'Передняя линия'}</div>
            <div style="margin-top:6px;">
              <span style="background:${statColor}; color:#0f172a; font-weight:800; padding:2px 10px; border-radius:6px; font-size:0.8rem;">${hero.faction || 'Путь вечности'}</span>
            </div>
          </div>
        </div>
        <button class="mdcl" id="wikiMdCloseBtn" style="color:#ffffff;">✕</button>
      </div>

      <div class="mdtabs" style="border-bottom:1px solid rgba(255,255,255,0.1); margin-bottom:16px;">
        <button class="mdtb on" data-tab="overview" style="color:#ffffff;">Обзор</button>
        <button class="mdtb" data-tab="skills" style="color:#ffffff;">Умения и Формулы (${hero.skills ? hero.skills.length : 0})</button>
        <button class="mdtb" data-tab="artifacts" style="color:#ffffff;">Артефакты 1-6★ (${hero.artifacts ? hero.artifacts.length : 0})</button>
      </div>

      <div class="mdpn on" data-pn="overview">
        <!-- Полноразмерный Арт базового облика персонажа -->
        <div style="text-align:center; margin-bottom:20px; position:relative; background: radial-gradient(circle at center, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.95) 100%); border:1px solid rgba(255,255,255,0.15); border-radius:16px; padding:20px; overflow:hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
          <img src="/images/heroes/${hero.id}.png" alt="Полноразмерный арт ${hero.name}" style="max-height:360px; max-width:100%; object-fit:contain; filter: drop-shadow(0 8px 24px ${statColor}66);" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';" />
          <div style="display:none; color:#94a3b8; padding:15px; font-size:0.9rem;">🎨 Полноразмерный базовый арт ${hero.name}</div>
        </div>

        <h4 style="color:#ffffff; margin-bottom:8px;">Описание персонажа</h4>
        <div style="background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); padding:14px; border-radius:10px; color:#cbd5e1; font-size:0.95rem; line-height:1.6;">${hero.description || 'Описание героя доступно в Вики.'}</div>
        
        <h4 style="color:#ffffff; margin-top:18px; margin-bottom:8px;">Ключевые Атрибуты</h4>
        <div class="lu" style="grid-template-columns: repeat(3, 1fr); gap:10px;">
          <div class="sl" style="background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); padding:10px; border-radius:8px;">
            <div class="sr" style="color:#94a3b8; font-size:0.8rem;">Главный стат</div>
            <div class="sn" style="color:${statColor}; font-weight:800; font-size:1.1rem;">${hero.main_stat}</div>
          </div>
          <div class="sl" style="background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); padding:10px; border-radius:8px;">
            <div class="sr" style="color:#94a3b8; font-size:0.8rem;">Позиция</div>
            <div class="sn" style="color:#ffffff; font-weight:700;">${hero.position || 'Передняя линия'}</div>
          </div>
          <div class="sl" style="background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); padding:10px; border-radius:8px;">
            <div class="sr" style="color:#94a3b8; font-size:0.8rem;">Фракция / Путь</div>
            <div class="sn" style="color:#ffffff; font-weight:700;">${hero.faction || 'Неизвестно'}</div>
          </div>
        </div>
      </div>

      <div class="mdpn" data-pn="skills">
        <h4 style="color:#ffffff; margin-bottom:14px;">Способности, Зависимости и Математические Формулы (1–130 ур.)</h4>
        ${skillsHtml}
      </div>

      <div class="mdpn" data-pn="artifacts">
        <h4 style="color:#ffffff; margin-bottom:14px;">Формула Прокачки 3 Артефактов (1★ → 6★ Звёзд)</h4>
        ${artifactsHtml}
      </div>
    </div>
  `;

  ovl.classList.add('open');
  ovl.querySelector('#wikiMdCloseBtn').addEventListener('click', () => ovl.classList.remove('open'));
  ovl.addEventListener('click', (e) => { if (e.target === ovl) ovl.classList.remove('open'); });
  ovl.querySelectorAll('.mdtb').forEach(tb => {
    tb.addEventListener('click', () => {
      ovl.querySelectorAll('.mdtb').forEach(b => b.classList.remove('on'));
      ovl.querySelectorAll('.mdpn').forEach(p => p.classList.remove('on'));
      tb.classList.add('on');
      ovl.querySelector(`.mdpn[data-pn="${tb.dataset.tab}"]`).classList.add('on');
    });
  });
}

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

  const statColor = hero.main_stat === 'Сила' ? 'var(--red)' : 
                    hero.main_stat === 'Ловкость' ? 'var(--green)' : 
                    'var(--cyan)';

  ovl.style.setProperty('--tc', statColor);

  const iconFallback = hero.main_stat === 'Сила' ? '🛡️' : hero.main_stat === 'Ловкость' ? '🏹' : '🔮';
  const avatarSrc = hero.avatar_url || `/assets/heroes/${hero.id}.png`;

  const skillsHtml = (hero.skills && hero.skills.length > 0)
    ? hero.skills.map((s, i) => `
        <div class="stp" style="border-left:4px solid ${statColor};padding:14px;background:rgba(255,255,255,0.03);border-radius:12px;margin-bottom:12px;">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">
            <div style="display:flex;align-items:center;gap:10px;">
              <div class="stn" style="background:${statColor};color:#080a12;font-weight:900;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;">${i + 1}</div>
              <b style="font-size:1.05rem;">${s.name} <span style="font-size:0.8rem;opacity:0.8;font-weight:normal;color:var(--gold2);">(${s.type})</span></b>
            </div>
            ${s.max_val ? `<span class="hp key" style="background:rgba(255,255,255,0.08);font-size:0.75rem;">130 ур: ${s.max_val}</span>` : ''}
          </div>

          <div style="font-size:0.88rem;color:var(--muted);line-height:1.5;margin-bottom:8px;">${s.desc}</div>

          ${s.formula ? `
            <div style="background:rgba(0,0,0,0.25);padding:8px 12px;border-radius:8px;font-size:0.82rem;display:flex;flex-wrap:wrap;gap:14px;align-items:center;border:1px solid rgba(255,255,255,0.06);">
              <div>📐 <b>Формула:</b> <span style="color:var(--txt);">${s.formula}</span></div>
              ${s.per_lvl ? `<div style="color:var(--gold2);">📈 <b>Прирост:</b> ${s.per_lvl}</div>` : ''}
            </div>
          ` : ''}
        </div>
      `).join('')
    : '<div class="bx info">Подробное описание умений обновляется...</div>';

  const artifactsHtml = (hero.artifacts && hero.artifacts.length > 0)
    ? hero.artifacts.map(a => `
        <div class="bx info" style="border-left: 4px solid ${statColor};margin-bottom:12px;padding:14px;background:rgba(255,255,255,0.03);border-radius:12px;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
            <b>Слот ${a.slot}: ${a.name}</b>
            <span style="opacity:0.8;font-size:0.8rem;background:rgba(255,255,255,0.08);padding:2px 8px;border-radius:6px;">${a.type}</span>
          </div>
          ${a.team_buff ? `<div style="color:var(--gold2);font-weight:600;font-size:0.9rem;margin-bottom:6px;">⚡ Активация на 9 сек: ${a.team_buff}</div>` : ''}
          ${a.stats ? `<div style="color:var(--muted);font-size:0.85rem;margin-bottom:6px;">📊 Параметры: ${a.stats}</div>` : ''}
          <div style="display:flex;gap:12px;font-size:0.8rem;background:rgba(0,0,0,0.2);padding:6px 10px;border-radius:6px;margin-top:6px;">
            <div>⭐ <b>1★ (База):</b> ${a.star1 || 'Стартовый уровень'}</div>
            <div>🌟 <b>6★ (Макс):</b> <span style="color:var(--green);font-weight:bold;">${a.star6 || '100% прокачка'}</span></div>
          </div>
        </div>
      `).join('')
    : '<div class="bx info">Подробное описание артефактов обновляется...</div>';

  ovl.innerHTML = `
    <div class="md" style="max-width:680px;">
      <div class="mdh">
        <div style="display:flex;gap:16px;align-items:center;">
          <div class="hero-avatar-wrap" style="width:64px;height:64px;border-radius:14px;border:3px solid ${statColor};">
            <img src="${avatarSrc}" alt="${hero.name}" class="hero-avatar-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
            <div class="hero-avatar-fallback" style="display:none;background:rgba(255,255,255,0.08);width:100%;height:100%;align-items:center;justify-content:center;font-size:1.8rem;">${iconFallback}</div>
          </div>
          <div>
            <h3 style="font-size:1.5rem;margin-bottom:2px;">${hero.name}</h3>
            <div class="mm">${hero.role} · ${hero.main_stat} · ${hero.position || 'Передняя линия'}</div>
            <div style="margin-top:6px;">
              <span class="hp key" style="background:${statColor};color:#080a12;font-weight:700;">${hero.faction || 'Путь вечности'}</span>
            </div>
          </div>
        </div>
        <button class="mdcl" id="wikiMdCloseBtn">✕</button>
      </div>

      <div class="mdtabs">
        <button class="mdtb on" data-tab="overview">Обзор</button>
        <button class="mdtb" data-tab="skills">Умения и Формулы (${hero.skills ? hero.skills.length : 0})</button>
        <button class="mdtb" data-tab="artifacts">Артефакты 1-6★ (${hero.artifacts ? hero.artifacts.length : 0})</button>
      </div>

      <div class="mdpn on" data-pn="overview">
        <h4>Описание персонажа</h4>
        <div class="bx info" style="font-size:0.92rem;line-height:1.6;">${hero.description || 'Описание героя доступно в Вики.'}</div>
        
        <h4>Ключевые Атрибуты</h4>
        <div class="lu" style="grid-template-columns: repeat(3, 1fr);">
          <div class="sl">
            <div class="sr">Главный стат</div>
            <div class="sn" style="color:${statColor}">${hero.main_stat}</div>
          </div>
          <div class="sl">
            <div class="sr">Позиция</div>
            <div class="sn">${hero.position || 'Передняя линия'}</div>
          </div>
          <div class="sl">
            <div class="sr">Фракция / Путь</div>
            <div class="sn">${hero.faction || 'Неизвестно'}</div>
          </div>
        </div>
      </div>

      <div class="mdpn" data-pn="skills">
        <h4 style="margin-bottom:12px;">Способности и Расчёт Скалирования (1–130 ур.)</h4>
        ${skillsHtml}
      </div>

      <div class="mdpn" data-pn="artifacts">
        <h4 style="margin-bottom:12px;">Прокачка 3 Артефактов (1★ → 6★ Звёзд)</h4>
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

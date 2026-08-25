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
  const avatarSrc = hero.avatar_url || `https://hero-wars.fandom.com/wiki/Special:Redirect/file/${encodeURIComponent(hero.name)}_Icon.png`;

  const skillsHtml = (hero.skills && hero.skills.length > 0)
    ? hero.skills.map((s, i) => `
        <div class="stp">
          <div class="stn" style="background:${statColor};color:#080a12;font-weight:900;">${i + 1}</div>
          <div class="stt">
            <b>${s.name} <span style="font-size:0.75rem;opacity:0.75;font-weight:normal;color:var(--gold2);">(${s.type})</span></b>
            <span>${s.desc}</span>
          </div>
        </div>
      `).join('')
    : '<div class="bx info">Подробное описание умений обновляется...</div>';

  const artifactsHtml = (hero.artifacts && hero.artifacts.length > 0)
    ? hero.artifacts.map(a => `
        <div class="bx info" style="border-left: 4px solid ${statColor};">
          <b>Слот ${a.slot}: ${a.name}</b> <span style="opacity:0.8;">(${a.type})</span><br>
          ${a.team_buff ? `<span style="color:var(--gold2);font-weight:600;">⚡ Командный эффект: ${a.team_buff}</span><br>` : ''}
          ${a.stats ? `<span style="color:var(--muted);">📊 Характеристики: ${a.stats}</span>` : ''}
        </div>
      `).join('')
    : '<div class="bx info">Подробное описание артефактов обновляется...</div>';

  ovl.innerHTML = `
    <div class="md">
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
        <button class="mdtb" data-tab="skills">Умения (${hero.skills ? hero.skills.length : 0})</button>
        <button class="mdtb" data-tab="artifacts">Артефакты (${hero.artifacts ? hero.artifacts.length : 0})</button>
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
        <h4>Способности героического кита</h4>
        ${skillsHtml}
      </div>

      <div class="mdpn" data-pn="artifacts">
        <h4>3 Артефакта героя</h4>
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

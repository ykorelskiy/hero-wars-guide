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

  const skillsHtml = (hero.skills && hero.skills.length > 0)
    ? hero.skills.map((s, i) => `
        <div class="stp">
          <div class="stn" style="background:${statColor};color:#080a12;">${i + 1}</div>
          <div class="stt">
            <b>${s.name} <span style="font-size:0.75rem;opacity:0.7;font-weight:normal;">(${s.type})</span></b>
            <span>${s.desc}</span>
          </div>
        </div>
      `).join('')
    : '<div class="bx info">Информация об умениях обновляется...</div>';

  const artifactsHtml = (hero.artifacts && hero.artifacts.length > 0)
    ? hero.artifacts.map(a => `
        <div class="bx info" style="border-left: 3px solid ${statColor};">
          <b>Слот ${a.slot}: ${a.name}</b> (${a.type})<br>
          ${a.team_buff ? `<span style="color:var(--gold2);">⚡ Командный эффект: ${a.team_buff}</span><br>` : ''}
          ${a.stats ? `<span>📊 Характеристики: ${a.stats}</span>` : ''}
        </div>
      `).join('')
    : '<div class="bx info">Информация об артефактах обновляется...</div>';

  ovl.innerHTML = `
    <div class="md">
      <div class="mdh">
        <div style="display:flex;gap:14px;align-items:center;">
          <div style="width:54px;height:54px;border-radius:12px;background:rgba(255,255,255,0.1);display:flex;align-items:center;justify-content:center;font-size:1.6rem;border:2px solid ${statColor}">
            ${hero.main_stat === 'Сила' ? '🛡️' : hero.main_stat === 'Ловкость' ? '🏹' : '🔮'}
          </div>
          <div>
            <h3>${hero.name}</h3>
            <div class="mm">${hero.role} · ${hero.main_stat} · ${hero.position || 'Передняя линия'}</div>
            <div style="margin-top:4px;">
              <span class="hp key" style="background:${statColor};">${hero.faction || 'Путь вечности'}</span>
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
        <div class="bx info">${hero.description || 'Описание героя доступно в базе знания Hero Wars.'}</div>
        
        <h4>Атрибуты</h4>
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

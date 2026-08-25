/* ======================================================================
   HERO WARS GUIDE — приложение (логика).
   Работает с данными из data.js (HEROES, TEAMS, ADVICE).
   ====================================================================== */

const heroById = id => HEROES.find(h => h.id === id);
const teamById = id => TEAMS.find(t => t.id === id);

/* ---------------- NAV ---------------- */
document.querySelectorAll('#mainNav .nb').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('#mainNav .nb').forEach(b=>b.classList.remove('on'));
    btn.classList.add('on');
    document.querySelectorAll('.view').forEach(v=>v.classList.remove('on'));
    document.getElementById('view-'+btn.dataset.view).classList.add('on');
  });
});

/* ---------------- ADVISOR: hero picker ---------------- */
let selected = new Set();

function renderHeroGrid(filter=''){
  const grid = document.getElementById('heroGrid');
  grid.innerHTML = '';
  const f = filter.trim().toLowerCase();
  HEROES.filter(h => h.archetypes[0] !== 'counter' || true) // все герои доступны для выбора
    .forEach(h=>{
      if(f && !h.name.toLowerCase().includes(f)) return;
      const chip = document.createElement('div');
      chip.className = 'hero-chip' + (selected.has(h.id) ? ' picked' : '');
      chip.innerHTML = `${h.name}<span class="role">${h.role}</span>`;
      chip.addEventListener('click', ()=> toggleHero(h.id));
      grid.appendChild(chip);
    });
}

function toggleHero(id){
  if(selected.has(id)) selected.delete(id);
  else selected.add(id);
  renderHeroGrid(document.getElementById('heroSearch').value);
  renderSelList();
}

function renderSelList(){
  const list = document.getElementById('selList');
  const btn = document.getElementById('analyzeBtn');
  if(selected.size === 0){
    list.innerHTML = '<p class="empty-hint">Пока никто не выбран</p>';
    btn.disabled = true;
    document.getElementById('resultBox').classList.remove('show');
    return;
  }
  btn.disabled = false;
  list.innerHTML = '';
  selected.forEach(id=>{
    const h = heroById(id);
    const chip = document.createElement('div');
    chip.className = 'sel-chip';
    chip.innerHTML = `${h.name}<span class="rm" data-id="${id}">×</span>`;
    chip.querySelector('.rm').addEventListener('click', (e)=>{
      e.stopPropagation();
      toggleHero(id);
    });
    list.appendChild(chip);
  });
}

document.getElementById('heroSearch').addEventListener('input', e=>renderHeroGrid(e.target.value));
document.getElementById('clearSel').addEventListener('click', ()=>{
  selected.clear();
  renderHeroGrid(document.getElementById('heroSearch').value);
  renderSelList();
});

/* ---------------- ADVISOR: analysis logic ---------------- */
function detectArchetype(){
  const counts = {};
  selected.forEach(id=>{
    const h = heroById(id);
    h.archetypes.forEach(a=>{
      if(a === 'counter') return; // контр-герои не формируют архетип сами по себе
      counts[a] = (counts[a]||0) + 1;
    });
  });
  let best = null, bestCount = 0;
  Object.entries(counts).forEach(([a,c])=>{
    if(c > bestCount){ best = a; bestCount = c; }
  });
  return best || 'unknown';
}

function findRiskyCounters(teamId){
  // возвращает список выбранных вражеских героев, которые являются
  // хард-контрами команды teamId (по полю counters в TEAMS)
  const team = teamById(teamId);
  if(!team) return [];
  const risky = [];
  selected.forEach(id=>{
    const hit = team.counters.find(c => c.hero === id);
    if(hit) risky.push({hero: heroById(id), why: hit.why});
  });
  return risky;
}

document.getElementById('analyzeBtn').addEventListener('click', ()=>{
  const archetype = detectArchetype();
  const advice = ADVICE[archetype] || ADVICE.unknown;
  const box = document.getElementById('resultBox');

  let html = `
    <div class="res-archetype">
      <div class="lbl">Распознанный архетип врага</div>
      <div class="nm">${advice.label}</div>
      <div class="dsc">${advice.desc}</div>
    </div>
  `;

  advice.counterTeams.forEach((teamId, idx)=>{
    const team = teamById(teamId);
    if(!team) return;
    const reason = advice.reason[teamId] || '';
    const risky = findRiskyCounters(teamId);

    html += `
      <div class="res-recommend">
        <div class="lbl">${idx===0?'✅ Рекомендуемый ответ':'🔁 Альтернативный ответ'} #${idx+1}</div>
        <div class="nm">${team.name}</div>
        <div class="res-lineup">
          ${team.lineup.map(l=>`<span class="rp">${heroById(l.hero)?.name || l.hero}</span>`).join('')}
        </div>
        <div class="why">${reason}</div>
      </div>
    `;

    if(risky.length){
      html += `<div class="res-warn"><b>⚠️ Осторожно:</b> во вражеской команде есть герои, которые контрят именно ${team.name}:<br>`;
      risky.forEach(r=> html += `— <b>${r.hero.name}</b>: ${r.why}<br>`);
      html += `</div>`;
    }
  });

  box.innerHTML = html;
  box.classList.add('show');
  box.scrollIntoView({behavior:'smooth', block:'nearest'});
});

/* ---------------- TEAMS VIEW ---------------- */
let tierFilter = 'all';

function renderTeamsGrid(){
  const grid = document.getElementById('teamsGrid');
  grid.innerHTML = '';
  TEAMS.forEach(team=>{
    if(tierFilter !== 'all' && team.tier !== tierFilter) return;
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
        ${team.lineup.map(l=>`<span class="hp ${l.key?'key':''}">${heroById(l.hero)?.name || l.hero}</span>`).join('')}
      </div>
      <div class="hook">${team.hook}</div>
      <div class="card-more">Открыть полный разбор →</div>
    `;
    card.addEventListener('click', ()=>openModal(team.id));
    grid.appendChild(card);
  });
}

document.querySelectorAll('#tierFilter .fb').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('#tierFilter .fb').forEach(b=>b.classList.remove('on'));
    btn.classList.add('on');
    tierFilter = btn.dataset.tier;
    renderTeamsGrid();
  });
});

/* ---------------- MODAL ---------------- */
function openModal(teamId){
  const team = teamById(teamId);
  if(!team) return;
  const tc = team.tier === 'S' ? 'var(--s)' : team.tier === 'A' ? 'var(--a)' : 'var(--b)';

  let ovl = document.getElementById('teamModal');
  if(!ovl){
    ovl = document.createElement('div');
    ovl.id = 'teamModal';
    ovl.className = 'ovl';
    document.body.appendChild(ovl);
  }
  ovl.style.setProperty('--tc', tc);

  ovl.innerHTML = `
    <div class="md">
      <div class="mdh">
        <div>
          <h3>${team.name}</h3>
          <div class="mm">${team.tag} · Тир ${team.tier}</div>
        </div>
        <button class="mdcl" id="mdCloseBtn">✕</button>
      </div>
      <div class="mdtabs">
        <button class="mdtb on" data-tab="mech">Механика</button>
        <button class="mdtb" data-tab="build">Сборка</button>
        <button class="mdtb" data-tab="counters">Контры</button>
        <button class="mdtb" data-tab="subs">Замены и оценка</button>
      </div>
      <div class="mdpn on" data-pn="mech">
        <div class="lu">
          ${team.lineup.map(l=>`
            <div class="sl ${l.key?'key':''}">
              <div class="sr">${l.slot}</div>
              <div class="sn">${heroById(l.hero)?.name || l.hero}</div>
              ${l.key?'<div class="sk">ЯДРО</div>':''}
            </div>`).join('')}
        </div>
        <h4>Как это работает пошагово</h4>
        ${team.mechanics.map((m,i)=>`
          <div class="stp">
            <div class="stn">${i+1}</div>
            <div class="stt"><b>${m.t}</b><span>${m.d}</span></div>
          </div>`).join('')}
      </div>
      <div class="mdpn" data-pn="build">
        <h4>Порядок прокачки</h4>
        <div class="bx info">${team.build.replace(/\n/g,'<br>')}</div>
      </div>
      <div class="mdpn" data-pn="counters">
        <h4>Кто контрит эту команду</h4>
        ${team.counters.map(c=>`
          <div class="bx bad"><b>${heroById(c.hero)?.name || c.hero}</b> — ${c.why}</div>
        `).join('')}
      </div>
      <div class="mdpn" data-pn="subs">
        <h4>Замены по слотам</h4>
        <div class="bx info">${team.subs.replace(/\n/g,'<br>')}</div>
        <h4>Плюсы</h4>
        ${team.pros.map(p=>`<div class="bx good">${p}</div>`).join('')}
        <h4>Минусы</h4>
        ${team.cons.map(c=>`<div class="bx warn">${c}</div>`).join('')}
      </div>
    </div>
  `;

  ovl.classList.add('open');
  ovl.querySelector('#mdCloseBtn').addEventListener('click', ()=>ovl.classList.remove('open'));
  ovl.addEventListener('click', (e)=>{ if(e.target === ovl) ovl.classList.remove('open'); });
  ovl.querySelectorAll('.mdtb').forEach(tb=>{
    tb.addEventListener('click', ()=>{
      ovl.querySelectorAll('.mdtb').forEach(b=>b.classList.remove('on'));
      ovl.querySelectorAll('.mdpn').forEach(p=>p.classList.remove('on'));
      tb.classList.add('on');
      ovl.querySelector(`.mdpn[data-pn="${tb.dataset.tab}"]`).classList.add('on');
    });
  });
}

/* ---------------- MATRIX VIEW ---------------- */
function renderMatrix(){
  const wrap = document.getElementById('matrixWrap');
  const teams = TEAMS;
  let html = '<table><tr><th class="rowh">Твоя ↓ / Враг →</th>';
  teams.forEach(t=> html += `<th>${t.name.split('(')[0].trim()}</th>`);
  html += '</tr>';

  teams.forEach(rowTeam=>{
    html += `<tr><th class="rowh">${rowTeam.name.split('(')[0].trim()}</th>`;
    teams.forEach(colTeam=>{
      if(rowTeam.id === colTeam.id){
        html += `<td class="neutral">—</td>`;
      } else {
        // строка выигрывает у столбца, если rowTeam указан как counterTeam для архетипа colTeam
        const adviceForCol = ADVICE[colTeam.id];
        const rowIsGoodAnswer = adviceForCol && adviceForCol.counterTeams.includes(rowTeam.id);
        // и наоборот - проверяем контрит ли colTeam команду rowTeam через хард-контры
        const colHardCounters = rowTeam.counters.some(c=>{
          const h = heroById(c.hero);
          return h && h.archetypes.includes(colTeam.id);
        });
        if(rowIsGoodAnswer && !colHardCounters){
          html += `<td class="win">выигр.</td>`;
        } else if(colHardCounters){
          html += `<td class="lose">риск</td>`;
        } else {
          html += `<td class="neutral">равно</td>`;
        }
      }
    });
    html += '</tr>';
  });
  html += '</table>';
  wrap.innerHTML = html;
}

/* ---------------- STAT BADGES ---------------- */
function renderBadges(){
  const box = document.getElementById('statBadges');
  const sCount = TEAMS.filter(t=>t.tier==='S').length;
  const aCount = TEAMS.filter(t=>t.tier==='A').length;
  box.innerHTML = `
    <span class="bg"><b>${TEAMS.length}</b> команд в базе</span>
    <span class="bg"><b>${HEROES.length}</b> героев учтено</span>
    <span class="bg"><b>${sCount}</b> S-тир · <b>${aCount}</b> A-тир</span>
  `;
}

/* ---------------- INIT ---------------- */
renderHeroGrid();
renderSelList();
renderTeamsGrid();
renderMatrix();
renderBadges();

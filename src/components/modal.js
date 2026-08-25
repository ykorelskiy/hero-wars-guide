import { teamById, heroById } from '../data/dataService.js';

export function openModal(teamId) {
  const team = teamById(teamId);
  if (!team) return;
  const tc = team.tier === 'S' ? 'var(--s)' : team.tier === 'A' ? 'var(--a)' : 'var(--b)';

  let ovl = document.getElementById('teamModal');
  if (!ovl) {
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
          ${team.lineup.map(l => `
            <div class="sl ${l.key ? 'key' : ''}">
              <div class="sr">${l.slot}</div>
              <div class="sn">${heroById(l.hero)?.name || l.hero}</div>
              ${l.key ? '<div class="sk">ЯДРО</div>' : ''}
            </div>`).join('')}
        </div>
        <h4>Как это работает пошагово</h4>
        ${team.mechanics.map((m, i) => `
          <div class="stp">
            <div class="stn">${i + 1}</div>
            <div class="stt"><b>${m.t}</b><span>${m.d}</span></div>
          </div>`).join('')}
      </div>
      <div class="mdpn" data-pn="build">
        <h4>Порядок прокачки</h4>
        <div class="bx info">${team.build.replace(/\n/g, '<br>')}</div>
      </div>
      <div class="mdpn" data-pn="counters">
        <h4>Кто контрит эту команду</h4>
        ${team.counters.map(c => `
          <div class="bx bad"><b>${heroById(c.hero)?.name || c.hero}</b> — ${c.why}</div>
        `).join('')}
      </div>
      <div class="mdpn" data-pn="subs">
        <h4>Замены по слотам</h4>
        <div class="bx info">${team.subs.replace(/\n/g, '<br>')}</div>
        <h4>Плюсы</h4>
        ${team.pros.map(p => `<div class="bx good">${p}</div>`).join('')}
        <h4>Минусы</h4>
        ${team.cons.map(c => `<div class="bx warn">${c}</div>`).join('')}
      </div>
    </div>
  `;

  ovl.classList.add('open');
  ovl.querySelector('#mdCloseBtn').addEventListener('click', () => ovl.classList.remove('open'));
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

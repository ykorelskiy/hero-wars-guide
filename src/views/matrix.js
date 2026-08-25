import { getTeams, getAdvice, heroById } from '../data/dataService.js';

export function initMatrix() {
  renderMatrix();
}

export function renderMatrix() {
  const wrap = document.getElementById('matrixWrap');
  if (!wrap) return;
  
  const teams = getTeams();
  const adviceMap = getAdvice();

  let html = '<table><tr><th class="rowh">Твоя ↓ / Враг →</th>';
  teams.forEach(t => html += `<th>${t.name.split('(')[0].trim()}</th>`);
  html += '</tr>';

  teams.forEach(rowTeam => {
    html += `<tr><th class="rowh">${rowTeam.name.split('(')[0].trim()}</th>`;
    teams.forEach(colTeam => {
      if (rowTeam.id === colTeam.id) {
        html += `<td class="neutral">—</td>`;
      } else {
        const adviceForCol = adviceMap[colTeam.id];
        const rowIsGoodAnswer = adviceForCol && adviceForCol.counterTeams && adviceForCol.counterTeams.includes(rowTeam.id);
        const colHardCounters = rowTeam.counters && rowTeam.counters.some(c => {
          const h = heroById(c.hero);
          return h && h.archetypes.includes(colTeam.id);
        });

        if (rowIsGoodAnswer && !colHardCounters) {
          html += `<td class="win">выигр.</td>`;
        } else if (colHardCounters) {
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

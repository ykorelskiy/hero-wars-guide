import { getPets } from '../data/petsData.js';
import { navigateTo } from '../components/navigation.js';

export function renderPetsGrid() {
  const grid = document.getElementById('petsGrid');
  if (!grid) return;

  grid.innerHTML = '';
  const pets = getPets();

  pets.forEach(pet => {
    const card = document.createElement('div');
    card.className = 'card wiki-hero-card';
    card.style.cursor = 'pointer';
    card.style.border = '1px solid rgba(245, 158, 11, 0.3)';

    card.innerHTML = `
      <div style="text-align:center; padding:16px; position:relative; background: radial-gradient(circle at center, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.95) 100%); border-radius:12px 12px 0 0;">
        <img src="${pet.icon}" alt="${pet.name}" style="height:160px; max-width:100%; object-fit:contain; filter: drop-shadow(0 6px 16px rgba(245, 158, 11, 0.4));" onerror="this.src='/images/heroes/cain.png'" />
      </div>
      <div style="padding:16px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
          <h3 style="font-size:1.3rem; font-weight:900; color:#ffffff; margin:0;">🐾 ${pet.name}</h3>
          <span style="background:rgba(245, 158, 11, 0.2); color:#fbbf24; border:1px solid rgba(245, 158, 11, 0.4); padding:2px 8px; border-radius:6px; font-size:0.78rem; font-weight:700;">Питомец</span>
        </div>
        <div style="color:#f59e0b; font-size:0.88rem; font-weight:700; margin-bottom:10px;">${pet.role}</div>
        <div style="color:#cbd5e1; font-size:0.88rem; line-height:1.5; margin-bottom:14px; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;">${pet.description}</div>
        <div style="display:flex; justify-content:space-between; align-items:center; background:rgba(255,255,255,0.05); padding:8px 12px; border-radius:8px; font-size:0.85rem; color:#94a3b8;">
          <span>🛡️ Патронаж: <b>${pet.patronage_heroes.length} героев</b></span>
          <span style="color:#f59e0b; font-weight:800;">Подробнее →</span>
        </div>
      </div>
    `;

    card.addEventListener('click', () => navigateTo('pet-detail', pet.id));
    grid.appendChild(card);
  });
}

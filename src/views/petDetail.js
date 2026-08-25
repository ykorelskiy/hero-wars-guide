import { petById } from '../data/petsData.js';
import { heroById } from '../data/dataService.js';
import { navigateTo } from '../components/navigation.js';

export function renderPetDetail(petId) {
  const wrap = document.getElementById('petDetailWrap');
  if (!wrap) return;

  const pet = petById(petId);
  if (!pet) {
    wrap.innerHTML = `
      <div style="padding:40px; text-align:center;">
        <h3 style="color:#ef4444;">Питомец "${petId}" не найден</h3>
        <button class="analyze-btn" style="margin-top:20px; max-width:200px;" id="petBackBtn">← Назад к Питомцам</button>
      </div>
    `;
    document.getElementById('petBackBtn')?.addEventListener('click', () => navigateTo('pets'));
    return;
  }

  // Compatible Heroes for this pet
  const compatibleHeroes = pet.patronage_heroes.map(id => heroById(id)).filter(Boolean);

  const heroesGridHtml = (compatibleHeroes.length > 0)
    ? compatibleHeroes.map(h => `
        <div class="pet-hero-badge" data-hero="${h.id}" style="display:flex; align-items:center; gap:12px; background:rgba(30, 41, 59, 0.8); border:1px solid rgba(255, 255, 255, 0.12); border-radius:12px; padding:10px 14px; cursor:pointer; transition:all 0.2s ease;">
          <img src="${h.avatar_url || `/assets/heroes/${h.id}.png`}" alt="${h.name}" style="width:40px; height:40px; border-radius:10px; object-fit:cover; border:2px solid #06b6d4;" onerror="this.src='/images/heroes/cain.png'" />
          <div>
            <div style="font-weight:800; color:#ffffff; font-size:0.95rem;">${h.name}</div>
            <div style="color:#94a3b8; font-size:0.8rem;">${h.role} · ${h.main_stat}</div>
          </div>
          <span style="margin-left:auto; color:#06b6d4; font-size:1.2rem;">→</span>
        </div>
      `).join('')
    : '<div style="color:#94a3b8;">Список героев обновляется...</div>';

  wrap.innerHTML = `
    <div style="margin-bottom:20px;">
      <button class="mini-btn" id="petBackBtn" style="padding:10px 20px; font-size:0.95rem;">← Назад в Каталог Питомцев</button>
    </div>

    <!-- Pet Header Banner -->
    <div style="background: radial-gradient(circle at center, rgba(30, 41, 59, 0.85) 0%, rgba(15, 23, 42, 0.98) 100%); border: 1px solid rgba(245, 158, 11, 0.4); border-radius: 20px; padding: 24px; margin-bottom: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
      <div style="display:flex; gap:20px; align-items:center; flex-wrap:wrap;">
        <img src="${pet.icon}" alt="${pet.name}" style="width:100px; height:100px; border-radius:20px; object-fit:contain; border:3px solid #f59e0b; background:rgba(0,0,0,0.3);" onerror="this.src='/images/heroes/cain.png'" />
        <div>
          <h2 style="font-size:2.2rem; font-weight:900; color:#ffffff; margin-bottom:4px;">🐾 Питомец ${pet.name}</h2>
          <div style="color:#f59e0b; font-size:1.1rem; font-weight:700; margin-bottom:8px;">${pet.role}</div>
          <p style="color:#cbd5e1; font-size:0.95rem; line-height:1.6; max-width:650px;">${pet.description}</p>
        </div>
      </div>

      <!-- Pet Splash Render Showcase -->
      <div style="text-align:center; margin-top:24px; background: rgba(3, 7, 18, 0.6); border:1px solid rgba(245, 158, 11, 0.2); border-radius:16px; padding:24px;">
        <img src="${pet.art}" alt="Официальный арт ${pet.name}" style="max-height:400px; max-width:100%; object-fit:contain; filter: drop-shadow(0 10px 30px rgba(245, 158, 11, 0.4));" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';" />
        <div style="display:none; color:#94a3b8; padding:20px; font-size:0.9rem;">🎨 Полноразмерный арт питомца ${pet.name}</div>
      </div>
    </div>

    <!-- SKILLS SECTION -->
    <div style="margin-bottom:28px;">
      <h3 style="color:#ffffff; font-size:1.3rem; margin-bottom:14px;">⚡ Навыки и Точные Формулы Расчёта</h3>
      
      <!-- Ultimate Skill -->
      <div style="background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(245, 158, 11, 0.3); border-left: 5px solid #f59e0b; border-radius: 14px; padding: 18px; margin-bottom: 16px;">
        <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
          <span style="background:#f59e0b; color:#0f172a; font-weight:900; padding:4px 10px; border-radius:8px; font-size:0.85rem;">УЛЬТИМЕЙТ</span>
          <span style="font-size:1.2rem; font-weight:800; color:#ffffff;">${pet.skills.ult.name}</span>
        </div>
        <div style="color: #cbd5e1; font-size: 0.95rem; line-height: 1.6; margin-bottom: 10px; background: rgba(255,255,255,0.03); padding: 12px; border-radius: 8px;">
          ${pet.skills.ult.desc}
        </div>
        <div style="background: rgba(30, 41, 59, 0.9); border: 1px solid rgba(255, 255, 255, 0.15); padding: 10px 14px; border-radius: 8px; font-size: 0.92rem; color: #f8fafc;">
          📐 <b>Формула расчёта:</b> <span style="color:#facc15; font-weight:700;">${pet.skills.ult.formula}</span>
        </div>
      </div>

      <!-- Patronage Skill 1 -->
      <div style="background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(6, 182, 212, 0.3); border-left: 5px solid #06b6d4; border-radius: 14px; padding: 18px; margin-bottom: 16px;">
        <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
          <span style="background:#06b6d4; color:#0f172a; font-weight:900; padding:4px 10px; border-radius:8px; font-size:0.85rem;">ПАТРОНАЖ 1</span>
          <span style="font-size:1.2rem; font-weight:800; color:#ffffff;">${pet.skills.patron1.name}</span>
        </div>
        <div style="color: #cbd5e1; font-size: 0.95rem; line-height: 1.6; margin-bottom: 10px; background: rgba(255,255,255,0.03); padding: 12px; border-radius: 8px;">
          ${pet.skills.patron1.desc}
        </div>
        <div style="background: rgba(30, 41, 59, 0.9); border: 1px solid rgba(255, 255, 255, 0.15); padding: 10px 14px; border-radius: 8px; font-size: 0.92rem; color: #f8fafc;">
          📐 <b>Формула расчёта:</b> <span style="color:#38bdf8; font-weight:700;">${pet.skills.patron1.formula}</span>
        </div>
      </div>

      <!-- Patronage Skill 2 -->
      <div style="background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(16, 185, 129, 0.3); border-left: 5px solid #10b981; border-radius: 14px; padding: 18px; margin-bottom: 16px;">
        <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
          <span style="background:#10b981; color:#0f172a; font-weight:900; padding:4px 10px; border-radius:8px; font-size:0.85rem;">ПАТРОНАЖ 2 (ПАССИВНЫЙ)</span>
          <span style="font-size:1.2rem; font-weight:800; color:#ffffff;">${pet.skills.patron2.name}</span>
        </div>
        <div style="color: #cbd5e1; font-size: 0.95rem; line-height: 1.6; margin-bottom: 10px; background: rgba(255,255,255,0.03); padding: 12px; border-radius: 8px;">
          ${pet.skills.patron2.desc}
        </div>
        <div style="background: rgba(30, 41, 59, 0.9); border: 1px solid rgba(255, 255, 255, 0.15); padding: 10px 14px; border-radius: 8px; font-size: 0.92rem; color: #f8fafc;">
          📈 <b>Скалирование характеристик:</b> <span style="color:#34d399; font-weight:700;">${pet.skills.patron2.formula}</span>
        </div>
      </div>
    </div>

    <!-- COMPATIBLE HEROES SECTION -->
    <div style="background: rgba(15, 23, 42, 0.75); border:1px solid rgba(6, 182, 212, 0.3); border-radius:16px; padding:20px; margin-bottom:28px;">
      <h3 style="color:#06b6d4; font-size:1.2rem; margin-bottom:12px; display:flex; align-items:center; gap:8px;">
        🛡️ Герои, которым подходит этот Питомец (${compatibleHeroes.length})
      </h3>
      <p style="color:#cbd5e1; font-size:0.9rem; margin-bottom:14px;">Кликните по герою для перехода на его подробную отдельную страницу:</p>
      <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap:12px;">
        ${heroesGridHtml}
      </div>
    </div>
  `;

  // Bind Events
  document.getElementById('petBackBtn')?.addEventListener('click', () => navigateTo('pets'));

  wrap.querySelectorAll('.pet-hero-badge').forEach(btn => {
    btn.addEventListener('click', () => {
      const heroId = btn.dataset.hero;
      if (heroId) navigateTo('hero-detail', heroId);
    });
  });
}

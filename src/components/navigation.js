import { renderHeroDetail } from '../views/heroDetail.js';
import { renderPetDetail } from '../views/petDetail.js';
import { renderPetsGrid } from '../views/pets.js';

export function navigateTo(targetView, param = null) {
  document.querySelectorAll('#mainNav .nb').forEach(b => {
    b.classList.toggle('on', b.dataset.view === targetView);
  });

  document.querySelectorAll('.view').forEach(v => v.classList.remove('on'));
  
  let viewId = 'view-' + targetView;
  if (targetView === 'hero-detail') viewId = 'view-hero-detail';
  if (targetView === 'pet-detail') viewId = 'view-pet-detail';

  const section = document.getElementById(viewId);
  if (section) section.classList.add('on');

  if (targetView === 'hero-detail' && param) {
    // param might be "electra?skill=2"
    const [heroId, query] = param.split('?');
    location.hash = `hero/${param}`;
    renderHeroDetail(heroId);
    if (query && query.includes('skill=')) {
      const skillNum = query.split('=')[1];
      setTimeout(() => {
        const el = document.getElementById(`skill-${skillNum}`);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 300); // Wait for render and image load
    }
  } else if (targetView === 'pet-detail' && param) {
    location.hash = `pet/${param}`;
    renderPetDetail(param);
  } else if (targetView === 'pets') {
    location.hash = 'pets';
    renderPetsGrid();
  } else if (targetView === 'wiki') {
    location.hash = 'wiki';
  } else {
    location.hash = targetView;
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function handleHashChange() {
  const hash = location.hash.replace(/^#/, '');
  if (!hash || hash === 'wiki') {
    navigateTo('wiki');
    return;
  }
  if (hash.startsWith('hero/')) {
    const param = hash.substring(5); // e.g. "electra" or "electra?skill=2"
    navigateTo('hero-detail', param);
    return;
  }
  if (hash.startsWith('pet/')) {
    const petId = hash.split('/')[1];
    navigateTo('pet-detail', petId);
    return;
  }
  if (hash === 'pets') {
    navigateTo('pets');
    return;
  }
  const mainViews = ['advisor', 'teams', 'matrix', 'about'];
  if (mainViews.includes(hash)) {
    navigateTo(hash);
  }
}

export function initNavigation() {
  document.querySelectorAll('#mainNav .nb').forEach(btn => {
    btn.addEventListener('click', () => {
      const viewName = btn.dataset.view;
      if (viewName === 'pets') {
        navigateTo('pets');
      } else {
        navigateTo(viewName);
      }
    });
  });

  window.addEventListener('hashchange', handleHashChange);
  handleHashChange();
}

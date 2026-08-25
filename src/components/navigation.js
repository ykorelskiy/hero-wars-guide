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
    location.hash = `hero/${param}`;
    renderHeroDetail(param);
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
    const heroId = hash.split('/')[1];
    navigateTo('hero-detail', heroId);
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

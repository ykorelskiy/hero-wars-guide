export function initNavigation() {
  document.querySelectorAll('#mainNav .nb').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#mainNav .nb').forEach(b => b.classList.remove('on'));
      btn.classList.add('on');
      document.querySelectorAll('.view').forEach(v => v.classList.remove('on'));
      const targetView = document.getElementById('view-' + btn.dataset.view);
      if (targetView) targetView.classList.add('on');
    });
  });
}

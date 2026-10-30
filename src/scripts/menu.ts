const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('site-nav');

if (toggle && nav) {
  const openIcon = toggle.querySelector('[data-icon="open"]');
  const closeIcon = toggle.querySelector('[data-icon="close"]');

  const setOpen = (open: boolean) => {
    nav.classList.toggle('hidden', !open);
    openIcon?.classList.toggle('hidden', open);
    closeIcon?.classList.toggle('hidden', !open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  };

  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  // fecha o painel ao navegar para uma seção
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setOpen(false)));
}

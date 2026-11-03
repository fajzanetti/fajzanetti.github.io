const button = document.getElementById('back-to-top');
const hero = document.getElementById('sobre');

function toggle(visible: boolean) {
  if (!button) return;
  button.setAttribute('aria-hidden', String(!visible));
  button.setAttribute('tabindex', visible ? '0' : '-1');
  button.classList.toggle('opacity-0', !visible);
  button.classList.toggle('translate-y-4', !visible);
}

if (button && hero && 'IntersectionObserver' in window) {
  // o botão aparece assim que o hero sai da tela
  const observer = new IntersectionObserver(([entry]) => toggle(!entry.isIntersecting), {
    rootMargin: '-25% 0px 0px 0px',
  });
  observer.observe(hero);
}

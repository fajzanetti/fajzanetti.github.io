const targets = document.querySelectorAll<HTMLElement>('[data-reveal-children] > :not([data-reveal-children])');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// intervalo entre itens que entram na tela no mesmo instante
const STAGGER_MS = 90;
// um salto de âncora revela muitos itens de uma vez; o limite evita uma espera longa no último
const MAX_STAGGER_STEPS = 3;

if (!reducedMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries
        .filter((entry) => entry.isIntersecting)
        .forEach((entry, index) => {
          const target = entry.target as HTMLElement;
          target.style.setProperty('--reveal-delay', `${Math.min(index, MAX_STAGGER_STEPS) * STAGGER_MS}ms`);
          target.dataset.reveal = 'visible';
          observer.unobserve(target);
        });
    },
    { rootMargin: '0px 0px -10% 0px' },
  );

  targets.forEach((target) => {
    // o item já visível no carregamento fica como está; esconder esse item causa um flash
    if (target.getBoundingClientRect().top < window.innerHeight) return;
    target.dataset.reveal = 'hidden';
    observer.observe(target);
  });
}

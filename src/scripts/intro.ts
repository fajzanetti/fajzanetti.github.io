const overlay = document.querySelector<HTMLElement>('[data-intro-overlay]');

if (overlay) {
  const root = document.documentElement;
  const markup = overlay.innerHTML;
  const skipEvents = ['pointerdown', 'keydown', 'wheel', 'touchmove'];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let typed = '';

  const play = () => {
    const logo = overlay.querySelector('svg');
    if (!logo) return;
    let leaving = false;

    const leave = () => {
      if (leaving) return;
      leaving = true;
      skipEvents.forEach((type) => window.removeEventListener(type, leave));
      // a logo do cabeçalho tocou a entrada atrás da abertura; ela precisa aparecer pronta
      document
        .querySelector('[data-logo] svg')
        ?.getAnimations({ subtree: true })
        .filter((animation) => animation.effect?.getTiming().iterations !== Infinity)
        .forEach((animation) => animation.finish());

      logo.addEventListener('animationend', (event) => {
        if (!(event.target as Element).classList.contains('glitch')) return;
        const fade = overlay.animate({ opacity: [1, 0] }, { duration: 300, easing: 'ease-out', fill: 'forwards' });
        fade.finished.then(() => {
          root.removeAttribute('data-intro');
          // a abertura volta ao estado inicial para tocar de novo
          fade.cancel();
          overlay.innerHTML = markup;
        });
      });
      logo.classList.add('exit');
    };

    // o pulo cancela a entrada no meio, e a promessa de uma animação cancelada rejeita
    Promise.allSettled(logo.getAnimations({ subtree: true }).map((animation) => animation.finished)).then(leave);
    skipEvents.forEach((type) => window.addEventListener(type, leave, { passive: true }));
  };

  if (root.hasAttribute('data-intro')) play();

  // easter egg: digitar "fz" toca a abertura de novo
  window.addEventListener('keydown', (event) => {
    if (event.key.length > 1 || event.ctrlKey || event.metaKey || event.altKey) return;
    typed = (typed + event.key.toLowerCase()).slice(-2);
    if (typed !== 'fz' || root.hasAttribute('data-intro') || reducedMotion.matches) return;
    typed = '';
    root.setAttribute('data-intro', '');
    play();
  });
}

const overlay = document.querySelector<HTMLElement>('[data-intro-overlay]');
const logo = overlay?.querySelector('svg');

if (overlay && logo && document.documentElement.hasAttribute('data-intro')) {
  let leaving = false;

  const leave = () => {
    if (leaving) return;
    leaving = true;
    // a logo do cabeçalho tocou a entrada atrás da abertura; ela precisa aparecer pronta
    document
      .querySelector('[data-logo] svg')
      ?.getAnimations({ subtree: true })
      .filter((animation) => animation.effect?.getTiming().iterations !== Infinity)
      .forEach((animation) => animation.finish());

    logo.addEventListener('animationend', (event) => {
      if (!(event.target as Element).classList.contains('glitch')) return;
      overlay.animate({ opacity: [1, 0] }, { duration: 300, easing: 'ease-out', fill: 'forwards' }).finished.then(() => {
        overlay.remove();
        document.documentElement.removeAttribute('data-intro');
      });
    });
    logo.classList.add('exit');
  };

  // o pulo cancela a entrada no meio, e a promessa de uma animação cancelada rejeita
  Promise.allSettled(logo.getAnimations({ subtree: true }).map((animation) => animation.finished)).then(leave);
  ['pointerdown', 'keydown', 'wheel', 'touchmove'].forEach((type) =>
    window.addEventListener(type, leave, { once: true, passive: true }),
  );
}

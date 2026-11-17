const holder = document.querySelector<HTMLElement>('[data-logo]');
// uma pausa maior que este intervalo zera a contagem de cliques seguidos
const CLICK_GAP_MS = 500;

if (holder) {
  const markup = holder.innerHTML;
  const root = document.documentElement;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let clicks = 0;
  let resetTimer = 0;

  // sem a marca, o próximo gatilho toca o glitch dos títulos de novo
  root.addEventListener('animationend', (event) => {
    if (event.animationName === 'title-glitch') root.removeAttribute('data-glitch');
  });

  holder.closest('a')?.addEventListener('click', () => {
    clicks += 1;
    clearTimeout(resetTimer);
    resetTimer = window.setTimeout(() => (clicks = 0), CLICK_GAP_MS);
    // easter eggs: 3 cliques levam o glitch aos títulos; 5 cliques fazem a chuva do hero desenhar a logo
    if (clicks === 3 && !reducedMotion.matches) root.setAttribute('data-glitch', '');
    if (clicks === 5) document.querySelector('[data-matrix-rain]')?.dispatchEvent(new Event('fz-logo'));

    // o clique no logo toca o glitch de saída; no fim, a entrada recomeça
    const svg = holder.querySelector('svg');
    if (!svg || svg.classList.contains('exit')) return;
    svg.addEventListener('animationend', (event) => {
      if ((event.target as Element).classList.contains('glitch')) holder.innerHTML = markup;
    });
    svg.classList.add('exit');
  });
}

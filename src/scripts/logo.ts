const holder = document.querySelector<HTMLElement>('[data-logo]');

if (holder) {
  const markup = holder.innerHTML;

  // o clique no logo toca o glitch de saída; no fim, a entrada recomeça
  holder.closest('a')?.addEventListener('click', () => {
    const svg = holder.querySelector('svg');
    if (!svg || svg.classList.contains('exit')) return;
    svg.addEventListener('animationend', (event) => {
      if ((event.target as Element).classList.contains('glitch')) holder.innerHTML = markup;
    });
    svg.classList.add('exit');
  });
}

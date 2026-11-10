const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// velocidade da faixa em pixels por segundo
const SPEED = 32;
// tempo da faixa para frear no hover e para voltar à velocidade normal
const EASE_MS = 250;

function setup(loop: HTMLElement) {
  const track = loop.querySelector<HTMLElement>('[data-logo-loop-track]');
  const copy = track?.firstElementChild;
  if (!track || !(copy instanceof HTMLElement)) return;

  let offset = 0;
  let velocity = 0;
  let hovered = false;
  let drag: { x: number; offset: number } | null = null;
  let frame = 0;
  let last = 0;

  function tick(now: number) {
    // a aba em segundo plano pausa os frames; o limite evita um salto na volta
    const elapsed = Math.min(now - last, 100);
    last = now;
    const target = hovered || drag || reducedMotion ? 0 : SPEED;
    velocity += (target - velocity) * (1 - Math.exp(-elapsed / EASE_MS));
    offset += (velocity * elapsed) / 1000;
    // o resto mantém o deslocamento dentro de uma cópia, também ao arrastar para a direita
    const width = copy.offsetWidth;
    track.style.translate = `${-(((offset % width) + width) % width)}px 0`;
    frame = requestAnimationFrame(tick);
  }

  function endDrag() {
    drag = null;
    delete loop.dataset.dragging;
  }

  loop.addEventListener('pointerenter', (event) => {
    hovered = event.pointerType === 'mouse';
  });
  loop.addEventListener('pointerleave', () => {
    hovered = false;
  });
  loop.addEventListener('pointerdown', (event) => {
    if (event.button !== 0) return;
    // a captura mantém o arraste quando o ponteiro sai da faixa
    loop.setPointerCapture(event.pointerId);
    drag = { x: event.clientX, offset };
    velocity = 0;
    loop.dataset.dragging = '';
  });
  loop.addEventListener('pointermove', (event) => {
    if (drag) offset = drag.offset - (event.clientX - drag.x);
  });
  loop.addEventListener('pointerup', endDrag);
  loop.addEventListener('pointercancel', endDrag);

  // a faixa fora da tela não gasta frames
  new IntersectionObserver(([entry]) => {
    cancelAnimationFrame(frame);
    if (!entry.isIntersecting) return;
    last = performance.now();
    frame = requestAnimationFrame(tick);
  }).observe(loop);
}

document.querySelectorAll<HTMLElement>('[data-logo-loop]').forEach(setup);

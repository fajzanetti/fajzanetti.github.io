import { mapLogoCells } from './rain-logo';

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/{}[]()=+-*#$;';
const CELL = 20;
const FONT = '13px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace';
const LOGO_FONT = `bold ${FONT}`;
const TICK_MS = 50;
const BASE_ALPHA = 0.15;
const HEAD_ALPHA = 0.65;
const EMPTY_RATIO = 0.45;
const COLS_PER_DROP = 5;
const LOGO_MS = 4000;
const LOGO_SWAP_RATIO = 0.04;

interface Drop {
  col: number;
  row: number;
  length: number;
  ticksPerRow: number;
}

function startMatrixRain(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
  const theme = getComputedStyle(document.documentElement);
  const baseColor = theme.getPropertyValue('--color-muted');
  const trailColor = theme.getPropertyValue('--color-accent-bright');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  let cols = 0;
  let rows = 0;
  let glyphs: string[] = [];
  let drops: Drop[] = [];
  let frame = 0;
  let lastTick = 0;
  let tick = 0;
  let visible = false;
  // cor de cada célula da logo; a célula fora da logo fica sem entrada
  let logo = new Map<number, string>();

  const randomInt = (max: number) => Math.floor(Math.random() * max);
  const randomGlyph = () => GLYPHS[randomInt(GLYPHS.length)];

  function drawCell(col: number, row: number, strength: number) {
    if (row < 0 || row >= rows) return;
    context.clearRect(col * CELL, row * CELL, CELL, CELL);
    const index = row * cols + col;
    const logoColor = logo.get(index);
    // a logo não tem lacunas: toda célula dela recebe um caractere
    if (logoColor && !glyphs[index]) glyphs[index] = randomGlyph();
    const glyph = glyphs[index];
    if (!glyph) return;
    context.globalAlpha = logoColor ? 1 : BASE_ALPHA + (HEAD_ALPHA - BASE_ALPHA) * strength;
    context.fillStyle = logoColor ?? (strength > 0 ? trailColor : baseColor);
    context.font = logoColor ? LOGO_FONT : FONT;
    context.fillText(glyph, col * CELL + CELL / 2, row * CELL + CELL / 2);
  }

  const drawLogoCell = (index: number) => drawCell(index % cols, Math.floor(index / cols), 0);

  function hideLogo() {
    const cells = [...logo.keys()];
    logo = new Map();
    for (const index of cells) {
      // a logo preencheu todas as células dela; a saída devolve a densidade da chuva
      if (Math.random() < EMPTY_RATIO) glyphs[index] = '';
      drawLogoCell(index);
    }
    canvas.removeAttribute('data-rain-logo');
  }

  function showLogo() {
    if (logo.size) return;
    logo = mapLogoCells(canvas.clientWidth, canvas.clientHeight, CELL);
    if (!logo.size) return;
    logo.forEach((_, index) => drawLogoCell(index));
    // o CSS usa a marca para esconder o conteúdo do hero e abrir a máscara do canvas
    canvas.setAttribute('data-rain-logo', '');
    setTimeout(hideLogo, LOGO_MS);
  }

  function drawTrailCell(drop: Drop, offset: number, swap: boolean) {
    const row = drop.row - offset;
    if (row < 0 || row >= rows) return;
    const index = row * cols + drop.col;
    // o rastro não tem lacunas: toda célula vazia recebe um caractere
    if (swap || !glyphs[index]) glyphs[index] = randomGlyph();
    drawCell(drop.col, row, 1 - offset / drop.length);
  }

  function resetDrop(drop: Drop, row: number) {
    // uma gota por coluna: duas gotas na mesma coluna apagam o rastro uma da outra
    const taken = new Set(drops.map(({ col }) => col));
    do drop.col = randomInt(cols);
    while (taken.has(drop.col) && taken.size < cols);
    drop.row = row;
    drop.length = 4 + randomInt(8);
    drop.ticksPerRow = 1 + randomInt(3);
  }

  function advance(drop: Drop) {
    drop.row += 1;
    for (let offset = 0; offset < drop.length; offset++) {
      drawTrailCell(drop, offset, offset === 0);
    }

    const tail = drop.row - drop.length;
    if (tail >= rows) return resetDrop(drop, -randomInt(rows));
    // o rastro preenche todas as células; a cauda apaga parte delas para manter a densidade
    if (tail >= 0 && Math.random() < EMPTY_RATIO) glyphs[tail * cols + drop.col] = '';
    drawCell(drop.col, tail, 0);
  }

  function setup() {
    const { clientWidth, clientHeight } = canvas;
    const ratio = window.devicePixelRatio || 1;
    canvas.width = clientWidth * ratio;
    canvas.height = clientHeight * ratio;
    context.scale(ratio, ratio);
    context.font = FONT;
    context.textAlign = 'center';
    context.textBaseline = 'middle';

    cols = Math.ceil(clientWidth / CELL);
    rows = Math.ceil(clientHeight / CELL);
    glyphs = Array.from({ length: cols * rows }, () => (Math.random() < EMPTY_RATIO ? '' : randomGlyph()));
    // a grade mudou; a logo visível precisa das células novas
    if (logo.size) logo = mapLogoCells(clientWidth, clientHeight, CELL);
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) drawCell(col, row, 0);
    }

    drops = [];
    const count = Math.max(2, Math.round(cols / COLS_PER_DROP));
    for (let i = 0; i < count; i++) {
      const drop: Drop = { col: 0, row: 0, length: 0, ticksPerRow: 1 };
      resetDrop(drop, randomInt(rows));
      drops.push(drop);
    }
  }

  function loop(now: number) {
    frame = requestAnimationFrame(loop);
    if (now - lastTick < TICK_MS) return;
    lastTick = now;
    tick += 1;
    for (const drop of drops) {
      if (tick % drop.ticksPerRow === 0) advance(drop);
      // o glitch troca um caractere aleatório do rastro a cada tick
      drawTrailCell(drop, randomInt(drop.length), true);
    }
    // a logo troca parte dos caracteres a cada tick, como o rastro
    logo.forEach((_, index) => {
      if (Math.random() > LOGO_SWAP_RATIO) return;
      glyphs[index] = randomGlyph();
      drawLogoCell(index);
    });
  }

  function toggle() {
    cancelAnimationFrame(frame);
    if (visible && !reducedMotion.matches) frame = requestAnimationFrame(loop);
  }

  new ResizeObserver(setup).observe(canvas);
  // fora da tela a animação só gasta CPU
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    toggle();
  }).observe(canvas);
  reducedMotion.addEventListener('change', toggle);
  // logo.ts dispara o evento no quinto clique seguido
  canvas.addEventListener('fz-logo', showLogo);
}

const canvas = document.querySelector<HTMLCanvasElement>('[data-matrix-rain]');
const context = canvas?.getContext('2d');
if (canvas && context) startMatrixRain(canvas, context);

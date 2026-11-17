// parte mínima da célula que a logo precisa cobrir
const COVERAGE = 0.3;
// parte da largura e da altura da área que a logo pode ocupar
const MAX_WIDTH = 0.9;
const MAX_HEIGHT = 0.6;

/** Devolve a cor de cada célula da grade que a logo do cabeçalho cobre, com a logo no centro da área. */
export function mapLogoCells(width: number, height: number, cell: number) {
  const cells = new Map<number, string>();
  const svg = document.querySelector<SVGSVGElement>('[data-logo] svg');
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  if (!svg || !context) return cells;

  // cada pixel é uma célula: o antialiasing vira a parte da célula que a logo cobre
  const cols = Math.ceil(width / cell);
  const rows = Math.ceil(height / cell);
  canvas.width = cols;
  canvas.height = rows;
  const box = svg.viewBox.baseVal;
  const scale = Math.min((width * MAX_WIDTH) / box.width, (height * MAX_HEIGHT) / box.height) / cell;
  context.translate((width / cell - box.width * scale) / 2, (height / cell - box.height * scale) / 2);
  context.scale(scale, scale);
  context.translate(-box.x, -box.y);
  svg.querySelectorAll('.mark path').forEach((path) => {
    context.fillStyle = getComputedStyle(path).fill;
    context.fill(new Path2D(path.getAttribute('d') ?? ''));
  });

  const { data } = context.getImageData(0, 0, cols, rows);
  for (let index = 0; index < cols * rows; index++) {
    const [red, green, blue, alpha] = data.subarray(index * 4, index * 4 + 4);
    if (alpha >= COVERAGE * 255) cells.set(index, `rgb(${red} ${green} ${blue})`);
  }
  return cells;
}

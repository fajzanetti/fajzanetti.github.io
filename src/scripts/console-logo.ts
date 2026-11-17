
const art = [
  '                        ▒▒▒▒▒',
  '█████████████ ▒▒▒▒▒▒▒  ▒▒▒▒▒ ',
  '  ████    ███ ▒▒▒     ▒▒▒▒▒  ',
  '  ████              ▒▒▒▒▒    ',
  '  ████   ██        ▒▒▒▒▒     ',
  '  █████████       ▒▒▒▒▒      ',
  '  ████   ██      ▒▒▒▒▒       ',
  '  ████          ▒▒▒▒▒        ',
  '  ████        ▒▒▒▒▒     ▒▒▒  ',
  '████████     ▒▒▒▒▒  ▒▒▒▒▒▒▒  ',
  '            ▒▒▒▒▒            ',
].join('\n');
// const art = [
//   '                        ╔════╗',
//   '╔════════════╗╔══════╗ ╔╝   ╔╝',
//   '╚═╗   ╔═══╗  ║║  ╔═══╝╔╝   ╔╝',
//   '  ║   ║   ╚══╝╚══╝  ╔═╝  ╔═╝',
//   '  ║   ║  ╔═╗       ╔╝   ╔╝',
//   '  ║   ╚══╝ ║      ╔╝   ╔╝',
//   '  ║   ╔══╗ ║     ╔╝   ╔╝',
//   '  ║   ║  ╚═╝    ╔╝   ╔╝',
//   '  ║   ║       ╔═╝  ╔═╝  ╔══╗',
//   '╔═╝   ╚═╗    ╔╝   ╔╝╔═══╝  ║',
//   '╚═══════╝   ╔╝   ╔╝ ╚══════╝',
//   '            ╚════╝',
// ].join('\n');
const accent = getComputedStyle(document.documentElement).getPropertyValue('--color-accent-bright');

// easter egg: quem abre o console encontra a logo e o repositório
console.log(
  `%c${art}%c\n\nCurioso? O código deste site está em https://github.com/fajzanetti/fajzanetti.github.io`,
  `color: ${accent}; font-family: monospace; font-weight: bold`,
  '',
);

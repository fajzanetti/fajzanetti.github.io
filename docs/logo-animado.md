# Logo FZ animado

O logo "FZ" do cabeçalho vira um SVG animado. Um cursor digita o "F" e depois inclina até virar a diagonal do "Z". O clique no logo toca uma saída com glitch, e depois a entrada recomeça.

## Animações

| Animação | Duração | Quando roda | O que acontece |
| --- | --- | --- | --- |
| Entrada | 2,8 s | No carregamento da página | O cursor pisca e o "F" aparece como uma letra digitada. O cursor gira até virar a diagonal, e as barras do "Z" encaixam nos vãos. |
| Laço | 6 s | Depois da entrada, sem fim | No fim de cada ciclo, a diagonal pisca duas vezes, como um cursor. |
| Saída | 0,7 s | No clique do logo | Duas cópias deslocadas separam as cores e as partes saltam. O logo vira faixas e some numa linha. |

Com `prefers-reduced-motion`, o logo aparece parado e a saída vira um fade de 0,3 s.

## Arquivos

| Arquivo | Mudança |
| --- | --- |
| `src/assets/logo-fz.svg` | Arquivo novo. Contém o logo e as animações. |
| `src/components/Header.astro` | O link do topo mostra o SVG no lugar do texto "FZ". |
| `src/scripts/logo.ts` | Arquivo novo. O clique toca a saída e reinicia a entrada. |

## Passos

1. Crie `src/assets/logo-fz.svg` com o código da seção [SVG](#svg).
2. No `Header.astro`, adicione o import do SVG depois do import do `Icon`. Veja [Header](#header).
3. No `Header.astro`, troque o conteúdo do link do topo. Veja [Header](#header).
4. Crie `src/scripts/logo.ts` com o código da seção [Script](#script).
5. No fim do `Header.astro`, inclua o script depois do `scrollspy.ts`. Veja [Header](#header).
6. Rode `npm run dev` e confira o resultado com a lista da seção [Conferência](#conferência).

## Header

O sufixo `?raw` importa o SVG como texto. O `set:html` coloca esse texto direto no HTML. A saída precisa do SVG direto no HTML, porque ela depende de uma classe no `<svg>`.

Import, no frontmatter:

```astro
import { Icon } from 'astro-icon/components';
import logo from '../assets/logo-fz.svg?raw';
```

Link do topo, antes:

```astro
<a href="#sobre" class="font-heading text-[28px] leading-none font-bold text-text" aria-label={`FZ, ${fullName}, voltar ao início`}>
  {profile.firstName[0]}<span class="text-accent-bright">{profile.lastName[0]}</span>
</a>
```

Link do topo, depois:

```astro
<a href="#sobre" aria-label={`FZ, ${fullName}, voltar ao início`}>
  <span data-logo class="block h-7 [&>svg]:h-full [&>svg]:w-auto" set:html={logo} />
</a>
```

A altura `h-7` (28 px) é a mesma altura de linha do texto antigo. O cabeçalho mantém a altura atual.

Scripts, no fim do arquivo:

```astro
<script src="../scripts/menu.ts"></script>
<script src="../scripts/scrollspy.ts"></script>
<script src="../scripts/logo.ts"></script>
```

## SVG

Arquivo `src/assets/logo-fz.svg`:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="111 196 844 632" class="fz-logo" aria-hidden="true" focusable="false">
<style>
.fz-logo .f, .fz-logo .top, .fz-logo .bottom, .fz-logo .diagonal, .fz-logo .caret { transform-box: fill-box; transform-origin: center; }
.fz-logo .caret { opacity: 0; }
/* o cursor digita o F e depois inclina até virar a diagonal do Z */
.fz-logo .f { animation: fz-type 2.8s step-end both; }
.fz-logo .caret { animation: fz-blink 2.8s step-end both, fz-morph 2.8s both; }
.fz-logo .diagonal { animation: fz-appear 2.8s step-end both, fz-cursor 6s step-end 2.8s infinite; }
.fz-logo .top { animation: fz-slide-left 2.8s both; }
.fz-logo .bottom { animation: fz-slide-right 2.8s both; }
@keyframes fz-type { 0% { opacity: 0; } 30.36% { opacity: 1; } }
@keyframes fz-blink {
  0% { opacity: 1; } 10.71% { opacity: 0; } 19.64% { opacity: 1; }
  39.29% { opacity: 0; } 46.43% { opacity: 1; } 69.64%, 100% { opacity: 0; }
}
@keyframes fz-morph {
  0%, 30.35% { transform: translate(-558.8px, 0) rotate(0deg) scale(0.337, 1); }
  30.36%, 46.43% { transform: translate(-191.8px, 0) rotate(0deg) scale(0.337, 1); animation-timing-function: ease-in-out; }
  51.79% { transform: translate(-206.8px, 0) rotate(-6deg) scale(0.337, 1); animation-timing-function: cubic-bezier(.5, 0, .2, 1); }
  64.29% { transform: translate(0, 0) rotate(34.22deg) scale(1, 1); animation-timing-function: ease-in-out; }
  69.64%, 100% { transform: translate(0, 0) rotate(31.72deg) scale(1, 1); }
}
@keyframes fz-appear { 0% { opacity: 0; } 69.64% { opacity: 1; } }
@keyframes fz-cursor { 0% { opacity: 1; } 80% { opacity: 0; } 85% { opacity: 1; } 90% { opacity: 0; } 95%, 100% { opacity: 1; } }
@keyframes fz-slide-left {
  0%, 73.21% { opacity: 0; transform: translateX(-70px); animation-timing-function: cubic-bezier(.2, .8, .2, 1); }
  85.71%, 100% { opacity: 1; transform: none; }
}
@keyframes fz-slide-right {
  0%, 76.79% { opacity: 0; transform: translateX(70px); animation-timing-function: cubic-bezier(.2, .8, .2, 1); }
  89.29%, 100% { opacity: 1; transform: none; }
}
/* a classe exit no svg toca o glitch de saída; as duas cópias deslocadas separam as cores */
.fz-logo .ghost { opacity: 0; }
.fz-logo.exit .glitch { animation: fz-cut .7s step-end forwards; }
.fz-logo.exit .mark { animation: fz-shift .7s step-end forwards; }
.fz-logo.exit .ghost-a { animation: fz-ghost-a .7s step-end forwards; }
.fz-logo.exit .ghost-b { animation: fz-ghost-b .7s step-end forwards; }
.fz-logo.exit .f { animation: fz-tear-f .7s step-end forwards; }
.fz-logo.exit .top { animation: fz-tear-top .7s step-end forwards; }
.fz-logo.exit .bottom { animation: fz-tear-bottom .7s step-end forwards; }
.fz-logo.exit .diagonal { animation: fz-tear-diagonal .7s step-end forwards; }
.fz-logo.exit .caret { animation: none; }
@keyframes fz-cut {
  0% { opacity: 1; clip-path: inset(0 0 0 0); } 31.43% { opacity: 0; }
  37.14% { opacity: 1; clip-path: inset(15% 0 50% 0); } 45.71% { clip-path: inset(55% 0 12% 0); }
  54.29% { clip-path: inset(0 0 0 0); } 62.86% { clip-path: inset(44% 0 44% 0); }
  71.43% { clip-path: inset(49.4% 0 49.4% 0); } 80% { opacity: 0; } 85.71% { opacity: 1; } 91.43%, 100% { opacity: 0; }
}
@keyframes fz-shift {
  0% { transform: none; } 5.71% { transform: translateX(6px); } 22.86% { transform: translateX(-8px); }
  31.43% { transform: none; } 37.14% { transform: translateX(22px); } 45.71% { transform: translateX(-26px); }
  54.29% { transform: translateX(4px); } 62.86%, 100% { transform: none; }
}
@keyframes fz-ghost-a {
  0% { opacity: 0; } 5.71% { opacity: .85; transform: translate(-12px, 0); } 14.29% { transform: translate(14px, -3px); }
  22.86% { transform: translate(10px, 0); } 37.14% { transform: translate(-16px, 0); } 45.71% { transform: translate(18px, 2px); }
  54.29% { transform: translate(-22px, 0); } 62.86% { transform: translate(-8px, 0); } 71.43%, 100% { opacity: 0; }
}
@keyframes fz-ghost-b {
  0% { opacity: 0; } 5.71% { opacity: .85; transform: translate(12px, 0); } 14.29% { transform: translate(-14px, 3px); }
  22.86% { transform: translate(-10px, 0); } 37.14% { transform: translate(16px, 0); } 45.71% { transform: translate(-18px, -2px); }
  54.29% { transform: translate(22px, 0); } 62.86% { transform: translate(8px, 0); } 71.43%, 100% { opacity: 0; }
}
@keyframes fz-tear-f { 0% { transform: none; } 14.29% { transform: translateX(-16px); } 22.86% { transform: none; } 54.29% { transform: translateX(12px); } 62.86%, 100% { transform: none; } }
@keyframes fz-tear-top { 0% { transform: none; } 14.29% { transform: translateX(24px); } 22.86% { transform: none; } 54.29% { transform: translateX(-10px); } 62.86%, 100% { transform: none; } }
@keyframes fz-tear-bottom { 0% { transform: none; } 14.29% { transform: translateX(-20px); } 22.86% { transform: none; } 54.29% { transform: translateX(18px); } 62.86%, 100% { transform: none; } }
@keyframes fz-tear-diagonal { 0% { transform: none; } 14.29% { transform: translateX(8px); } 22.86% { transform: none; } 54.29% { transform: translateX(-16px); } 62.86%, 100% { transform: none; } }
@keyframes fz-fade-out { to { opacity: 0; } }
@media (prefers-reduced-motion: reduce) {
  .fz-logo .f, .fz-logo .top, .fz-logo .bottom, .fz-logo .diagonal, .fz-logo .caret { animation: none; }
  .fz-logo.exit .glitch * { animation: none; }
  .fz-logo.exit .glitch { animation: fz-fade-out .3s forwards; }
}
</style>
<defs><clipPath id="fz-band"><rect x="0" y="212" width="1024" height="600"/></clipPath><g id="fz-shape"><path d="M136.5 267.2 131.0 271.0 128.2 275.8 127.5 284.2 129.0 289.0 130.2 291.0 134.8 294.8 144.5 298.0 151.0 301.0 157.0 305.0 161.2 309.0 163.8 312.8 166.0 318.5 168.0 325.5 170.0 338.8 170.5 347.5 170.8 659.5 169.8 685.8 168.0 696.2 164.0 709.0 160.8 714.2 154.0 720.8 143.8 726.0 136.2 728.0 130.8 731.8 129.0 734.5 127.8 738.5 127.5 744.5 128.2 748.0 130.0 751.8 132.0 754.0 134.8 755.8 140.5 757.2 307.2 757.2 315.0 755.8 318.2 753.8 320.8 750.8 322.5 746.0 322.5 738.2 320.5 733.2 318.0 730.5 313.8 728.0 296.0 722.0 289.2 718.0 284.5 713.0 281.8 708.2 278.8 700.0 277.0 693.0 275.5 680.8 275.0 533.0 276.5 531.8 340.0 532.0 347.5 533.0 358.0 535.8 368.2 541.0 375.8 547.5 382.0 556.8 384.8 562.2 389.0 573.8 391.0 576.8 394.2 579.8 398.8 581.8 405.2 582.0 408.2 581.5 413.0 579.5 417.5 574.5 418.8 571.0 419.2 458.2 418.2 451.5 415.8 446.5 414.2 445.0 408.0 442.0 405.2 441.5 398.5 442.0 394.0 444.2 390.0 448.8 385.2 461.2 381.8 468.0 378.0 473.5 369.5 481.8 359.8 487.0 350.2 490.0 337.5 491.5 276.0 491.8 275.2 491.0 275.2 307.8 276.0 307.0 360.0 307.0 375.0 308.8 390.8 313.0 402.2 317.8 408.2 321.0 416.2 326.8 425.5 335.5 435.0 347.5 439.8 355.5 447.0 370.2 452.0 376.8 454.5 378.5 460.2 380.5 463.8 380.8 470.2 379.8 474.5 378.2 479.5 374.2 481.5 370.2 482.0 367.2 482.0 361.8 474.5 286.8 472.8 275.5 470.5 271.0 468.5 269.0 465.2 267.0 460.5 266.2 143.8 266.2Z"/><path d="M518.2 370.0 520.5 374.0 522.8 376.2 528.5 379.5 533.5 380.5 537.5 380.5 545.0 378.8 548.0 376.8 552.0 372.0 558.8 357.5 565.5 346.8 573.0 337.5 579.5 331.2 587.2 325.2 597.5 319.2 610.0 313.8 619.0 311.0 634.8 308.0 644.2 307.0 755.2 307.0 758.8 302.2 780.2 266.5 541.5 266.2 537.8 267.2 534.5 269.0 532.0 271.8 530.2 275.5 529.0 280.8 518.0 357.5 517.5 366.8Z"/><path d="M894.0 639.2 889.0 635.0 881.2 632.0 873.8 632.5 868.0 635.5 864.8 639.0 861.0 644.8 857.0 654.2 849.8 667.0 844.5 674.2 834.5 686.0 824.2 694.8 817.2 699.8 806.0 705.8 794.5 710.0 774.2 714.8 747.5 717.0 651.5 717.0 626.8 756.0 626.8 757.0 866.5 757.2 871.8 756.0 875.2 754.0 878.0 751.2 879.8 748.2 880.8 744.2 885.5 715.0 886.0 708.8 887.5 703.0 892.0 673.2 893.0 670.2 895.5 655.0 896.0 645.8Z"/><path d="M935.0 214.2 933.0 213.0 929.0 212.2 839.8 212.5 836.5 213.0 830.8 215.2 825.0 220.8 767.0 313.5 737.8 361.8 728.0 376.5 709.0 408.5 683.0 449.8 659.8 488.2 651.2 501.0 527.8 701.5 523.0 708.2 502.0 743.2 470.2 793.2 468.0 797.8 467.2 803.0 468.0 806.2 470.5 809.5 474.5 811.2 566.8 811.2 572.8 809.8 579.2 806.0 583.0 802.0 934.8 233.0 937.8 227.2 938.5 223.8 937.8 217.5Z"/></g></defs>
<g class="glitch">
<use href="#fz-shape" class="ghost ghost-a" fill="#0c9c42"/>
<use href="#fz-shape" class="ghost ghost-b" fill="#10231a"/>
<g class="mark">
<path class="f" fill="#10231a" d="M136.5 267.2 131.0 271.0 128.2 275.8 127.5 284.2 129.0 289.0 130.2 291.0 134.8 294.8 144.5 298.0 151.0 301.0 157.0 305.0 161.2 309.0 163.8 312.8 166.0 318.5 168.0 325.5 170.0 338.8 170.5 347.5 170.8 659.5 169.8 685.8 168.0 696.2 164.0 709.0 160.8 714.2 154.0 720.8 143.8 726.0 136.2 728.0 130.8 731.8 129.0 734.5 127.8 738.5 127.5 744.5 128.2 748.0 130.0 751.8 132.0 754.0 134.8 755.8 140.5 757.2 307.2 757.2 315.0 755.8 318.2 753.8 320.8 750.8 322.5 746.0 322.5 738.2 320.5 733.2 318.0 730.5 313.8 728.0 296.0 722.0 289.2 718.0 284.5 713.0 281.8 708.2 278.8 700.0 277.0 693.0 275.5 680.8 275.0 533.0 276.5 531.8 340.0 532.0 347.5 533.0 358.0 535.8 368.2 541.0 375.8 547.5 382.0 556.8 384.8 562.2 389.0 573.8 391.0 576.8 394.2 579.8 398.8 581.8 405.2 582.0 408.2 581.5 413.0 579.5 417.5 574.5 418.8 571.0 419.2 458.2 418.2 451.5 415.8 446.5 414.2 445.0 408.0 442.0 405.2 441.5 398.5 442.0 394.0 444.2 390.0 448.8 385.2 461.2 381.8 468.0 378.0 473.5 369.5 481.8 359.8 487.0 350.2 490.0 337.5 491.5 276.0 491.8 275.2 491.0 275.2 307.8 276.0 307.0 360.0 307.0 375.0 308.8 390.8 313.0 402.2 317.8 408.2 321.0 416.2 326.8 425.5 335.5 435.0 347.5 439.8 355.5 447.0 370.2 452.0 376.8 454.5 378.5 460.2 380.5 463.8 380.8 470.2 379.8 474.5 378.2 479.5 374.2 481.5 370.2 482.0 367.2 482.0 361.8 474.5 286.8 472.8 275.5 470.5 271.0 468.5 269.0 465.2 267.0 460.5 266.2 143.8 266.2Z"/>
<path class="top" fill="#0c9c42" d="M518.2 370.0 520.5 374.0 522.8 376.2 528.5 379.5 533.5 380.5 537.5 380.5 545.0 378.8 548.0 376.8 552.0 372.0 558.8 357.5 565.5 346.8 573.0 337.5 579.5 331.2 587.2 325.2 597.5 319.2 610.0 313.8 619.0 311.0 634.8 308.0 644.2 307.0 755.2 307.0 758.8 302.2 780.2 266.5 541.5 266.2 537.8 267.2 534.5 269.0 532.0 271.8 530.2 275.5 529.0 280.8 518.0 357.5 517.5 366.8Z"/>
<path class="bottom" fill="#0c9c42" d="M894.0 639.2 889.0 635.0 881.2 632.0 873.8 632.5 868.0 635.5 864.8 639.0 861.0 644.8 857.0 654.2 849.8 667.0 844.5 674.2 834.5 686.0 824.2 694.8 817.2 699.8 806.0 705.8 794.5 710.0 774.2 714.8 747.5 717.0 651.5 717.0 626.8 756.0 626.8 757.0 866.5 757.2 871.8 756.0 875.2 754.0 878.0 751.2 879.8 748.2 880.8 744.2 885.5 715.0 886.0 708.8 887.5 703.0 892.0 673.2 893.0 670.2 895.5 655.0 896.0 645.8Z"/>
<path class="diagonal" fill="#0c9c42" d="M935.0 214.2 933.0 213.0 929.0 212.2 839.8 212.5 836.5 213.0 830.8 215.2 825.0 220.8 767.0 313.5 737.8 361.8 728.0 376.5 709.0 408.5 683.0 449.8 659.8 488.2 651.2 501.0 527.8 701.5 523.0 708.2 502.0 743.2 470.2 793.2 468.0 797.8 467.2 803.0 468.0 806.2 470.5 809.5 474.5 811.2 566.8 811.2 572.8 809.8 579.2 806.0 583.0 802.0 934.8 233.0 937.8 227.2 938.5 223.8 937.8 217.5Z"/>
</g>
</g>
<g clip-path="url(#fz-band)"><rect class="caret" fill="#0c9c42" x="652.3" y="62.0" width="101.0" height="900"/></g>
</svg>
```

## Script

Arquivo `src/scripts/logo.ts`:

```ts
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
```

## Conferência

- O logo mede 37 × 28 px. No desktop, o cabeçalho continua com 69 px de altura.
- No carregamento, a entrada roda uma vez. O laço começa em 2,8 s.
- O clique no logo toca o glitch e depois a entrada. A página rola até `#sobre`, como antes.
- No DevTools, abra Rendering e emule `prefers-reduced-motion: reduce`. Recarregue a página: o logo aparece parado. Clique no logo: ele some num fade e volta parado.
- `npm run build` termina sem erro.

## Notas

- O `<style>` de um SVG inline vale para a página inteira. Por isso, cada seletor começa com `.fz-logo` e cada keyframe começa com `fz-`. Os ids são `fz-band` e `fz-shape`.
- Use o logo uma vez por página. Uma segunda cópia repete os ids `fz-band` e `fz-shape`. Para usar duas cópias, troque os ids na segunda.
- Num `<img>`, só a entrada e o laço rodam. A saída exige o SVG inline.
- As cores estão fixas no SVG: `#10231a` (`--color-ink`) e `#0c9c42` (`--color-accent-bright`). Se a paleta mudar, troque os valores no SVG.
- O SVG tem `aria-hidden="true"`. O `aria-label` do link continua como o nome acessível.
- Para tocar a saída em outro evento, adicione a classe `exit` ao `<svg>`. Para reiniciar a entrada, recoloque o HTML original do `[data-logo]`, como faz o `logo.ts`.

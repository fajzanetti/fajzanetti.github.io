# fajzanetti.github.io

Currículo online de Felipe Zanetti. Site estático com [Astro](https://astro.build) e Tailwind CSS, publicado no GitHub Pages.

## Requisitos

- Node.js 22.23.4 ou superior

## Comandos

```bash
npm install      # instala as dependências
npm run dev      # servidor local em http://localhost:4321
npm run build    # gera o site em dist/
npm run preview  # serve o conteúdo de dist/
```

## Como editar o conteúdo

Todo o texto fica em `src/data/`. Os componentes não contêm texto.

| Arquivo | Conteúdo |
| --- | --- |
| `profile.ts` | Nome, cargo, cidade, e-mail, resumo, interesses e redes sociais |
| `experience.ts` | Experiências profissionais |
| `education.ts` | Formação acadêmica |
| `courses.ts` | Formação complementar |
| `skills.ts` | Habilidades e checklist |
| `nav.ts` | Itens do menu |

Ícones usam nomes do [Iconify](https://icon-sets.iconify.design/mdi/), por exemplo `mdi:react`.

## Currículo em PDF

O fonte é `cv/cv.html`, com a mesma identidade visual do site. Edite o HTML e gere o PDF:

```bash
google-chrome --headless=new --disable-gpu --no-pdf-header-footer \
  --virtual-time-budget=8000 --print-to-pdf=public/cv.pdf "file://$PWD/cv/cv.html"
```

A foto de perfil fica em `src/assets/avatar.png`.

## Deploy

O workflow em `.github/workflows/deploy.yml` publica o site a cada push na branch `master`. Em **Settings → Pages**, a opção **Source** precisa estar em **GitHub Actions**.

## Subpágina ui-components

O deploy publica o Showcase do repositório [ui-components](https://github.com/fajzanetti/ui-components) em `/ui-components/`. O workflow clona o repositório, gera o Showcase e copia o resultado para `public/ui-components/`.

Uma mudança no `ui-components` só aparece no site depois de um novo deploy. Rode o workflow manualmente em **Actions → Deploy to GitHub Pages → Run workflow**.

Para ver a subpágina no ambiente local, gere o Showcase a partir do clone do `ui-components`:

```bash
BASE_PATH=/ui-components/ npx vite build --outDir <caminho-deste-repo>/public/ui-components --emptyOutDir
```

A pasta `public/ui-components/` fica fora do Git. O `npm run preview` serve a subpágina em `/ui-components/`. O `npm run dev` só serve em `/ui-components/index.html`.

## Histórico

A versão anterior (2019–2022) usava o template [Start Bootstrap Resume](https://startbootstrap.com/theme/resume).

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

## Arquivos a substituir

- `public/cv.pdf`: currículo em PDF. O arquivo atual é um placeholder.
- `src/assets/avatar.png`: foto de perfil.

## Deploy

O workflow em `.github/workflows/deploy.yml` publica o site a cada push na branch `master`. Em **Settings → Pages**, a opção **Source** precisa estar em **GitHub Actions**.

## Histórico

A versão anterior (2019–2022) usava o template [Start Bootstrap Resume](https://startbootstrap.com/theme/resume).

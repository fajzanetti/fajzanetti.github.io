import type { SkillGroup } from './types';

export const skillGroups: SkillGroup[] = [
  {
    title: 'Linguagens e frameworks',
    skills: [
      { name: 'TypeScript', icon: 'simple-icons:typescript' },
      { name: 'JavaScript', icon: 'simple-icons:javascript' },
      { name: 'React', icon: 'simple-icons:react' },
      { name: 'Next.js', icon: 'simple-icons:nextdotjs' },
      { name: 'Svelte', icon: 'simple-icons:svelte' },
      { name: 'SvelteKit', icon: 'simple-icons:svelte' },
      { name: 'React Native', icon: 'mdi:cellphone' },
      { name: 'Node.js', icon: 'simple-icons:nodedotjs' },
      { name: 'Vue.js', icon: 'simple-icons:vuedotjs' },
    ],
  },
  {
    title: 'Estado e dados',
    skills: [
      { name: 'GraphQL', icon: 'simple-icons:graphql' },
      { name: 'Apollo Client', icon: 'simple-icons:apollographql' },
      { name: 'Redux Toolkit', icon: 'simple-icons:redux' },
      { name: 'XState', icon: 'simple-icons:xstate' },
      { name: 'Pusher', icon: 'simple-icons:pusher' },
      { name: 'Meilisearch', icon: 'simple-icons:meilisearch' },
    ],
  },
  {
    title: 'UI, estilo e animação',
    skills: [
      { name: 'Tailwind CSS', icon: 'simple-icons:tailwindcss' },
      { name: 'HeroUI', icon: 'simple-icons:heroui' },
      { name: 'Sass', icon: 'simple-icons:sass' },
      { name: 'Framer Motion', icon: 'simple-icons:framer' },
      { name: 'Storybook', icon: 'simple-icons:storybook' },
      { name: 'i18n (next-intl, Lingui)', icon: 'mdi:translate' },
    ],
  },
  {
    title: 'Canvas e jogos',
    skills: [
      { name: 'PixiJS', icon: 'simple-icons:webgl' },
      { name: 'Spine', icon: 'simple-icons:spine' },
      { name: 'Howler.js', icon: 'mdi:volume-high' },
      { name: 'Matter.js', icon: 'simple-icons:matterdotjs' },
    ],
  },
  {
    title: 'Testes e qualidade',
    skills: [
      { name: 'Vitest', icon: 'simple-icons:vitest' },
      { name: 'Testing Library', icon: 'simple-icons:testinglibrary' },
      { name: 'Cypress', icon: 'simple-icons:cypress' },
      { name: 'Chromatic', icon: 'simple-icons:chromatic' },
      { name: 'ESLint', icon: 'simple-icons:eslint' },
      { name: 'Prettier', icon: 'simple-icons:prettier' },
    ],
  },
  {
    title: 'Build e infraestrutura',
    skills: [
      { name: 'Vite', icon: 'simple-icons:vite' },
      { name: 'pnpm', icon: 'simple-icons:pnpm' },
      { name: 'Turborepo', icon: 'simple-icons:turborepo' },
      { name: 'Cloudflare Workers', icon: 'simple-icons:cloudflareworkers' },
      { name: 'Git', icon: 'simple-icons:git' },
    ],
  },
];

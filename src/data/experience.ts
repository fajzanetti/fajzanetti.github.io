import type { Experience } from './types';

export const experience: Experience[] = [
  {
    role: 'Desenvolvedor Front-end',
    company: 'Betting Software',
    location: 'Vitória da Conquista/BA · Remoto',
    description: [
      'Aplicações whitelabel multi-tenant com Next.js 15, React 19, TypeScript, Tailwind CSS e HeroUI, publicadas em Cloudflare Workers.',
      'Jogos em canvas com Svelte 5, SvelteKit, PixiJS e Spine, com máquinas de estado em XState e monorepo com pnpm e Turborepo.',
      'GraphQL com Apollo Client, Redux Toolkit, tempo real com Pusher e testes com Vitest, Testing Library, Cypress e Chromatic.',
      'Foco em performance (code splitting, cache, otimização de imagens) e SEO com SSR, SSG e ISR.',
    ],
    periods: [{ start: 'Set 2024', end: 'Atual' }],
  },
  {
    role: 'Desenvolvedor Front-end Pleno',
    company: 'Codificar Sistemas Tecnológicos',
    location: 'Remoto',
    description: 'Desenvolvimento de aplicativos com React Native e JavaScript.',
    periods: [{ start: 'Jan 2023', end: 'Set 2024' }],
  },
  {
    role: 'Desenvolvedor Front-end Júnior',
    company: 'Codificar Sistemas Tecnológicos',
    location: 'Remoto',
    description: 'Desenvolvimento mobile com React Native e Android.',
    periods: [{ start: 'Ago 2021', end: 'Jan 2023' }],
  },
  {
    role: 'Estagiário em Desenvolvimento',
    company: 'Codificar Sistemas Tecnológicos',
    location: 'Remoto',
    description: 'Estágio em desenvolvimento mobile com React Native e JavaScript.',
    periods: [{ start: 'Ago 2020', end: 'Ago 2021' }],
  },
  {
    role: 'Monitor de Introdução à Programação de Computadores',
    company: 'Universidade Federal de Uberlândia',
    location: 'Campus Monte Carmelo',
    description: 'Monitor voluntário em 2016 e bolsista em 2017 no curso de Sistemas de Informação.',
    periods: [{ start: '2016', end: '2017' }],
  },
  {
    role: 'Projeto Jovens Programadores',
    company: 'Universidade Federal de Uberlândia',
    location: 'Campus Monte Carmelo',
    description: [
      'Aulas expositivas de programação C++, lógica computacional e robótica para alunos do ensino fundamental e médio.',
      'No primeiro período do projeto, participei como desenvolvedor web. Depois, como instrutor das aulas de programação C++.',
    ],
    periods: [
      { start: 'Ago 2016', end: 'Dez 2016' },
      { start: 'Nov 2017', end: 'Jan 2018' },
    ],
  },
];

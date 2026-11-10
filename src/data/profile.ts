import type { Profile } from './types';

export const profile: Profile = {
  firstName: 'Felipe',
  lastName: 'Zanetti',
  title: 'Desenvolvedor Front-end',
  city: 'Brasil/MG',
  email: 'felipezanetti.dev@gmail.com',
  summary: [
    'Desenvolvedor Front-end com experiência no mercado desde 2020.',
    'Especializado na criação de interfaces modernas, performáticas e escaláveis com React, Next.js, Svelte, TypeScript e React Native.',
    'Bacharel em Sistemas de Informação pela Universidade Federal de Uberlândia, complementado por diversos cursos de especialização focados em boas práticas, arquitetura de software e experiência do usuário (UX).',
  ],
  interests: [
    {
      title: 'Código',
      text: 'Crio e refatoro componentes por diversão. O acervo virou o projeto UI Components.',
      link: { label: 'Showcase', url: '/ui-components/' },
    },
    {
      title: 'Jogos',
      text: 'Battlefield e outros jogos de tiro no competitivo, God of War e Red Dead Redemption pela história, Stardew Valley para descansar. Em co\u2011op com amigos, melhor ainda.',
    },
    {
      title: 'Filmes',
      text: 'Matrix, Star Wars e O Senhor dos Anéis. O efeito no topo desta página veio de Matrix.',
    },
    {
      title: 'Fim de semana',
      text: 'Churrasco com amigos e família, no comando da churrasqueira ou ajudando quem está nela. De vez em quando, uma noite olhando as estrelas.',
    },
  ],
  socials: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/felipezanetti/', icon: 'mdi:linkedin', primary: true },
    { label: 'GitHub', url: 'https://github.com/fajzanetti', icon: 'mdi:github', primary: true },
    { label: 'Currículo Lattes', url: 'https://lattes.cnpq.br/4894985172707744', icon: 'mdi:school-outline' },
    { label: 'Instagram', url: 'https://www.instagram.com/fajzanetti/', icon: 'mdi:instagram' },
  ],
  cvPath: '/cv.pdf',
};

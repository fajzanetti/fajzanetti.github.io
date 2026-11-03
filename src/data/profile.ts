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

  interests:
    'Meus passatempos são: codar coisas aleatórias por diversão, jogar videogame, ir ao cinema, brincar com minhas cachorrinhas, fazer aquele churrasco com amigos e família e de vez em quando ficar observando as estrelas.',
  socials: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/felipezanetti/', icon: 'mdi:linkedin', primary: true },
    { label: 'GitHub', url: 'https://github.com/fajzanetti', icon: 'mdi:github', primary: true },
    { label: 'Currículo Lattes', url: 'https://lattes.cnpq.br/4894985172707744', icon: 'mdi:school-outline' },
    { label: 'Instagram', url: 'https://www.instagram.com/fajzanetti/', icon: 'mdi:instagram' },
  ],
  cvPath: '/cv.pdf',
};

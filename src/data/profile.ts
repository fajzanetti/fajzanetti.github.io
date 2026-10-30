import type { Profile } from './types';

export const profile: Profile = {
  firstName: 'Felipe',
  lastName: 'Zanetti',
  title: 'Desenvolvedor Mobile e Front-end',
  city: 'Monte Carmelo/MG',
  email: 'felipeajzanetti@gmail.com',
  summary: [
    'Graduando em Sistemas de Informação na Universidade Federal de Uberlândia, Campus Monte Carmelo.',
    'Sou um aficionado por tecnologias de desenvolvimento web e mobile.',
  ],
  interests:
    'Meus passatempos são: codar coisas aleatórias por diversão, jogar videogame, ir ao cinema, brincar com minhas cachorrinhas, fazer aquele churrasco com amigos e família e de vez em quando ficar observando as estrelas.',
  socials: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/felipezanetti/', icon: 'mdi:linkedin', primary: true },
    { label: 'GitHub', url: 'https://github.com/fajzanetti', icon: 'mdi:github', primary: true },
    { label: 'Facebook', url: 'https://www.facebook.com/fajzanetti', icon: 'mdi:facebook' },
    { label: 'Instagram', url: 'https://www.instagram.com/fajzanetti/', icon: 'mdi:instagram' },
  ],
  cvPath: '/cv.pdf',
};

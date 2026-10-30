import type { Profile } from './types';

export const profile: Profile = {
  firstName: 'Felipe',
  lastName: 'Zanetti',
  title: 'Desenvolvedor Front-end e Mobile',
  city: 'Monte Carmelo/MG',
  email: 'felipeajzanetti@gmail.com',
  summary: [
    'Bacharel em Sistemas de Informação pela Universidade Federal de Uberlândia.',
    'Experiência em desenvolvimento front-end e mobile com JavaScript, TypeScript, ReactJS, React Native e Vue.js.',
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

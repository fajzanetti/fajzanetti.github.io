import type { Experience } from './types';

export const experience: Experience[] = [
  {
    role: 'Desenvolvedor Front-end',
    company: 'Codificar Sistemas Tecnológicos',
    location: 'Belo Horizonte/MG',
    description: 'Desenvolvimento front-end e mobile em produtos da empresa com ReactJS, React Native e Vue.js.',
    periods: [{ start: '2021', end: 'Atual' }],
  },
  {
    role: 'Estagiário em Desenvolvimento Front-end',
    company: 'Codificar Sistemas Tecnológicos',
    location: 'Belo Horizonte/MG',
    description: 'Estágio em desenvolvimento front-end e mobile, 30 horas semanais.',
    periods: [{ start: '2020', end: '2021' }],
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

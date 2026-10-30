import type { Experience } from './types';

export const experience: Experience[] = [
  {
    role: 'Desenvolvedor Mobile e Front-end Jr',
    company: 'Codificar Sistemas Tecnológicos',
    location: 'Belo Horizonte/MG',
    description: 'Desenvolvedor Mobile e Front-end na empresa Codificar Sistemas Tecnológicos.',
    periods: [{ start: 'Ago 2021', end: 'Atual' }],
  },
  {
    role: 'Estágio em Desenvolvimento Mobile',
    company: 'Codificar Sistemas Tecnológicos',
    location: 'Belo Horizonte/MG',
    description: 'Estágio de Desenvolvedor Mobile na empresa Codificar Sistemas Tecnológicos.',
    periods: [{ start: 'Ago 2020', end: 'Ago 2021' }],
  },
  {
    role: 'Monitor',
    company: 'Universidade Federal de Uberlândia',
    location: 'Campus Monte Carmelo',
    description:
      'Monitoria da disciplina Introdução à Programação de Computadores do curso de Sistemas de Informação.',
    periods: [{ start: '2016/2', end: '2017/1' }],
  },
  {
    role: 'Jovens Programadores',
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

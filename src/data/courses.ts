import type { Course } from './types';

export const courses: Course[] = [
  {
    institution: 'Rocketseat',
    title: 'Bootcamp GoStack 2020',
    description: 'Ecossistema das tecnologias Node.js, ReactJS e React Native.',
    period: { start: '2020', end: '2021' },
    hours: 160,
  },
  {
    institution: 'Digital Innovation One (DIO)',
    title: '22 cursos de curta duração',
    description:
      'ReactJS, React com TypeScript, Redux, JavaScript ES6, async/await e Promises, TDD, Git e GitHub, HTML5 e CSS3, Domain-Driven Design e Arquitetura Hexagonal.',
    period: { start: '2020' },
    hours: 69,
  },
  {
    institution: 'Universidade Federal de Uberlândia (UFU)',
    title: 'Introdução ao Python',
    period: { start: '2018' },
    hours: 6,
  },
  {
    institution: 'SENAI — Departamento Regional do Espírito Santo',
    title: 'Lógica de Programação',
    period: { start: '2017' },
    hours: 14,
  },
  {
    institution: 'Universidade Federal de Itajubá (UNIFEI)',
    title: 'Escola de Inverno',
    period: { start: '2016' },
    hours: 40,
  },
  {
    institution: 'Escola Estadual Gregoriano Canedo (EEGC)',
    title: 'Programação para Web',
    description: 'Curso técnico de informática e programação web, integrado ao ensino médio.',
    period: { start: '2013', end: '2015' },
    hours: 1000,
  },
];

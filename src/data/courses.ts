import type { Course } from './types';

export const courses: Course[] = [
  {
    institution: 'Rocketseat',
    title: 'GoStack 13',
    description: 'Ecossistema das tecnologias Node.js, ReactJS e React Native.',
    period: { start: '2020' },
    hours: 160,
  },
  {
    institution: 'Universidade Federal de Uberlândia (UFU)',
    title: 'Introdução ao Python',
    period: { start: '2018' },
    hours: 6,
  },
  {
    institution: 'Universidade Federal de Itajubá (UNIFEI)',
    title: 'Escola de Inverno',
    period: { start: '2016' },
    hours: 40,
  },
  {
    institution: 'Centro Universitário Mário Palmério (UNIFUCAMP)',
    title: 'Sistemas para Internet',
    description: 'Graduação interrompida em 2016.',
    period: { start: '2015', end: '2016' },
  },
  {
    institution: 'Escola Estadual Gregoriano Canedo (EEGC)',
    title: 'Programação para Web',
    description: 'Curso técnico de informática e programação web.',
    period: { start: '2013', end: '2015' },
    hours: 1000,
  },
];

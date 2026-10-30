import type { Education } from './types';

export const education: Education[] = [
  {
    institution: 'Universidade Federal de Uberlândia (UFU)',
    degree: 'Bacharelado em Sistemas de Informação',
    period: { start: '2016', end: '2023' },
    note: 'TCC: Redesign da Interface do Sistema DebugandoED e Investigação das Percepções de Estudantes e Profissionais sobre a Proposta. Orientador: Thiago Pirola Ribeiro.',
    link: {
      label: 'Ler o TCC no Repositório da UFU',
      url: 'https://repositorio.ufu.br/entities/publication/8f7fd18b-84d5-4cc3-ad9e-8da6ba7786f4',
    },
  },
  {
    institution: 'Fundação Carmelitana Mário Palmério (FUCAMP)',
    degree: 'Sistemas para Internet · graduação interrompida em 2016',
    period: { start: '2015', end: '2016' },
  },
];

import type { Project } from './types';
import sonorifyLogo from '../assets/projects/sonorify-logo.svg';
import sonorifyEstudio from '../assets/projects/sonorify-estudio.png';
import uaifmApp from '../assets/projects/uaifm-app.png';
import uaifmSite from '../assets/projects/uaifm-site.png';

export const projectsIntro =
  'Três produtos para a mesma rádio comunitária, a UAI FM de Monte Carmelo: o app em 2020, o site em 2021 e o playout do estúdio em 2026.';

export const featuredProject: Project = {
  name: 'Sonorify',
  tagline: 'Playout de rádio para o estúdio. Roda no desktop, sem servidor nem internet.',
  description: [
    'Motor de áudio em Rust com mixer próprio, buffer em anel e decks em threads separadas.',
    'Grade por blocos, fila ao vivo, cartwall, sinal de hora e retransmissão agendada.',
    'Streaming MP3 para Icecast, gravador de censura, detector de silêncio e RDS.',
    'Relatórios ECAD em PDF e licenciamento offline com assinatura Ed25519.',
  ],
  period: { start: '2026', end: 'Atual' },
  stack: ['Rust', 'Tauri 2', 'React 19', 'TypeScript', 'SQLite', 'cpal', 'symphonia', 'Vite', 'Vitest', 'GitHub Actions'],
  links: [],
  image: sonorifyEstudio,
  imageAlt: 'Tela Estúdio do Sonorify com blocos comercial e musical, medidores PGM, biblioteca e players manuais',
  logo: sonorifyLogo,
  note: 'Código privado. Em uso no estúdio da UAI FM.',
};

export const projects: Project[] = [
  {
    name: 'UAI FM para Android',
    tagline: 'App oficial da rádio: ao vivo, programação e contato com o estúdio.',
    description: [
      'Player em segundo plano, grade de programas com "no ar" e "a seguir", timer para dormir e pedido de música pelo WhatsApp.',
    ],
    period: { start: '2020', end: 'Atual' },
    stack: ['React Native', 'TypeScript', 'styled-components'],
    links: [{ label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.uaifmmobile' }],
    image: uaifmApp,
    imageAlt: 'Tela inicial do app UAI FM em um celular',
  },
  {
    name: 'Site da UAI FM',
    tagline: 'Site e PWA da rádio com player ao vivo e programação.',
    description: ['Instalável como app, com programação em tempo real, pedido de música e links para as redes da rádio.'],
    period: { start: '2021', end: 'Atual' },
    stack: ['React 19', 'TypeScript', 'Vite', 'React Router', 'styled-components', 'PWA'],
    links: [{ label: 'uaifm.com.br', url: 'https://uaifm.com.br/' }],
    image: uaifmSite,
    imageAlt: 'Página inicial do site da UAI FM',
  },
  {
    name: 'DebugandoED: redesign da interface',
    tagline: 'Trabalho de conclusão de curso em Sistemas de Informação, UFU.',
    description: [
      'Redesign da interface de um sistema de ensino de estruturas de dados e pesquisa com estudantes e profissionais sobre a proposta.',
    ],
    period: { start: '2023' },
    stack: ['Pesquisa com usuários', 'Heurísticas de usabilidade', 'Prototipação'],
    links: [
      { label: 'Repositório UFU', url: 'https://repositorio.ufu.br/entities/publication/8f7fd18b-84d5-4cc3-ad9e-8da6ba7786f4' },
      { label: 'GitHub', url: 'https://github.com/fajzanetti/TCC-2023-Debugando-ED' },
    ],
  },
];

import type { ImageMetadata } from 'astro';

export interface Period {
  start: string;
  end?: string;
}

export interface Experience {
  role: string;
  company: string;
  location?: string;
  description: string | string[];
  periods: Period[];
}

export interface Link {
  label: string;
  url: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: Period;
  note?: string;
  link?: Link;
}

export interface Course {
  institution: string;
  title: string;
  period: Period;
  hours?: number;
  description?: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}

export interface Social {
  label: string;
  url: string;
  icon: string;
  /** aparece também na seção Contato */
  primary?: boolean;
}

export interface Profile {
  firstName: string;
  lastName: string;
  title: string;
  city: string;
  email: string;
  summary: string[];
  interests: string;
  socials: Social[];
  cvPath: string;
}

export interface Project {
  name: string;
  tagline: string;
  description: string[];
  period: Period;
  stack: string[];
  links: Link[];
  image?: ImageMetadata;
  imageAlt?: string;
  /** aparece no lugar dos links quando o código é fechado */
  note?: string;
}

export interface NavItem {
  id: string;
  label: string;
}

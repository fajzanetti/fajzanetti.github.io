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

export interface Education {
  institution: string;
  degree: string;
  period: Period;
  note?: string;
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

export interface NavItem {
  id: string;
  label: string;
}

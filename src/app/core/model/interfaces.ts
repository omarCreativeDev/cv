import { IconDefinition } from '@fortawesome/fontawesome-common-types';

export interface ILinkDetails {
  href: string;
  icon: IconDefinition;
  label: string;
}

export interface ISkill {
  category: string;
  list: ISkillList[];
}

export interface ISkillList {
  name: string;
  isCore: boolean;
}

export interface IExperience {
  title: string;
  dates: IExperienceDates;
  renewals?: number;
  description: string;
  achievements?: string[];
  skillsUsed?: string[];
}

export interface IExperienceDates {
  from: string;
  to: string;
}

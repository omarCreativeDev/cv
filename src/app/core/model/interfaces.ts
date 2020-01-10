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

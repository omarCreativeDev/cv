export interface ISkill {
  category: string;
  list: ISkillList[];
}

export interface ISkillList {
  name: string;
  isCore: boolean;
}

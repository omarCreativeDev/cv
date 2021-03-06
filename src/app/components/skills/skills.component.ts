import { Component } from '@angular/core';
import { ISkill } from '../../core/model/interfaces';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  private uiStack: ISkill = {
    category: 'UI stack',
    list: [
      {
        name: 'HTML5',
        isCore: false,
      },
      {
        name: 'CSS3',
        isCore: true,
      },
      {
        name: 'CSS Grid',
        isCore: true,
      },
      {
        name: 'Responsive design',
        isCore: false,
      },
      {
        name: 'SASS / LESS',
        isCore: true,
      },
      {
        name: 'Flexbox',
        isCore: false,
      },
      {
        name: 'BEM',
        isCore: false,
      },
    ],
  };

  private uiLibraries: ISkill = {
    category: 'UI libraries',
    list: [
      {
        name: 'Angular material',
        isCore: true,
      },
      {
        name: 'GOV.UK design system (GDS)',
        isCore: true,
      },
      {
        name: 'NHS digital service manual',
        isCore: true,
      },
      {
        name: 'Clarity Design System',
        isCore: false,
      },
      {
        name: 'Bootstrap',
        isCore: false,
      },
    ],
  };

  private javascriptStack: ISkill = {
    category: 'Javascript stack',
    list: [
      {
        name: 'Javascript',
        isCore: true,
      },
      {
        name: 'ES6',
        isCore: true,
      },
      {
        name: 'Typescript',
        isCore: true,
      },
      {
        name: 'RxJS',
        isCore: true,
      },
      {
        name: 'Angular',
        isCore: true,
      },
      {
        name: 'React',
        isCore: false,
      },
      {
        name: 'Webpack',
        isCore: false,
      },
      {
        name: 'Node',
        isCore: false,
      },
      {
        name: 'Nest Js',
        isCore: false,
      },
      {
        name: 'Express',
        isCore: false,
      },
      {
        name: 'NPM / Yarn',
        isCore: false,
      },
      {
        name: 'Moment',
        isCore: false,
      },
      {
        name: 'Lo dash',
        isCore: false,
      },
    ],
  };

  private unitTesting: ISkill = {
    category: 'Unit testing',
    list: [
      {
        name: 'TDD',
        isCore: true,
      },
      {
        name: 'Jasmine',
        isCore: true,
      },
      {
        name: 'Karma',
        isCore: false,
      },
      {
        name: 'Jest',
        isCore: true,
      },
      {
        name: 'Mocha',
        isCore: false,
      },
      {
        name: 'Chai',
        isCore: false,
      },
    ],
  };

  private e2eTesting: ISkill = {
    category: 'E2E testing',
    list: [
      {
        name: 'Cypress',
        isCore: true,
      },
      {
        name: 'Protractor',
        isCore: true,
      },
      {
        name: 'Gherkin',
        isCore: false,
      },
      {
        name: 'Selenium',
        isCore: false,
      },
      {
        name: 'Webdriver IO',
        isCore: false,
      },
    ],
  };

  private dataVisualisation: ISkill = {
    category: 'Data visualisation',
    list: [
      {
        name: 'Highcharts',
        isCore: false,
      },
      {
        name: 'Ng2 charts',
        isCore: false,
      },
    ],
  };

  private rest: ISkill = {
    category: 'REST',
    list: [
      {
        name: 'RESTful API',
        isCore: true,
      },
      {
        name: 'Swagger',
        isCore: false,
      },
      {
        name: 'Postman',
        isCore: false,
      },
      {
        name: 'Mocky',
        isCore: false,
      },
    ],
  };

  private design: ISkill = {
    category: 'Design',
    list: [
      {
        name: 'Figma',
        isCore: true,
      },
      {
        name: 'Sketch',
        isCore: false,
      },
      {
        name: 'Invision',
        isCore: false,
      },
      {
        name: 'Photoshop',
        isCore: false,
      },
    ],
  };

  private stateManagement: ISkill = {
    category: 'State management',
    list: [
      {
        name: 'NGXS',
        isCore: true,
      },
      {
        name: 'NGRX',
        isCore: false,
      },
    ],
  };

  private codeReviews: ISkill = {
    category: 'Code reviews',
    list: [
      {
        name: 'Pull requests',
        isCore: true,
      },
      {
        name: 'Pair programming',
        isCore: false,
      },
      {
        name: 'Crucible',
        isCore: false,
      },
    ],
  };

  private devops: ISkill = {
    category: 'Devops',
    list: [
      {
        name: 'Amazon web services',
        isCore: false,
      },
      {
        name: 'Docker',
        isCore: false,
      },
      {
        name: 'Jenkins',
        isCore: false,
      },
      {
        name: 'Travis',
        isCore: false,
      },
    ],
  };

  public allSkills: ISkill[][] = [
    [this.uiStack, this.uiLibraries],
    [this.javascriptStack],
    [this.unitTesting, this.e2eTesting],
    [this.stateManagement, this.codeReviews, this.devops],
    [this.dataVisualisation, this.rest, this.design],
  ];

  public otherSkills: ISkill = {
    category: 'Other Skills',
    list: [
      {
        name: 'Git',
        isCore: true,
      },
      {
        name: 'Git flow',
        isCore: true,
      },
      {
        name: 'Prettier',
        isCore: false,
      },
      {
        name: 'Husky',
        isCore: false,
      },
      {
        name: 'AWS Cognito',
        isCore: false,
      },
      {
        name: 'Clarity UI',
        isCore: false,
      },
      {
        name: 'MySQL',
        isCore: false,
      },
      {
        name: 'Zeplin',
        isCore: false,
      },
      {
        name: 'Grunt',
        isCore: false,
      },

      {
        name: 'Gulp',
        isCore: false,
      },
      {
        name: 'Electron',
        isCore: false,
      },
      {
        name: 'Font awesome',
        isCore: false,
      },
      {
        name: 'Icomoon',
        isCore: false,
      },
      {
        name: 'Masonry',
        isCore: false,
      },
    ],
  };
}

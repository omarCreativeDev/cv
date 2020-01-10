import { Component } from '@angular/core';
import { ISkill } from '../../core/model/interfaces';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  public uiStack: ISkill = {
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

  public uiLibraries: ISkill = {
    category: 'UI libraries',
    list: [
      {
        name: 'Angular material',
        isCore: true,
      },
      {
        name: 'Bootstrap',
        isCore: false,
      },
      {
        name: 'GOV.UK design system (GDS)',
        isCore: true,
      },
      {
        name: 'Clarity UI',
        isCore: false,
      },
    ],
  };

  public javascriptStack: ISkill = {
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
        name: 'RxJs',
        isCore: true,
      },
      {
        name: 'Angular',
        isCore: true,
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
      {
        name: 'React',
        isCore: false,
      },
    ],
  };

  public unitTesting: ISkill = {
    category: 'Unit testing',
    list: [
      {
        name: 'Jasmine',
        isCore: true,
      },
      {
        name: 'Karma',
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

  public e2eTesting: ISkill = {
    category: 'E2E testing',
    list: [
      {
        name: 'Protractor',
        isCore: true,
      },
      {
        name: 'Cypress',
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

  public dataVisualisation: ISkill = {
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

  public rest: ISkill = {
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

  public design: ISkill = {
    category: 'Design',
    list: [
      {
        name: 'Photoshop',
        isCore: false,
      },
      {
        name: 'Sketch',
        isCore: false,
      },
      {
        name: 'Invision',
        isCore: false,
      },
    ],
  };

  public stateManagement: ISkill = {
    category: 'State management',
    list: [
      {
        name: 'NGRX',
        isCore: false,
      },
      {
        name: 'NGXS',
        isCore: false,
      },
    ],
  };

  public codeReviews: ISkill = {
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

  public devops: ISkill = {
    category: 'Devops',
    list: [
      {
        name: 'Travis',
        isCore: false,
      },
      {
        name: 'Jenkins',
        isCore: false,
      },
      {
        name: 'Amazon web services',
        isCore: false,
      },
      {
        name: 'Docker',
        isCore: false,
      },
    ],
  };

  public allSkills: ISkill[][] = [
    [this.uiStack, this.uiLibraries],
    [this.javascriptStack],
    [this.unitTesting, this.e2eTesting],
    [this.dataVisualisation, this.rest, this.design],
    [this.stateManagement, this.codeReviews, this.devops],
  ];
}

import { Component } from '@angular/core';
import { IExperience } from '@core/model/interfaces';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  public faCalendarAlt: IconDefinition = faCalendarAlt;
  public faLinkedIn: IconDefinition = faLinkedinIn;
  public experienceHistory: IExperience[] = [
    {
      title: 'Greensill',
      dates: { from: 'September 2020', to: 'February 2021' },
      description:
        'Hired as a senior front end developer to join a cross-functional agile team for Greensill, ' +
        'a market-leading provider of working capital finance. Enhanced and scaled project Verdi ' +
        'by developing new features using angular 11.',
      achievements: [
        'Maintained 80% code coverage of unit tests using Jest.',
        'Developed end to end browser automation tests with Cypress using a BDD approach.',
        'Involved in common components library project leveraging storybook, ngx data table.',
      ],
      skillsUsed: [
        'Angular',
        'Typescript',
        'Javascript',
        'RxJS',
        'Test Driven Development',
        'Jest',
        'Cypress',
        'HTML5',
        'SCSS',
        'CSS3',
        'BEM',
        'CSS Grid',
        'Responsive Design',
        'Angular Material',
        'Git',
        'Node',
        'Storybook',
        'NGX data table',
      ],
    },
    {
      title: 'HEE (Health Education England)',
      dates: { from: 'February 2020', to: 'September 2020' },
      renewals: 2,
      description:
        'Hired to redevelop a core part of the Trainee Information System (TIS) for HEE using a test driven development approach. ' +
        'A greenfield single page angular 10 application designed to manage trainee doctors, concerns and notifications.',
      achievements: [
        'Implemented state management using NGXS alongside Redux dev tools.',
        'Developed e2e tests using Cypress to automate ui testing.',
      ],
      skillsUsed: [
        'Angular',
        'Typescript',
        'Javascript',
        'RxJS',
        'NGXS',
        'Test Driven Development',
        'Jasmine',
        'Karma',
        'Cypress',
        'HTML5',
        'SCSS',
        'CSS3',
        'BEM',
        'CSS Grid',
        'Responsive Design',
        'Angular Material',
        'Git',
        'AWS',
        'Terraform',
        'Mocky',
      ],
    },
    {
      title: 'Heineken',
      dates: { from: 'December 2019', to: 'February 2020' },
      description:
        'Hired as the senior front end developer in order to drive the front end development for project Refresh. ' +
        'A greenfield single page angular 8 application for Heineken with the purpose to completely modernize an ' +
        'existing legacy code base.',
      achievements: [
        'Mentoring other developers with regards to front end development including angular and e2e testing.',
        'Assisted QA automation on jira stories by writing e2e tests using protractor, gherkin and chai.',
        'Collaborating with external design agency in order to ensure designs are feasible for development.',
      ],
      skillsUsed: [
        'Angular',
        'Typescript',
        'Javascript',
        'RxJS',
        'Test Driven Development',
        'Jasmine',
        'Karma',
        'HTML5',
        'SCSS',
        'CSS3',
        'BEM',
        'CSS Grid',
        'Responsive Design',
        'Git',
      ],
    },
    {
      title: 'RSSB (Rail safety & standards board)',
      dates: { from: 'September 2019', to: 'November 2019' },
      renewals: 1,
      description: 'Hired to work on a technical refactor project for the main RSSB website.',
      achievements: [
        'Complete rewrite of existing HTML markup and css using modern HTML5, SASS and BEM methodology.',
        'Complete rewrite of existing javascript via latest modern ES6 coding standards',
      ],
      skillsUsed: ['Javascript', 'ES6', 'HTML5', 'SCSS', 'CSS3', 'BEM', 'CSS Grid', 'Responsive Design', 'Git'],
    },
    {
      title: 'Sopra Steria',
      dates: { from: 'April 2019 ', to: 'September 2019' },
      renewals: 2,
      description:
        'Developed a single page application for Skills for care, an adult social care organisation. An angular 8 ' +
        'project built with cutting edge modern tech in order to facilitate workforce development. ',
      achievements: [
        'Gained development experience with GDS [GOV.UK design system]',
        'Adhered to Web Content Accessibility Guidelines (WCAG 2.1)',
      ],
      skillsUsed: [
        'Angular',
        'Typescript',
        'Javascript',
        'RxJS',
        'Test Driven Development',
        'Jasmine',
        'Karma',
        'HTML5',
        'GDS [GOV.UK design system]',
        'SCSS',
        'CSS3',
        'BEM',
        'CSS Grid',
        'Responsive Design',
        'Git',
      ],
    },
    {
      title: 'Virtusa',
      dates: { from: 'February 2019 ', to: 'March 2019' },
      description:
        'Worked on APIX, an angular 6 application designed for collaboration between financial Institutions and FinTechs.',
      achievements: [
        'Developed new features and addressed high priority bug fixes under tight deadlines in order to hit release target',
      ],
      skillsUsed: ['Angular', 'Typescript', 'Javascript', 'RxJS', 'HTML5', 'SCSS', 'CSS3', 'Responsive Design', 'Git'],
    },
    {
      title: 'Runpath',
      dates: { from: 'September 2018 ', to: 'January 2019' },
      renewals: 1,
      description:
        'Developed a mortgage underwriting tool for Experian with a TDD approach. An angular 6 single page application developed to ' +
        'manage and list mortgage applications, view income and expenditure transactions via open banking and data ' +
        'visualisation. ',
      achievements: [
        'Responsible for client-side code delivery as well as smooth integration with BE restful API`s',
        'Utilised ng charts library in order to present data visualisation on the ui',
      ],
      skillsUsed: [
        'Angular',
        'Typescript',
        'Javascript',
        'RxJS',
        'Test Driven Development',
        'Jasmine',
        'Karma',
        'HTML5',
        'SCSS',
        'CSS3',
        'BEM',
        'CSS Grid',
        'Responsive Design',
        'Angular Material',
        'Git',
        'Mocky',
      ],
    },
    {
      title: 'Foundry',
      dates: { from: 'May 2018 ', to: 'September 2018' },
      description:
        'Worked on Flix, a visual story development tool for feature film, TV production, games. Designed to promote ' +
        'fast-paced creative collaboration amongst directors, producers, story artists and editors.',
      achievements: [
        'Developed a greenfield desktop application with angular 4, typescript, electron and webpack.',
        'Unit testing components and services with a BDD approach.',
        'Gained development experience with electron and clarity ui.',
      ],
      skillsUsed: [
        'Angular',
        'Typescript',
        'Javascript',
        'RxJS',
        'Electron',
        'Test Driven Development',
        'Jasmine',
        'Karma',
        'HTML5',
        'SCSS',
        'CSS3',
        'BEM',
        'Clarity UI',
        'Responsive Design',
        'Git',
      ],
    },
  ];
}

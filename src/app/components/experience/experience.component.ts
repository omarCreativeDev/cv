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
  public faLinkedinIn: IconDefinition = faLinkedinIn;
  public experienceHistory: IExperience[] = [
    {
      title: 'HEE (Health Education England)',
      dates: { from: 'February 2020', to: 'May 2020' },
      description: '',
    },
    {
      title: 'Heineken',
      dates: { from: 'December 2019', to: 'February 2020' },
      description:
        'Hired as the senior front end developer in order to drive the front end development for project Refresh. ' +
        'A greenfield single page angular 8 application for Heineken with the purpose to completely modernize an ' +
        'existing legacy code base.',
      achievements: [
        'Mentoring other developers with regards to front end development including angular and e2e testing',
        'Assisted QA automation on jira stories by writing e2e tests using protractor, gherkin and chai',
        'Collaborating with external design agency in order to ensure designs are feasible for development',
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
    },
    {
      title: 'Virtusa',
      dates: { from: 'February 2019 ', to: 'March 2019' },
      description:
        'Worked on APIX, an angular 6 application designed for collaboration between financial Institutions and FinTechs.',
      achievements: [
        'Developed new features and addressed high priority bug fixes under tight deadlines in order to hit release target',
      ],
    },
    {
      title: 'Runpath',
      dates: { from: 'September 2018 ', to: 'January 2019' },
      renewals: 1,
      description:
        'Developed a mortgage underwriting tool for Experian. An angular 6 single page application developed to ' +
        'manage and list mortgage applications, view income and expenditure transactions via open banking and data ' +
        'visualisation. ',
      achievements: [
        'Responsible for client-side code delivery as well as smooth integration with BE restful API`s',
        'Utilised ng charts library in order to present data visualisation on the ui',
      ],
    },
    {
      title: 'Foundry',
      dates: { from: 'May 2018 ', to: 'September 2018' },
      description: 'Rejoined foundry for second time to work on flix project using angular. ',
    },
    {
      title: 'The Bio Agency',
      dates: { from: 'December 2017', to: 'May 2018' },
      renewals: 1,
      description:
        'Developed ecommerce single page application for Arrow, one of the biggest electronic component distributers. ' +
        'A b2b angular project developed to manage orders, quotes, bill of materials, notifications and forecasts. ' +
        '',
      achievements: [
        'Developed a greenfield single page application with angular 5, typescript, and webpack',
        'State management with ng store and rxJs dev tools',
        'Maintained 92% of code coverage with unit tests',
      ],
    },
    {
      title: 'Foundry',
      dates: { from: 'September 2017', to: 'December 2017' },
      description:
        'Worked on Flix, a visual story development tool for feature film, TV production, games. Designed to promote ' +
        'fast-paced creative collaboration amongst directors, producers, story artists and editors.',
      achievements: [
        'Developed a greenfield desktop application with angular 4, typescript, electron and webpack.',
        'Developed reusable components with a focus on performance for the best user experience.',
        'Unit testing components and services with a BDD approach.',
        'Gained development experience with electron and clarity ui.',
      ],
    },
    {
      title: 'Winton',
      dates: { from: 'June 2017', to: 'August 2017' },
      description:
        'Worked on Winton careers project. A greenfield angular project that allows external candidates to view and ' +
        'apply for current job opportunities.',
      achievements: [
        'Developed a greenfield single page app with angular 4, typescript and webpack.',
        'Developed re useable private npm packages in order to be consumed by a number of internal single page apps.',
      ],
    },
    {
      title: 'Addison Lee',
      dates: { from: 'March 2017', to: 'June 2017' },
      description:
        'Worked on the Global Booking System for Addison Lee. A greenfield angular 2 project that consolidates and ' +
        'unifies the booking experience for both b2b and b2c customers.',
    },
  ];
}

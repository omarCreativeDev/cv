import { Component } from '@angular/core';
import { IExperience } from '@core/model/interfaces';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  public faCalendarAlt: IconDefinition = faCalendarAlt;
  public experienceHistory: IExperience[] = [
    {
      title: 'The Bio Agency',
      dates: { from: 'December 2017', to: 'May 2018' },
      renewals: 1,
      description:
        'Developed ecommerce single page application for Arrow, one of the biggest electronic component distributers. ' +
        'A b2b angular project developed to manage orders, quotes, bill of materials, notifications and forecasts. ' +
        'Key achievements;',
      achievements: [
        'Developed a greenfield single page application with angular 5, typescript, and webpack',
        'State management with ng store and rxJs dev tools',
        'Maintained 92% of code coverage with unit tests',
      ],
    },
  ];
}

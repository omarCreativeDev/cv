import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faSkype } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-find-me-online',
  templateUrl: './find-me-online.component.html',
})
export class FindMeOnlineComponent {
  public faGlobe: IconDefinition = faGlobe;
  public faSkype: IconDefinition = faSkype;
  public faLinkedinIn: IconDefinition = faLinkedinIn;
  public linksList: any[] = [
    {
      href: 'https://www.linkedin.com/in/omarCreativeDev/',
      icon: this.faLinkedinIn,
      label: 'linkedin.com/in/omarCreativeDev',
    },
    {
      href: 'http://www.creativedevelopments.net',
      icon: this.faGlobe,
      label: 'creativedevelopments.net',
    },
    {
      href: 'skype:omar.creativedevelopments.net?call',
      icon: this.faSkype,
      label: 'omar.creativedevelopments.net',
    },
  ];
}

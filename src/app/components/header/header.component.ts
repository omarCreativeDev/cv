import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public faEnvelope: IconDefinition = faEnvelope;
  public faPhoneAlt: IconDefinition = faPhoneAlt;
  public faMapMarkerAlt: IconDefinition = faMapMarkerAlt;
  public linksList: any[] = [
    {
      href: 'tel:07932 566 488',
      icon: this.faPhoneAlt,
      label: '07932 566 488',
    },
    {
      href: 'mailto:omar.creative.dev@gmail.com?subject=Creative%20Developments',
      icon: this.faEnvelope,
      label: 'omar.creative.dev@gmail.com',
    },
    {
      href: 'https://tinyurl.com/tepxxtd',
      icon: this.faMapMarkerAlt,
      label: 'Barkingside, London',
    },
  ];
}

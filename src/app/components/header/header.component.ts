import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faEnvelope, faPhoneAlt, faGlobe, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public faEnvelope: IconDefinition = faEnvelope;
  public faPhoneAlt: IconDefinition = faPhoneAlt;
  public faGlobe: IconDefinition = faGlobe;
  public faMapMarkerAlt: IconDefinition = faMapMarkerAlt;
  public faLinkedinIn: IconDefinition = faLinkedinIn;
  public headerList: any[] = [
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
      href: 'https://www.linkedin.com/in/omarCreativeDev/',
      icon: this.faLinkedinIn,
      label: 'linkedin.com/in/omarCreativeDev',
    },
    {
      href: 'https://tinyurl.com/tepxxtd',
      icon: this.faMapMarkerAlt,
      label: 'Barkingside, London',
    },
    {
      href: 'http://www.creativedevelopments.net',
      icon: this.faGlobe,
      label: 'creativedevelopments.net',
    },
  ];
}

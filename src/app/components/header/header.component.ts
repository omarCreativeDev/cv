import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faEnvelope, faPhone, faGlobe, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public faEnvelope: IconDefinition = faEnvelope;
  public faPhone: IconDefinition = faPhone;
  public faGlobe: IconDefinition = faGlobe;
  public faMapMarkerAlt: IconDefinition = faMapMarkerAlt;
}

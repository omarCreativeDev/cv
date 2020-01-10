import { Component } from '@angular/core';
import { ILinkDetails } from '@core/model/interfaces';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faGithub, faBitbucket } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-code-samples',
  templateUrl: './code-samples.component.html',
})
export class CodeSamplesComponent {
  public faGithub: IconDefinition = faGithub;
  public faBitbucket: IconDefinition = faBitbucket;
  public linksList: ILinkDetails[] = [
    {
      href: 'https://github.com/omarCreativeDev',
      icon: this.faGithub,
      label: 'github.com/omarCreativeDev',
    },
    {
      href: 'https://bitbucket.org/omarCreativeDev',
      icon: this.faBitbucket,
      label: 'bitbucket.org/omarCreativeDev',
    },
  ];
}

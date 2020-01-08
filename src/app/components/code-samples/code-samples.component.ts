import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faGithub, faBitbucket } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-code-samples',
  templateUrl: './code-samples.component.html',
  styleUrls: ['./code-samples.component.scss'],
})
export class CodeSamplesComponent {
  public faGithub: IconDefinition = faGithub;
  public faBitbucket: IconDefinition = faBitbucket;
  public linksList: any[] = [
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

import { Component } from '@angular/core';

@Component({
  selector: 'site-about',
  templateUrl: 'site-about.component.html',
  styles: [`
    .has-small-text {
      font-size: .75rem;
    }
    .title {
      font-weight: 400;
      color: #ff3860;
    }
`]
})
export class SiteAboutComponent { }

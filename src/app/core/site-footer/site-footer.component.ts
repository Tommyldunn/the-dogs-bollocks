import { Component } from '@angular/core';

@Component({
  selector: 'site-footer',
  templateUrl: 'site-footer.component.html',
  styles: [`
    footer {
      background-color: #333;
      padding: 1em;
      display: flex;
      justify-content: center;
      align-items: center;
    }`]
})
export class SiteFooterComponent { }

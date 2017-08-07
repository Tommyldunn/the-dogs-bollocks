import { Component, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Event } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'site-root',
  templateUrl: './site-root.component.html'
})
export class SiteRootComponent {
  public menuOpen: boolean;

  private classes: Array<string> = [];

  removeBodyClasses() {
    this.classes.map((key: string) => {
      if (key.length > 0) {
        document.body.classList.remove(key);
      }
    });
  }

  addBodyClasses(path) {
    this.classes = path.replace(/\/[0-9]+/g, '').split('?')[0].split('/');
    this.classes.map((key: string) => {
      if (key.length > 0) {
        document.body.classList.add(key);
      }
    });
  }

  constructor(private router: Router) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.removeBodyClasses();
        this.addBodyClasses(event.url.substring(1));
      }
    });
  }
  navToggleHandler(isOpen: boolean) {
    this.menuOpen = isOpen;
  }
}

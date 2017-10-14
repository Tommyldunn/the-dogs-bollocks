import { Component, ElementRef } from '@angular/core';
import {
  Router, ActivatedRoute, NavigationEnd, NavigationCancel,
  NavigationError, NavigationStart, RoutesRecognized, Event
} from '@angular/router';
import { Location } from '@angular/common';
import { SpinnerService } from './core/site-spinner/site-spinner.service';

@Component({
  selector: 'site-root',
  templateUrl: './site.component.html'
})
export class SiteComponent {
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

  constructor(private router: Router,
    private spinnerService: SpinnerService) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.removeBodyClasses();
        this.addBodyClasses(event.url.substring(1));
        if (event.url === '/') {
          document.body.classList.add('index');
        } else {
          document.body.classList.remove('index');
        }
      }
    });
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError) {
        this.spinnerService.hide();
      } else if (event instanceof NavigationStart) {
        this.spinnerService.show();
      }
    });

  }

  navToggleHandler(isOpen: boolean) {
    this.menuOpen = isOpen;
  }
}

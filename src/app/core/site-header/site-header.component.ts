import { Component, EventEmitter, ElementRef, HostListener, Inject } from '@angular/core';
import { Router, RouterModule, NavigationStart, NavigationEnd, Event } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'site-header',
  templateUrl: 'site-header.component.html'
})
export class SiteHeaderComponent {

  public navIsFixed: boolean;
  public isHome: boolean;
  constructor( @Inject(DOCUMENT) private document: any,
    private router: Router,
    private element: ElementRef) {

    router.events.subscribe((event: Event) => {
      document.body.classList.remove('nav--is-open');
    });
  }

  toggleNav() {
    document.body.classList.toggle('nav--is-open');

    if (document.body.classList.contains('index') ||
      document.body.classList.contains('home') ||
      document.body.classList.contains('about') ||
      document.body.classList.contains('upcoming-shows')) {

      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number = this.document.body.scrollTop;
    if (number > 100) {
      this.navIsFixed = true;
    } else if (this.navIsFixed && number < 10) {
      this.navIsFixed = false;
    }
  }
}

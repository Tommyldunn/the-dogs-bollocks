import { Component, OnChanges, Output, EventEmitter, ElementRef } from '@angular/core';
import { Router, RouterModule, NavigationStart, NavigationEnd, Event } from '@angular/router';

@Component({
  selector: 'site-sidebar',
  templateUrl: 'site-sidebar.component.html'
})

export class SiteSidebarComponent implements OnChanges {
  constructor(public router: Router) {
  }

  ngOnChanges() {
    // if (document.body.classList.contains('home')) {
    //   document.body.classList.add('dark');
    // } else {
    //   document.body.classList.remove('dark');
    // }
  }
}

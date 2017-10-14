import { Component, Output, EventEmitter, ElementRef } from '@angular/core';
import { Router, RouterModule, NavigationStart, NavigationEnd, Event } from '@angular/router';

@Component({
  selector: 'site-sidebar',
  templateUrl: 'site-sidebar.component.html'
})

export class SiteSidebarComponent {
  constructor(public router: Router) { }
}

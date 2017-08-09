import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, Event } from '@angular/router';
import { Subject } from 'rxjs/Subject';

export interface SpinnerState {
  show: boolean;
}

@Injectable()
export class SpinnerService {
  public spinnerSubject = new Subject<SpinnerState>();
  public spinnerState: any = this.spinnerSubject.asObservable();

  constructor( @Optional() @SkipSelf() prior: SpinnerService,
    private router: Router) {
    if (prior) { return prior; }


    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError) {
        this.hide();
      } else if (event instanceof NavigationStart) {
        this.show();
      }
    });
  }

  show() {
    this.spinnerSubject.next(<SpinnerState>{ show: true });
  }

  hide() {
    this.spinnerSubject.next(<SpinnerState>{ show: false });
  }
}

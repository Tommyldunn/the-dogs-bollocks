import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { SpinnerState, SpinnerService } from './site-spinner.service';

@Component({
  selector: 'site-spinner',
  templateUrl: 'site-spinner.component.html'
})
export class SpinnerComponent implements OnInit {
  public visible = false;
  public spinnerStateChanged: Subscription;

  constructor(private spinnerService: SpinnerService) { }

  ngOnInit() {
    this.spinnerStateChanged = this.spinnerService.spinnerState
      .subscribe((state: SpinnerState) => {
        this.visible = state.show;
      });
  }
}

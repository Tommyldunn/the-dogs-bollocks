import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpinnerComponent } from './site-spinner.component';
import { SpinnerService } from './site-spinner.service';

@NgModule({
  imports: [CommonModule],
  exports: [SpinnerComponent],
  declarations: [SpinnerComponent],
  providers: [SpinnerService]
})
export class SpinnerModule {
  constructor( @Optional() @SkipSelf() parentModule: SpinnerModule) {
    // throwIfAlreadyLoaded(parentModule, 'SpinnerModule');
  }
}

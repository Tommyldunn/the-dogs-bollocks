import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteHomeRoutingModule } from './site-home-routing.module';

import { SiteHomeComponent } from './site-home.component';

@NgModule({
  imports: [
    CommonModule,
    SiteHomeRoutingModule
  ],
  declarations: [
    SiteHomeComponent
  ],
  exports: [
    SiteHomeComponent,
  ]
})
export class SiteHomeModule { }

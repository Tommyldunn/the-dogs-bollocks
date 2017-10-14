import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteAboutRoutingModule } from './site-about-routing.module';

import { SiteAboutComponent } from './site-about.component';

@NgModule({
  imports: [
    CommonModule,
    SiteAboutRoutingModule
  ],
  declarations: [
    SiteAboutComponent
  ],
  exports: [
    SiteAboutComponent,
  ]
})
export class SiteAboutModule { }

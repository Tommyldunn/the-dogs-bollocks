import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteMediaRoutingModule } from './site-media-routing.module';

import { SiteMediaComponent } from './site-media.component';

@NgModule({
  imports: [
    CommonModule,
    SiteMediaRoutingModule
  ],
  declarations: [
    SiteMediaComponent
  ],
  exports: [
    SiteMediaComponent,
  ]
})
export class SiteMediaModule { }

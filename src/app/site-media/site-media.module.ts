import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteMediaRoutingModule } from './site-media-routing.module';

import { MediaService } from '../_services/media.service';

import { SiteMediaComponent } from './site-media.component';

@NgModule({
  imports: [
    CommonModule,
    SiteMediaRoutingModule
  ],
  declarations: [
    SiteMediaComponent
  ],
  providers: [MediaService],
  exports: [
    SiteMediaComponent,
  ]
})
export class SiteMediaModule { }

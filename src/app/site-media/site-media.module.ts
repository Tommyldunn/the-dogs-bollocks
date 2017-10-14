import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteMediaRoutingModule } from './site-media-routing.module';

import { PictureService } from '../_services/picture.service';

import { SiteMediaComponent } from './site-media.component';

@NgModule({
  imports: [
    CommonModule,
    SiteMediaRoutingModule
  ],
  declarations: [
    SiteMediaComponent
  ],
  providers: [PictureService],
  exports: [
    SiteMediaComponent,
  ]
})
export class SiteMediaModule { }

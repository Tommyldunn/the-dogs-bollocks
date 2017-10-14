import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteShowsRoutingModule } from './site-shows-routing.module';

import { SiteShowsComponent } from './site-shows.component';

@NgModule({
  imports: [
    CommonModule,
    SiteShowsRoutingModule
  ],
  declarations: [
    SiteShowsComponent
  ],
  exports: [
    SiteShowsComponent,
  ]
})
export class SiteShowsModule { }

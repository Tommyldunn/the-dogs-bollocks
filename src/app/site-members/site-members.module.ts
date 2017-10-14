import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteMembersRoutingModule } from './site-members-routing.module';

import { SiteMembersComponent } from './site-members.component';

@NgModule({
  imports: [
    CommonModule,
    SiteMembersRoutingModule
  ],
  declarations: [
    SiteMembersComponent
  ],
  exports: [
    SiteMembersComponent,
  ]
})
export class SiteMembersModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SpinnerModule } from './site-spinner/site-spinner.module';

import { SiteHeaderComponent } from './site-header/site-header.component';
import { SiteSidebarComponent } from './site-sidebar/site-sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SpinnerModule
  ],
  declarations: [
    SiteHeaderComponent,
    SiteSidebarComponent
  ],
  exports: [
    SpinnerModule,
    SiteHeaderComponent,
    SiteSidebarComponent
  ]
})
export class CoreModule { }

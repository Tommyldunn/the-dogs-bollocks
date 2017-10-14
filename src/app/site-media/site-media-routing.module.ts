import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SiteMediaComponent } from './site-media.component';

const routes: Routes = [
  { path: '', component: SiteMediaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteMediaRoutingModule { }

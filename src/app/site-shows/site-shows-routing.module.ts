import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SiteShowsComponent } from './site-shows.component';

const routes: Routes = [
  { path: '', component: SiteShowsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteShowsRoutingModule { }

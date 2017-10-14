import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SiteAboutComponent } from './site-about.component';

const routes: Routes = [
  { path: '', component: SiteAboutComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteAboutRoutingModule { }

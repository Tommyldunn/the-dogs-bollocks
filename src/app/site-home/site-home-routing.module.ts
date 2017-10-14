import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SiteHomeComponent } from './site-home.component';

const routes: Routes = [
  { path: '', component: SiteHomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteHomeRoutingModule { }

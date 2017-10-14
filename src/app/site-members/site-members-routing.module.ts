import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SiteMembersComponent } from './site-members.component';

const routes: Routes = [
  { path: '', component: SiteMembersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteMembersRoutingModule { }

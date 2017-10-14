import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SiteComponent } from './site.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { loadChildren: 'app/site-home/site-home.module#SiteHomeModule', path: 'home' },
  { loadChildren: 'app/site-about/site-about.module#SiteAboutModule', path: 'about' },
  { loadChildren: 'app/site-shows/site-shows.module#SiteShowsModule', path: 'upcoming-shows' },
  { loadChildren: 'app/site-members/site-members.module#SiteMembersModule', path: 'bios' },
  { loadChildren: 'app/site-media/site-media.module#SiteMediaModule', path: 'media' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SiteRootComponent } from './site-root.component';
import { SiteShowsComponent } from './site-shows/site-shows.component';
import { SiteMembersComponent } from './site-members/site-members.component';
import { SiteMediaComponent } from './site-media/site-media.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { loadChildren: 'app/site-home/site-home.module#SiteHomeModule', path: 'home' },
  { loadChildren: 'app/site-about/site-about.module#SiteAboutModule', path: 'about' },
  { path: 'upcoming-shows', component: SiteShowsComponent },
  { path: 'bios', component: SiteMembersComponent },
  { path: 'media', component: SiteMediaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }

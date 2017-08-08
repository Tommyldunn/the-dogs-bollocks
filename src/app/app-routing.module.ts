import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SiteRootComponent } from './site-root.component';
import { SiteHomeComponent } from './site-home/site-home.component';
import { SiteAboutComponent } from './site-about/site-about.component';
import { UpcomingShowsComponent } from './upcoming-shows/upcoming-shows.component';
import { SiteMembersComponent } from './site-members/site-members.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: SiteHomeComponent },
  { path: 'about', component: SiteAboutComponent },
  { path: 'upcoming-shows', component: UpcomingShowsComponent },
  { path: 'bios', component: SiteMembersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

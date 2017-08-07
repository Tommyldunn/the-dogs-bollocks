import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SiteRootComponent } from './site-root.component';
import { SiteHomeComponent } from './site-home/site-home.component';
import { SiteAboutComponent } from './site-about/site-about.component';
import { UpcomingShowsComponent } from './upcoming-shows/upcoming-shows.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: SiteHomeComponent },
  { path: 'about', component: SiteAboutComponent },
  { path: 'upcoming-shows', component: UpcomingShowsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

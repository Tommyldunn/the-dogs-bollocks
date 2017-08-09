import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../api/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AgmCoreModule } from '@agm/core';

import { ShowService } from './_services/show.service';

import { SiteRootComponent } from './site-root.component';
import { SiteHomeComponent } from './site-home/site-home.component';
import { SiteAboutComponent } from './site-about/site-about.component';
import { SiteShowsComponent } from './site-shows/site-shows.component';
import { SiteMembersComponent } from './site-members/site-members.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CoreModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1000 }),
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyCJRuAzLyth5GEUNffcxi2DCFOjLzqJaUE' })
  ],
  declarations: [
    SiteRootComponent,
    SiteHomeComponent,
    SiteAboutComponent,
    SiteShowsComponent,
    SiteMembersComponent
  ],
  providers: [ShowService],
  bootstrap: [SiteRootComponent]
})
export class AppModule { }

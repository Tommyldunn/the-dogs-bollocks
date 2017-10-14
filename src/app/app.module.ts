import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../api/in-memory-data.service';

import { SiteRoutingModule } from './site-routing.module';
import { CoreModule } from './core/core.module';
import { SiteHomeModule } from './site-home/site-home.module';
import { ShowService } from './_services/show.service';
import { MemberService } from './_services/member.service';
import { PicService } from './_services/pic.service';

import { SiteRootComponent } from './site-root.component';
import { SiteAboutComponent } from './site-about/site-about.component';
import { SiteShowsComponent } from './site-shows/site-shows.component';
import { SiteMembersComponent } from './site-members/site-members.component';
import { SiteMediaComponent } from './site-media/site-media.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SiteRoutingModule,
    CoreModule,
    SiteHomeModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1000 })
  ],
  declarations: [
    SiteRootComponent,
    SiteAboutComponent,
    SiteShowsComponent,
    SiteMembersComponent,
    SiteMediaComponent
  ],
  providers: [ShowService, MemberService, PicService],
  bootstrap: [SiteRootComponent]
})
export class AppModule { }

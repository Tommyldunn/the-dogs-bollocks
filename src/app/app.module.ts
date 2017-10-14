import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../api/in-memory-data.service';

import { SiteRoutingModule } from './site-routing.module';
import { CoreModule } from './core/core.module';
import { SiteHomeModule } from './site-home/site-home.module';
import { SiteAboutModule } from './site-about/site-about.module';
import { SiteShowsModule } from './site-shows/site-shows.module';
import { SiteMembersModule } from './site-members/site-members.module';
import { SiteMediaModule } from './site-media/site-media.module';

import { ShowService } from './_services/show.service';
import { MemberService } from './_services/member.service';
import { PicService } from './_services/pic.service';

import { SiteRootComponent } from './site-root.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SiteRoutingModule,
    CoreModule,
    SiteHomeModule,
    SiteAboutModule,
    SiteShowsModule,
    SiteMembersModule,
    SiteMediaModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1000 })
  ],
  declarations: [
    SiteRootComponent
  ],
  providers: [ShowService, MemberService, PicService],
  bootstrap: [SiteRootComponent]
})
export class AppModule { }

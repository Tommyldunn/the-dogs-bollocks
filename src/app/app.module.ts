import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AgmCoreModule } from '@agm/core';

import { SiteRootComponent } from './site-root.component';
import { SiteHomeComponent } from './site-home/site-home.component';
import { SiteAboutComponent } from './site-about/site-about.component';
import { UpcomingShowsComponent } from './upcoming-shows/upcoming-shows.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CoreModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCJRuAzLyth5GEUNffcxi2DCFOjLzqJaUE'
    })
  ],
  declarations: [
    SiteRootComponent,
    SiteHomeComponent,
    SiteAboutComponent,
    UpcomingShowsComponent
  ],
  providers: [],
  bootstrap: [SiteRootComponent]
})
export class AppModule { }

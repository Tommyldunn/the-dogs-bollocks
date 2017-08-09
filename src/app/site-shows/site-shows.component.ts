import { Component, OnInit } from '@angular/core';

import { Show } from '../_models/show';
import { ShowService } from '../_services/show.service';


@Component({
  selector: 'site-shows',
  templateUrl: 'site-shows.component.html',
  styleUrls: ['site-shows.component.scss']
})

export class SiteShowsComponent implements OnInit {
  shows: Show[] = [];
  error: any;
  zoom = 17;
  lat: number;
  lng: number;
  constructor(
    private showService: ShowService) {
  }

  ngOnInit(): void {
    this.getShows();
    this.lat = 40.7544;
    this.lng = -73.98954149999997;
  }

  getShows() {
    this.shows = [];
    this.showService.getShows()
      .subscribe(shows => {
        this.shows = this.shows = shows;
      });
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Show } from '../_models/show';
import { ShowService } from '../_services/show.service';


@Component({
  selector: 'site-shows',
  templateUrl: 'site-shows.component.html',
  styleUrls: ['site-shows.component.scss']
})

export class SiteShowsComponent implements OnInit {
  shows: Show[];
  selectedShow: Show;
  error: any;
  zoom = 17;
  lat: number;
  lng: number;
  constructor(
    private router: Router,
    private showService: ShowService) {
  }

  ngOnInit(): void {
    this.getShows();
    this.lat = 40.7544;
    this.lng = -73.98954149999997;
  }

  getShows(): void {

    this.showService.getShows()
      .then(shows => {
        this.shows = shows
      })
      .catch(error => this.error = error);
  }

  onSelect(show: Show): void {
    this.selectedShow = show;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedShow.id]);
  }

}

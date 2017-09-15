import { Component, OnInit } from '@angular/core';

import { Show } from '../_models/show';
import { ShowService } from '../_services/show.service';

@Component({
  selector: 'site-home',
  templateUrl: 'site-home.component.html',
  styleUrls: ['site-home.component.scss']
})
export class SiteHomeComponent implements OnInit {
  shows: Show[] = [];
  loading = true;
  public showAllUsers = false;

  constructor(private showService: ShowService) { }

  ngOnInit(): void {
    this.getShows();
  }

  getShows() {
    this.shows = [];
    this.showService.getShows()
      .subscribe(shows => {
        this.shows = this.shows = shows.slice(0, 3);
        this.loading = false;
      });
  }

  toggleHiddenUsers() {
    this.showAllUsers = !this.showAllUsers;
  }


}

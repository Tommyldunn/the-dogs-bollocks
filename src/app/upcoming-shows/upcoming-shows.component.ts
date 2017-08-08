import { Component } from '@angular/core';

@Component({
  selector: 'site-upcoming-shows',
  templateUrl: 'upcoming-shows.component.html',
  styleUrls: ['upcoming-shows.component.scss']
})

export class UpcomingShowsComponent {
  lat = 40.7544;
  lng = -73.98954149999997;
  zoom = 17;
}

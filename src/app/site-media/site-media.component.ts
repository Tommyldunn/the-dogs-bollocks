import { Component, OnInit } from '@angular/core';

import { Media } from '../_models/media.model';
import { MediaService } from '../_services/media.service';

@Component({
  selector: 'site-media',
  templateUrl: './site-media.component.html',
  styleUrls: ['./site-media.component.scss']
})
export class SiteMediaComponent implements OnInit {
  media: Media[];
  error: any;

  constructor(private mediaService: MediaService) { }

  ngOnInit() {
    //
  }

  getMedia() {
    this.media = [];
    this.mediaService.getMedia()
      .subscribe(media => {
        this.media = this.media = media;
      });
  }

}

import { Component, OnInit } from '@angular/core';

import { Picture } from '../_models/picture.model';
import { PictureService } from '../_services/picture.service';

@Component({
  selector: 'site-media',
  templateUrl: './site-media.component.html',
  styleUrls: ['./site-media.component.scss']
})
export class SiteMediaComponent implements OnInit {
  pictures: Picture[] = [];
  picture: Picture;
  error: any;

  constructor(private picutreService: PictureService) { }

  ngOnInit() {
    const videoStorage = 'assets/site-hero-no-sound';
    const video = document.querySelector('video');
    const sourceMp4 = document.getElementById('mp4');
    const activeVideoUrl = videoStorage;

    // [Math.round(Math.random() * (videoStorage.length - 1))]

    this.pictures = [];
    this.picutreService.getPicture()
      .subscribe(pictures => {
        sourceMp4.setAttribute('src', activeVideoUrl + '.mp4');
        // sourceWebm.setAttribute('src', activeVideoUrl + '.webm');
        this.pictures = this.pictures = pictures;
      });

  }

}

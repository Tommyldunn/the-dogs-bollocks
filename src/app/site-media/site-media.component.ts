import { Component, OnInit } from '@angular/core';

import { Pic } from '../_models/pic';
import { PicService } from '../_services/pic.service';

@Component({
  selector: 'site-media',
  templateUrl: './site-media.component.html',
  styleUrls: ['./site-media.component.scss']
})
export class SiteMediaComponent implements OnInit {
  pics: Pic[];
  error: any;

  constructor(private picService: PicService) { }

  ngOnInit() {
    //
  }

  getPics() {
    this.pics = [];
    this.picService.getPics()
      .subscribe(pics => {
        this.pics = this.pics = pics;
      });
  }

}

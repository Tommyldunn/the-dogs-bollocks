import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { SpinnerService } from '../core/site-spinner/site-spinner.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';

import { Pic } from '../_models/pic';
import { CONFIG } from '../core/config';


const picsUrl = CONFIG.baseUrls.pics;
const imagesUrl = CONFIG.baseUrls.picImages;

@Injectable()
export class PicService {
  // private picsUrl = 'api/pics';  // URL to web api
  // private imagesUrl = 'api/pics/images';

  constructor(private http: Http, private spinnerService: SpinnerService) { }

  getPics() {
    this.spinnerService.show();
    return <Observable<Pic[]>>this.http
      .get(picsUrl)
      .map(res => this.extractData<Pic[]>(res))
      .catch(this.handleError)
      .finally(() => this.spinnerService.hide());
  }

  getShowImages() {
    this.spinnerService.show();
    return <Observable<Pic>>this.http
      .get(imagesUrl)
      .map(res => this.extractData<Pic>(res))
      .catch(this.handleError)
      .finally(() => this.spinnerService.hide());
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  private extractData<T>(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    const body = res.json ? res.json() : null;
    return <T>(body && body.data || {});
  }

}

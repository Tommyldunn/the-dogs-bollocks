import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { SpinnerService } from '../core/site-spinner/site-spinner.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';

import { Show } from '../_models/show';

@Injectable()
export class ShowService {
  private showsUrl = 'api/shows';  // URL to web api

  constructor(private http: Http, private spinnerService: SpinnerService) { }

  getShows() {
    this.spinnerService.show();
    return <Observable<Show[]>>this.http
      .get(this.showsUrl)
      .map(res => this.extractData<Show[]>(res))
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

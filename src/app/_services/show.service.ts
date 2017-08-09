import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Show } from '../_models/show';

@Injectable()
export class ShowService {
  private showsUrl = 'api/shows';  // URL to web api

  constructor(private http: Http) { }

  getShows(): Promise<Array<Show>> {
    return this.http
      .get(this.showsUrl)
      .toPromise()
      .then((response) => {
        return response.json().data as Show[];
      })
      .catch(this.handleError);
  }

  getShow(id: number): Promise<Show> {
    return this.getShows()
      .then(shows => shows.find(show => show.id === id));
  }

  save(hero: Show): Promise<Show> {
    if (hero.id) {
      return this.put(hero);
    }
    return this.post(hero);
  }

  delete(hero: Show): Promise<Response> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.showsUrl}/${hero.id}`;

    return this.http
      .delete(url, { headers: headers })
      .toPromise()
      .catch(this.handleError);
  }

  // Add new Show
  private post(hero: Show): Promise<Show> {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post(this.showsUrl, JSON.stringify(hero), { headers: headers })
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  // Update existing Show
  private put(hero: Show): Promise<Show> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.showsUrl}/${hero.id}`;

    return this.http
      .put(url, JSON.stringify(hero), { headers: headers })
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

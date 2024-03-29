/**
 * Created by Maribel on 20/05/2017.
 */
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class FilmsService {
  url = 'http://ec2-34-211-5-120.us-west-2.compute.amazonaws.com/?&t=';

  constructor(private http: Http) { }

  findMovie(movie) {
    return this.http.get(this.url + movie)
      .map(response => {
        {return response.json(); };
      })
      .catch(error => Observable.throw(error.json().error));
  }
}

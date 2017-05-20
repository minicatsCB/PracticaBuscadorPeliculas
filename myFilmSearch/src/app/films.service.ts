/**
 * Created by Maribel on 19/05/2017.
 */
import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class FilmsService {
  private myFilms: string[] = ['Harry Potter', 'Narnia', 'Avatar'];
  url= 'http://www.omdbapi.com/?t=';
  constructor(private http: Http) { }

  getFilms(key: string) {
    const out: string[] = [];
    for (const film of this.myFilms){
      if (film.includes(key)) {
        out.push(film);
      }
    }
    return out;
  }

  getAllFilms() {
    return this.myFilms;
  }

  findMovie(movie) {
    return this.http.get(this.url + movie)
      .map(response => {
        {return response.json(); };
      })
        .catch(error => Observable.throw(error.json().error));
    }
}

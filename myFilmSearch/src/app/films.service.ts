/**
 * Created by Maribel on 19/05/2017.
 */
import {Injectable} from '@angular/core';

@Injectable()
export class FilmsService {
  private myFilms: string[] = ['Harry Potter', 'Narnia', 'Avatar'];

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
}

import { Component } from '@angular/core';
import { Http } from '@angular/http';
import {FilmsService} from './films.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private films: string[] = [];

  constructor(private filmsService: FilmsService, private http: Http) {}

  search(title: string) {
    this.films = this.filmsService.getFilms(title);
  }

  list() {
    this.films = this.filmsService.getAllFilms();
  }

  seek(title: String) {
    this.films = [];
    let url = 'https://www.googleapis.com/books/v1/volumes?q=inititle:' + title;
    this.http.get(url).subscribe(
      response => {
        for (let film of response.json().items){
          this.films.push(film.volumeInfo.title);
        }
      },
      error => console.error(error)
    );
  }
}

import { Component } from '@angular/core';
import {FilmsService} from './films.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private films: string[] = [];

  constructor(private filmsService: FilmsService) {}

  search(title: string) {
    this.films = this.filmsService.getFilms(title);
  }

  list() {
    this.films = this.filmsService.getAllFilms();
  }
}

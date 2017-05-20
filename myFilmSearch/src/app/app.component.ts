import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {FilmsService} from './films.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private films: string[] = [];
  movie_id = '';
  movie_title = '';
  movie_Rating = '';
  movie_released = '';
  movie_director = '';
  movie_actors = '';
  movie_plot = '';

  constructor(private filmsService: FilmsService, private http: Http) {
  }

  ngOnInit() {

  }

  search(title: string) {
    this.films = this.filmsService.getFilms(title);
  }

  list() {
    this.films = this.filmsService.getAllFilms();
  }

  callMovieService() {
    {
      this.filmsService.findMovie(this.movie_id).subscribe(
        response => {
          this.movie_title = response['Title'];
          this.movie_Rating = response['Rated'];
          this.movie_released = response['Released'];
          this.movie_director = response['Director'];
          this.movie_actors = response['Actors'];
          this.movie_plot = response['Plot'];
        },
        error => {
          console.log('Error. The findMovie result JSON value is as follows:');
          console.log(error);
        }
      );

    }
  }
}

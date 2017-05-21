import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {FilmsService} from "./films.service";
import {Http} from "@angular/http";

@Component({
  selector: 'page-home',
  templateUrl: 'app.html'
})
export class MyApp {
  moviePoster = '';
  movieTitle = '';
  movieImdbRating = '';
  movieYear = '';
  movieDirector = '';
  movieActors = '';
  moviePlot = '';

  constructor(private filmsService: FilmsService, private http: Http) {

  }

  callMovieService(movie_id: string) {
    {
      console.log(movie_id);
      this.filmsService.findMovie(movie_id).subscribe(
        response => {
          this.moviePoster = response['Poster']
          this.movieTitle = response['Title'];
          this.movieImdbRating = response['imdbRating'];
          this.movieYear = response['Year'];
          this.movieDirector = response['Director'];
          this.movieActors = response['Actors'];
          this.moviePlot = response['Plot'];
          console.log(this.moviePlot);
        },
        error => {
          console.log('Error. The findMovie result JSON value is as follows:');
          console.log(error);
        }
      );
    }
  }
}


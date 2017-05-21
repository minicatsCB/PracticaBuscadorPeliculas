import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {FilmsService} from './films.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  moviePoster = '';
  movieTitle = '';
  movieImdbRating = '';
  movieYear = '';
  movieDirector = '';
  movieActors = '';
  moviePlot = '';

  constructor(private filmsService: FilmsService, private http: Http) {
  }

  ngOnInit() {

  }

  callMovieService(movie_id: string) {
    {
      this.filmsService.findMovie(movie_id).subscribe(
        response => {
          this.moviePoster = response['Poster']
          this.movieTitle = response['Title'];
          this.movieImdbRating = response['imdbRating'];
          this.movieYear = response['Year'];
          this.movieDirector = response['Director'];
          this.movieActors = response['Actors'];
          this.moviePlot = response['Plot'];
        },
        error => {
          console.log('Error. The findMovie result JSON value is as follows:');
          console.log(error);
        }
      );
    }
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router"
import { MoviesService } from 'src/app/services/movies.service';
import { Movie, MovieVideo,MovieImages, MovieCredits } from 'src/app/models/movie';
import { IMAGES_SIZES } from "../../constants/images-sizes";
import { first } from 'rxjs';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit,OnDestroy {
  movie: Movie | null = null;
  movieVideos: MovieVideo[] = [];
  imagesSizes = IMAGES_SIZES;
  movieImage: MovieImages | null = null;
  movieCredits: MovieCredits | null = null;
  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,

  ) {}

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({ id }) => {
      this.getMovie(id);
      this.getMovieVideos(id);
      this.getMovieImages(id);
            this.getMovieCredits(id);
    });
  }
  ngOnDestroy(): void {
    console.log("component destroyed")
  }
  getMovie(id: string) {
    this.moviesService.getMovie(id).subscribe((movieData) => {
      this.movie = movieData;
    });
  }

  getMovieVideos(id: string) {
    this.moviesService.getMovieVideos(id).subscribe((movieVideoData) => {
      this.movieVideos = movieVideoData;
    });
  }
  getMovieImages(id: string) {
    this.moviesService.getMovieImages(id).subscribe((movieImagesData) => {
      this.movieImage = movieImagesData;
    });
  }
  getMovieCredits(id: string) {
    this.moviesService.getMovieCredits(id).subscribe((movieCreditsData) => {
      this.movieCredits = movieCreditsData;
    });
  }
}

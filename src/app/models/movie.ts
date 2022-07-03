import { NumberValueAccessor } from "@angular/forms";

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  ganare_ids: number[];
  id: 580489;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: 6093.846;
  poster_path: string;
  release_date: string;
  title: string;
  video: false;
  vote_average: 6.8;
  vote_count: 1597;
  revenue: number;
  runtime: number;
  status: string;
  genres: Genre[]
}
export interface Genre {
  id: number;
  name: string;
}
export interface MovieDto{
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}

export interface MovieVideoDto {
  id: number;
  results: MovieVideo[];
}
export interface MovieVideo{
  site: string;
  key: string;
}
export interface MovieImages {
  backdrops: {
    file_path: string;
  }[];
}

export interface MovieCredits{
  cast: {
    name: string;
    profile_path: string;
  }[]
}

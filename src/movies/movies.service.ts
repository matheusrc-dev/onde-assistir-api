import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './interfaces/movie.interface';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  create(movie: Movie): Movie {
    const id = this.movies.length + 1;
    const newMovie = { id, ...movie };
    this.movies.push(newMovie);
    return newMovie;
  }

  findAll(): Movie[] {
    return this.movies;
  }

  findOne(id: string): Movie {
    const movie = this.movies.find((movie) => movie.id === parseInt(id));
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }
    return movie;
  }

  update(id: string, updatedMovie: Movie): Movie {
    const movieIndex = this.movies.findIndex(
      (movie) => movie.id === parseInt(id),
    );
    if (movieIndex === -1) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }
    this.movies[movieIndex] = { ...this.movies[movieIndex], ...updatedMovie };
    return this.movies[movieIndex];
  }

  partialUpdate(id: string, updatedMovie: Partial<Movie>): Movie {
    const movieIndex = this.movies.findIndex(
      (movie) => movie.id === parseInt(id),
    );
    if (movieIndex === -1) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }
    this.movies[movieIndex] = { ...this.movies[movieIndex], ...updatedMovie };
    return this.movies[movieIndex];
  }

  remove(id: string): void {
    const movieIndex = this.movies.findIndex(
      (movie) => movie.id === parseInt(id),
    );
    if (movieIndex === -1) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }
    this.movies.splice(movieIndex, 1);
  }
}

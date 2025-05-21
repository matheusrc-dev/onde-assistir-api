import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Put } from '@nestjs/common';
import { Movie } from './interfaces/movie.interface';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {} // Injeção do serviço

  @Post()
  @HttpCode(201)
  create(@Body() movie: Movie): Movie {
    return this.moviesService.create(movie);
  }

  @Get()
  findAll(): Movie[] {
    return this.moviesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Movie {
    return this.moviesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatedMovie: Movie): Movie {
    return this.moviesService.update(id, updatedMovie);
  }

  @Patch(':id')
  partialUpdate(@Param('id') id: string, @Body() updatedMovie: Partial<Movie>): Movie {
    return this.moviesService.partialUpdate(id, updatedMovie);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string): void {
    this.moviesService.remove(id);
  }
}

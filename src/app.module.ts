import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [SharedModule, CoreModule, MoviesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

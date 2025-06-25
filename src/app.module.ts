import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma-service/prisma.service';
import { PersonModule } from './modules/person/person.module';
import { ArtistModule } from './modules/artist/artist.module';
import { GenreModule } from './modules/genre/genre.module';
import { ArtistGenreModule } from './modules/artist-genre/artist-genre.module';

@Module({
  imports: [PersonModule, ArtistModule, GenreModule, ArtistGenreModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}

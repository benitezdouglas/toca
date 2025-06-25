import { Module } from '@nestjs/common';
import { ArtistGenreService } from './artist-genre.service';
import { ArtistGenreController } from './artist-genre.controller';
import { PrismaService } from 'src/prisma-service/prisma.service';

@Module({
  providers: [ArtistGenreService, PrismaService],
  controllers: [ArtistGenreController],
})
export class ArtistGenreModule {}

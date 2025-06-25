import { Body, Controller, Post } from '@nestjs/common';
import { ArtistGenreService } from './artist-genre.service';
import { Prisma } from '../../../generated/prisma/client';

@Controller('artist-genre')
export class ArtistGenreController {
  constructor(private artistGenreService: ArtistGenreService) {}

  @Post()
  async createArtistGenre(@Body() data: Prisma.ArtistGenreCreateManyInput[]) {
    return this.artistGenreService.createArtistGenre(data);
  }
}

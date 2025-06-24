import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ArtistService } from './artist.service';
import { Prisma } from '../../../generated/prisma/client';

@Controller('artist')
export class ArtistController {
  constructor(private artistService: ArtistService) {}

  @Get(':id')
  async getArtistById(@Param('id') id: number) {
    return this.artistService.getArtistById(id);
  }

  @Get()
  async getAllArtists() {
    return this.artistService.getAllArtists();
  }

  @Post()
  async createArtist(@Body() data: Prisma.ArtistCreateInput) {
    return this.artistService.createArtist(data);
  }

  @Put(':id')
  async updateArtist(
    @Param('id') id: number,
    @Body() data: Prisma.ArtistUpdateInput,
  ) {
    return this.artistService.updateArtist(id, data);
  }

  @Delete(':id')
  async deleteArtist(@Param('id') id: number) {
    return this.artistService.deleteArtist(id);
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma-service/prisma.service';
import { Prisma } from '../../../generated/prisma/client';

@Injectable()
export class ArtistService {
  constructor(private prisma: PrismaService) {}

  async getArtistById(id: number) {
    return this.prisma.artist.findUnique({
      where: { id },
    });
  }

  async getAllArtists() {
    return this.prisma.artist.findMany();
  }

  async createArtist(data: Prisma.ArtistCreateInput) {
    return this.prisma.artist.create({
      data,
      include: {
        Person: true, // Include related Person data if needed
        // artistGenres: true, // Include related artistGenres if needed
      },
    });
  }

  async updateArtist(id: number, data: Prisma.ArtistUpdateInput) {
    return this.prisma.artist.update({
      where: { id },
      data,
    });
  }

  async deleteArtist(id: number) {
    return this.prisma.artist.delete({
      where: { id },
    });
  }
}

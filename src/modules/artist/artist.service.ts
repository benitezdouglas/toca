import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma-service/prisma.service';
import { Prisma } from '../../../generated/prisma/client';

@Injectable()
export class ArtistService {
  constructor(private prisma: PrismaService) {}

  async getArtistById(id: number) {
    return this.prisma.artist.findUnique({
      where: { id },
      include: {
        Person: true, // Include related Person data if needed
        artistGenres: {
          include: {
            Genre: true, // Include related Genre data if needed
          },
        }, // Include related genres if needed
      },
    });
  }

  async getAllArtists() {
    return this.prisma.artist.findMany({
      include: {
        Person: true, // Include related Person data if needed
        artistGenres: {
          include: {
            Genre: true, // Include related Genre data if needed
          },
        }, // Include related genres if needed
      },
    });
  }

  async createArtist(data: Prisma.ArtistCreateInput) {
    return this.prisma.artist.create({
      data,
      include: {
        Person: true, // Include related Person data if needed
        artistGenres: {
          include: {
            Genre: true, // Include related Genre data if needed
          },
        }, // Include related genres if needed
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

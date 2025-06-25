import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma-service/prisma.service';
import { Prisma } from '../../../generated/prisma/client';

@Injectable()
export class ArtistGenreService {
  constructor(private prisma: PrismaService) {}
  async createArtistGenre(data: Prisma.ArtistGenreCreateManyInput[]) {
    return this.prisma.artistGenre.createMany({
      data,
      skipDuplicates: true, // Skip duplicates if any
    });
  }
}

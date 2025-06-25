import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma-service/prisma.service';

@Injectable()
export class GenreService {
  constructor(private prisma: PrismaService) {}
  async getAllGenres() {
    return this.prisma.genre.findMany();
  }
}

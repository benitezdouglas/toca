import { Module } from '@nestjs/common';
import { ArtistService } from './artist.service';
import { ArtistController } from './artist.controller';
import { PrismaService } from '../../prisma-service/prisma.service';
import { PersonService } from '../person/person.service';

@Module({
  providers: [ArtistService, PersonService, PrismaService],
  controllers: [ArtistController],
})
export class ArtistModule {}

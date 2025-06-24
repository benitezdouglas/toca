import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma-service/prisma.service';
import { PersonModule } from './modules/person/person.module';
import { ArtistModule } from './modules/artist/artist.module';

@Module({
  imports: [PersonModule, ArtistModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}

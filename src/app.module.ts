import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma-service/prisma.service';
import { PersonModule } from './modules/person/person.module';

@Module({
  imports: [PersonModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}

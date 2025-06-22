import { Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';
import { PrismaService } from '../../prisma-service/prisma.service';

@Module({
  providers: [PersonService, PrismaService],
  controllers: [PersonController],
  imports: [],
})
export class PersonModule {}

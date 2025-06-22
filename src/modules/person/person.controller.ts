import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { PersonService } from './person.service';
import { Prisma } from 'generated/prisma';

@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Get(':id')
  async getPersonById(@Param('id') id: number) {
    return this.personService.getPersonById(id);
  }

  @Get()
  async getAllPeople() {
    return this.personService.getAllPeople();
  }

  @Post()
  async createPerson(@Body() data: Prisma.PersonCreateInput) {
    return this.personService.createPerson(data);
  }

  @Put(':id')
  async updatePerson(
    @Param('id') id: number,
    @Body() data: Prisma.PersonUpdateInput,
  ) {
    return this.personService.updatePerson(id, data);
  }
}

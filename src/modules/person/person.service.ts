import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma-service/prisma.service';
import { Prisma } from '../../../generated/prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PersonService {
  constructor(private prisma: PrismaService) {}

  async getPersonById(id: number) {
    return this.prisma.person.findUnique({
      select: {
        id: true,
        email: true,
        name: true,
      },
      where: { id },
    });
  }

  async getAllPeople() {
    return this.prisma.person.findMany({
      select: {
        id: true,
        email: true,
        name: true,
      },
    });
  }

  async createPerson(data: Prisma.PersonCreateInput) {
    const existingPerson = await this.prisma.person.findUnique({
      where: { email: data.email },
    });

    if (existingPerson) {
      throw new Error('Person with this email already exists');
    }

    // Ensure the password is hashed before saving
    if (data.password) {
      data.password = bcrypt.hashSync(data.password, 10);
    }

    return this.prisma.person.create({
      data,
      select: {
        id: true,
        email: true,
        name: true,
      },
    });
  }

  async updatePerson(id: number, data: Prisma.PersonUpdateInput) {
    return this.prisma.person.update({
      where: { id },
      data,
    });
  }
}

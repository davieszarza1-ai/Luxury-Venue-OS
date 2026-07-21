import { randomUUID } from 'crypto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../infrastructure/database/prisma.service';
import { CreateSpaceDto } from './dto/create-space.dto';

@Injectable()
export class SpaceService {

  constructor(
    private readonly prisma: PrismaService,
  ) {}


  async create(createSpaceDto: CreateSpaceDto) {

    return this.prisma.space.create({
      data:{ id: randomUUID(), ...createSpaceDto },
    });

  }


  async findAll() {

    return this.prisma.space.findMany({
      include: {
        venue: true,
      },
    });

  }


  async findOne(id: string) {

    return this.prisma.space.findUnique({
      where: {
        id,
      },
      include: {
        venue: true,
      },
    });

  }

}














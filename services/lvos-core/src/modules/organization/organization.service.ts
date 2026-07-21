import { randomUUID } from "crypto";
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../infrastructure/database/prisma.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';

@Injectable()
export class OrganizationService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(createOrganizationDto: CreateOrganizationDto) {
    return this.prisma.organization.create({
      data:{ id: randomUUID(),
        name: createOrganizationDto.name,
      },
    });
  }

  async findAll() {
    return this.prisma.organization.findMany();
  }

  async findOne(id: string) {
    return this.prisma.organization.findUnique({
      where: {
        id,
      },
    });
  }
}













import { randomUUID } from 'crypto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../infrastructure/database/prisma.service';
import { CreateVenueDto } from './dto/create-venue.dto';


@Injectable()
export class VenueService {

  constructor(
    private prisma: PrismaService
  ) {}


  async create(createVenueDto: CreateVenueDto) {

    return this.prisma.venue.create({
      data:{ id: randomUUID(), ...createVenueDto }
    });

  }


  async findAll(){

    return this.prisma.venue.findMany({
      include:{
        organization:true,
        spaces:true
      }
    });

  }


  async findOne(id:string){

    return this.prisma.venue.findUnique({
      where:{
        id
      },
      include:{
        spaces:true
      }
    });

  }

}















import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../infrastructure/database/prisma.service';
import { CreateGuestDto } from './dto/create-guest.dto';

@Injectable()
export class GuestService {

  constructor(
    private prisma: PrismaService
  ) {}

  async findAll(){

    return this.prisma.guest.findMany({
      include:{
        reservations:true
      }
    });

  }


  async findOne(id:string){

    return this.prisma.guest.findUnique({
      where:{
        id
      },
      include:{
        reservations:true
      }
    });

  }


  async profile(id:string){

    const guest = await this.findOne(id);

    if(!guest){
      return null;
    }

    return {
      ...guest,
      reservationCount: guest.reservations?.length || 0
    };

  }


  async create(dto:CreateGuestDto){

    return this.prisma.guest.create({
      data:{
        name:dto.name,
        email:dto.email,
        phone:dto.phone
      }
    });

  }


}




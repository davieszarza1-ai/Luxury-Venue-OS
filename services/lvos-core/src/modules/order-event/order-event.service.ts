import { randomUUID } from "crypto";
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../infrastructure/database/prisma.service';


@Injectable()
export class OrderEventService {


  constructor(
    private prisma: PrismaService,
  ){}



  create(
    orderId:string,
    type:string,
    message?:string,
  ){

    return this.prisma.orderEvent.create({

      data:{ id: randomUUID(),

        orderId,

        type,

        message,

      },

    });

  }



  findByOrder(
    orderId:string,
  ){

    return this.prisma.orderEvent.findMany({

      where:{
        orderId,
      },

      orderBy:{
        createdAt:'asc',
      },

    });

  }



}













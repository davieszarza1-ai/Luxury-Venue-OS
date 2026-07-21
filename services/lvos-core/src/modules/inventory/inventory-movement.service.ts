import { randomUUID } from "crypto";
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../infrastructure/database/prisma.service';


@Injectable()
export class InventoryMovementService {


  constructor(
    private readonly prisma: PrismaService,
  ){}



  async create(data:{
    productId:string;
    quantity:number;
    type:string;
  }){


    const movement = await this.prisma.inventoryMovement.create({

      data:{ id: randomUUID(),

        productId:data.productId,

        quantity:data.quantity,

        type:data.type,

      },

    });



    await this.prisma.inventory.update({

      where:{
        productId:data.productId,
      },


      data:{ id: randomUUID(),

        quantity:{
          increment:data.quantity,
        },

      },


    });



    return movement;


  }




  async findByProduct(productId:string){


    return this.prisma.inventoryMovement.findMany({

      where:{
        productId,
      },

      orderBy:{
        createdAt:'desc',
      },

    });


  }


}












import { randomUUID } from "crypto";
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../infrastructure/database/prisma.service';


@Injectable()
export class InventoryService {


  constructor(
    private readonly prisma: PrismaService,
  ) {}



  async findByProduct(productId: string) {

    return this.prisma.inventory.findUnique({

      where: {
        productId,
      },

      include: {
        product: true,
      },

    });

  }



  async addStock(
    productId: string,
    quantity: number,
  ) {

    return this.prisma.inventory.update({

      where: {
        productId,
      },

      data:{ id: randomUUID(),

        quantity: {
          increment: quantity,
        },

      },

    });

  }



  async removeStock(
    productId: string,
    quantity: number,
  ) {

    return this.prisma.inventory.update({

      where: {
        productId,
      },

      data:{ id: randomUUID(),

        quantity: {
          decrement: quantity,
        },

      },

    });

  }



}












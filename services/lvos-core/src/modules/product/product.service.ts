import { randomUUID } from "crypto";
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../infrastructure/database/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';


@Injectable()
export class ProductService {


  constructor(
    private prisma: PrismaService
  ) {}


  async create(createProductDto: CreateProductDto) {

    return this.prisma.product.create({

      data:{ id: randomUUID(),

        name: createProductDto.name,

        category: createProductDto.category,

        price: createProductDto.price,

        inventory: {

          create: {

            quantity: 0

          }

        }

      },

      include: {

        inventory: true

      }

    });

  }



  async findAll() {

    return this.prisma.product.findMany({

      include: {

        inventory: true

      }

    });

  }



  async findOne(id: string) {

    return this.prisma.product.findUnique({

      where: {

        id

      },

      include: {

        inventory: true

      }

    });

  }


}
















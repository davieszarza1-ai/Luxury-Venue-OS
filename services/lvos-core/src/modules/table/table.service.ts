import { randomUUID } from "crypto";
import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../infrastructure/database/prisma.service';

import { CreateTableDto } from './dto/create-table.dto';

import {
  UpdateTableStatusDto,
} from './dto/update-table-status.dto';



@Injectable()
export class TableService {


  constructor(
    private readonly prisma: PrismaService,
  ) {}




  async create(
    dto: CreateTableDto,
  ) {

    return this.prisma.table.create({

      data:{ id: randomUUID(), ...dto },

    });

  }





  async findAll() {

    return this.prisma.table.findMany({

      include: {

        space:true,

      },

    });

  }





  async findOne(
    id:string,
  ) {

    return this.prisma.table.findUnique({

      where:{
        id,
      },

      include:{
        space:true,
      },

    });

  }





  async updateStatus(
    id:string,
    dto:UpdateTableStatusDto,
  ) {

    return this.prisma.table.update({

      where:{
        id,
      },

      data:{ id: randomUUID(),
        status:dto.status,
      },

    });

  }


}















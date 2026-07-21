import {
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';

import { InventoryMovementService } from './inventory-movement.service';



@Controller('inventory/movement')
export class InventoryMovementController {


  constructor(
    private readonly inventoryMovementService: InventoryMovementService,
  ){}



  @Post()
  create(
    @Body()
    body:{
      productId:string;
      quantity:number;
      type:string;
    }
  ){


    return this.inventoryMovementService.create(body);


  }




  @Get(':productId')
  findByProduct(
    @Param('productId') productId:string,
  ){


    return this.inventoryMovementService.findByProduct(productId);


  }


}












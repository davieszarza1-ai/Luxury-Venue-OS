import {
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';

import { InventoryService } from './inventory.service';



@Controller('inventory')
export class InventoryController {


  constructor(
    private readonly inventoryService: InventoryService,
  ) {}



  @Get(':productId')
  find(
    @Param('productId') productId:string,
  ){

    return this.inventoryService.findByProduct(productId);

  }



  @Post('add')
  addStock(
    @Body() body:{
      productId:string;
      quantity:number;
    }
  ){

    return this.inventoryService.addStock(
      body.productId,
      body.quantity,
    );

  }


}












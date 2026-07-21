import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
} from '@nestjs/common';


import { OrderService } from './order.service';



@Controller('orders')
export class OrderController {


  constructor(
    private readonly orderService:OrderService,
  ){}




  @Post()
  create(
    @Body() body:{
      tableId:string;
      customerName?:string;
    }
  ){

    return this.orderService.create(body);

  }





  @Get()
  findAll(){

    return this.orderService.findAll();

  }





  @Get(':id')
  findOne(
    @Param('id') id:string,
  ){

    return this.orderService.findOne(id);

  }






  @Post(':id/items')
  addItem(

    @Param('id') id:string,

    @Body() body:{
      productId:string;
      quantity:number;
      price:number;
      notes?:string;
    }

  ){

    return this.orderService.addItem(

      id,

      body,

    );

  }






  @Patch(':id/close')
  close(

    @Param('id') id:string,

  ){

    return this.orderService.close(id);

  }







  @Patch(':id/status')
  updateStatus(

    @Param('id') id:string,

    @Body() body:{
      status:string;
    }

  ){

    return this.orderService.updateStatus(

      id,

      body.status,

    );

  }







  @Patch(':id/checkout')
  checkout(

    @Param('id') id:string,

  ){

    return this.orderService.checkout(id);

  }



}












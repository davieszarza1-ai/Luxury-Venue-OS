import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { OrderEventService } from './order-event.service';

@Controller('order-events')
export class OrderEventController {

  constructor(
    private readonly orderEventService: OrderEventService,
  ) {}

  @Post()
  create(
    @Body() body:any,
  ){

    return this.orderEventService.create(
      body.orderId,
      body.type,
      body.message,
    );

  }


  @Get(':orderId')
  find(
    @Param('orderId') orderId:string,
  ){

    return this.orderEventService.findByOrder(orderId);

  }

}













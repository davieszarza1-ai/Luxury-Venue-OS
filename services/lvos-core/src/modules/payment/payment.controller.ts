import {
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';

import { PaymentService } from './payment.service';


@Controller('payments')
export class PaymentController {


  constructor(
    private readonly paymentService: PaymentService,
  ){}



  @Get('order/:orderId')
  findByOrder(
    @Param('orderId') orderId:string,
  ){

    return this.paymentService.findByOrder(orderId);

  }



  @Get('split/:orderId/:people')
  getSplit(
    @Param('orderId') orderId:string,
    @Param('people') people:number,
  ){

    return this.paymentService.getSplit(
      orderId,
      Number(people),
    );

  }



  @Post()
  create(
    @Body() body:{
      orderId:string;
      amount:number;
      method:string;
    }
  ){

    return this.paymentService.createPayment(body);

  }



  @Get('order/:orderId/summary')
  summary(
    @Param('orderId') orderId:string,
  ){

    return this.paymentService.summary(orderId);

  }



  @Get('daily-summary')
  dailySummary(){

    return this.paymentService.dailySummary();

  }



}












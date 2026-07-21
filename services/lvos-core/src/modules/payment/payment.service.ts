import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../infrastructure/database/prisma.service';



@Injectable()
export class PaymentService {


  constructor(
    private readonly prisma: PrismaService,
  ){}



  private readonly allowedMethods = [

    'CASH',

    'CARD',

    'TRANSFER',

    'ROOM_CHARGE',

    'COMP'

  ];





  async findByOrder(
    orderId:string
  ){

    return this.prisma.payment.findMany({

      where:{
        orderId
      },

      orderBy:{
        createdAt:'desc'
      }

    });

  }





  async getSplit(
    orderId:string,
    people:number
  ){

    const order =
      await this.prisma.order.findUnique({

        where:{
          id:orderId
        }

      });



    if(!order){

      throw new Error('Order not found');

    }



    return {

      orderId,

      total:order.total,

      people,

      amountPerPerson:

        Number(
          (order.total / people)
          .toFixed(2)
        )

    };

  }






  async createPayment(
    data:{
      orderId:string;
      amount:number;
      method:string;
    }
  ){



    if(

      !this.allowedMethods.includes(

        data.method

      )

    ){

      throw new Error(

        `Invalid payment method. Allowed: ${this.allowedMethods.join(', ')}`

      );

    }






    const order =
      await this.prisma.order.findUnique({

        where:{
          id:data.orderId
        }

      });





    if(!order){

      throw new Error('Order not found');

    }






    const existingPayments =
      await this.prisma.payment.aggregate({

        where:{

          orderId:data.orderId,

          status:'PAID'

        },

        _sum:{

          amount:true

        }

      });






    const alreadyPaid =
      existingPayments._sum.amount ?? 0;





    const pending =
      order.total - alreadyPaid;






    if(data.amount > pending){

      throw new Error(

        `Payment exceeds pending balance. Pending: ${pending}`

      );

    }







    if(data.amount <= 0){

      throw new Error(

        'Payment amount must be greater than zero'

      );

    }








    const payment =
      await this.prisma.payment.create({

        data:{

          orderId:data.orderId,

          amount:data.amount,

          method:data.method,

          status:'PAID'

        }

      });






    const totalPaid =
      alreadyPaid + data.amount;







    if(totalPaid >= order.total){


      await this.prisma.order.update({

        where:{

          id:data.orderId

        },

        data:{

          status:'COMPLETED'

        }

      });


    }






    return payment;


  }







  async summary(
    orderId:string
  ){



    const order =
      await this.prisma.order.findUnique({

        where:{

          id:orderId

        }

      });





    if(!order){

      throw new Error('Order not found');

    }






    const payments =
      await this.prisma.payment.findMany({

        where:{

          orderId,

          status:'PAID'

        }

      });






    const paid =
      payments.reduce(

        (sum,p)=>sum+p.amount,

        0

      );






    return {

      orderId,

      total:order.total,

      paid,

      pending:

        Number(

          (order.total-paid)

          .toFixed(2)

        ),



      percentage:

        Number(

          ((paid/order.total)*100)

          .toFixed(2)

        ),



      status:

        paid >= order.total

        ? 'PAID'

        : 'PENDING',



      payments

    };


  }








  async dailySummary(){



    const start =
      new Date();



    start.setHours(

      0,

      0,

      0,

      0

    );





    const end =
      new Date();



    end.setHours(

      23,

      59,

      59,

      999

    );







    const payments =
      await this.prisma.payment.findMany({

        where:{

          status:'PAID',

          createdAt:{

            gte:start,

            lte:end

          }

        }

      });







    const cash =
      payments

      .filter(

        p=>p.method==='CASH'

      )

      .reduce(

        (sum,p)=>sum+p.amount,

        0

      );






    const card =
      payments

      .filter(

        p=>p.method==='CARD'

      )

      .reduce(

        (sum,p)=>sum+p.amount,

        0

      );







    const transfer =
      payments

      .filter(

        p=>p.method==='TRANSFER'

      )

      .reduce(

        (sum,p)=>sum+p.amount,

        0

      );







    const roomCharge =
      payments

      .filter(

        p=>p.method==='ROOM_CHARGE'

      )

      .reduce(

        (sum,p)=>sum+p.amount,

        0

      );







    const comp =
      payments

      .filter(

        p=>p.method==='COMP'

      )

      .reduce(

        (sum,p)=>sum+p.amount,

        0

      );







    const totalSales =
      payments.reduce(

        (sum,p)=>sum+p.amount,

        0

      );







    return {

      date:new Date(),

      transactions:payments.length,

      totalSales,

      cash,

      card,

      transfer,

      roomCharge,

      comp,

      payments

    };


  }



}













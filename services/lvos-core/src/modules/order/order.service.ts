import { randomUUID } from "crypto";
import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../infrastructure/database/prisma.service';



@Injectable()
export class OrderService {


constructor(
 private readonly prisma:PrismaService
){}



findAll(){

 return this.prisma.order.findMany({

  include:{
   table:true,
   items:{
    include:{
     product:true
    }
   },
   payments:true,
   events:true
  }

 });

}



findOne(id:string){

 return this.prisma.order.findUnique({

  where:{
   id
  },

  include:{
   table:true,

   items:{
    include:{
     product:true
    }
   },

   payments:true,

   events:true

  }

 });

}



create(data:any){

 return this.prisma.order.create({

  data,

  include:{
   table:true
  }

 });

}



async addItem(
 orderId:string,
 data:any
){

 const item =
 await this.prisma.orderItem.create({

  data:{ id: randomUUID(),
   orderId,
   ...data
  }

 });


 const items =
 await this.prisma.orderItem.findMany({

  where:{
   orderId
  }

 });


 const total =
 items.reduce(
  (sum,i)=>sum+(i.price*i.quantity),
  0
 );


 await this.prisma.order.update({

  where:{
   id:orderId
  },

  data:{ id: randomUUID(),
   total
  }

 });


 return item;

}



close(id:string){

 return this.prisma.order.update({

  where:{
   id
  },

  data:{ id: randomUUID(),
   status:"CLOSED"
  }

 });

}



updateStatus(
 id:string,
 status:string
){

 return this.prisma.order.update({

  where:{
   id
  },

  data:{ id: randomUUID(),
   status
  }

 });

}



async checkout(id:string){


 const order =
 await this.prisma.order.findUnique({

  where:{
   id
  },

  include:{
   items:true
  }

 });


 if(!order){
  return null;
 }



 return this.prisma.order.update({

  where:{
   id
  },

  data:{ id: randomUUID(),
   status:"PAID"
  }

 });


}



async guestOrders(id:string){


 return this.prisma.order.findMany({

  where:{
   
  },


  include:{
   
   items:{
    include:{
     product:true
    }
   },

   payments:true,

   table:true

  },


  orderBy:{
   createdAt:"desc"
  }


 });


}



}

















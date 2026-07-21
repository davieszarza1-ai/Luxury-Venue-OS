import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../infrastructure/database/prisma.service';


@Injectable()
export class SalesService {


constructor(
 private readonly prisma:PrismaService
){}



async summary(){


const payments =
await this.prisma.payment.findMany({

 where:{
  status:'PAID'
 }

});



const totalSales =
payments.reduce(
(sum,p)=>sum+p.amount,
0
);



return {

 transactions:payments.length,

 totalSales,

 averageTicket:
 payments.length
 ? totalSales/payments.length
 : 0

};


}






async topProducts(){


const items =
await this.prisma.orderItem.findMany({

 include:{
  product:true
 }

});



const map:any={};



items.forEach(i=>{


const name=i.product.name;


if(!map[name]){

 map[name]=0;

}


map[name]+=i.quantity;


});



return Object.entries(map)
.sort((a:any,b:any)=>b[1]-a[1])
.slice(0,10)
.map((x:any)=>({

 product:x[0],

 quantity:x[1]

}));



}





async topGuests(){


const orders =
await this.prisma.order.findMany({

 include:{
  
 }

});



const map:any={};



orders.forEach(o=>{


if(!o.customerName) return;


if(!map[o.customerName]){

map[o.customerName]=0;

}


map[o.customerName]+=o.total;


});



return Object.entries(map)
.sort((a:any,b:any)=>b[1]-a[1])
.slice(0,10)
.map((x:any)=>({

 guest:x[0],

 total:x[1]

}));



}



}













import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../infrastructure/database/prisma.service';


@Injectable()
export class ReportsService {


constructor(
 private readonly prisma: PrismaService
){}



async overview(){


const payments =
await this.prisma.payment.findMany({

 where:{
  status:'PAID'
 }

});



const revenue =
payments.reduce(
(sum,p)=>sum+p.amount,
0
);



const items =
await this.prisma.orderItem.findMany({

 include:{
  product:true
 }

});



const products:any={};



items.forEach(i=>{


const name=i.product.name;


if(!products[name]){
 products[name]=0;
}


products[name]+=i.quantity;


});



const topProduct =
Object.entries(products)
.sort((a:any,b:any)=>b[1]-a[1])[0];




const orders =
await this.prisma.order.findMany();



const guests:any={};



orders.forEach(o=>{


if(!o.customerName) return;


if(!guests[o.customerName]){
 guests[o.customerName]=0;
}


guests[o.customerName]+=o.total;


});



const topGuest =
Object.entries(guests)
.sort((a:any,b:any)=>b[1]-a[1])[0];




return {


revenue,


transactions:
payments.length,


averageTicket:
payments.length
?
revenue/payments.length
:
0,


topProduct:
topProduct
?
{
 name:topProduct[0],
 quantity:topProduct[1]
}
:
null,



topGuest:
topGuest
?
{
 name:topGuest[0],
 total:topGuest[1]
}
:
null


};


}



}
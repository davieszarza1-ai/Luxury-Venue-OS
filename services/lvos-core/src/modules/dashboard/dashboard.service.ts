import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../infrastructure/database/prisma.service';


@Injectable()
export class DashboardService {


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



const orders =
await this.prisma.order.count();



const products =
await this.prisma.orderItem.findMany({

include:{
 product:true
}

});



const productMap:any={};



products.forEach(item=>{

const name=item.product.name;


if(!productMap[name]){
productMap[name]=0;
}


productMap[name]+=item.quantity;


});



const topProduct =
Object.entries(productMap)
.sort((a:any,b:any)=>b[1]-a[1])[0];



const guests =
await this.prisma.order.findMany();



const guestMap:any={};



guests.forEach(order=>{


if(!order.customerName)
return;


if(!guestMap[order.customerName]){
guestMap[order.customerName]=0;
}


guestMap[order.customerName]+=order.total;


});



const topGuest =
Object.entries(guestMap)
.sort((a:any,b:any)=>b[1]-a[1])[0];



return {


revenueToday: revenue,


transactions: payments.length,


orders,


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
:null,


topGuest:
topGuest
?
{
name:topGuest[0],
total:topGuest[1]
}
:null


};


}


}
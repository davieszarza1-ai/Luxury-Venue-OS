import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../infrastructure/database/prisma.service';


@Injectable()
export class FloorEngineService {


constructor(
private readonly prisma: PrismaService
){}



async status(){


const tables = await this.prisma.table.findMany({

include:{


orders:{


include:{


payments:true,


items:{


include:{
product:true
}


}


}


},


reservations:true


}


});



return {


venue:"Luxury Venue",


tables: tables.map(table=>{


const activeOrder =
table.orders.find(
o=>o.status==="OPEN"
);



const revenue =
table.orders.reduce(
(sum,o)=>sum+o.total,
0
);



return {


table:table.name,


seats:table.seats,


status:
activeOrder
?
"OCCUPIED"
:
table.reservations.length
?
"RESERVED"
:
table.status,



guest:
activeOrder?.customerName
||
table.reservations[0]?.customerName
||
null,



orders:
table.orders.length,



revenue


};



})


};


}


}
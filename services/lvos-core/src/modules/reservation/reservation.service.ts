import { randomUUID } from "crypto";
import {
 Injectable,
 NotFoundException,
 ConflictException,
 BadRequestException,
} from '@nestjs/common';


import { PrismaService } from '../../infrastructure/database/prisma.service';


import { CreateReservationDto } from './dto/create-reservation.dto';



@Injectable()
export class ReservationService {


 constructor(
  private readonly prisma:PrismaService
 ){}



 async create(dto:CreateReservationDto){


  const conflict =
   await this.prisma.reservation.findFirst({

    where:{
     tableId:dto.tableId,
     date:new Date(dto.date),

     status:{
      in:[
       'PENDING',
       'CONFIRMED',
       'ARRIVED',
       'SEATED'
      ]
     }

    }

   });



  if(conflict){

   throw new ConflictException(
    'Table already reserved for this time'
   );

  }



  return this.prisma.reservation.create({

   data:{ id: randomUUID(),

    customerName:dto.customerName,

    phone:dto.phone,

    date:new Date(dto.date),

    guests:1,

    tableId:dto.tableId,

    

    status:'PENDING'

   },

   include:{
    table:true,
    
   }

  });


 }




 async findAll(){


  return this.prisma.reservation.findMany({

   include:{
    table:true,
    
   },

   orderBy:{
    date:'asc'
   }

  });


 }





 async findOne(id:string){


  const reservation =
   await this.prisma.reservation.findUnique({

    where:{
     id
    },

    include:{
     table:true,
     
    }

   });



  if(!reservation){

   throw new NotFoundException(
    'Reservation not found'
   );

  }


  return reservation;


 }





 async confirm(id:string){


  return this.prisma.reservation.update({

   where:{
    id
   },

   data:{ id: randomUUID(),
    status:'CONFIRMED'
   },

   include:{
    table:true,
    
   }

  });


 }





 async cancel(id:string){


  const reservation =
   await this.findOne(id);



  await this.prisma.table.update({

   where:{
    id:reservation.tableId
   },

   data:{ id: randomUUID(),
    status:'AVAILABLE'
   }

  });



  return this.prisma.reservation.update({

   where:{
    id
   },

   data:{ id: randomUUID(),
    status:'CANCELLED'
   },

   include:{
    table:true,
    
   }

  });


 }





 async arrive(id:string){


  return this.prisma.reservation.update({

   where:{
    id
   },

   data:{ id: randomUUID(),
    status:'ARRIVED'
   },

   include:{
    table:true,
    
   }

  });


 }





 async seat(id:string){


  return this.prisma.reservation.update({

   where:{
    id
   },

   data:{ id: randomUUID(),
    status:'SEATED'
   },

   include:{
    table:true,
    
   }

  });


 }





 async complete(id:string){


  const reservation =
   await this.findOne(id);



  await this.prisma.table.update({

   where:{
    id:reservation.tableId
   },

   data:{ id: randomUUID(),
    status:'AVAILABLE'
   }

  });



  return this.prisma.reservation.update({

   where:{
    id
   },

   data:{ id: randomUUID(),
    status:'COMPLETED'
   },

   include:{
    table:true,
    
   }

  });


 }





 async availability(dto:any){


  const guests =
   Number(
    dto.customerName ??
    dto.people ??
    1
   );



  const date =
   new Date(dto.date);



  const reserved =
   await this.prisma.reservation.findMany({

    where:{

     date,

     status:{
      in:[
       'PENDING',
       'CONFIRMED',
       'ARRIVED',
       'SEATED'
      ]
     }

    },

    select:{
     tableId:true
    }

   });



  return this.prisma.table.findMany({

   where:{

    seats:{
     gte:guests
    },

    status:'AVAILABLE',

    id:{
     notIn:
      reserved.map(
       r=>r.tableId
      )
    }

   }

  });


 }



}
















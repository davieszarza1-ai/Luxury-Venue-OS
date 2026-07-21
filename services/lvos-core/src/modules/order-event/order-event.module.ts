import { Module } from '@nestjs/common';


import { PrismaModule } from '../../infrastructure/database/prisma.module';


import { OrderEventService } from './order-event.service';

import { OrderEventController } from './order-event.controller';



@Module({

  imports:[

    PrismaModule

  ],


  controllers:[

    OrderEventController

  ],


  providers:[

    OrderEventService

  ],


  exports:[

    OrderEventService

  ]


})
export class OrderEventModule {}












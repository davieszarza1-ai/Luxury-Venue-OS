import { Module } from '@nestjs/common';

import { ReservationController } from './reservation.controller';

import { ReservationService } from './reservation.service';

import { PrismaModule } from '../../infrastructure/database/prisma.module';

import { GuestModule } from '../guest/guest.module';


@Module({

imports:[

 PrismaModule,

 GuestModule

],

controllers:[

 ReservationController

],

providers:[

 ReservationService

],

exports:[

 ReservationService

]

})
export class ReservationModule {}













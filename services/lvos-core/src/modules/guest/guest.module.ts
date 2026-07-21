import { Module } from '@nestjs/common';

import { GuestController } from './guest.controller';

import { GuestService } from './guest.service';

import { PrismaModule } from '../../infrastructure/database/prisma.module';


@Module({

 imports:[
  PrismaModule
 ],

 controllers:[
  GuestController
 ],

 providers:[
  GuestService
 ],

 exports:[
  GuestService
 ]

})
export class GuestModule {}













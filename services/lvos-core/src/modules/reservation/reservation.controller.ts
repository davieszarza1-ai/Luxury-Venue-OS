import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';


import { ReservationService } from './reservation.service';

import { CreateReservationDto } from './dto/create-reservation.dto';

import { AvailabilityReservationDto } from './dto/availability-reservation.dto';


import {
  RequirePermission,
} from '../../common/auth/decorators/permissions.decorator';



@Controller('reservations')
export class ReservationController {


  constructor(
    private readonly reservationService: ReservationService,
  ){}




  @Post()
  @RequirePermission('reservations.manage')
  create(
    @Body() dto:CreateReservationDto,
  ){

    return this.reservationService.create(dto);

  }





  @Get()
  @RequirePermission('reservations.manage')
  findAll(){

    return this.reservationService.findAll();

  }





  @Get(':id')
  @RequirePermission('reservations.manage')
  findOne(
    @Param('id') id:string,
  ){

    return this.reservationService.findOne(id);

  }





  @Patch(':id/confirm')
  @RequirePermission('reservations.manage')
  confirm(
    @Param('id') id:string,
  ){

    return this.reservationService.confirm(id);

  }





  @Patch(':id/cancel')
  @RequirePermission('reservations.manage')
  cancel(
    @Param('id') id:string,
  ){

    return this.reservationService.cancel(id);

  }





  @Patch(':id/arrive')
  @RequirePermission('reservations.manage')
  arrive(
    @Param('id') id:string,
  ){

    return this.reservationService.arrive(id);

  }





  @Patch(':id/seat')
  @RequirePermission('reservations.manage')
  seat(
    @Param('id') id:string,
  ){

    return this.reservationService.seat(id);

  }





  @Patch(':id/complete')
  @RequirePermission('reservations.manage')
  complete(
    @Param('id') id:string,
  ){

    return this.reservationService.complete(id);

  }





  @Post('availability')
  @RequirePermission('reservations.manage')
  availability(
    @Body() dto:AvailabilityReservationDto,
  ){

    return this.reservationService.availability(dto);

  }



}













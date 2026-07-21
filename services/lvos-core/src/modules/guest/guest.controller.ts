import {
 Controller,
 Get,
 Post,
 Body,
 Param,
} from '@nestjs/common';


import { GuestService } from './guest.service';

import { CreateGuestDto } from './dto/create-guest.dto';



@Controller('guests')
export class GuestController {


 constructor(
  private readonly guestService:GuestService
 ){}



 @Get()
 findAll(){

  return this.guestService.findAll();

 }




 @Get(':id/profile')
 profile(
  @Param('id') id:string
 ){

  return this.guestService.profile(id);

 }




 @Get(':id')
 findOne(
  @Param('id') id:string
 ){

  return this.guestService.findOne(id);

 }




 @Post()
 create(
  @Body() dto:CreateGuestDto
 ){

  return this.guestService.create(dto);

 }


}













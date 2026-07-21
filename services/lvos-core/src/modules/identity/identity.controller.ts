import {
  Controller,
  Get,
  Post,
  Body,
} from '@nestjs/common';

import { Public } from '../../common/auth/public.decorator';

import { IdentityService } from './identity.service';

import { LoginDto } from './dto/login.dto';


@Controller('identity')
export class IdentityController {


  constructor(
    private readonly identityService: IdentityService,
  ) {}



  @Public()
  @Get('status')
  status(){

    return this.identityService.getStatus();

  }



  @Get('roles')
  roles(){

    return this.identityService.getRoles();

  }



  @Get('permissions')
  permissions(){

    return this.identityService.getPermissions();

  }



  @Get('users')
  users(){

    return this.identityService.getUsers();

  }



  @Public()
  @Post('login')
  login(
    @Body() dto: LoginDto,
  ){

    return this.identityService.login(dto);

  }


}













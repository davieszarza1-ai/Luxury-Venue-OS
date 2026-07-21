import {
  Controller,
  Get,
  Post,
  Body,
  Param,
} from '@nestjs/common';

import { SpaceService } from './space.service';

import { CreateSpaceDto } from './dto/create-space.dto';

import { RequirePermission } from '../../common/auth/decorators/permissions.decorator';


@Controller('spaces')
export class SpaceController {


  constructor(
    private readonly spaceService: SpaceService,
  ) {}



  @Post()
  @RequirePermission('spaces.manage')
  create(
    @Body() createSpaceDto: CreateSpaceDto,
  ) {

    return this.spaceService.create(
      createSpaceDto,
    );

  }




  @Get()
  @RequirePermission('spaces.manage')
  findAll() {

    return this.spaceService.findAll();

  }




  @Get(':id')
  @RequirePermission('spaces.manage')
  findOne(
    @Param('id') id:string,
  ) {

    return this.spaceService.findOne(id);

  }


}













import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
} from '@nestjs/common';

import { TableService } from './table.service';

import { CreateTableDto } from './dto/create-table.dto';

import {
  UpdateTableStatusDto,
} from './dto/update-table-status.dto';

import {
  RequirePermission,
} from '../../common/auth/decorators/permissions.decorator';



@Controller('tables')
export class TableController {


  constructor(
    private readonly tableService: TableService,
  ){}



  @Post()
  @RequirePermission('tables.manage')
  create(
    @Body() dto:CreateTableDto,
  ){

    return this.tableService.create(dto);

  }





  @Get()
  @RequirePermission('tables.manage')
  findAll(){

    return this.tableService.findAll();

  }





  @Get(':id')
  @RequirePermission('tables.manage')
  findOne(
    @Param('id') id:string,
  ){

    return this.tableService.findOne(id);

  }





  @Patch(':id/status')
  @RequirePermission('tables.manage')
  updateStatus(

    @Param('id') id:string,

    @Body() dto:UpdateTableStatusDto,

  ){

    return this.tableService.updateStatus(
      id,
      dto,
    );

  }


}













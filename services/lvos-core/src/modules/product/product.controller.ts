import { Controller, Post, Get, Body, Param } from '@nestjs/common';

import { ProductService } from './product.service';

import { CreateProductDto } from './dto/create-product.dto';



@Controller('products')
export class ProductController {


  constructor(
    private productService: ProductService
  ) {}



  @Post()
  create(
    @Body() createProductDto: CreateProductDto
  ) {

    return this.productService.create(createProductDto);

  }



  @Get()
  findAll() {

    return this.productService.findAll();

  }



  @Get(':id')
  findOne(
    @Param('id') id: string
  ) {

    return this.productService.findOne(id);

  }


}












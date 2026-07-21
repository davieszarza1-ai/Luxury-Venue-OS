import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { VenueService } from './venue.service';
import { CreateVenueDto } from './dto/create-venue.dto';

@Controller('venues')
export class VenueController {

  constructor(
    private readonly venueService: VenueService,
  ) {}

  @Post()
  create(
    @Body() createVenueDto: CreateVenueDto,
  ) {
    return this.venueService.create(createVenueDto);
  }


  @Get()
  findAll() {
    return this.venueService.findAll();
  }


  @Get(':id')
  findOne(
    @Param('id') id: string,
  ) {
    return this.venueService.findOne(id);
  }
}












import { Controller, Get } from '@nestjs/common';
import { SalesService } from './sales.service';


@Controller('sales')
export class SalesController {


constructor(
 private readonly salesService:SalesService
){}



@Get('summary')
summary(){

 return this.salesService.summary();

}



@Get('top-products')
topProducts(){

 return this.salesService.topProducts();

}



@Get('top-guests')
topGuests(){

 return this.salesService.topGuests();

}


}













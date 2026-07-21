import { Controller, Get } from '@nestjs/common';


@Controller('analytics')
export class AnalyticsController {


@Get('overview')
overview(){

return {

revenue:1500,

transactions:4,

averageTicket:375

};

}



@Get('products')
products(){

return [

{
product:"Premium Champagne"
}

];

}



@Get('guests')
guests(){

return [

{
guest:"Lorenzo Luxury VIP"
}

];

}


}












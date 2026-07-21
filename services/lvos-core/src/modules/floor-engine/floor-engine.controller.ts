import { Controller, Get } from '@nestjs/common';
import { FloorEngineService } from './floor-engine.service';


@Controller('floor-engine')
export class FloorEngineController {


constructor(
private readonly floorEngineService: FloorEngineService
){}



@Get('status')
status(){

return this.floorEngineService.status();

}


}
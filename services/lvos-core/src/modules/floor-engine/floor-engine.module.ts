import { Module } from '@nestjs/common';
import { FloorEngineController } from './floor-engine.controller';
import { FloorEngineService } from './floor-engine.service';


@Module({

controllers:[
FloorEngineController
],

providers:[
FloorEngineService
]

})
export class FloorEngineModule {}
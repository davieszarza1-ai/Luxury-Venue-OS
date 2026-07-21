import { Module } from '@nestjs/common';

import { InventoryService } from './inventory.service';

import { InventoryController } from './inventory.controller';

import { InventoryMovementService } from './inventory-movement.service';

import { InventoryMovementController } from './inventory-movement.controller';



@Module({

  controllers: [

    InventoryController,

    InventoryMovementController,

  ],


  providers: [

    InventoryService,

    InventoryMovementService,

  ],


  exports: [

    InventoryService,

    InventoryMovementService,

  ],

})


export class InventoryModule {}












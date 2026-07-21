import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';

import { JwtAuthGuard } from './common/auth/jwt-auth.guard';
import { PermissionsGuard } from './common/auth/permissions.guard';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PrismaModule } from './infrastructure/database/prisma.module';

import { IdentityModule } from './modules/identity/identity.module';
import { OrganizationModule } from './modules/organization/organization.module';
import { VenueModule } from './modules/venue/venue.module';
import { SpaceModule } from './modules/space/space.module';
import { TableModule } from './modules/table/table.module';
import { ProductModule } from './modules/product/product.module';
import { InventoryModule } from './modules/inventory/inventory.module';
import { OrderModule } from './modules/order/order.module';
import { OrderEventModule } from './modules/order-event/order-event.module';
import { ReservationModule } from './modules/reservation/reservation.module';
import { PaymentModule } from './modules/payment/payment.module';
import { GuestModule } from './modules/guest/guest.module';
import { SalesModule } from './modules/sales/sales.module';
import { AnalyticsModule } from './modules/analytics/analytics.module';
import { FloorEngineModule } from './modules/floor-engine/floor-engine.module';
import { ReportsModule } from './modules/reports/reports.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';


@Module({

  imports: [

    PrismaModule,

    IdentityModule,
    OrganizationModule,
    VenueModule,
    SpaceModule,
    TableModule,
    ProductModule,
    InventoryModule,
    OrderModule,
    OrderEventModule,
    ReservationModule,
    PaymentModule,
    GuestModule,
    SalesModule,
      AnalyticsModule,
    FloorEngineModule,
    ReportsModule,
    DashboardModule,

  ],


  controllers: [

    AppController,

  ],


  providers: [

    AppService,

    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },

    {
      provide: APP_GUARD,
      useClass: PermissionsGuard,
    },

  ],


})

export class AppModule {}














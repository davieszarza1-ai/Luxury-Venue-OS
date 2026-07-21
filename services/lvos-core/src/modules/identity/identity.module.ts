import { Module } from '@nestjs/common';

import { JwtModule } from '@nestjs/jwt';

import { PassportModule } from '@nestjs/passport';

import { IdentityController } from './identity.controller';

import { IdentityService } from './identity.service';

import { JwtStrategy } from '../../common/auth/strategies/jwt.strategy';

import { JWT_SECRET } from '../../common/auth/jwt.constants';


@Module({

  imports: [

    PassportModule,

    JwtModule.register({

      secret: JWT_SECRET,

      signOptions: {

        expiresIn: '8h',

      },

    }),

  ],


  controllers: [

    IdentityController,

  ],


  providers: [

    IdentityService,

    JwtStrategy,

  ],


  exports: [

    IdentityService,

    JwtModule,

  ],

})

export class IdentityModule {}












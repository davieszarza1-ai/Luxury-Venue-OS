import {
  CanActivate,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';

import { Reflector } from '@nestjs/core';

import { PrismaService } from '../../../infrastructure/database/prisma.service';

import { PERMISSIONS_KEY } from '../decorators/permissions.decorator';


@Injectable()
export class PermissionsGuard implements CanActivate {


  constructor(
    private readonly reflector: Reflector,
    private readonly prisma: PrismaService,
  ) {}


  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {


    const requiredPermissions =
      this.reflector.getAllAndOverride<string[]>(
        PERMISSIONS_KEY,
        [
          context.getHandler(),
          context.getClass(),
        ],
      );


    if (!requiredPermissions || requiredPermissions.length === 0) {
      return true;
    }


    const request = context.switchToHttp().getRequest();


    const userId = request.user?.id;


    if (!userId) {
      return false;
    }


    const user =
      await this.prisma.user.findUnique({

        where: {
          id: userId,
        },


        include: {

          role: {

            include: {

              permissions: {

                include: {
                  permission:true,
                },

              },

            },

          },

        },

      });



    if (!user) {
      return false;
    }



    const userPermissions =
      user.role!.permissions.map(
        item => item.permission.name,
      );



    return requiredPermissions.every(
      permission =>
        userPermissions.includes(permission),
    );


  }

}













import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../../infrastructure/database/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class IdentityService {

  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}



  async getStatus() {

    return {
      module: 'identity',
      status: 'active',
      features: [
        'users',
        'roles',
        'permissions',
        'access-control',
      ],
    };

  }



  async getRoles() {

    return this.prisma.role.findMany({

      include: {

        permissions: {

          include: {

            permission:true,

          },

        },

      },

    });

  }



  async getPermissions() {

    return this.prisma.permission.findMany({

      include: {

        roles:true,

      },

    });

  }



  async getUsers() {

    return this.prisma.user.findMany({

      include: {

        role:true,

        venue: true,

      },

    });

  }



  async login(loginDto: LoginDto) {


    const user = await this.prisma.user.findUnique({

      where: {

        email: loginDto.email,

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

        venue: true,

      },

    });



    if (!user || !user.password) {

      throw new UnauthorizedException(
        'Invalid credentials',
      );

    }



    const passwordValid = await bcrypt.compare(

      loginDto.password,

      user.password,

    );



    if (!passwordValid) {

      throw new UnauthorizedException(
        'Invalid credentials',
      );

    }



    const permissions = user.role!.permissions.map(

      item => item.permission.name,

    );



    const payload = {

      sub: user.id,

      role: user.role!.name,

      permissions,

    };



    const accessToken = await this.jwtService.signAsync(

      payload,

    );



    return {

      accessToken,

      user: {

        id: user.id,

        name: user.name,

        email: user.email,

        role: user.role!.name,

        permissions,

      },

    };

  }

}





















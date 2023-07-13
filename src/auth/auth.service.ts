import { PrismaService } from './../prisma/prisma.service';

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { registerDto, loginDto } from './dto';
import * as argon from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService,
    private configService: ConfigService
  ) {}

  async register(paramDto: registerDto) {
    //Insert into db
    try {
      const user = await this.prismaService.user.create({
        data: {
          email: paramDto.email,
          password: await argon.hash(paramDto.password),
          mobile: '',
          firstName: '',
          lastName: '',
          state: 1,
          isDeleted: 0,
        },
        select: {
          userId: true,
          email: true,
          mobile: true,
          firstName: true,
          lastName: true,
          state: true,
        },
      });
      return user;
    } catch (err) {
      if (err.code == 'P2002') {
        throw new HttpException('Email is exist, please try again', HttpStatus.BAD_REQUEST); //status error code prisma (contraint unique)
      }
    }
  }

  async login(paramDto: loginDto) {
    const user = await this.prismaService.user.findUnique({
      where: { email: paramDto.email },
    });
    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);

    const decodePassword = await argon.verify(user.password, paramDto.password);
    if (!decodePassword) throw new HttpException('Incorrect password', HttpStatus.BAD_REQUEST);

    // delete user.password; //remove field password in the object

    return await this.signJwt(user.userId, user.email);
  }

  //Now convert to an object, not string
  async signJwt(userId: string | number, email: string): Promise<{ accessToken: string }> {
    const payload = {
      sub: userId,
      email,
    };

    const jwtString = await this.jwtService.signAsync(payload, {
      expiresIn: '100m',
      secret: this.configService.get('JWT_SECRET_KEY'),
    });

    return {
      accessToken: jwtString,
    };
  }
}

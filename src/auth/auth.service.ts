import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';

@Injectable({})
export class AuthService {
  constructor(private prismaService: PrismaService) {}

  async doSignUp(authDto: AuthDto) {
    const password = await argon.hash(authDto.password);
    const user = await this.prismaService.user.create({
      data: {
        email: authDto.email,
        password,
        firstName: authDto.email,
        avatar: 'https://cdn.pupi.vn/images/teacher/teacher-badges/silver-badge.webp',
        gender: 1,
        mobile: Number(authDto.mobile),
        createdAt: Math.floor(Date.now() / 1000),
        updatedAt: Math.floor(Date.now() / 1000),
        isDeleted: 0,
      },
      select: {
        user_id: true,
        firstName: true,
        lastName: true,
        mobile: true,
        createdAt: true,
        updatedAt: true,
        isDeleted: true,
      },
    });
    return user;
  }

  doSignIn() {
    return {
      message: 'login',
    };
  }
}

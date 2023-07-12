import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../auth/decorator/user.decorator';
import { User as UserEntity } from '@prisma/client';

@Controller('user')
export class UserController {
  @UseGuards(AuthGuard('jwt')) //required token to access
  @Get('me')
  me(@User() user: UserEntity) {
    return user;
  }
}

import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../auth/decorator/user.decorator';

@Controller('user')
export class UserController {
  @UseGuards(AuthGuard('jwt')) //required token to access
  @Get('me')
  me(@User() user: any) {
    return user;
  }
}

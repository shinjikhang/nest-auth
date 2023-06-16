import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
  }

  @Get('register')
  doSignUp(@Body() body: AuthDto) {
    return this.authService.doSignUp(body);
  }

  @Post('sign-in')
  doSignIn() {
    return this.authService.doSignIn();
  }
}
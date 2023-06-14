import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
  }

  @Get('register')
  doSignUp() {
    return this.authService.doSignUp();
  }

  @Post('sign-in')
  doSignIn() {
    return this.authService.doSignIn();
  }
}
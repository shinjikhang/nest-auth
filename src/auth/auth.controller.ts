import { AuthService } from './auth.service';
import { Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register() {
    return 'register user';
  }

  @Post('login')
  login() {
    return 'login user';
  }
}

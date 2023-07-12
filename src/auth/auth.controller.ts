import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';
import { registerDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register(@Body() body: registerDto) {
    return this.authService.register(body);
  }

  @Post('login')
  login(@Body() body: registerDto) {
    return this.authService.login(body);
  }
}

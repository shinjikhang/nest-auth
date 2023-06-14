import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  doSignUp() {
    return {
      'message': 1
    };
  }

  doSignIn() {
    return {
      'message': 'login'
    };
  }
}

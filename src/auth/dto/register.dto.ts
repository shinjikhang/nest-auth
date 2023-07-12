//Define a "type" of authentication request

import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class registerDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  mobile: string;
}

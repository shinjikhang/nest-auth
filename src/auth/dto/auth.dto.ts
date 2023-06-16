// Define type of auth request
// export interface AuthDto {
import { IsEmail, IsInt, IsMobilePhone, IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';

export class AuthDto {
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  @Length(6, 24)
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  // @IsNumber()
  @IsNotEmpty()
  mobile: number;
}
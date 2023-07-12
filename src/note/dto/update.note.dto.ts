import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class updateNoteDto {
  @IsString()
  @IsNotEmpty()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsNotEmpty()
  url?: string;

  //   createdAt: Date;
  userId?: number;
}

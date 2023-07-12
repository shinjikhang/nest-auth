import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class insertNoteDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsNotEmpty()
  url: string;

  //   createdAt: Date;

  userId: number;
}

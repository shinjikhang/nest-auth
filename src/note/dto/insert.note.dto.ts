import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';

export class InsertNoteDto {
  @IsString()
  @IsNotEmpty()
  @Length(5)
  title: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsNotEmpty()
  url: string;
}

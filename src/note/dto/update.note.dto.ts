import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';
import { InsertNoteDto } from './insert.note.dto';
import { PartialType } from '@nestjs/mapped-types';
// import { PartialType } from '@nestjs/mapped-types';

export class UpdateNoteDto extends PartialType(InsertNoteDto) {
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

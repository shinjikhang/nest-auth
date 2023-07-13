import { UpdateNoteDto } from './dto/update.note.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { NoteService } from './note.service';
import { User } from 'src/auth/decorator/user.decorator';
import { User as UserEntity } from '@prisma/client';
import { InsertNoteDto } from './dto';

@UseGuards(AuthGuard('jwt'))
@Controller('note')
export class NoteController {
  constructor(private noteService: NoteService) {}
  @Get()
  getNotes(@User('userId') userId: number) {
    return this.noteService.getNotes(userId);
  }

  @Get(':id') //example : note/123
  getNote(@Param('id', ParseIntPipe) noteId: number) {
    return this.noteService.getNote(noteId);
  }

  @Post()
  insert(@User('userId') userId: number, @Body() insertDto: InsertNoteDto) {
    return this.noteService.insert(userId, insertDto);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) noteId: number, @Body() updateDto: UpdateNoteDto) {
    return this.noteService.update(noteId, updateDto);
  }

  @Delete()
  delete(@Param('noteId', ParseIntPipe) noteId: number) {
    return this.noteService.delete(noteId);
  }
}

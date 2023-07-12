import { Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { NoteService } from './note.service';
import { User } from 'src/auth/decorator/user.decorator';
import { User as UserEntity } from '@prisma/client';

@UseGuards(AuthGuard('jwt'))
@Controller('note')
export class NoteController {
  constructor(private noteService: NoteService) {}
  @Get()
  getNotes(@User() user: UserEntity) {
    return this.noteService.getNotes();
  }

  @Get(':id') //example : note/123
  getNote(@Param('id') noteId: number) {
    // return this.noteService.getNote();
  }

  @Post()
  insert() {
    // return this.noteService.insert();
  }

  @Put()
  update() {
    // return this.noteService.update();
  }

  @Delete()
  delete() {
    // return this.noteService.delete();
  }
}

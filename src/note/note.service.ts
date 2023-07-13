import { Injectable, NotFoundException } from '@nestjs/common';
import { InsertNoteDto, UpdateNoteDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class NoteService {
  constructor(private prismaService: PrismaService) {}
  getNotes(userId: number) {
    //get notes of user logged in
    const notes = this.prismaService.note.findMany({
      where: {
        userId: userId,
      },
    });
    return notes;
  }

  async getNote(noteId: number) {
    const note = await this.prismaService.note.findFirst({
      where: {
        noteId: noteId,
      },
    });

    if (!note) throw new NotFoundException(`Note #${noteId} not found`);

    return note;
  }

  async insert(userId: number, insertDto: InsertNoteDto) {
    // phải await kết quả trả về r mới xử lý tiếp
    const note = await this.prismaService.note.create({
      data: {
        ...insertDto,
        userId: userId,
      },
    });

    return note;
  }

  update(noteId: number, updateDto: UpdateNoteDto) {
    return 'a';
  }

  delete(noteId: number) {
    return 'delete';
  }
}

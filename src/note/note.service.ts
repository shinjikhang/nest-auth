import { Injectable } from '@nestjs/common';

@Injectable()
export class NoteService {
  // constructor() {}
  getNotes() {
    return 'get all';
  }
}
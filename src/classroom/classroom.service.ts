import { Injectable } from '@nestjs/common';
import { Classroom } from './interfaces/calssroom.interface';

@Injectable()
export class ClassroomService {
  private readonly classrooms: Classroom[] = [];

  findAll(): Classroom[] {
    return this.classrooms;
  }

  create(classroom: Classroom) {
    this.classrooms.push(classroom);
  }

}

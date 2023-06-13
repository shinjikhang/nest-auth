import { Controller, Get } from '@nestjs/common';
import { ClassroomService } from './classroom.service';
import { Classroom } from './interfaces/calssroom.interface';

@Controller('classroom')
export class ClassroomController {
  constructor(private service: ClassroomService) {
  }

  @Get()
  async findAll(): Promise<Classroom[]> {
    return this.service.findAll();
  }
}

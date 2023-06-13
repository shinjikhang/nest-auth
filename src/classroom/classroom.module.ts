import { Module } from '@nestjs/common';
import { ClassroomController } from './classroom.controller';
import { ClassroomService } from './classroom.service';

@Module({
  controllers: [ClassroomController],
  providers: [ClassroomService],
  exports: [ClassroomService] //share module can be reused by any module
})
export class ClassroomModule {
  constructor(private classroomService: ClassroomService) {
  }
}
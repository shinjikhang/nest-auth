import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  imports: [PrismaService],
  exports: [PrismaService] //other service can use PrismaService
})
//This module is used connect DB
export class PrismaModule {
}

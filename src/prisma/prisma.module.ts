import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() //this is global service, any service can be call this service and dont need import
@Module({
  providers: [PrismaService],
  exports: [PrismaService] //other service can use PrismaService
})
//This module is used connect DB
export class PrismaModule {
}

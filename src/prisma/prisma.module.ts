import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() //this is global module, any module can use
@Module({
  providers: [PrismaService],
  exports: [PrismaService], //other modules can use PrismaService
})
export class PrismaModule {}

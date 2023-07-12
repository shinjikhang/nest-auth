import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';
import { config, env } from 'process';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(private configService: ConfigService) {
    super({
      datasources: {
        db: {
          // url: 'postgresql://SK01102021:postgrespassword@localhost:5432/authen?schema=public',
          url: configService.get('DATABASE_URL'), //package config service giúp đọc dữ liệu từ file .env
        },
      },
    });
  }
}

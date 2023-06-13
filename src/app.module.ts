// import { Module } from '@nestjs/common';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClassroomModule } from './classroom/classroom.module';
import { CollectionController } from './collection/collection.controller';
import { CollectionService } from './collection/collection.service';
import { logger } from './common/middleware/logger.middleware';

@Module({
  imports: [ClassroomModule],
  controllers: [AppController, CollectionController],
  providers: [AppService, CollectionService]
})
// export class AppModule {
// }

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      // .apply(logger,loggera,loggerb)
      .apply(logger)
      // .exclude(
      //   { path: 'classroom', method: RequestMethod.GET },
      //   { path: 'classroom', method: RequestMethod.POST },
      //   'classroom/(.*)'
      // )
      .forRoutes('*');
  }
}

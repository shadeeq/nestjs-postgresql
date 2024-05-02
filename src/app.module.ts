import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserService } from './user.service';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './interceptors/http-exception.filter';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    UserService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}

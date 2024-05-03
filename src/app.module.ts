import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserService } from './user.service';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './interceptors/http-exception.filter';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'vfrc_SHADIQ_1989',
      entities: [],
      database: 'users',
      synchronize: true,
      logging: true,
    }),
  ],
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

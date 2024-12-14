import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { ResponseServices } from 'src/commonService/response.services';
import { Sequelize } from 'sequelize-typescript';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    ResponseServices,
    { provide: 'SEQUELIZE', useExisting: Sequelize },
  ],
})
export class UsersModule {}

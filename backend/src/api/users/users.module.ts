import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { ResponseServices } from 'src/commonService/response.services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/models/User.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [
    UsersService,
    ResponseServices,
  ],
})
export class UsersModule {}

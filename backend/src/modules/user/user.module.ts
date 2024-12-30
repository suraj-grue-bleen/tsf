import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from 'src/database/models/User.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResponseServices } from 'src/common/response.services';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService, ResponseServices],
})
export class UserModule {}

import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt/jwtStrategy';
import { ResponseServices } from 'src/commonService/response.services';
import { JwtModule } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
let env = dotenv.config().parsed;

@Module({
  imports:[
    JwtModule.register({
      secret: env['JWT_SECRET'],
      signOptions: { expiresIn: '48h' },
    }),
  ],
  controllers: [AuthController,],
  providers: [
    AuthService,
    JwtStrategy,
    ResponseServices
  ]
})
export class AuthModule {}

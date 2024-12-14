import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { UsersModule } from './api/users/users.module';
import { AuthModule } from './auth/auth.module';

export const ROUTES = [
    {
        path: 'api/',
        children: [
            {
            path: 'user',
            module: UsersModule,
            }
        ]
    }
]

@Module({
    imports: [
      RouterModule.register(ROUTES),
      UsersModule,
      AuthModule,
     
    ],
    providers: [], 
  })
  export class AppRoutingModule {}
  
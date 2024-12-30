import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';

export const ROUTES = [
  {
    path: 'api/v1/',
    children: [
      {
        path: 'user',
        module: UserModule,
      },
      {
        path: 'auth',
        module: AuthModule,
      },
    ],
  },
];

let MODULES = [UserModule, AuthModule]
@Module({
  imports: [RouterModule.register(ROUTES), ...MODULES],
  providers: [],
})
export class AppRoutingModule {}

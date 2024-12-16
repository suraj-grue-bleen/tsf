import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MODELS } from 'src/models';
import { AppRoutingModule } from './app-routing.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { config } from 'dotenv';
import db_config from './config/config.json';
import { MulterModule } from '@nestjs/platform-express';
let _ENV = config().parsed;
let _NODEENV = _ENV['NODE_ENV'];

/**Sequelize connection */
let CONNECTION: any = {
  ...db_config[_NODEENV],
  entities: MODELS,
  synchronize: true, // Set to false in production
  logging: false,

  dialectOptions: {
    // useUTC: false,
    dateStrings: true,
    typeCast: function (field: any, next: any) {
      if (field.type === 'DATETIME') {
        return field.string();
      }
      return next();
    },
  },

  pool: {
    handleDisconnects: true,
    max: 10000,
    min: 1,
    acquire: 200000,
  },
  timezone: '+05:30',
  
};

let MAIL_CONFIG = [
  MailerModule.forRoot({
    transport: {
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: '6a2a3deb28c9a0',
        pass: '05e3aafa86253e',
      },
    },
  }),
];

let MULTER_CONFIG = [
  MulterModule.register({
    dest: './public/uploads',
  }),
];

let MODULES = [TypeOrmModule.forRoot(CONNECTION), AppRoutingModule];
MODULES = [...MODULES, ...MAIL_CONFIG, ...MULTER_CONFIG];

@Module({
  imports: MODULES,
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

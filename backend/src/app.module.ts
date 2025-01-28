import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MODELS } from 'src/database/models'; 
import { AppService } from './app.service';
import { AppDataSource } from 'ormconfig';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppRoutingModule } from './app.routing.module';

let CONNECTION: any = {
  ...AppDataSource.options,
  entities: MODELS,
  synchronize: false, // Set to false in production

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

let MULTER_CONFIG = [
  MulterModule.register({
    dest: './public/uploads',
  }),
];

let MODULES = [TypeOrmModule.forRoot(CONNECTION), ...MULTER_CONFIG, AppRoutingModule];

@Module({
  imports: MODULES,
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadGatewayException, ValidationPipe, ValidationError } from '@nestjs/common';
import { config } from 'dotenv';
let _ENV = config().parsed;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(_ENV.PORT);    //await app.listen(3001);
}
bootstrap();

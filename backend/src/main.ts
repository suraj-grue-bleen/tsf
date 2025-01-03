import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { config } from 'dotenv';
let _ENV = config().parsed;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      exceptionFactory: (errors) => {
        const firstError = errors[0];
        return new BadRequestException(
          Object.values(firstError.constraints)[0],
        );
      },
    }),
  );

  await app.listen(_ENV.PORT ?? 3000);
}
bootstrap();

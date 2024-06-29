// // src/main.ts
// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);

//   // 글로벌 설정 추가 (예: 글로벌 파이프라인, 미들웨어 등)
//   // app.useGlobalPipes(new ValidationPipe());
//   // app.useGlobalFilters(new AllExceptionsFilter());

//   await app.listen(3000);
// }
// bootstrap();

// src/main.ts
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}

bootstrap();

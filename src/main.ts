import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as path from "path";
import * as express from "express";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(path.join(__dirname, 'dist'));
  app.use("api", express.static(path.join(__dirname, 'dist')));
  await app.listen(process.env.PORT || 3000);
}
bootstrap();

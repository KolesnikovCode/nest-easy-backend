import { NestFactory } from '@nestjs/core';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

const bodyLimit = 10048576;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new FastifyAdapter({ bodyLimit }));
  app.enableCors();
  await app.listen(8080);
}
bootstrap();

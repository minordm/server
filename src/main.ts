import { NestFactory } from '@nestjs/core';
import { AppModule /*, ObserveInstrument*/ } from './app.module.js';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    // instrument: ObserveInstrument,
  });

  app.enableCors();
  app.useStaticAssets(join(__dirname, '..', '..', 'static'));
  app.setBaseViewsDir(join(__dirname, '..', '..', 'views'));
  app.setViewEngine('ejs');

  app.enableShutdownHooks();

  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();

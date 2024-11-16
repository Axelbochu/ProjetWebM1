import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { config } from 'dotenv';
import { join } from 'path';
import { AppModule } from './app.module';

config();

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Validation des DTOs
  app.useGlobalPipes(new ValidationPipe());

  // CORS pour permettre les requêtes cross-origin
  app.enableCors();

  // Servir les fichiers statiques (par ex., images uploadées)
  app.useStaticAssets(join(__dirname, '..', 'uploads'), {
    prefix: '/uploads', // Les images seront accessibles via /uploads/<nom du fichier>
  });

  // Écoute sur le port configuré dans .env
  await app.listen(process.env.PORT);

  console.log(`🚀 API listening on PORT ${process.env.PORT}`);
}

bootstrap();

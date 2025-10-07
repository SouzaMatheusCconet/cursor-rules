import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe, Logger } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const config = app.get(ConfigService);
    app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: false }));
    const port = config.get<number>('PORT') || 3000;
    await app.listen(port);
    Logger.log(`Application listening on port ${port}`);
}

bootstrap();

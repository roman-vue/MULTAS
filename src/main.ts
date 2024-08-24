import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerConfig } from './swagger/swagger';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1/infinitum/');
  SwaggerConfig.ConfigSwaggerModule(app);
  let port = 3000;
  await app.listen(port, () => {
    // Logger.debug(`${configService.get<string>('URI_MONGODB')}`);
    Logger.log('APP', `Infinitum is running on http://localhost:${port}`);
    Logger.debug(
      'APP',
      `Swagger is running on http://localhost:${port}/api/v1/infinitum/docs`,
    );
  });
}
bootstrap();

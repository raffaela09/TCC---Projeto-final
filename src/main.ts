import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { LogInteceptor } from './Interceptors/log.interceptor';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const corsOptions: CorsOptions = {
    origin: '*', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  };
  app.enableCors(corsOptions);
  app.useGlobalInterceptors(new LogInteceptor());
  await app.listen(3000);

}
bootstrap();

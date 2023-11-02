// declare const module: any;
require('module-alias/register')
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
    .setTitle('Order API')
    .setDescription('The Order API description')
    .setVersion('1.0.0')
    // .addTag('nestjs')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);


  // app.enableCors({
  //   origin: 'http://localhost:3000', // Địa chỉ origin của ứng dụng Vue.js của bạn
  //   methods: ['GET', 'POST'],
  //   allowedHeaders: ['Content-Type'],
  //   credentials: true,
  // });

  await app.listen(9000);
  
  // if (module.hot) {
  //   module.hot.accept();
  //   module.hot.dispose(() => app.close());
  // }

  
}
bootstrap();

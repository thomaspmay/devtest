import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'users',
      protoPath: join(__dirname, '../../protocols/userProtocols/users.proto'),
      url: 'localhost:55559'
    },
  });
  await app.listen(() => console.log('Microservice is listening'))
}
bootstrap();

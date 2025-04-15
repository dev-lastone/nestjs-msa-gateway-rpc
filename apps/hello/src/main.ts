import { NestFactory } from '@nestjs/core';
import { HelloModule } from './hello.module';
import { MicroserviceOptions } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import { ConfigService } from './config.service';

async function bootstrap() {
  const config = new ConfigService();
  const options = config.get('service');
  const port = config.get('port');

  const app = await NestFactory.create(HelloModule);
  app.connectMicroservice<MicroserviceOptions>(options);
  await app.startAllMicroservices();
  await app.listen(port);

  Logger.log(
    `🚀 Application is running on: TCP ${JSON.stringify(
      options,
    )} with http ${port} port`,
    'bootstrap-hybrid',
  );
}
bootstrap();

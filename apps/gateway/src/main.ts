import { NestFactory } from '@nestjs/core';
import { GatewayModule } from './gateway.module';
import { ConfigService } from './config.service';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const config = new ConfigService();
  const port = config.get('port');

  const app = await NestFactory.create(GatewayModule);
  await app.listen(port);

  Logger.log(
    `🚀 Application is running on: http://localhost:${port}`,
    'bootstrap',
  );
}
bootstrap();

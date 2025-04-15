import { Module } from '@nestjs/common';
import { GatewayController } from './gateway.controller';
import { GatewayService } from './gateway.service';
import { ConfigModule } from '@nestjs/config';
import { ClientProxyFactory } from '@nestjs/microservices';
import { ConfigService } from './config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [GatewayController],
  providers: [
    ConfigService,
    {
      provide: process.env.HELLO_SERVICE_NAME,
      useFactory: (configService: ConfigService) => {
        const options = configService.get('helloService');
        return ClientProxyFactory.create(options);
      },
      inject: [ConfigService],
    },
    GatewayService,
  ],
})
export class GatewayModule {}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientProxyFactory } from '@nestjs/microservices';
import { ConfigService } from './config.service';
import { HelloController } from '@app/controller/hello.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [HelloController],
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
  ],
})
export class GatewayModule {}

import { Module } from '@nestjs/common';
import { HelloMessageController } from './hello.message.controller';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from './config.service';
import { ClientProxyFactory } from '@nestjs/microservices';
import { HelloController } from '@app/controller/hello.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [HelloMessageController, HelloController],
  providers: [
    ConfigService,
    {
      provide: 'HELLO_SERVICE',
      useFactory: (configService) => {
        const options = configService.get('service');
        return ClientProxyFactory.create(options);
      },
      inject: [ConfigService],
    },
  ],
})
export class HelloModule {}

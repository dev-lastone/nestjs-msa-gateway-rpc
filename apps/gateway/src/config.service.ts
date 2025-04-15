import { Transport } from '@nestjs/microservices';

export class ConfigService {
  private readonly envConfig: { [key: string]: any } = {};

  constructor() {
    this.envConfig.port = +process.env.GATEWAY_PORT || 3000;

    this.envConfig.helloService = {
      name: process.env.HELLO_SERVICE_NAME,
      transport: Transport.TCP,
      options: {
        host: process.env.HELLO_SERVICE_HOST,
        port: +process.env.HELLO_SERVICE_PORT,
      },
    };
  }

  get(key: string): any {
    return this.envConfig[key];
  }
}

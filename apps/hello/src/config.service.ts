import { Transport } from '@nestjs/microservices';

export class ConfigService {
  private readonly envConfig: { [key: string]: any } = {};

  constructor() {
    this.envConfig.service = {
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

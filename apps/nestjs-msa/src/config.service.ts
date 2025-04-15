import { Transport } from '@nestjs/microservices';

export class ConfigService {
  private readonly envConfig: { [key: string]: any } = {};

  constructor() {
    this.envConfig.service = {
      transport: Transport.TCP,
      options: {
        host: process.env.MS_HOST,
        port: +process.env.MS_PORT,
      },
    };
  }

  get(key: string): any {
    return this.envConfig[key];
  }
}

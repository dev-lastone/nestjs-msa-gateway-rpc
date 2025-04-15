import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor() {}

  @MessagePattern({ cmd: 'hello' })
  executeHello(name: string): string {
    return `hello ${name}`;
  }
}

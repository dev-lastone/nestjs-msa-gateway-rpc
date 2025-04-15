import { Controller, Get, Inject, Query } from '@nestjs/common';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(
    @Inject('HELLO_SERVICE')
    private readonly helloProxy: ClientProxy,
  ) {}

  @MessagePattern({ cmd: 'hello' })
  executeHello(name: string): string {
    return `hello ${name}`;
  }

  @Get('hello')
  getHello(@Query('name') name: string): Observable<string> {
    return this.helloProxy.send({ cmd: 'hello' }, name);
  }
}

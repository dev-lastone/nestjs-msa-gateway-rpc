import { Controller, Get, Inject, Query } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller()
export class GatewayController {
  constructor(
    @Inject('HELLO_SERVICE')
    private readonly helloProxy: ClientProxy,
  ) {}

  @Get('hello')
  getHello(@Query('name') name: string): Observable<string> {
    return this.helloProxy.send({ cmd: 'hello' }, name);
  }
}

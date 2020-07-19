import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {

  constructor(@Inject('MATH_SERVICE') private readonly client: ClientProxy) { }

  async onApplicationBootstrap() {
    await this.client.connect();
  }

  accumulate(): Observable<number> {
    const pattern = { cmd: 'test_decorator' };
    const payload = [1, 2, 3, 4, 5, 6];
    return this.client.send<number>(pattern, payload);
  }

  getHello(): string {
    return 'Hello World from client!';
  }
}

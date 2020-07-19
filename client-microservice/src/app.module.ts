import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Transport, ClientsModule } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'MATH_SERVICE', transport: Transport.TCP, options: {
        host: 'localhost', 
        port: 7086
      } },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';


@Controller()
export class AppController {
  
  constructor(private appService: AppService) {}

  @Get()
  async Index() : Promise<any> {
    return new Promise((resolve, reject) => {
        this.appService.accumulate().subscribe(res => resolve(res), err => reject(err)); 
    });
  }

}

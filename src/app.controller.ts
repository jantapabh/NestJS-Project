import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// 1 Controller แทนด้วย route 1 ชุด

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() //Get Method
  getHello1(): string {
    return "Hello 1";
  }

  
  @Get('/hello2') //Get Method
  getHello2(): string {
    return "Hello 2";
  }



}

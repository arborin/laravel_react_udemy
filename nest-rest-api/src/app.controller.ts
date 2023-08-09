import { Controller, Get, Body, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateItemDto } from './items/dto/create-item.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

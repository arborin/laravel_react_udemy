import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}

  @Get()
  findAll(): Item[] {
    return this.itemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return this.itemService.findOne(id);
  }
  @Post()
  createItem(@Body() data: CreateItemDto): string {
    return `name: ${data.name}, description ${data.description}`;
  }

  @Delete(':id')
  deleteItem(@Param('id') id: string): string {
    return `Delete id: ${id}`;
  }

  @Put(':id')
  updateItem(@Body() data: CreateItemDto, @Param('id') id: string): string {
    return `Update id: ${id}`;
  }
}

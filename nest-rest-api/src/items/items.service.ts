import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '123123123',
      name: 'item one',
      qty: 100,
      description: 'this is item one',
    },
    {
      id: '123123123',
      name: 'item one',
      qty: 100,
      description: 'this is item one',
    },
  ];

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: string): Item {
    return this.items.find((item) => item.id === id);
  }
}

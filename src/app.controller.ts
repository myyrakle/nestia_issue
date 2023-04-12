import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import core from "@nestia/core";

export class Item {
    name:string 
    price: number
    
    constructor(name:string, price: number) {
        this.name = name
        this.price = price
    }
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @core.TypedRoute.Post()
  getHello(): string {
    return 'OK';
  }

  @core.TypedRoute.Get("/item/:id")
  getItem(@Param('id') id: string): Item {
    return {
      name: "item test",
      price: 100
    };
  }

  @core.TypedRoute.Post("/item")
  createItem(@Body() item: Item): Item {
    // save item ...
    return item;
  }
}

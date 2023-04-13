import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from '../app.service';
import core from "@nestia/core";

export class Item {
    name: String 
    price: number
    
    constructor(name:String, price: number) {
        this.name = name
        this.price = price
    }
}

@Controller("/")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @core.TypedRoute.Get("/item/:id")
  public getItem(@core.TypedParam('id') id: String): Item {
    return {
      name: "item test",
      price: 100
    };
  }

  @core.TypedRoute.Post("/item")
  public createItem(@core.TypedBody() item: Item): Item {
    // save item ...
    return item;
  }
}

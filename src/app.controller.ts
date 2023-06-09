import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import core from "@nestia/core";

export class Item {
    name: String 
    price: number
    
    constructor(name:String, price: number) {
        this.name = name
        this.price = price
    }
}

/**
 * 기본 컨트롤러
*/
@Controller("")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @core.TypedRoute.Get("/")
  index(): string {
    return "OK"
  }

  /**
     * 상품 개별조회.
     *
     * @param id 상품 id
     * @returns 상품정보
  */
  @core.TypedRoute.Get("/item/:id")
  getItem(@core.TypedParam('id') id: string): Item {
    return {
      name: "item test",
      price: 100
    };
  }

  /**
     * 상품 추가.
     *
     * @param item 상품 입력 데이터
     * @returns 상품정보
  */
  @core.TypedRoute.Post("/item")
  createItem(@core.TypedBody() item: Item): Item {
    // save item ...
    return item;
  }
}

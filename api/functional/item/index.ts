/**
 * @packageDocumentation
 * @module api.functional.item
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher } from "@nestia/fetcher";
import type { IConnection } from "@nestia/fetcher";

import type { Item } from "./../../../src/app.controller";

/**
 * 상품 개별조회.
 * 
 * @param connection connection Information of the remote HTTP(s) server with headers (+encryption password)
 * @param id 상품 id
 * @returns 상품정보
 * 
 * @controller AppController.getItem()
 * @path GET /item/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export function getItem
    (
        connection: IConnection,
        id: string
    ): Promise<getItem.Output>
{
    return Fetcher.fetch
    (
        connection,
        getItem.ENCRYPTED,
        getItem.METHOD,
        getItem.path(id)
    );
}
export namespace getItem
{
    export type Output = Item;

    export const METHOD = "GET" as const;
    export const PATH: string = "/item/:id";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export function path(id: string): string
    {
        return `/item/${encodeURIComponent(id)}`;
    }
}

/**
 * 상품 추가.
 * 
 * @param connection connection Information of the remote HTTP(s) server with headers (+encryption password)
 * @param item 상품 입력 데이터
 * @returns 상품정보
 * 
 * @controller AppController.createItem()
 * @path POST /item
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export function createItem
    (
        connection: IConnection,
        item: Item
    ): Promise<createItem.Output>
{
    return Fetcher.fetch
    (
        connection,
        createItem.ENCRYPTED,
        createItem.METHOD,
        createItem.path(),
        item
    );
}
export namespace createItem
{
    export type Input = Item;
    export type Output = Item;

    export const METHOD = "POST" as const;
    export const PATH: string = "/item";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export function path(): string
    {
        return `/item`;
    }
}
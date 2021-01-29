import { Product } from "src/products/schemas/product.schema";

export class LookDto {
    readonly creatorFbUId: string;
    readonly title: string;
    readonly description: string;
    readonly gender: string;
    readonly tone: string;
    readonly priceCategory: string;
    readonly price: number;
    readonly topProduct: Product;
    readonly bottomProduct: Product;
    readonly shoesProduct: Product;
    readonly accessoryProduct: Product;
    readonly additionalAccessory: Product;
    readonly additionalTop: Product;
    readonly constitution: string;
    readonly event: string;
}

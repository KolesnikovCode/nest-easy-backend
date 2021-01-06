export class UpdateProductDto {
  readonly title: string;
  readonly description: string;
  readonly gender: string;
  readonly category: string;
  readonly constitution: string;
  readonly event: string;
  readonly tone: string;
  readonly priceCategory: string;
  readonly brand: string;
  readonly images: Array<string>;
  readonly price: number;
}

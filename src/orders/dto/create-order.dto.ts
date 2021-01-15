import { EOrderStatuses, TProductInOrder } from "../schemas/order.schema";

export class CreateOrderDto {
  readonly date: Date;
  readonly status: EOrderStatuses.NEW;
  readonly userId: string;
  readonly userName: string;
  readonly email: string;
  readonly adress: {
    city: string,
    street: string,
    houseNumber: string,

    index?: string,
    // Квартира
    flat?: string
    // Подъезд
    porch?: string,
    // Этаж
    floor?: string,
  };
  readonly phone: string;
  readonly products: Array<TProductInOrder>;
  readonly comment?: string;
};

import { EOrderStatuses, TOrderAdress, TProductInOrder } from "../schemas/order.schema";

export class CreateOrderDto {
  readonly date: Date;
  readonly status: EOrderStatuses.NEW;
  readonly userId: string;
  readonly userName: string;
  readonly email: string;
  readonly adress: TOrderAdress;
  readonly phone: string;
  readonly products: Array<TProductInOrder>;
  readonly comment?: string;
};

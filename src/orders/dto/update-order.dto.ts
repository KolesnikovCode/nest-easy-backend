import { EOrderStatuses } from "../schemas/order.schema";

export class UpdateOrderDto {
    readonly status: EOrderStatuses;
};

import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from './schemas/order.schema';

@Module({
  providers: [OrdersService],
  imports: [
    MongooseModule.forFeature([
        {
            name: Order.name,
            schema: OrderSchema
        }
    ])
]
})
export class OrdersModule {}

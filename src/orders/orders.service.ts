import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order, OrderDocument } from './schemas/order.schema';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
    constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>) {}

    async getAll(): Promise<Order[]> {
        return this.orderModel.find().exec();
    }

    async getById(id: string): Promise<Order> {
        return this.orderModel.findById(id);
    }

    async create(orderDto: CreateOrderDto): Promise<Order> {
        const newOrder = new this.orderModel(orderDto);

        return newOrder.save();
    }

    async update(id: string, productDto: UpdateOrderDto): Promise<Order> {
        return this.orderModel.findByIdAndUpdate(id, productDto, { new: true });
    }
}

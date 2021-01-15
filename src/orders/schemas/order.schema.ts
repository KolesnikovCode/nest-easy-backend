import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Product } from 'src/products/schemas/product.schema';

export type OrderDocument = Order & Document;

export type TProductInOrder = {
    quantity: number
} & Product;

export enum EOrderStatuses {
    NEW,
    CONFIRMED,
    ASSEMBLY,
    SENDED,
    CANCELLED
};

export type TOrderAdress = {
    city: string;
    street: string;
    houseNumber: string;

    index?: string;
    // Квартира
    flat?: string;
    // Подъезд
    porch?: string;
    // Этаж
    floor?: string;
}

@Schema()
export class Order {
    @Prop({ type: Date, required: true })
    date: Date;

    @Prop({ required: true })
    userId: string;

    @Prop({ required: true })
    userName: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    phone: string;

    @Prop({ type: Object, required: true })
    adress: TOrderAdress;

    @Prop({ required: true })
    products: Array<TProductInOrder>

    @Prop()
    comment: string;

    @Prop()
    status: number;

};

export const OrderSchema = SchemaFactory.createForClass(Order);

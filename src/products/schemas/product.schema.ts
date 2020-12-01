import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {

    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    gender: string;

    @Prop({ required: true })
    category: string; 

    @Prop({ required: true })
    tone: string;

    @Prop({ required: true })
    priceCategory: string;

    @Prop({ required: true })
    brand: string;

    @Prop({ required: true })
    image: Array<string>;

    @Prop({ required: true })
    price: number;

    @Prop()
    constitution: string;

    @Prop()
    event: string;

}

export const ProductSchema = SchemaFactory.createForClass(Product);

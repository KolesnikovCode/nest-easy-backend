import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BrandDocument = Brand & Document;

@Schema()
export class Brand {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    description: string;
}

export const BrandSchema = SchemaFactory.createForClass(Brand);

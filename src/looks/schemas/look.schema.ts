import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type LookDocument = Look & Document;

@Schema()
export class Look {
    @Prop({ required: true })
    creatorFbUId: string;

    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    gender: string;

    @Prop({ required: true })
    tone: string;

    @Prop({ required: true })
    priceCategory: string;

    @Prop({ required: true, type: Types.ObjectId , ref: 'Products' })
    topProduct: Types.ObjectId;

    @Prop({ required: true, type: Types.ObjectId , ref: 'Products' })
    bottomProduct: Types.ObjectId;

    @Prop({ required: true, type: Types.ObjectId , ref: 'Products' })
    shoesProduct: Types.ObjectId;

    @Prop({ type: Types.ObjectId , ref: 'Products' })
    accessoryProduct: Types.ObjectId;

    @Prop({ type: Types.ObjectId , ref: 'Products' })
    additionalAccessory: Types.ObjectId;

    @Prop({ type: Types.ObjectId , ref: 'Products' })
    additionalTop: Types.ObjectId;

    @Prop({ required: true })
    constitution: string;

    @Prop({ required: true })
    event: string;

};

export const LookSchema = SchemaFactory.createForClass(Look);

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from 'src/products/schemas/product.schema';
import { LookDto } from './dto/look.dto';
import { Look, LookDocument } from './schemas/look.schema';

@Injectable()
export class LooksService {

    constructor(@InjectModel(Look.name) private lookModel: Model<LookDocument>) {}

    async getAll(): Promise<any> {
        return this.lookModel
            .find()
            .populate('topProduct', null, Product)
            .populate('bottomProduct', null, Product)
            .populate('shoesProduct', null, Product)
            .populate('accessoryProduct', null, Product)
            .populate('additionalAccessory', null, Product)
            .populate('additionalTop', null, Product)
            .exec();
    }

    async getOne(id: string): Promise<any> {
        return this.lookModel.findById(id)
            .populate('topProduct', null, Product)
            .populate('bottomProduct', null, Product)
            .populate('shoesProduct', null, Product)
            .populate('accessoryProduct', null, Product)
            .populate('additionalAccessory', null, Product)
            .populate('additionalTop', null, Product);
    }

    async create(lookDto: LookDto): Promise<Look> {
        const newLook = new this.lookModel(lookDto);

        return newLook.save();
    }

    async remove(id: string): Promise<any> {
        return this.lookModel.findByIdAndDelete(id);
    }

}

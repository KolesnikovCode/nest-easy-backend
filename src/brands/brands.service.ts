import { BrandDto } from './dto/brand.dto';
import { Brand, BrandDocument } from './schemas/brand.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class BrandsService {
    constructor(@InjectModel(Brand.name) private brandModel: Model<BrandDocument>) {}

    async getAll(): Promise<Brand[]> {
        return this.brandModel.find().exec();
    }

    async getById(id: string): Promise<Brand> {
        return this.brandModel.findById(id);
    }

    async create(brandDto: BrandDto): Promise<Brand> {
        const newBrand = new this.brandModel(brandDto);

        return newBrand.save();
    }

    async remove(id: string): Promise<Brand> {
        return this.brandModel.findByIdAndDelete(id);
    }
}

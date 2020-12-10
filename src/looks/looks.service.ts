import { Injectable } from '@nestjs/common';

@Injectable()
export class LooksService {

    private readonly lookModel: any;

    async getAll(): Promise<any> {
        return this.lookModel.find().exec();
    }

    async getOne(id: string): Promise<any> {
        return this.lookModel.findById(id);
    }

    async remove(id: string): Promise<any> {
        return this.lookModel.findByIdAndDelete(id);
    }

}

import { BrandSchema, Brand } from './schemas/brand.schema';
import { BrandsController } from './brands.controller';
import { BrandsService } from './brands.service';
import { MongooseModule } from "@nestjs/mongoose";
import { Module } from '@nestjs/common';

@Module({
  providers: [BrandsService],
  controllers: [BrandsController],
  imports: [
      MongooseModule.forFeature([
          {
              name: Brand.name,
              schema: BrandSchema
          }
      ])
  ]
})
export class BrandsModule {

}

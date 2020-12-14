import { BrandDto } from './dto/brand.dto';
import { BrandsService } from './brands.service';
import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';

@Controller('brands')
export class BrandsController {

    constructor(private readonly brandServise: BrandsService) {}

    @Get()
    getAll() {
        return this.brandServise.getAll();
    }

    @Get(':id')
    getOne(@Param('id') id: string) {
        return this.brandServise.getById(id);
    }

    @Post()
    create(@Body() brandDto: BrandDto) {
        return this.brandServise.create(brandDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.brandServise.remove(id);
    }
    
}

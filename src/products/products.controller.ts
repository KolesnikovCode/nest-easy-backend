import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

    constructor(private readonly productService: ProductsService) {}

    // Get all products
    @Get()
    getAll() {
        return this.productService.getAll();
    }
    // Get one product
    @Get(':id')
    getOne(@Param('id') id: string) {
        return this.productService.getById(id);
    }
    // Create new product
    @Post()
    create(@Body() createProductDto: CreateProductDto) {
        return this.productService.create(createProductDto);
    }
    // Update product
    @Put(':id')
    update(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string) {
        return this.productService.update(id, updateProductDto)
    }
    // Remove product
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.productService.remove(id);
    }

}

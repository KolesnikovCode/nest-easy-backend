import {
    Body,
    Controller,
    Get,
    Param,
    Post
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

    constructor(private readonly productService: ProductsService) {}

    // Get all products
    @Get()
    getAll() {
        return this.productService.getAll()
    }
    // Get one product
    @Get(':id')
    getOne(@Param('id') id: string): string {
        return 'getOne ' + id
    }
    // Create new product
    @Post()
    create(@Body() createProductDto: CreateProductDto): string {
        return `Title: ${createProductDto.title} Price: ${createProductDto.price}`;
    }

}

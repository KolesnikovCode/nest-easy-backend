import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { LookDto } from './dto/look.dto';
import { LooksService } from './looks.service';

@Controller('looks')
export class LooksController {
    constructor(private readonly looksService: LooksService) {}

    // Get all looks
    @Get()
    getAll() {
        return this.looksService.getAll();
    }

    @Get(':id')
    getOne(@Param('id') id: string) {
        return this.looksService.getOne(id);
    }

    // Create new product
    @Post()
    create(@Body() lookDtop: LookDto) {
        return this.looksService.create(lookDtop);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.looksService.remove(id);
    }
}

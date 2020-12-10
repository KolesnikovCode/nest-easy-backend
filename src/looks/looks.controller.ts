import { Controller, Get } from '@nestjs/common';
import { LooksService } from './looks.service';

@Controller('looks')
export class LooksController {
    constructor(private readonly looksService: LooksService) {}

    // Get all looks
    @Get()
    getAll() {
        return []
    }
}

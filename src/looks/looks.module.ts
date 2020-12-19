import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LooksController } from './looks.controller';
import { LooksService } from './looks.service';
import { Look, LookSchema } from './schemas/look.schema';

@Module({
    providers: [LooksService],
    controllers: [LooksController],
    imports: [
        MongooseModule.forFeature([
            {
                name: Look.name,
                schema: LookSchema
            }
        ])
    ]
})
export class LooksModule {}

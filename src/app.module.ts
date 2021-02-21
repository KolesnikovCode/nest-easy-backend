import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { FilesModule } from './files/files.module';
import { LooksModule } from './looks/looks.module';
import { BrandsModule } from './brands/brands.module';
import { OrdersModule } from './orders/orders.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ProductsModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_DB_URL),
    FilesModule,
    LooksModule,
    BrandsModule,
    OrdersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

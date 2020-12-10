import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { FilesModule } from './files/files.module';
import { LooksController } from './looks/looks.controller';
import { LooksService } from './looks/looks.service';
import { LooksModule } from './looks/looks.module';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot('mongodb+srv://easy-admin:easy-admin@easy-backend.yizf9.mongodb.net/easy-backend?retryWrites=true&w=majority'),
    FilesModule,
    LooksModule
  ],
  controllers: [AppController, LooksController],
  providers: [AppService, LooksService],
})
export class AppModule {}

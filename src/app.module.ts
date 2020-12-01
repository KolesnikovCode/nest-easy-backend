import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { FilesModule } from './files/files.module';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot('mongodb+srv://easy-admin:easy-admin@easy-backend.yizf9.mongodb.net/easy-backend?retryWrites=true&w=majority'),
    FilesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

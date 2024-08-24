import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MultasModule } from './multas/multas.module';

@Module({
  imports: [ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    MongooseModule.forRoot(`mongodb+srv://root:Z8qgXrbIuSPLBGBz@cluster0.rysld.mongodb.net/multas`),
    MultasModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

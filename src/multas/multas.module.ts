import { Module } from '@nestjs/common';
import { MultasService } from './multas.service';
import { MultasController } from './multas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Multas, MultasShema } from 'src/schema/multas.schema';

@Module({
  imports:  [MongooseModule.forFeature([{ name: Multas.name, schema: MultasShema},])],
  controllers: [MultasController],
  providers: [MultasService],
})
export class MultasModule {}

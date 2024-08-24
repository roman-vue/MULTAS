import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MultasHistory = HydratedDocument<Multas>;

@Schema()
export class Multas {
  @Prop({ unique: true })
  vehiclePlate: string;

  @Prop()
  brand: string;

  @Prop()
  model: string;

  @Prop()
  fail: Array<Object>;

  @Prop()
  vehicleType: string;
}

export const MultasShema = SchemaFactory.createForClass(Multas);
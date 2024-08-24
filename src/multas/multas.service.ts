import { Injectable } from '@nestjs/common';
import { CreateMultaDto } from './dto/create-multa.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Multas, MultasHistory } from 'src/schema/multas.schema';
import { Model } from 'mongoose';

@Injectable()
export class MultasService {
  constructor(@InjectModel(Multas.name) private multasModule:Model<MultasHistory>){}

  async create(createMultaDto: CreateMultaDto) {
    const find = await this.multasModule.findOne({vehiclePlate: createMultaDto.vehiclePlate})
    if(find){
      for (let iterable of createMultaDto.fail) {
        find.fail.push(iterable);
        const addMulta = new this.multasModule(find)
        const add = await addMulta.save();
        return add
      }
    }
    const created = new this.multasModule(createMultaDto)
    const newMulta = await created.save();
    return newMulta;
  }

 async findAll() {
    const findAll = await this.multasModule.find();
    return findAll
  }

async findOne(vehiclePlate: string) {
    const find = await this.multasModule.findOne({vehiclePlate})
    return find
  }

}

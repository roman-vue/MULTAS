import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MultasService } from './multas.service';
import { CreateMultaDto } from './dto/create-multa.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('MULTAS')
@Controller('multas')
export class MultasController {
  constructor(private readonly multasService: MultasService) {}

  @Post()
  create(@Body() createMultaDto: CreateMultaDto) {
    return this.multasService.create(createMultaDto);
  }

  @Get(':vehiclePlate')
  findOne(@Param('vehiclePlate') vehiclePlate: string) {
    return this.multasService.findOne(vehiclePlate);
  }

}

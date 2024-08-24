import { ApiProperty } from "@nestjs/swagger";


class FAIL{
    @ApiProperty()
    description: string
    @ApiProperty()
    amountToPay:string
}
export class CreateMultaDto {
    @ApiProperty({ description: 'Placa del vehículo' })
    vehiclePlate: string;

    @ApiProperty({description: 'Marca del vehículo' })
    brand:string
  
    @ApiProperty({ description: 'Modelo del vehículo' })
    model: string;
  
    @ApiProperty({ description: 'Falla o infracción cometida', type: [FAIL] })
    fail: [FAIL];
  
    @ApiProperty({ description: 'Tipo de vehículo' })
    vehicleType: string;
}

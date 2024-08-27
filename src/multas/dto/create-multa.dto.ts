import { ApiProperty } from "@nestjs/swagger";


class traffic_fines{
    @ApiProperty()
    date:string
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
  
    @ApiProperty({ description: 'Falla o infracción cometida', type: [traffic_fines] })
    traffic_fines: [traffic_fines];
  
    @ApiProperty({ description: 'Tipo de vehículo' })
    vehicleType: string;
}

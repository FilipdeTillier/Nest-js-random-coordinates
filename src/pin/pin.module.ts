import { Module } from '@nestjs/common';
import { PinController } from './controllers/pin.controller';
import { PinService } from './services/pin.service';
import { PinGateway } from './gateways/pin.gateway';



@Module({
    controllers: [PinController],
    providers: [PinService, PinGateway],
})
export class PinModule { }

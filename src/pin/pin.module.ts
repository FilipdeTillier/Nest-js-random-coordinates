import { Module } from '@nestjs/common';
import { PinController } from './pin.controller';
import { PinService } from './pin.service';
import { PinGateway } from './pin.gateway';


@Module({
    controllers: [PinController],
    providers: [PinService, PinGateway],
})
export class PinModule {}

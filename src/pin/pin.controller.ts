import { Controller, Get } from '@nestjs/common';

import { PinService } from './pin.service';
import Pin from './pin.model';

@Controller('pin')
export class PinController {
  constructor(private pinService: PinService) { }

  @Get()
  getAllPins(): Pin[] {
    return this.pinService.getAllPins;
  }

}

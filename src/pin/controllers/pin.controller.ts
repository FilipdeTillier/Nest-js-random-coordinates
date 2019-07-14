import { Controller, Get } from '@nestjs/common';

import { PinService } from '../services/pin.service';
import Pin from '../models/pin.model';

@Controller('pins')
export class PinController {
  constructor(private pinService: PinService) { }

  @Get()
  getAllPins(): Pin[] {
    return this.pinService.getAllPins();
  }

}

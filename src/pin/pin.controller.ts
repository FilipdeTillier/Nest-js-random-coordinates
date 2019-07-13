import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { PinService } from './pin.service';


@Controller('pin')
export class PinController {
  constructor(private pinService: PinService) { }

  @Get()
  async getAllPins() {
    return await this.pinService.getAllPins;
  }

}

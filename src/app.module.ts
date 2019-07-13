import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PinModule } from './pin/pin.module';

@Module({
  imports: [PinModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

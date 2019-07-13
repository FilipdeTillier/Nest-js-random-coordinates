import { Injectable, NotFoundException } from '@nestjs/common';

import Pin from './pin.model';

@Injectable()
export class PinService {
  public pins: Pin[] = [];
  constructor() {
    for (let i = 1; i <= 5; i++) {
      this.pins.push(new Pin(10 * i, 10 * 1));
    }
    this.setCoordinationsInterval(1000);
  }

  get getAllPins(): Pin[] {
    return this.pins;
  }

  get generateRandomNumber(): number {
    return Math.random() < 0.5 ? 1 - 0.001 : 1 * 1.001;
  }

  private setCoordinationsInterval(timeInterval: number) {
    setInterval(() => {
      this.pins.map((pin): Pin => {
        const newLongtitude = pin.longitude * this.generateRandomNumber;
        const newLatitude = pin.latitude * this.generateRandomNumber;
        pin.updatePosition(+newLatitude.toFixed(5), +newLongtitude.toFixed(5));
        return pin;
      });
    }, timeInterval);
  }
}

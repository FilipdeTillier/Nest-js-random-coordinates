import { Injectable } from '@nestjs/common';

import Pin from './pin.model';
import { PinGateway } from './pin.gateway';

@Injectable()
export class PinService {
  private pins: Pin[] = [];
  private initCoordinates = [
    { latitude: 54.386145, longitude: 18.592970 },
    { latitude: 54.392145, longitude: 18.642970 },
    { latitude: 54.296145, longitude: 18.502970 },
    { latitude: 54.316145, longitude: 18.552970 },
    { latitude: 54.356145, longitude: 18.532970 }
  ];

  constructor(private pinGateway: PinGateway) {
    this.initCoordinates.forEach(({ latitude, longitude }) => {
      this.pins.push(new Pin(latitude, longitude));
    });
    this.setCoordinationsInterval(1000);
  }

  get getAllPins(): Pin[] {
    return this.pins;
  }

  get generateRandomNumber(): number {
    return Math.random() < 0.5 ? 1 - 0.00001 : 1 * 1.00001;
  }

  private setCoordinationsInterval(timeInterval: number): void {
    setInterval(() => {
      this.pins.map((pin): Pin => {
        const newLongtitude = pin.longitude * this.generateRandomNumber;
        const newLatitude = pin.latitude * this.generateRandomNumber;
        pin.updatePosition(+newLatitude.toFixed(5), +newLongtitude.toFixed(5));
        return pin;
      });
      this.pinGateway.coordinationsUpdate(this.pins);
    }, timeInterval);
  }
}

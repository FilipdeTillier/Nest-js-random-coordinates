import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'https';
import Pin from '../models/pin.model';

@WebSocketGateway()
export class PinGateway {

  @WebSocketServer() server;

  public coordinationsUpdate(coordinates: Pin[]): void {
    this.server.emit('update', coordinates);
  }

}
import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'https';
import Pin from './pin.model';

@WebSocketGateway()
export class PinGateway {

  @WebSocketServer() server: Server;

  coordinationsUpdate(coordinates: Pin[]): void {
    this.server.emit('update', coordinates);
  }

}
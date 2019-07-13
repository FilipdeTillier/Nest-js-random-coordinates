import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'https';
import Pin from './pin.model';

@WebSocketGateway()
export class PinGateway {

  @WebSocketServer() server: Server;

  handleConnection(): void {
    this.server.emit('message', "hehehe");
  }

  coordinationsUpdate(coordinates: Pin[]): void {
    this.server.emit('update', coordinates);
  }

}
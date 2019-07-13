import { SubscribeMessage, WebSocketGateway, OnGatewayConnection, OnGatewayDisconnect, WebSocketServer } from '@nestjs/websockets';

@WebSocketGateway()
export class PinGateway implements OnGatewayConnection {

  @WebSocketServer() server;

  async handleConnection() {
    this.server.emit('message', "hehehe");
  }

  async coordinationsUpdate(coordinates) {
    this.server.emit('update', coordinates);
  }

}
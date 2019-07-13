import { SubscribeMessage, WebSocketGateway, OnGatewayConnection, OnGatewayDisconnect, WebSocketServer } from '@nestjs/websockets';

@WebSocketGateway()
export class PinGateway implements OnGatewayConnection {

  @WebSocketServer() server;

  async handleConnection() {
    this.server.emit('message', "hehehe");
  }

  @SubscribeMessage('coordinations update')
  async coordinationsUpdate(coordinates, message) {

  }

}
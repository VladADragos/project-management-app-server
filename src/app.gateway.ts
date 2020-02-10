import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WsResponse,
  OnGatewayDisconnect,
  OnGatewayConnection,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Socket, Server } from 'socket.io';

@WebSocketGateway(5001, { serveClient: false })
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  private logger: Logger = new Logger('AppGateway');
  afterInit(server: Server) {
    this.logger.log('App gateway initialized');
  }
  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Connected, id:${client.id}`);
  }
  handleDisconnect(client: Socket) {
    this.logger.log(`Disconnected, id:${client.id}`);
  }

  @SubscribeMessage('toServer')
  handleMessage(client: Socket, payload: string): WsResponse<String> {
    return { event: 'toClient', data: payload };
  }
}

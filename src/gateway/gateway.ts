import { Server } from 'socket.io';
import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';

@WebSocketGateway()
export class GatewayController {
  @WebSocketServer()
  server: Server;

  onModuleInit() {
    this.server.on('connection', (socket) => {
      console.log(socket.id);
      console.log('connected');
    });
  }

  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: any) {
    console.log(message);
    this.server.emit('onMessage', {
      msg: 'New msg',
      content: message
    });
  }
}

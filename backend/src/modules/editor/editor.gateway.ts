import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import {
  adjectives,
  animals,
  uniqueNamesGenerator,
} from 'unique-names-generator';
import { Logger } from '@nestjs/common';
import { Socket, Server } from 'socket.io';
import config from '../../config';

const localConfig = config();

@WebSocketGateway(localConfig.socketPort)
export class EditorGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  private logger: Logger = new Logger('EditorGateway');

  @SubscribeMessage('update')
  onUpdate(socket: Socket, operations): void {
    const opts = operations.map((operation) => ({
      ...operation,
      source: 'remote',
    }));

    const room = this.getRoom(socket);
    socket.to(room).emit('update', opts);
    this.logger.log(`Sent to room ${room}`);
  }

  afterInit(server: Server) {
    this.logger.log('Init');
  }

  handleDisconnect(socket: Socket) {
    this.logger.log(`Client disconnected: ${socket.id}`);

    socket.leaveAll();

    this.updateRoomUsers(socket);
  }

  async handleConnection(socket: Socket, ...args: any) {
    this.logger.log(`Client connected: ${socket.id}`);

    socket.client.id = this.getRandomNickname();

    const room = socket.handshake.query.room;
    await socket.join(room);
    this.logger.log(`Client joined: ${room}`);

    this.updateRoomUsers(socket);
  }

  getRandomNickname() {
    return uniqueNamesGenerator({
      dictionaries: [adjectives, animals],
      length: 2,
      separator: ' ',
      style: 'capital',
    });
  }

  getRoom(socket: Socket) {
    console.log(socket.rooms);
    const [id, room] = Object.keys(socket.rooms);
    return room;
  }

  updateRoomUsers(socket: Socket) {
    const room = this.getRoom(socket);

    const users = this.server.in(room).connected;
    const nicknames = Object.keys(users)
      .map((socketId) => users[socketId].client.id)
      .filter((nickname) => nickname !== socket.client.id);

    this.server.to(room).emit('update-users', nicknames);
  }
}

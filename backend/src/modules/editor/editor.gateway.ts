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

  rooms = {};

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

    this.leaveRoom(socket);
  }

  async handleConnection(socket: Socket, ...args: any) {
    this.logger.log(`Client connected: ${socket.id}`);

    socket.client.id = this.getRandomNickname();

    const room = socket.handshake.query.room;
    await this.joinRoom(room, socket);
  }

  updateRoomUsers(room: string) {
    const nicknames = this.rooms[room];

    this.server.to(room).emit('update-users', nicknames);
  }

  async joinRoom(room: string, socket: Socket) {
    this.logger.log(`Client joined: ${room}`);
    const nickname = socket.client.id;
    await socket.join(room);

    if (!this.rooms[room]) {
      this.rooms[room] = [];
    }
    this.rooms[room].push(nickname);
    this.updateRoomUsers(room);
  }

  leaveRoom(socket: Socket) {
    const nicknameToKick = socket.client.id;
    const roomId = Object.keys(this.rooms).find((roomId) =>
      this.rooms[roomId].includes(nicknameToKick),
    );

    if (roomId !== undefined) {
      this.rooms[roomId] = this.rooms[roomId].filter(
        (nickname) => nickname !== nicknameToKick,
      );
      this.updateRoomUsers(roomId);
    }
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
    const [id, room] = Object.keys(socket.rooms);
    return room;
  }
}

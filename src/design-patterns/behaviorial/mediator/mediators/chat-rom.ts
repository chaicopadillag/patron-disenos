import { ChatRoomI } from '../interfaces/chat-rom.interface.ts';
import { UserI } from '../interfaces/user.interface.ts';

export class ChatRoom implements ChatRoomI {
  users: UserI[] = [];
  constructor(public title: string) {}

  addUser(user: UserI): void {
    this.users.push(user);
  }
  sendMessage(user: UserI, message: string): void {
    const usersSameRoom = this.users.filter((u) => u !== user);
    usersSameRoom.forEach((u) => u.receive(user, message));
  }
}

import { COLORS } from '../../../../libs/colors.ts';
import { ChatRoomI } from '../interfaces/chat-rom.interface.ts';
import { UserI } from '../interfaces/user.interface.ts';

export class User implements UserI {
  constructor(public name: string, public chatRoom: ChatRoomI) {
    chatRoom.addUser(this);
  }

  send(message: string): void {
    console.log(`I'm ${this.name}, I sent a message: %c${message}`, COLORS.green);
    this.chatRoom.sendMessage(this, message);
  }

  receive(from: UserI, message: string): void {
    console.log(`%cI'm ${this.name}, I received a message from %c${from.name}: %c${message}`, COLORS.yellow, COLORS.blue, COLORS.green);
  }
}

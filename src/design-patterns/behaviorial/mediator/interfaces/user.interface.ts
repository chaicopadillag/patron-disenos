import { ChatRoomI } from './chat-rom.interface.ts';

export interface UserI {
  name: string;
  chatRoom: ChatRoomI;
  send(message: string): void;
  receive(from: UserI, message: string): void;
}

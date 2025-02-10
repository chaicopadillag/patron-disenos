import { UserI } from './user.interface.ts';

export interface ChatRoomI {
  users: UserI[];
  addUser(user: UserI): void;
  sendMessage(user: UserI, message: string): void;
}

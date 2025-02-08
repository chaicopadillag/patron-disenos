import { PlayerI } from '../interfaces/rom.interface.ts';

export class Player implements PlayerI {
  constructor(public name: string, public level: number) {}
}

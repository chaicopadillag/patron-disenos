import { CommandI } from '../interfaces/command.interface.ts';
import { Fan } from '../receivers/fan.ts';

export class FanOnCommand implements CommandI {
  constructor(private fan: Fan) {}

  execute(): void {
    this.fan.turnOn();
  }
}

export class FanOffCommand implements CommandI {
  constructor(private fan: Fan) {}

  execute(): void {
    this.fan.turnOff();
  }
}

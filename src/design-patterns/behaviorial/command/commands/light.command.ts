import { CommandI } from '../interfaces/command.interface.ts';
import { Light } from '../receivers/light.ts';

export class LightOnCommand implements CommandI {
  constructor(private light: Light) {}

  execute(): void {
    this.light.on();
  }
}

export class LightOffCommand implements CommandI {
  constructor(private light: Light) {}

  execute(): void {
    this.light.off();
  }
}

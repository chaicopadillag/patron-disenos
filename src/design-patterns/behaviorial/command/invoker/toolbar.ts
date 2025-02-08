import { CommandI } from '../interfaces/command.interface.ts';

export class Toolbar {
  private commands: Map<string, CommandI> = new Map();

  setCommand(button: string, command: CommandI): void {
    this.commands.set(button, command);
  }

  clickButton(button: string): void {
    if (this.commands.has(button)) {
      this.commands.get(button)?.execute();
    } else {
      console.error(`No hay un comando asignado al botón "${button}"`);
    }
  }
}

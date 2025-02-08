import { COLORS } from '../../../../libs/colors.ts';
import { CommandI } from '../interfaces/command.interface.ts';

export class RemoteControl {
  private commands: Map<string, CommandI> = new Map();

  public setCommand(name: string, command: CommandI): void {
    this.commands.set(name, command);
  }

  public pressButton(commandName: string): void {
    if (this.commands.has(commandName)) {
      this.commands.get(commandName)?.execute();
    } else {
      console.log('%cNo se ha configurado el comando para encender', COLORS.gray);
    }
  }
}

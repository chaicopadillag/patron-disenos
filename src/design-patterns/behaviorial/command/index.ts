import { FanOffCommand, FanOnCommand } from './commands/fan.command.ts';
import { LightOffCommand, LightOnCommand } from './commands/light.command.ts';
import { RemoteControl } from './invoker/remote-control.ts';
import { Fan } from './receivers/fan.ts';
import { Light } from './receivers/light.ts';
/**
 * ! Patrón Command
 * Este patrón encapsula una solicitud como un objeto,
 * lo que le permite parametrizar otros objetos con diferentes solicitudes,
 * encolar solicitudes, o registrar solicitudes, y soporta operaciones que pueden deshacerse.
 *
 * Me gustó mucho la explicación de Refactoring Guru
 * https://refactoring.guru/es/design-patterns/command
 *
 * * Es útil cuando se necesita desacoplar el objeto que invoca
 * * la operación del objeto que sabe cómo realizarla.
 *
 *
 */
export const mainCommand = () => {
  const remoteControl = new RemoteControl();

  const luz = new Light();
  const ventilador = new Fan();

  const turnOnLight = new LightOnCommand(luz);
  const turnOffLight = new LightOffCommand(luz);

  const turnOnFan = new FanOnCommand(ventilador);
  const turnOffFan = new FanOffCommand(ventilador);

  remoteControl.setCommand('1', turnOnLight);
  remoteControl.setCommand('2', turnOffLight);
  remoteControl.setCommand('3', turnOnFan);
  remoteControl.setCommand('4', turnOffFan);

  let isPressed = true;

  do {
    console.clear();
    console.log(` Tienes las siguientes opciones:
        1. Encender luz.
        2. Apagar luz.
        3. Encender ventilador.
        4. Apagar ventilador.
        5. Salir.`);
    const command = prompt(`Presiona el número del comando que deseas ejecutar:`);

    if (command === '5') {
      isPressed = false;
      break;
    }

    if (command) {
      remoteControl.pressButton(command);
    }

    const exit = prompt('¿Deseas salir? (s/n)');
    if (exit === 's') {
      isPressed = false;
    }
  } while (isPressed);
};

import { COLORS } from '../../../libs/colors.ts';
import { CopyCommand } from './commands/copy.command.ts';
import { FanOffCommand, FanOnCommand } from './commands/fan.command.ts';
import { LightOffCommand, LightOnCommand } from './commands/light.command.ts';
import { PasteCommand } from './commands/paste.command.ts';
import { UndoCommand } from './commands/undo.command.ts';
import { RemoteControl } from './invoker/remote-control.ts';
import { Toolbar } from './invoker/toolbar.ts';
import { Fan } from './receivers/fan.ts';
import { Light } from './receivers/light.ts';
import { TextEditor } from './receivers/text-editor.ts';
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

  console.log('-------------------');

  const editor = new TextEditor();
  const toolbar = new Toolbar();

  // Crear comandos para el editor
  const copyCommand = new CopyCommand(editor);
  const pasteCommand = new PasteCommand(editor);
  const undoCommand = new UndoCommand(editor);

  // Asignar comandos a los botones de la barra de herramientas
  toolbar.setCommand('copy', copyCommand);
  toolbar.setCommand('paste', pasteCommand);
  toolbar.setCommand('undo', undoCommand);

  // Simulación de edición de texto
  editor.type('H');
  editor.type('o');
  editor.type('l');
  editor.type('a');
  editor.type(' ');
  editor.type('M');
  editor.type('u');
  editor.type('n');
  editor.type('d');
  editor.type('o');
  editor.type('!');
  console.log(`Texto actual: %c"${editor.getText()}"`, COLORS.green);

  // Usar la barra de herramientas
  console.log('\nCopiando texto:');
  toolbar.clickButton('copy');

  console.log('\nPegando texto:');
  toolbar.clickButton('paste');

  console.log('\nDeshaciendo la última acción:');
  toolbar.clickButton('undo');

  console.log('\nDeshaciendo de nuevo:');
  toolbar.clickButton('undo');

  console.log(`\nTexto final: "${editor.getText()}"`);
};

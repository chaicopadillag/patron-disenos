import { COLORS } from '../../../../libs/colors.ts';

export class Fan {
  turnOn(): void {
    console.log('%cEl ventilador está encendido', COLORS.blue);
  }

  turnOff(): void {
    console.log('%cEl ventilador está apagado', COLORS.red);
  }
}

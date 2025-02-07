import { COLORS } from '../../../../libs/colors.ts';
import { Engine } from '../interfaces/engine.interface.ts';

export class ElectricEngine implements Engine {
  start(): void {
    console.log('Encendiendo el %cMotor eléctrico', COLORS.green);
  }
}

import { COLORS } from '../../../../libs/colors.ts';
import { Engine } from '../interfaces/engine.interface.ts';

export default class GasEngine implements Engine {
  start(): void {
    console.log('Encendiendo el %cMotor de combustión', COLORS.pink);
  }
}

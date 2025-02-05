import { COLORS } from '../../../libs/colors.ts';
import { Vehicle } from '../interfaces/vehicle.interface.ts';

export class GasCar implements Vehicle {
  assemble(): void {
    console.log('Ensamblando un %cAuto de combustión', COLORS.pink);
  }
}

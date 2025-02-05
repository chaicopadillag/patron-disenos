import { COLORS } from '../../../libs/colors.ts';
import { Vehicle } from '../interfaces/vehicle.interface.ts';

export class ElectricCar implements Vehicle {
  assemble(): void {
    console.log('Ensamblando un %cAuto eléctrico', COLORS.green);
  }
}

import { COLORS } from '../../../libs/colors.ts';
import { Drink } from '../interfaces/drink.interface.ts';

export class WaterDrink implements Drink {
  pour(): void {
    console.log('Pouring %cWater Drink 🥤', COLORS.blue);
  }
}

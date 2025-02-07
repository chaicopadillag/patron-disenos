import { COLORS } from '../../../../libs/colors.ts';
import { Drink } from '../interfaces/drink.interface.ts';

export class SodaDrink implements Drink {
  pour() {
    console.log('Pouring %cSoda Drink 🥛', COLORS.red);
  }
}

import { COLORS } from '../../../libs/colors.ts';
import { Hamburger } from '../interfaces/hamburger.interface.ts';

export class BeefHamburger implements Hamburger {
  prepare(): void {
    console.log('Preparing %cBeef Hamburger 🍔', COLORS.green);
  }
}

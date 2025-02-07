import { COLORS } from '../../../../libs/colors.ts';
import { Hamburger } from '../interfaces/hamburger.interface.ts';

export class ChickenHamburger implements Hamburger {
  prepare(): void {
    console.log('Preparing %cChicken Hamburger 🍔', COLORS.yellow);
  }
}

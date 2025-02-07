import { COLORS } from '../../../../libs/colors.ts';
import { Hamburger } from '../interfaces/hamburger.interface.ts';

export class BeanHamburger implements Hamburger {
  prepare(): void {
    console.log('Preparing %cBean Hamburger 🍔', COLORS.brown);
  }
}

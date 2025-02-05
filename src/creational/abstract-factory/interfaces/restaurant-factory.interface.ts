import { Drink } from './drink.interface.ts';
import { Hamburger } from './hamburger.interface.ts';

export interface RestaurantFactoryI {
  createHamburger(): Hamburger;
  createDrink(): Drink;
}

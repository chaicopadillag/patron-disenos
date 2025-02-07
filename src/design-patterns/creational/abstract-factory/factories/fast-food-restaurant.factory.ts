import { Drink } from '../interfaces/drink.interface.ts';
import { Hamburger } from '../interfaces/hamburger.interface.ts';
import { RestaurantFactoryI } from '../interfaces/restaurant-factory.interface.ts';
import { ChickenHamburger } from '../products/chicken-hamburger.ts';
import { SodaDrink } from '../products/soda-drink.ts';

export class FastFoodRestaurantFactory implements RestaurantFactoryI {
  createHamburger(): Hamburger {
    return new ChickenHamburger();
  }
  createDrink(): Drink {
    return new SodaDrink();
  }
}

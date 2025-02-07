import { Drink } from '../interfaces/drink.interface.ts';
import { Hamburger } from '../interfaces/hamburger.interface.ts';
import { RestaurantFactoryI } from '../interfaces/restaurant-factory.interface.ts';
import { BeefHamburger } from '../products/beef-hamburger.ts';
import { WaterDrink } from '../products/water-drink.ts';

export class HealthyFoodRestaurantFactory implements RestaurantFactoryI {
  createHamburger(): Hamburger {
    return new BeefHamburger();
  }
  createDrink(): Drink {
    return new WaterDrink();
  }
}

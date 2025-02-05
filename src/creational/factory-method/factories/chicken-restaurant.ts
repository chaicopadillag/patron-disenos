import { ChickenHamburger } from '../products/chicken-hamburger.ts';
import { Restaurant } from './restaurant.abstract.ts';

export class ChickenRestaurant extends Restaurant {
  createHamburger() {
    return new ChickenHamburger();
  }
}

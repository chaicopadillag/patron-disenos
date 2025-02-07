import { BeanHamburger } from '../products/bean-hamburger.ts';
import { Restaurant } from './restaurant.abstract.ts';

export class BeanRestaurant extends Restaurant {
  createHamburger() {
    return new BeanHamburger();
  }
}

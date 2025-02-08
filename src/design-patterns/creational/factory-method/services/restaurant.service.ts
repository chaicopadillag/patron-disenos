import { BeanRestaurant } from '../factories/bean-restaurant.ts';
import { BeefRestaurant } from '../factories/beef-restaurant.ts';
import { ChickenRestaurant } from '../factories/chicken-restaurant.ts';
import { Restaurant } from '../factories/restaurant.abstract.ts';

export class RestaurantService {
  private restaurant: Restaurant;

  createHamburger() {
    const order = prompt('Enter your order: chicken, beef or bean: defuald is chicken');

    switch (order) {
      case 'beef':
        this.restaurant = new BeefRestaurant();
        break;
      case 'bean':
        this.restaurant = new BeanRestaurant();
        break;
      default:
        this.restaurant = new ChickenRestaurant();
        break;
    }

    this.restaurant.orderHamburger();
  }
}

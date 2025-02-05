import { RestaurantFactoryI } from '../interfaces/restaurant-factory.interface.ts';
export class RestaurantService {
  constructor(private factory: RestaurantFactoryI) {}

  prepareMeal() {
    const hamburger = this.factory.createHamburger();
    const drink = this.factory.createDrink();

    hamburger.prepare();
    drink.pour();
  }
}

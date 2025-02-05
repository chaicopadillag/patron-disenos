import { FastFoodRestaurantFactory } from './factories/fast-food-restaurant.factory.ts';
import { HealthyFoodRestaurantFactory } from './factories/healthy-food-restaurant.factory.ts';
import { RestaurantService } from './services/restaurant.service.ts';

export const mainAbstractFactory = () => {
  const fastRestaurant = new RestaurantService(new FastFoodRestaurantFactory());
  fastRestaurant.prepareMeal();

  console.log('------------------');

  const healthyRestaurant = new RestaurantService(new HealthyFoodRestaurantFactory());
  healthyRestaurant.prepareMeal();
};

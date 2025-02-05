import { ElectricVehicleFactory } from './factories/electric-vehicle.factory.ts';
import { FastFoodRestaurantFactory } from './factories/fast-food-restaurant.factory.ts';
import { GasVehicleFactory } from './factories/gas-vehicle.factory.ts';
import { HealthyFoodRestaurantFactory } from './factories/healthy-food-restaurant.factory.ts';
import { RestaurantService } from './services/restaurant.service.ts';
import { VehicleService } from './services/vehicle.service.ts';

export const mainAbstractFactory = () => {
  console.log('===Pedido de Fast Food===');
  const fastRestaurant = new RestaurantService(new FastFoodRestaurantFactory());
  fastRestaurant.prepareMeal();

  console.log('===Pedido de Comida Saudável===');
  const healthyRestaurant = new RestaurantService(new HealthyFoodRestaurantFactory());
  healthyRestaurant.prepareMeal();

  console.log('===Vehicle Factory===');

  const electricVehicle = new VehicleService(new ElectricVehicleFactory());
  electricVehicle.assembleVehicle();

  const gasVehicle = new VehicleService(new GasVehicleFactory());
  gasVehicle.assembleVehicle();
};

import { Car, Motorcycle, Truck } from '../elements/vehicles.elements.ts';

export interface VisitorVehicle {
  visitCar(car: Car): void;
  visitMotorcycle(motorcycle: Motorcycle): void;
  visitTruck(truck: Truck): void;
}

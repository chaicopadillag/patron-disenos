import { VisitorVehicle } from './visitor-vehicle.interface.ts';

export interface Vehicle {
  accept(visitor: VisitorVehicle): void;
}

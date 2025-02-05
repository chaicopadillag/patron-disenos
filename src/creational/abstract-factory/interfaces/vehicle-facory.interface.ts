import { Engine } from './engine.interface.ts';
import { Vehicle } from './vehicle.interface.ts';

export interface VehicleFactoryI {
  createVehicle(): Vehicle;
  createEngine(): Engine;
}

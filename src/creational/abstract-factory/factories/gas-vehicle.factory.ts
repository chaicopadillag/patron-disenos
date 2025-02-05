import { Engine } from '../interfaces/engine.interface.ts';
import { VehicleFactoryI } from '../interfaces/vehicle-facory.interface.ts';
import { Vehicle } from '../interfaces/vehicle.interface.ts';
import { GasCar } from '../products/gas-car.ts';
import GasEngine from '../products/gas-engine.ts';

export class GasVehicleFactory implements VehicleFactoryI {
  createVehicle(): Vehicle {
    return new GasCar();
  }
  createEngine(): Engine {
    return new GasEngine();
  }
}

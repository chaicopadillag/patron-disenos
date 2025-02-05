import { Engine } from '../interfaces/engine.interface.ts';
import { VehicleFactoryI } from '../interfaces/vehicle-facory.interface.ts';
import { Vehicle } from '../interfaces/vehicle.interface.ts';
import { ElectricCar } from '../products/electric-car.ts';
import { ElectricEngine } from '../products/electric-engine.ts';

export class ElectricVehicleFactory implements VehicleFactoryI {
  createVehicle(): Vehicle {
    return new ElectricCar();
  }
  createEngine(): Engine {
    return new ElectricEngine();
  }
}

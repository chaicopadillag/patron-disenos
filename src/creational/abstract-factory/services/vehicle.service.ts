import { VehicleFactoryI } from '../interfaces/vehicle-facory.interface.ts';

export class VehicleService {
  constructor(private readonly vehicleFactory: VehicleFactoryI) {}

  assembleVehicle(): void {
    const vehicle = this.vehicleFactory.createVehicle();
    const engine = this.vehicleFactory.createEngine();
    vehicle.assemble();
    engine.start();
  }
}

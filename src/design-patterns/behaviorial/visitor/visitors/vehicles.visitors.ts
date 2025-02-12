import { Car, Motorcycle, Truck } from '../elements/vehicles.elements.ts';
import { VisitorVehicle } from '../interfaces/visitor-vehicle.interface.ts';

// Clase visitante - MaintenanceCostVisitor
export class MaintenanceCostVisitor implements VisitorVehicle {
  visitCar(car: Car): void {
    const cost = car.getKilometers() * 0.1 + (new Date().getFullYear() - car.getYear()) * 50;

    console.log(`Costo de mantenimiento para el automóvil: $${cost.toFixed(2)}`);
  }

  visitMotorcycle(motorcycle: Motorcycle): void {
    const cost = motorcycle.getKilometers() * 0.05 + (new Date().getFullYear() - motorcycle.getYear()) * 30;

    console.log(`Costo de mantenimiento para la motocicleta: $${cost.toFixed(2)}`);
  }

  visitTruck(truck: Truck): void {
    const cost = truck.getKilometers() * 0.15 + truck.getLoadCapacity() * 20 + (new Date().getFullYear() - truck.getYear()) * 100;

    console.log(`Costo de mantenimiento para el camión: $${cost.toFixed(2)}`);
  }
}

// Clase visitante - EmissionCheckVisitor
export class EmissionCheckVisitor implements VisitorVehicle {
  visitCar(car: Car): void {
    const passes = car.getYear() > 2000 && car.getKilometers() < 200_000;
    console.log(`Automóvil cumple con emisiones: ${passes ? 'Sí' : 'No'}`);
  }

  visitMotorcycle(motorcycle: Motorcycle): void {
    const passes = motorcycle.getYear() > 2005 && motorcycle.getKilometers() < 100_000;
    console.log(`Motocicleta cumple con emisiones: ${passes ? 'Sí' : 'No'}`);
  }

  visitTruck(truck: Truck): void {
    const passes = truck.getYear() > 2010 && truck.getKilometers() < 300_000;
    console.log(`Camión cumple con emisiones: ${passes ? 'Sí' : 'No'}`);
  }
}

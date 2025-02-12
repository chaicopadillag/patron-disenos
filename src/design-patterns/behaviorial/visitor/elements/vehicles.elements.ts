import { Vehicle } from '../interfaces/vehicle.interface.ts';
import { VisitorVehicle } from '../interfaces/visitor-vehicle.interface.ts';

// Clase concreta - Car
export class Car implements Vehicle {
  private year: number;
  private kilometers: number;

  constructor(year: number, kilometers: number) {
    this.year = year;
    this.kilometers = kilometers;
  }

  getYear(): number {
    return this.year;
  }

  getKilometers(): number {
    return this.kilometers;
  }

  accept(visitor: VisitorVehicle): void {
    visitor.visitCar(this);
  }
}

// Clase concreta - Motorcycle
export class Motorcycle implements Vehicle {
  private year: number;
  private kilometers: number;

  constructor(year: number, kilometers: number) {
    this.year = year;
    this.kilometers = kilometers;
  }

  getYear(): number {
    return this.year;
  }

  getKilometers(): number {
    return this.kilometers;
  }

  accept(visitor: VisitorVehicle): void {
    visitor.visitMotorcycle(this);
  }
}

// Clase concreta - Truck
export class Truck implements Vehicle {
  private year: number;
  private kilometers: number;
  private loadCapacity: number;

  constructor(year: number, kilometers: number, loadCapacity: number) {
    this.year = year;
    this.kilometers = kilometers;
    this.loadCapacity = loadCapacity;
  }

  getYear(): number {
    return this.year;
  }

  getKilometers(): number {
    return this.kilometers;
  }

  getLoadCapacity(): number {
    return this.loadCapacity;
  }

  accept(visitor: VisitorVehicle): void {
    visitor.visitTruck(this);
  }
}

import { Attraction } from '../interfaces/attraction.interface.ts';
import { VisitorAttraction } from '../interfaces/visitor-attraction.interface.ts';

export class RollerCoaster implements Attraction {
  private price: number = 50;

  getPrice(): number {
    return this.price;
  }

  accept(visitor: VisitorAttraction): void {
    visitor.visitRollerCoaster(this);
  }
}

export class HauntedHouse implements Attraction {
  private price: number = 40;

  getPrice(): number {
    return this.price;
  }

  accept(visitor: VisitorAttraction): void {
    visitor.visitHauntedHouse(this);
  }
}

export class FerrisWheel implements Attraction {
  private price: number = 30;

  getPrice(): number {
    return this.price;
  }

  accept(visitor: VisitorAttraction): void {
    visitor.visitFerrisWheel(this);
  }
}

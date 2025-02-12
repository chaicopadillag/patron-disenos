import { FerrisWheel, HauntedHouse, RollerCoaster } from '../elements/attractions.elements.ts';
import { VisitorAttraction } from '../interfaces/visitor-attraction.interface.ts';

export class ChildVisitor implements VisitorAttraction {
  visitRollerCoaster(rollerCoaster: RollerCoaster): void {
    console.log(`Niño en Montaña Rusa: Precio con descuento de $${rollerCoaster.getPrice() * 0.5}`);
  }

  visitHauntedHouse(hauntedHouse: HauntedHouse): void {
    console.log(`Niño en Casa del Terror: Precio con descuento de $${hauntedHouse.getPrice() * 0.7}`);
  }

  visitFerrisWheel(ferrisWheel: FerrisWheel): void {
    console.log(`Niño en la Rueda de la Fortuna: Precio con descuento de $${ferrisWheel.getPrice() * 0.6}`);
  }
}

export class AdultVisitor implements VisitorAttraction {
  visitRollerCoaster(rollerCoaster: RollerCoaster): void {
    console.log(`Adulto en Montaña Rusa: Precio con descuento de $${rollerCoaster.getPrice()}`);
  }

  visitHauntedHouse(hauntedHouse: HauntedHouse): void {
    console.log(`Adulto en Casa del Terror: Precio con descuento de $${hauntedHouse.getPrice()}`);
  }

  visitFerrisWheel(ferrisWheel: FerrisWheel): void {
    console.log(`Adulto en la Rueda de la Fortuna: Precio con descuento de $${ferrisWheel.getPrice()}`);
  }
}

export class SeniorVisitor implements VisitorAttraction {
  visitRollerCoaster(rollerCoaster: RollerCoaster): void {
    console.log(`Adulto en Montaña Rusa: Precio con descuento de $${rollerCoaster.getPrice() * 0.85}`);
  }

  visitHauntedHouse(hauntedHouse: HauntedHouse): void {
    console.log(`Adulto en Casa del Terror: Precio con descuento de $${hauntedHouse.getPrice() * 0.85}`);
  }

  visitFerrisWheel(ferrisWheel: FerrisWheel): void {
    console.log(`Adulto en la Rueda de la Fortuna: Precio con descuento de $${ferrisWheel.getPrice() * 0.85}`);
  }
}

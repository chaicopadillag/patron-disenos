import { FerrisWheel, HauntedHouse, RollerCoaster } from '../elements/attractions.elements.ts';

export interface VisitorAttraction {
  visitRollerCoaster(rollerCoaster: RollerCoaster): void;
  visitHauntedHouse(hauntedHouse: HauntedHouse): void;
  visitFerrisWheel(ferrisWheel: FerrisWheel): void;
}

import { VisitorAttraction } from './visitor-attraction.interface.ts';

export interface Attraction {
  accept(visitor: VisitorAttraction): void;
  getPrice(): number;
}

import { CoordinatesI, IconLocationI } from '../interfaces/icon-location.interface.ts';

export class MapLocationService {
  constructor(protected coordinates: CoordinatesI, protected icon: IconLocationI) {}

  display(): void {
    this.icon.display(this.coordinates);
  }
}

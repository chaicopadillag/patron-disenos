import { COLORS } from '../../../../libs/colors.ts';
import { LocationIcon } from '../flyweights/location-icon.ts';
import { IconLocationI } from '../interfaces/icon-location.interface.ts';

export class LocationFactory {
  private locations: Map<string, IconLocationI> = new Map();

  createLocation(name: string, icon: string, description: string, address: string): IconLocationI {
    if (!this.locations.has(name)) {
      console.log(`%cCreating location ${name}`, COLORS.green);
      this.locations.set(name, new LocationIcon(name, `images/map/icons/icon-${icon}.png`, description, address));
    }
    return this.locations.get(name)!;
  }
}

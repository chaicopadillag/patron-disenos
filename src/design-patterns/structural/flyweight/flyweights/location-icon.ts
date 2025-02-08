import { CoordinatesI, IconLocationI } from '../interfaces/icon-location.interface.ts';

export class LocationIcon implements IconLocationI {
  constructor(public name: string, public icon: string, public description: string, public address: string) {}

  display(coordinates: CoordinatesI): void {
    console.log(`
        Nombre: ${this.name}
        Icono: ${this.icon}
        Descripción: ${this.description}
        Dirección: ${this.address}
        Coordenadas: ${coordinates.lat}, ${coordinates.lng}
        `);
  }
}

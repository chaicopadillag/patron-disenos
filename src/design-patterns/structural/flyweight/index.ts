import { LocationFactory } from './factories/location.factory.ts';
import { MapLocationService } from './services/map-location.service.ts';

/**
 * ! Patrón Flyweight
 * Es un patrón de diseño estructural que nos permite usar objetos compartidos
 * para soportar eficientemente grandes cantidades de objetos.
 *
 * * Es útil cuando necesitamos una gran cantidad de objetos y queremos reducir
 * * la cantidad de memoria que utilizan.
 *
 * https://refactoring.guru/es/design-patterns/flyweight
 */
export const mainFlyweight = () => {
  const factory = new LocationFactory();

  const locations = [
    new MapLocationService({ lat: 1, lng: 1 }, factory.createLocation('Estadio', 'stadium', 'Estadio de fútbol', 'Calle 1')),
    new MapLocationService({ lat: 2, lng: 2 }, factory.createLocation('Hospital', 'hospital', 'Hospital público', 'Calle 2')),
    new MapLocationService({ lat: 3, lng: 3 }, factory.createLocation('Escuela', 'school', 'Escuela primaria', 'Calle 3')),
    new MapLocationService({ lat: 4, lng: 4 }, factory.createLocation('Parque', 'park', 'Parque público', 'Calle 4')),
    new MapLocationService({ lat: 5, lng: 5 }, factory.createLocation('Banco', 'bank', 'Banco público', 'Calle 5')),

    new MapLocationService({ lat: 6, lng: 6 }, factory.createLocation('Escuela', 'school', 'Escuela secundaria', 'Calle 6')),
    new MapLocationService({ lat: 7, lng: 7 }, factory.createLocation('Escuela', 'school', 'Escuela de idiomas', 'Calle 7')),
    new MapLocationService({ lat: 8, lng: 8 }, factory.createLocation('Escuela', 'school', 'Escuela de música', 'Calle 8')),
    new MapLocationService({ lat: 9, lng: 9 }, factory.createLocation('Estadio', 'stadium', 'Estadio de fútbol', 'Calle 9')),
    new MapLocationService({ lat: 10, lng: 10 }, factory.createLocation('Estadio', 'stadium', 'Estadio de fútbol', 'Calle 10')),
    new MapLocationService({ lat: 11, lng: 11 }, factory.createLocation('Estadio', 'stadium', 'Estadio de fútbol', 'Calle 11'))
  ];
  locations.forEach((location) => location.display());
};

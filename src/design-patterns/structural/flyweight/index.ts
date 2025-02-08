import { COLORS } from '../../../libs/colors.ts';
import { BulletTypeFactory } from './factories/bullet-type.factory.ts';
import { LocationFactory } from './factories/location.factory.ts';
import { MapLocation } from './models/map-location.ts';
import { ShootingSystemService } from './services/shooting-system.service.ts';

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
    new MapLocation({ lat: 1, lng: 1 }, factory.createLocation('Estadio', 'stadium', 'Estadio de fútbol', 'Calle 1')),
    new MapLocation({ lat: 2, lng: 2 }, factory.createLocation('Hospital', 'hospital', 'Hospital público', 'Calle 2')),
    new MapLocation({ lat: 3, lng: 3 }, factory.createLocation('Escuela', 'school', 'Escuela primaria', 'Calle 3')),
    new MapLocation({ lat: 4, lng: 4 }, factory.createLocation('Parque', 'park', 'Parque público', 'Calle 4')),
    new MapLocation({ lat: 5, lng: 5 }, factory.createLocation('Banco', 'bank', 'Banco público', 'Calle 5')),

    new MapLocation({ lat: 6, lng: 6 }, factory.createLocation('Escuela', 'school', 'Escuela secundaria', 'Calle 6')),
    new MapLocation({ lat: 7, lng: 7 }, factory.createLocation('Escuela', 'school', 'Escuela de idiomas', 'Calle 7')),
    new MapLocation({ lat: 8, lng: 8 }, factory.createLocation('Escuela', 'school', 'Escuela de música', 'Calle 8')),
    new MapLocation({ lat: 9, lng: 9 }, factory.createLocation('Estadio', 'stadium', 'Estadio de fútbol', 'Calle 9')),
    new MapLocation({ lat: 10, lng: 10 }, factory.createLocation('Estadio', 'stadium', 'Estadio de fútbol', 'Calle 10')),
    new MapLocation({ lat: 11, lng: 11 }, factory.createLocation('Estadio', 'stadium', 'Estadio de fútbol', 'Calle 11'))
  ];
  locations.forEach((location) => location.display());

  console.log('\n------------------------------------\n');

  const bulletFactory = new BulletTypeFactory();
  const shootingSystem = new ShootingSystemService(bulletFactory);

  // Disparar varias balas de diferentes tipos
  shootingSystem.shoot(10, 20, 0, 'Pistola', 10, 'Gris');
  shootingSystem.shoot(15, 25, 90, 'Escopeta', 20, 'Rojo');
  shootingSystem.shoot(20, 30, 180, 'Rifle', 15, 'Verde');
  shootingSystem.shoot(10, 20, 45, 'Pistola', 10, 'Gris');
  shootingSystem.shoot(25, 35, 270, 'Escopeta', 20, 'Rojo');

  console.log(`Total de balas disparadas: %c${shootingSystem.getBulletCount()}\n`, COLORS.yellow);
};

import { COLORS } from '../../../libs/colors.ts';
import { FerrisWheel, HauntedHouse, RollerCoaster } from './elements/attractions.elements.ts';
import { Car, Motorcycle, Truck } from './elements/vehicles.elements.ts';
import { Attraction } from './interfaces/attraction.interface.ts';
import { Vehicle } from './interfaces/vehicle.interface.ts';
import { AdultVisitor, ChildVisitor, SeniorVisitor } from './visitors/attraction.visitors.ts';
import { EmissionCheckVisitor, MaintenanceCostVisitor } from './visitors/vehicles.visitors.ts';
/**
 * !Patrón Visitor
 *
 * El patrón Visitor es un patrón de diseño de comportamiento
 * que te permite separar algoritmos de los objetos sobre
 * los que operan.
 *
 * * Es útil cuando necesitas añadir nuevas operaciones a
 * * clases estables sin cambiar su código.
 *
 * https://refactoring.guru/es/design-patterns/visitor
 */

/**
 * Contexto: Imagina que estás diseñando un sistema para un parque
 * temático con diferentes tipos de atracciones:
 * montañas rusas, casas del terror y ruedas de la fortuna.
 *
 * Cada atracción tiene su propio precio de entrada y ofrece un descuento
 * dependiendo del tipo de visitante (niño, adulto o adulto mayor).
 *
 * Aquí es donde entra el patrón Visitor, que permite aplicar operaciones
 * específicas (como calcular el precio con descuento) dependiendo tanto
 * de la atracción como del tipo de visitante,
 * sin modificar las clases originales.
 */

export const mainVisitor = () => {
  const attractions: Attraction[] = [new RollerCoaster(), new HauntedHouse(), new FerrisWheel()];

  console.log(`Montaña Rusa: ${new RollerCoaster().getPrice()}`);
  console.log(`Casa del Terror: ${new HauntedHouse().getPrice()}`);
  console.log(`La Rueda de la fortuna: ${new FerrisWheel().getPrice()}`);

  console.log('\n%cVisitante Niño', COLORS.green);
  const childVisitor = new ChildVisitor();
  attractions.forEach((attraction) => attraction.accept(childVisitor));

  console.log('\n%cVisitante Adulto', COLORS.purple);
  const adultVisitor = new AdultVisitor();
  attractions.forEach((attraction) => attraction.accept(adultVisitor));

  console.log('\n%cVisitante Adulto Mayor', COLORS.purple);
  const seniorVisitor = new SeniorVisitor();
  attractions.forEach((attraction) => attraction.accept(seniorVisitor));

  console.log('\n-------------------------\n');
  /**
   * !Objetivo:
   * Implementar el patrón Visitor en un sistema de gestión de vehículos
   * que permite realizar operaciones específicas sobre diferentes
   * tipos de vehículos (automóviles, motocicletas y camiones).
   *
   * Estas operaciones incluyen calcular el costo de mantenimiento
   * y verificar si los vehículos cumplen con las normas de emisión.
   */

  const vehicles: Vehicle[] = [new Car(2018, 50_000), new Motorcycle(2015, 30_000), new Truck(2012, 250_000, 20)];

  console.log('%c\nCalculando costos de mantenimiento:', COLORS.green);
  const maintenanceVisitor = new MaintenanceCostVisitor();
  vehicles.forEach((vehicle) => vehicle.accept(maintenanceVisitor));

  console.log('%c\nVerificando emisiones:', COLORS.green);
  const emissionVisitor = new EmissionCheckVisitor();
  vehicles.forEach((vehicle) => vehicle.accept(emissionVisitor));
};

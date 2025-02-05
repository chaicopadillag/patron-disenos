/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 *
 * https://refactoring.guru/es/design-patterns/builder
 */

import { ComputerService } from './services/computer.service.ts';
import { QueryService } from './services/query.service.ts';

export class MainBuilder {
  public static run(): void {
    // ComputerService.getComputerBasic();
    // ComputerService.getAdvancedComputer();
    ComputerService.getDeveloperComputer();
    QueryService.execute();
  }
}

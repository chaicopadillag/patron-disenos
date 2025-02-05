/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 *
 */

import { ReportService } from './services/report.service.ts';
import { RestaurantService } from './services/restaurant.service.ts';

export const mainFactory = () => {
  const restaurant = new RestaurantService();
  restaurant.createHamburger();

  const reportService = new ReportService();
  reportService.generateReport();
};

import { AppLoggerAdapter } from './adapters/logger-app.adapter.ts';

/**
 * ! Patrón Adapter
 *  Permite que objetos con interfaces incompatibles trabajen juntos, también es muy
 *  util para utilizar librerías de terceros en nuestra aplicación sin depender
 *  directamente de ellas.
 *
 * * Es útil cuando se quiere reutilizar una clase que no tiene la interfaz que
 * * necesitamos o cuando queremos crear una capa de abstracción para una librería
 * * de terceros.
 *
 * https://refactoring.guru/es/design-patterns/adapter
 */

export const mainAdapter = () => {
  const logger = new AppLoggerAdapter('mainAdapter.ts');

  logger.log('Log message');
  logger.error('Error message');
  logger.warn('Warning message');
};

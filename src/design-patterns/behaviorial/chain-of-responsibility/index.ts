import { AdvanceHandler } from './handlers/advance-handler.ts';
import { BasicHandler } from './handlers/basic-handler.ts';
import { IntermediateHandler } from './handlers/intermediate-handler.ts';
/**
 * ! Patron Chain of Responsibility
 * Es un patrón de diseño de comportamiento que te permite pasar solicitudes
 * a lo largo de una cadena de manejadores.
 *
 * * Es útil cuando se necesita procesar datos de diferentes maneras, pero no
 * * se sabe de antemano qué tipo de procesamiento se necesita o en qué orden
 * * pero se sabe que se necesita procesar en una secuencia.
 *
 * https://refactoring.guru/es/design-patterns/chain-of-responsibility
 */

export const mainChainOfResponsibility = () => {
  const basicHandler = new BasicHandler();
  const intermediateHandler = new IntermediateHandler();
  const advanceHandler = new AdvanceHandler();

  basicHandler.setNext(intermediateHandler).setNext(advanceHandler);
  basicHandler.handle('basic');
  basicHandler.handle('intermediate');
  basicHandler.handle('advance');
  basicHandler.handle('expert');
};

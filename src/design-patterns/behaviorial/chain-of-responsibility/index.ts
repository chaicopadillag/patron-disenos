import { AdvanceHandler } from './handlers/advance-handler.ts';
import { BasicHandler } from './handlers/basic-handler.ts';
import { Director } from './handlers/director.handler.ts';
import { IntermediateHandler } from './handlers/intermediate-handler.ts';
import { Manager } from './handlers/manager.handler.ts';
import { Supervisor } from './handlers/supervisor.handler.ts';
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
  console.log('---------------------');

  const supervisor = new Supervisor();
  const manager = new Manager();
  const director = new Director();

  // Configurar la cadena de responsabilidad
  supervisor.setNext(manager).setNext(director);

  // Probar diferentes solicitudes de compra
  console.log('Solicitud de compra de $500:');
  supervisor.approveRequest(500);

  console.log('\nSolicitud de compra de $3000:');
  supervisor.approveRequest(3000);

  console.log('\nSolicitud de compra de $7000:');
  supervisor.approveRequest(7000);
};

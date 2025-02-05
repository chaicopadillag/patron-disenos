import { DocumentPrototype } from './concrete-prototypes/document.prototype.ts';
/**
 * ! Patrón Prototype:

 * Es un patrón de diseño creacional que nos permite copiar objetos existentes sin hacer
 * que el código dependa de sus clases.
 * 
 * * Es útil cuando queremos duplicar el contenido, 
 * * el título y el autor de un documento, por ejemplo o cualquier objeto complejo.
 * 
 * https://refactoring.guru/es/design-patterns/prototype
 */

export const mainPrototype = () => {
  const document = new DocumentPrototype('Design Patterns', 'Creational Patterns', 'GOF', 1);
  console.log(document);
  document.showData();

  const document2 = document.clone();
  console.log(document2);
  document2.showData();
};

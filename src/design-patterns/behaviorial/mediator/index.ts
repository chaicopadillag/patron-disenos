import { Airplane } from './colleagues/airplane.model.ts';
import { User } from './colleagues/user.model.ts';
import { ChatRoom } from './mediators/chat-rom.ts';
import { ControlTower } from './mediators/control-tower.ts';
/**
 * ! Patrón mediator
 * Es un patrón de diseño de comportamiento que ayuda a reducir
 * las dependencias desordenadas entre objetos.
 * Este patrón limita la comunicación directa entre ellos,
 * haciendo que solo interactúen a través de un objeto mediador.
 *
 * * Es útil reducir la complejidad de las relaciones entre objetos
 *
 * https://refactoring.guru/es/design-patterns/mediator
 */

export const mainMediator = () => {
  const chatRoom = new ChatRoom('Devellpers Chat Room');
  const backendDeveloper = new User('Backend Developer', chatRoom);
  const frontendDeveloper = new User('Frontend Developer', chatRoom);
  const mobileDeveloper = new User('Mobile Developer', chatRoom);

  backendDeveloper.send('Hola a todos, mi nombre es Gerardo y soy desarrollador Backend');
  frontendDeveloper.send('Hola Gerardo, soy Frontend Developer');
  mobileDeveloper.send('Hola a todos, soy Mobile Developer');

  console.log('---------------------------------');

  const controlTower = new ControlTower();

  const airplane1 = new Airplane('Vuelo 101', controlTower);
  const airplane2 = new Airplane('Vuelo 202', controlTower);
  const airplane3 = new Airplane('Vuelo 303', controlTower);

  // Ejemplo de interacciones
  airplane1.requestLanding();
  airplane2.requestTakeoff();
  airplane3.requestLanding();
};

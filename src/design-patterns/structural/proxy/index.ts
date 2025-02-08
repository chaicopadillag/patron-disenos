import { Player } from './models/player.model.ts';
import { MagicPortal } from './proxies/magic-portal.proxy.ts';
import { SecretRoom } from './real/secret-rom.ts';

/**
 * ! Patrón Proxy
 * Este patrón se utiliza para controlar el acceso a un objeto, es decir,
 * se crea un objeto que actúa como intermediario entre el cliente y el objeto real.
 *
 * * Es útil cuando necesitamos controlar el acceso a un objeto,
 * * por ejemplo, para verificar si el cliente tiene permiso
 * * para acceder a ciertos métodos o propiedades.
 *
 * https://refactoring.guru/es/design-patterns/proxy
 *
 */
export const mainProxy = () => {
  const portal = new MagicPortal(new SecretRoom());

  const player1 = new Player('Jugador 1', 5);
  const player2 = new Player('Jugador 2', 10);
  const player3 = new Player('Jugador 3', 15);

  portal.enter(player1);
  portal.enter(player2);
  portal.enter(player3);
};

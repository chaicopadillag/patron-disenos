import { COLORS } from '../../../libs/colors.ts';
import { GameHistory } from './originators/game-history.ts';
import { Game } from './originators/game.ts';
/**
 * !Patrón Memento
 * Permite capturar y externalizar un estado interno de un objeto,
 * de manera que el objeto pueda ser restaurado a ese estado más tarde.
 *
 * * Es útil cuando se necesita guardar el estado de un objeto para poder
 * * volver a él en un futuro.
 *
 * https://refactoring.guru/es/design-patterns/memento
 */

export const mainMemento = () => {
  const game = new Game();
  const gameHistory = new GameHistory();

  game.play(2, 200, 'Nivel 2');
  gameHistory.add(game.save());

  game.play(3, 300, 'Nivel 3');
  gameHistory.add(game.save());

  game.play(4, 400, 'Nivel 4');
  gameHistory.add(game.save());
  console.log('%cEstado actual del juego', COLORS.green);
  game.restore(gameHistory.pop()!);
  console.log('%cDespués de restaurar el juego', COLORS.blue);
  game.restore(gameHistory.pop()!);
};

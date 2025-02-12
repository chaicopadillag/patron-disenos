import { Docky } from './contexts/docky.ts';
import { FlyStrategy, SwimFastStrategy, WalkStrategy } from './strategies/ducky.strategy.ts';
/**
 * ! Patrón Strategy
 *
 * El patrón Strategy es un patrón de diseño de software que define una
 * familia de algoritmos, los encapsula y los hace intercambiables.
 *
 *
 * * Es útil cuando se tiene una clase que tiene un comportamiento que puede
 * * cambiar en tiempo de ejecución y se quiere delegar la responsabilidad de
 * * la implementación a otra clase.
 *
 * https://refactoring.guru/es/design-patterns/strategy
 */

/**
 * !Objetivo: Explicar el patrón Strategy usando un ejemplo donde varios
 * ! patitos compiten en una carrera y cada uno tiene su propia
 * ! estrategia de movimiento (por ejemplo, nadar, volar o caminar).
 */

export const mainStrategy = () => {
  const patrick = new Docky('Patrick', new SwimFastStrategy());
  const donald = new Docky('Donald', new FlyStrategy());
  const daisy = new Docky('Daisy', new WalkStrategy());
  console.log('\n');
  patrick.performMove();
  donald.performMove();
  daisy.performMove();

  daisy.setMoveStrategy(new FlyStrategy());
  daisy.performMove();

  daisy.setMoveStrategy(new WalkStrategy());
  daisy.performMove();
};

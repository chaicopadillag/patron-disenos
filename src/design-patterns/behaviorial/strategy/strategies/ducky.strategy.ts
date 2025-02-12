import { COLORS } from '../../../../libs/colors.ts';
import { DockyStrategy } from '../interfaces/docky-strategy.interface.ts';

export class SwimFastStrategy implements DockyStrategy {
  move() {
    console.log('%cEl patito nada muy rápido sobre el agua\n', COLORS.blue);
  }
}

export class FlyStrategy implements DockyStrategy {
  move() {
    console.log('%cEl patito vuela por los aires\n', COLORS.green);
  }
}

export class WalkStrategy implements DockyStrategy {
  move() {
    console.log('%cEl patito camina por la tierra\n', COLORS.yellow);
  }
}

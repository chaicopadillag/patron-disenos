import { COLORS } from '../../../../libs/colors.ts';
import { AbilityI } from '../interfaces/ability.interface.ts';

export class SwordAttack implements AbilityI {
  use(): void {
    console.log('Ataca con %cEspada ferozmente', COLORS.brown);
  }
}

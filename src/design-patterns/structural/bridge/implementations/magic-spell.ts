import { COLORS } from '../../../../libs/colors.ts';
import { AbilityI } from '../interfaces/ability.interface.ts';

export class MagicSpell implements AbilityI {
  use(): void {
    console.log('Ataca con %cHechizo mágico', COLORS.pink);
  }
}

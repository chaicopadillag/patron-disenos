import { COLORS } from '../../../../libs/colors.ts';
import { AbilityI } from '../interfaces/ability.interface.ts';

export class AxeAttack implements AbilityI {
  use(): void {
    console.log('Atacando con %cHacha brutalmente', COLORS.red);
  }
}

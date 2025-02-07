import { AbilityI } from '../interfaces/ability.interface.ts';

export abstract class Character {
  constructor(protected ability: AbilityI) {}

  setAvility(avility: AbilityI): void {
    this.ability = avility;
  }
  abstract performAbility(): void;
}

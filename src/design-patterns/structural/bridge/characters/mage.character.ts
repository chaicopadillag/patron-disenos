import { Character } from '../abstractions/character.ts';

export class Mage extends Character {
  override performAbility(): void {
    console.log('El mago se prepara para atacar');
    this.ability.use();
  }
}

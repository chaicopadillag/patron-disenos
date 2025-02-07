import { Character } from '../abstractions/character.ts';

export class Warrior extends Character {
  override performAbility(): void {
    console.log('El guerrero se prepara para atacar');
    this.ability.use();
  }
}

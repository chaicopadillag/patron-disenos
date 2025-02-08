import { CharacterI } from '../interfaces/character.interface.ts';

export abstract class CharacterDecorator implements CharacterI {
  constructor(protected character: CharacterI) {}

  getDescription(): string {
    return this.character.getDescription();
  }

  getStats(): { attack: number; defense: number } {
    return this.character.getStats();
  }
}

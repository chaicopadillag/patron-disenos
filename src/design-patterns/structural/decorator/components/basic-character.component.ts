import { CharacterI } from '../interfaces/character.interface.ts';

export class BasicCharacter implements CharacterI {
  getDescription(): string {
    return 'Personaje básico';
  }
  getStats(): { attack: number; defense: number } {
    return { attack: 10, defense: 10 };
  }
}

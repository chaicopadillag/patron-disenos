import { CharacterDecorator } from './character.decorator.ts';

export class SwordDecorator extends CharacterDecorator {
  override getDescription(): string {
    return this.character.getDescription() + '\n * con Espada';
  }

  override getStats(): { attack: number; defense: number } {
    const stats = this.character.getStats();
    return { attack: stats.attack + 7, defense: stats.defense };
  }
}

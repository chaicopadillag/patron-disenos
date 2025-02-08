import { CharacterDecorator } from './character.decorator.ts';

export class RingDecorator extends CharacterDecorator {
  override getDescription(): string {
    return this.character.getDescription() + '\n * con Anillo';
  }

  override getStats(): { attack: number; defense: number } {
    const stats = this.character.getStats();
    return { attack: stats.attack + 3, defense: stats.defense };
  }
}

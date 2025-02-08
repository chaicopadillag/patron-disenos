import { CharacterDecorator } from './character.decorator.ts';

export class ShieldDecorator extends CharacterDecorator {
  override getDescription(): string {
    return this.character.getDescription() + '\n * con Escudo';
  }

  override getStats(): { attack: number; defense: number } {
    const stats = this.character.getStats();
    return { attack: stats.attack, defense: stats.defense + 10 };
  }
}

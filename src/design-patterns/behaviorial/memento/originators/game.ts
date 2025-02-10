import { COLORS } from '../../../../libs/colors.ts';
import { GameMemento } from '../mementos/game-memento.ts';

export class Game {
  private level: number = 1;
  private health: number = 100;
  private position: string = 'Iniciio';

  constructor() {
    console.log(`Game created with: 
        Level ${this.level},
        Health ${this.health},
        Position ${this.position}`);
  }

  save(): GameMemento {
    console.log('Saving game...');
    return new GameMemento(this.level, this.health, this.position);
  }

  play(level: number, health: number, position: string) {
    this.level = level;
    this.health = health;
    this.position = position;
    console.log(`
            Playing game with:
            Level ${this.level},
            Health ${this.health},
            Position ${this.position}`);
  }

  restore(memento: GameMemento) {
    this.level = memento.getLevel();
    this.health = memento.getHealth();
    this.position = memento.getPosition();
    console.log(
      `%cRestoring game...

        %cGame restored with:
    Level ${this.level},
    Health ${this.health},
    Position ${this.position}`,
      COLORS.blue,
      COLORS.green
    );
  }
}

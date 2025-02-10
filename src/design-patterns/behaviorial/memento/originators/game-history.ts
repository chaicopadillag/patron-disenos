import { GameMemento } from '../mementos/game-memento.ts';

export class GameHistory {
  private history: GameMemento[] = [];

  add(memento: GameMemento) {
    this.history.push(memento);
  }

  pop() {
    return this.history.pop();
  }
}

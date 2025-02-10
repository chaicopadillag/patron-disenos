import { DrawingMemento } from '../mementos/drawing-memento.ts';

export class BoardHistory {
  private mementos: DrawingMemento[] = [];

  push(memento: DrawingMemento): void {
    this.mementos.push(memento);
  }

  pop(): DrawingMemento | undefined {
    return this.mementos.pop();
  }
}

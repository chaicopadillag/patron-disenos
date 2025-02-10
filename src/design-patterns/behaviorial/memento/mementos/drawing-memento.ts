export class DrawingMemento {
  private shapes: string[];

  constructor(shapes: string[]) {
    this.shapes = [...shapes];
  }

  getShapes(): string[] {
    return [...this.shapes];
  }
}

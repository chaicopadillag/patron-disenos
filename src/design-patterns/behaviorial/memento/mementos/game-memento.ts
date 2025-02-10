export class GameMemento {
  constructor(private level: number, private health: number, private position: string) {}

  getLevel() {
    return this.level;
  }

  getHealth() {
    return this.health;
  }

  getPosition() {
    return this.position;
  }
}

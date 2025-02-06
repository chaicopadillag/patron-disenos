import { DragonBallI } from '../interfaces/dragon-ball.interface.ts';

export class DragonBall implements DragonBallI {
  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }
  name: string;
  description: string;

  showDescription(): void {
    console.log(`
        Ball: ${this.name}
        Description: ${this.description}`);
  }
}

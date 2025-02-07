import { PlayerI } from '../interfaces/player.interface.ts';

export class Player implements PlayerI {
  constructor(public name: string, public score: number, public level: number) {}

  copyWith(params: Partial<Player>): Player {
    return new Player(params.name ?? this.name, params.score ?? this.score, params.level ?? this.level);
  }

  displayState(): void {
    console.log(`
        Player: ${this.name},
        Score: ${this.score},
        Level: ${this.level}`);
  }
}

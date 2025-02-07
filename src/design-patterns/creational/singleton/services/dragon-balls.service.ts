import { DragonBall } from '../models/dragon-ball.model.ts';

export class DragonBallsService {
  private static instance: DragonBallsService;
  private dragonBalls: DragonBall[] = [];

  private constructor() {
    this.dragonBalls.push(new DragonBall('One 🔴', 'Grants you one wish'));
  }

  static getInstance(): DragonBallsService {
    if (!DragonBallsService.instance) {
      DragonBallsService.instance = new DragonBallsService();
      console.log('🐉 Dragon Balls Service created 🐉');
    }

    return DragonBallsService.instance;
  }

  recollectDragonBall(dragonBall: DragonBall): void {
    console.log(`Recollecting 🐉 Dragon Ball: ${dragonBall.name}`);
    if (this.dragonBalls.length === 7) {
      console.log('✅ You have already collected all 🐉 Dragon Balls 🔴🟠🟢⚪🟤🔵🟣');
      return;
    }

    this.dragonBalls.push(dragonBall);
  }

  invokeShenron(): void {
    if (this.dragonBalls.length < 7) {
      console.log('❌ You need to collect all 🐉 Dragon Balls 🔴🟠🟢⚪🟤🔵🟣');
      console.log('Faltan ' + (7 - this.dragonBalls.length) + ' esferas');
      return;
    }

    console.log('🐉 Invoking Shenron 🐉');
    console.log('🐉 Your wish has been granted 🔴🟠🟢⚪🟤🔵🟣');
    this.dragonBalls = [];
  }

  showDragonBalls(): void {
    console.log(`🐉 You have ${this.dragonBalls.length} Dragon Balls ⚪`);
    this.dragonBalls.forEach((dragonBall) => {
      dragonBall.showDescription();
    });
  }
}

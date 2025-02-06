import { DragonBall } from './models/dragon-ball.model.ts';
import { DragonBallsService } from './services/dragon-balls.service.ts';

export const mainSigleton = () => {
  const dragonBalls = DragonBallsService.getInstance();
  dragonBalls.showDragonBalls();

  const gokuDragonBall = DragonBallsService.getInstance();
  gokuDragonBall.recollectDragonBall(new DragonBall('Two 🟠', 'Grants you two wishes'));

  const vegetaDragonBall = DragonBallsService.getInstance();
  vegetaDragonBall.recollectDragonBall(new DragonBall('Three 🟢', 'Grants you three wishes'));

  dragonBalls.showDragonBalls();

  const trunksDragonBall = DragonBallsService.getInstance();
  trunksDragonBall.recollectDragonBall(new DragonBall('Four ⚪', 'Grants you four wishes'));

  trunksDragonBall.invokeShenron();

  const piccoloDragonBall = DragonBallsService.getInstance();
  piccoloDragonBall.recollectDragonBall(new DragonBall('Five 🟤', 'Grants you five wishes'));

  const krillinDragonBall = DragonBallsService.getInstance();
  krillinDragonBall.recollectDragonBall(new DragonBall('Six 🔵', 'Grants you six wishes'));

  krillinDragonBall.invokeShenron();

  const yamchaDragonBall = DragonBallsService.getInstance();
  yamchaDragonBall.recollectDragonBall(new DragonBall('Seven 🟣', 'Grants you seven wishes'));

  dragonBalls.showDragonBalls();
  gokuDragonBall.invokeShenron();
  dragonBalls.invokeShenron();
};

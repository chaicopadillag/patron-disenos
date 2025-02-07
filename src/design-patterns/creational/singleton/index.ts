import { Database } from './models/database.model.ts';
import { DragonBall } from './models/dragon-ball.model.ts';
import { configApp } from './services/config.service.ts';
import { DragonBallsService } from './services/dragon-balls.service.ts';
/**
 * ! Singleton:
 * Es un patrón de diseño creacional que garantiza que una clase
 * tenga una única instancia y proporciona un punto de acceso global a ella.
 *
 * * Es útil cuando necesitas controlar el acceso a una única instancia
 * * de una clase, como por ejemplo, en un objeto de base de datos o en un
 * * objeto de configuración.
 *
 * https://refactoring.guru/es/design-patterns/singleton
 */

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
  console.log('---------------------------------');
  const db1 = Database.getInstance();
  db1.connect();

  const db2 = Database.getInstance();
  db2.connect();

  console.log('Son iguales:', db1 === db2);
  db1.desconnect();
  db2.connect();

  console.log('---------------------------------');

  configApp.set('url', 'https://api.dragonball.com/v1');
  configApp.set('apiKey', '1234567890');
  configApp.set('secretKey', '0987654321');
  configApp.set('token', 'qwertyuiop');
  configApp.set('apiVersion', 'v1');

  console.log('url:', configApp.get('url'));
  console.log('apiKey:', configApp.get('apiKey'));
  console.log('secretKey:', configApp.get('secretKey'));
  console.log('token:', configApp.get('token'));
  console.log('apiVersion:', configApp.get('apiVersion'));
};

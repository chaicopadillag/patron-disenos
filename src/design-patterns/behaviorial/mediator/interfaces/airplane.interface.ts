import { ControlTowerI } from './control-tower.interface.ts';

export interface AirplaneI {
  name: string;
  controlTower: ControlTowerI;
  requestLanding(): void;
  requestTakeoff(): void;
  receiveMessage(from: AirplaneI, message: string): void;
  getId(): string;
}

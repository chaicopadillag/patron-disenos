import { AirplaneI } from './airplane.interface.ts';

export interface ControlTowerI {
  airplanes: AirplaneI[];
  requestLanding(airplane: AirplaneI): void;
  requestTakeoff(airplane: AirplaneI): void;
  registerAirplane(airplane: AirplaneI): void;
  sendMessage(sender: AirplaneI, message: string): void;
}

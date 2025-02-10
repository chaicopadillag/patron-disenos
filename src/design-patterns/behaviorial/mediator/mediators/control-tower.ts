import { COLORS } from '../../../../libs/colors.ts';
import { AirplaneI } from '../interfaces/airplane.interface.ts';
import { ControlTowerI } from '../interfaces/control-tower.interface.ts';

export class ControlTower implements ControlTowerI {
  public airplanes: AirplaneI[] = [];

  registerAirplane(airplane: AirplaneI): void {
    this.airplanes.push(airplane);
  }

  sendMessage(sender: AirplaneI, message: string): void {
    const airplanesSameRoom = this.airplanes.filter((a) => a !== sender);
    airplanesSameRoom.forEach((a) => a.receiveMessage(sender, message));
  }

  // Coordinación de aterrizaje
  requestLanding(sender: AirplaneI): void {
    console.log(`\n%cTorre de Control: %cPermiso de aterrizaje concedido a ${sender.getId()}`, COLORS.green, COLORS.white);

    this.sendMessage(sender, `${sender.getId()} está aterrizando.`);
  }

  // Coordinación de despegue
  requestTakeoff(sender: AirplaneI): void {
    console.log(`\n%cTorre de Control: %cPermiso de despegue concedido a ${sender.getId()}`, COLORS.green, COLORS.white);

    this.sendMessage(sender, `${sender.getId()} está despegando.`);
  }
}

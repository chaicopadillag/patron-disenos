import { COLORS } from '../../../../libs/colors.ts';
import { AirplaneI } from '../interfaces/airplane.interface.ts';
import { ControlTower } from '../mediators/control-tower.ts';

export class Airplane implements AirplaneI {
  constructor(public name: string, public controlTower: ControlTower) {
    controlTower.registerAirplane(this);
  }

  getId(): string {
    return this.name;
  }

  // Solicitar aterrizaje a la torre de control
  requestLanding(): void {
    console.log(`${this.name} solicita permiso para aterrizar.`);

    this.controlTower.requestLanding(this);
  }

  // Solicitar despegue a la torre de control
  requestTakeoff(): void {
    console.log(`${this.name} solicita permiso para despegar.`);
    this.controlTower.requestTakeoff(this);
  }

  // Recibir mensaje de otros aviones
  receiveMessage(sender: AirplaneI, message: string): void {
    console.log(`${this.name} recibe mensaje de %c${sender.getId()}: "${message}"`, COLORS.blue);
  }
}

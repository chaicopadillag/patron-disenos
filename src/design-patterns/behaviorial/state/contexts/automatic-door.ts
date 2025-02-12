import { COLORS } from '../../../../libs/colors.ts';
import { AutomaticDoorState } from '../interfaces/automatic-door-state.interface.ts';
import { Closed } from '../states/closed-door.ts';
/**
 * !Objetivo:
 * Implementar el patrón State para simular el funcionamiento de una puerta
 * automática.
 *
 * La puerta tiene diferentes estados:
 *  - Cerrada
 *  - Abriéndose
 *  - Abierta
 *  - Cerrándose
 * Su comportamiento varía dependiendo del estado actual.
 */

export class AutomaticDoor {
  private state: AutomaticDoorState;

  constructor() {
    this.state = new Closed(this);
  }

  setState(state: AutomaticDoorState): void {
    this.state = state;
    console.log(`%cEstado cambiado a: ${state.name}`, COLORS.green);
  }

  open(): void {
    this.state.open();
  }

  close(): void {
    this.state.close();
  }

  getStateName(): string {
    return this.state.name;
  }
}

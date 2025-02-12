import { sleep } from '../../../../libs/sleep.ts';
import { AutomaticDoor } from '../contexts/automatic-door.ts';
import { AutomaticDoorState } from '../interfaces/automatic-door-state.interface.ts';
import { Closed } from './closed-door.ts';
import { Opening } from './opening-door.ts';

export class Closing implements AutomaticDoorState {
  public name: string = 'Cerrándose';

  constructor(private door: AutomaticDoor) {
    this.afterClosing();
  }

  private async afterClosing() {
    await sleep(3000);

    console.log('La puerta se está cerrando.');
    this.door.setState(new Closed(this.door));
  }

  open(): void {
    console.log('Detectando movimiento. Abriendo la puerta nuevamente...');
    this.door.setState(new Opening(this.door));
  }

  close(): void {
    console.log('La puerta se ha cerrado.');
    this.door.setState(new Closed(this.door));
  }
}

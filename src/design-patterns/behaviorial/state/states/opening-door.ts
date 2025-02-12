import { sleep } from '../../../../libs/sleep.ts';
import { AutomaticDoor } from '../contexts/automatic-door.ts';
import { AutomaticDoorState } from '../interfaces/automatic-door-state.interface.ts';
import { Open } from './open-door.ts';

export class Opening implements AutomaticDoorState {
  public name: string = 'Abriendose';

  constructor(public door: AutomaticDoor) {
    this.afterOpen();
  }

  private async afterOpen() {
    await sleep(3000);

    console.log('La puerta se ha abierto.');
    this.door.setState(new Open(this.door));
  }

  open(): void {
    console.log('La puerta ya se está abriendo.');
  }

  close(): void {
    console.log('La puerta no puede cerrarse mientras se abre.');
  }
}

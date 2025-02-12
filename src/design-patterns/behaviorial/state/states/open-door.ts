import { AutomaticDoor } from '../contexts/automatic-door.ts';
import { AutomaticDoorState } from '../interfaces/automatic-door-state.interface.ts';
import { Closing } from './closing-door.ts';

export class Open implements AutomaticDoorState {
  public name: string;

  constructor(private door: AutomaticDoor) {
    this.name = 'Abierta';
  }

  open(): void {
    console.log('La puerta ya está abierta.');
  }

  close(): void {
    console.log('Cerrando la puerta...');
    this.door.setState(new Closing(this.door));
  }
}

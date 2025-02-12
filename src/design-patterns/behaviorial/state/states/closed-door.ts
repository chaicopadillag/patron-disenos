import { AutomaticDoor } from '../contexts/automatic-door.ts';
import { AutomaticDoorState } from '../interfaces/automatic-door-state.interface.ts';
import { Opening } from './opening-door.ts';

export class Closed implements AutomaticDoorState {
  public name: string = 'Cerrada';
  constructor(private door: AutomaticDoor) {}

  open(): void {
    console.log('Abriendo la puerta...');
    this.door.setState(new Opening(this.door));
  }

  close(): void {
    console.log('La puerta ya está cerrada.');
  }
}

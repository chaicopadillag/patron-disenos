import { COLORS } from '../../../../libs/colors.ts';
import { Subscriber } from '../interfaces/subscriber.interface.ts';

export class User implements Subscriber {
  constructor(public name: string) {}

  notify(message: string): void {
    console.log(`%c${this.name} %creceived a notification: %c${message}`, COLORS.blue, COLORS.white, COLORS.purple);
  }
}

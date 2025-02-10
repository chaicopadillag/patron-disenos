import { COLORS } from '../../../../libs/colors.ts';
import { SubscriberObserver } from '../interfaces/subscriber.interface.ts';

export class User implements SubscriberObserver {
  constructor(public name: string) {}

  notify(message: string): void {
    console.log(`%c${this.name} %creceived a notification: %c${message}`, COLORS.blue, COLORS.white, COLORS.purple);
  }
}

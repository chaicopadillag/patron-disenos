import { COLORS } from '../../../../libs/colors.ts';
import { SubscriberObserver } from '../interfaces/subscriber.interface.ts';

export class YoutubeChannel {
  private subscribers: SubscriberObserver[] = [];

  constructor(public name: string) {}

  subscribe(subscriber: SubscriberObserver): void {
    console.log(`%c${subscriber.name} %csubscribed to %c${this.name}`, COLORS.green, COLORS.white, COLORS.green);
    this.subscribers.push(subscriber);
  }

  unsubscribe(subscriber: SubscriberObserver): void {
    console.log(`%c${subscriber.name} %cunsubscribed to %c${this.name}`, COLORS.red, COLORS.white, COLORS.pink);
    this.subscribers = this.subscribers.filter((existingSubscriber) => existingSubscriber !== subscriber);
  }

  publishVideo(message: string): void {
    this.subscribers.forEach((subscriber) => subscriber.notify(message));
  }
}

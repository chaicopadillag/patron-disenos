import { NotificationI } from '../interfaces/notification.interface.ts';

export abstract class NotificationDecorator implements NotificationI {
  constructor(private notification: NotificationI) {}

  send(message: string): void {
    this.notification.send(message);
  }
}

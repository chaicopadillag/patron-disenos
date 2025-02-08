import { NotificationI } from '../interfaces/notification.interface.ts';

export class BasicNotification implements NotificationI {
  public send(message: string): void {
    console.log(`Basic notification: ${message}`);
  }
}

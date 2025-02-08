import { COLORS } from '../../../../libs/colors.ts';
import { NotificationI } from '../interfaces/notification.interface.ts';

export class BasicNotification implements NotificationI {
  public send(message: string): void {
    console.log(`%cBasic notification: ${message}`, COLORS.gray);
  }
}

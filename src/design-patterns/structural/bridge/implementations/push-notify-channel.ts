import { NotificationChannelI } from '../interfaces/notification-chanel.interface.ts';

export class PushNotifyChannel implements NotificationChannelI {
  send(message: string): void {
    console.log(`Enviando notificación push: ${message}`);
  }
}

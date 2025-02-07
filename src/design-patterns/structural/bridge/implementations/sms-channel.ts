import { NotificationChannelI } from '../interfaces/notification-chanel.interface.ts';

export class SmsChannel implements NotificationChannelI {
  send(message: string): void {
    console.log(`Enviando mensaje de texto: ${message}`);
  }
}

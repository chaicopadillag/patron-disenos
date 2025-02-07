import { NotificationChannelI } from '../interfaces/notification-chanel.interface.ts';

export class EmailChannel implements NotificationChannelI {
  send(message: string): void {
    console.log(`Enviando correo electrónico: ${message}`);
  }
}

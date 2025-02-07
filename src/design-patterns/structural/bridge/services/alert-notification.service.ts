import { COLORS } from '../../../../libs/colors.ts';
import { Notification } from '../abstractions/notification.ts';
import { NotificationChannelI } from '../interfaces/notification-chanel.interface.ts';

export class AlertNotification extends Notification {
  notify(message: string): void {
    console.log('\n%cNotificación de Alerta:', COLORS.red);
    this.channel.send(message);
  }

  setChannel(channel: NotificationChannelI): void {
    this.channel = channel;
  }
}

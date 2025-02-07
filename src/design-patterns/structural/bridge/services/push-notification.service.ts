import { COLORS } from '../../../../libs/colors.ts';
import { Notification } from '../abstractions/notification.ts';
import { NotificationChannelI } from '../interfaces/notification-chanel.interface.ts';

export class PushNotification extends Notification {
  override notify(message: string): void {
    console.log('\n%cNotificación de Push:', COLORS.green);
    this.channel.send(message);
  }

  override setChannel(channel: NotificationChannelI): void {
    this.channel = channel;
  }
}

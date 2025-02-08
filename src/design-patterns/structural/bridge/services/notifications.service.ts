import { COLORS } from '../../../../libs/colors.ts';
import { Notifications } from '../abstractions/notifications.ts';

export default class NotificationsService extends Notifications {
  override notify(mesage: string) {
    console.log('\n Envian notificaciones a %ctodos los canales', COLORS.purple);
    this.channels.forEach((channel) => {
      channel.send(mesage);
    });
  }

  override addChannel(channel) {
    this.channels.push(channel);
  }
}

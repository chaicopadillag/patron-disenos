import { COLORS } from '../../../../libs/colors.ts';
import { NotificationDecorator } from './notification.decorator.ts';

export class SMSDecorator extends NotificationDecorator {
  send(message: string): void {
    super.send(message);
    this.sendSMS(message);
  }

  private sendSMS(message: string): void {
    console.log(`%cEnviando notificación por SMS: ${message}`, COLORS.orange);
  }
}

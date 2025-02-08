import { NotificationDecorator } from './notification.decorator.ts';

export class EmailDecorator extends NotificationDecorator {
  send(message: string): void {
    super.send(message);
    this.sendEmail(message);
  }

  private sendEmail(message: string): void {
    console.log(`Enviando notificación por email: ${message}`);
  }
}

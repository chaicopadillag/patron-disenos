import { BasicNotification } from '../components/basic-notification.component.ts';
import { EmailDecorator } from '../decorators/email.decorator.ts';
import { SMSDecorator } from '../decorators/sms.decorator.ts';

export class DecoratorService {
  public static run(): void {
    this.sendNotification();
  }

  static sendNotification() {
    const basicNotification = new BasicNotification();
    basicNotification.send('Hello world!');

    const emailNotification = new EmailDecorator(basicNotification);
    emailNotification.send('Alerta de seguridad');

    const smsNotification = new SMSDecorator(emailNotification);
    smsNotification.send('Tu cuenta ha sido bloqueada');
  }
}

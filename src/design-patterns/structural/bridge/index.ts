import { AxeAttack } from './implementations/axe-attack.ts';
import { EmailChannel } from './implementations/email-channel.ts';
import { MagicSpell } from './implementations/magic-spell.ts';
import { PushNotifyChannel } from './implementations/push-notify-channel.ts';
import { SmsChannel } from './implementations/sms-channel.ts';
import { SwordAttack } from './implementations/sword-attack.ts';
import { AlertNotification } from './services/alert-notification.service.ts';
import { Mage } from './services/mage.character.ts';
import { PushNotification } from './services/push-notification.service.ts';
import { ReminderNotification } from './services/reminder-notification.service.ts';
import { Warrior } from './services/warrior.character.ts';

export const mainBrigde = () => {
  const warrior = new Warrior(new SwordAttack());
  warrior.performAbility();
  warrior.setAvility(new AxeAttack());
  warrior.performAbility();

  const mage = new Mage(new MagicSpell());
  mage.performAbility();
  console.log('---------------------------------');

  // Crear una notificación de alerta usando el canal de correo electrónico
  const alert = new AlertNotification(new EmailChannel());

  alert.notify('Alerta de seguridad: Se ha detectado un acceso no autorizado.');

  // Cambiar el canal a SMS y volver a enviar la alerta
  alert.setChannel(new SmsChannel());
  alert.notify('Alerta de seguridad: Se ha detectado un acceso no autorizado.');

  // Crear una notificación de recordatorio usando el canal de SMS
  const reminder = new ReminderNotification(new SmsChannel());
  reminder.notify('Recordatorio: Tu cita con el médico es mañana a las 10:00 a.m.');

  // Cambiar el canal de recordatorio a correo electrónico y enviar nuevamente
  reminder.setChannel(new PushNotifyChannel());
  reminder.notify('Recordatorio: Tu cita con el médico es mañana a las 10:00 a.m.');

  // Crear una notificación de push usando el canal de notificación push
  const push = new PushNotification(new PushNotifyChannel());
  push.notify('Nueva actualización disponible. Haz clic para instalar.');
};

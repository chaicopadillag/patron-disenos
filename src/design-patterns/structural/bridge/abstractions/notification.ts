import { NotificationChannelI } from '../interfaces/notification-chanel.interface.ts';

export abstract class Notification {
  constructor(protected channel: NotificationChannelI) {}

  abstract notify(message: string): void;
  abstract setChannel(channel: NotificationChannelI): void;
}

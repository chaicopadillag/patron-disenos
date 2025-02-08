import { NotificationChannelI } from '../interfaces/notification-chanel.interface.ts';

export abstract class Notifications {
  constructor(protected channels: NotificationChannelI[]) {}

  abstract notify(message: string): void;
  abstract addChannel(channel: NotificationChannelI): void;
}

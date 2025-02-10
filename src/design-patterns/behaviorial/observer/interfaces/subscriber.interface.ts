export interface SubscriberObserver {
  name: string;
  notify(message: string): void;
}

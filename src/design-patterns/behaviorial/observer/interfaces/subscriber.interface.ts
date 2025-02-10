export interface Subscriber {
  name: string;
  notify(message: string): void;
}

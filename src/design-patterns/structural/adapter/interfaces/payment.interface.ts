export interface PaymentI {
  pay(amount: number): void;
  refund(amount: number): void;
  weebhook(): void;
}

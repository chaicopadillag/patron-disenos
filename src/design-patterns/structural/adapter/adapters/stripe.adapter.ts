import { COLORS } from '../../../../libs/colors.ts';
import { PaymentI } from '../interfaces/payment.interface.ts';
import { StripeService } from '../services/stripe.service.ts';

export class StripeAdapter implements PaymentI {
  private stripe = new StripeService();

  pay(amount: number): void {
    this.stripe.makeCharge(amount);
  }
  refund(amount: number): void {
    console.log(`Reembolsando $${amount} con %cStripe`, COLORS.purple);
  }
  weebhook(): void {
    console.log(`Configurando webhook de %cStripe`, COLORS.purple);
  }
}

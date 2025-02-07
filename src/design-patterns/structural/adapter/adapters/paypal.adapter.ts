import { COLORS } from '../../../../libs/colors.ts';
import { PaymentI } from '../interfaces/payment.interface.ts';
import { PayPalService } from '../services/paypal.service.ts';

export class PayPalAdapter implements PaymentI {
  private paypalService = new PayPalService();

  pay(amount: number): void {
    this.paypalService.sendPayment(amount);
  }

  refund(amount: number): void {
    console.log(`Reembolsando $${amount} con %cPayPal`, COLORS.blue);
  }

  weebhook(): void {
    console.log(`Configurando webhook de %cPayPal`, COLORS.blue);
  }
}

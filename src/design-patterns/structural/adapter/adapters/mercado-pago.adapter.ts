import { COLORS } from '../../../../libs/colors.ts';
import { PaymentI } from '../interfaces/payment.interface.ts';
import { MercadoPagoService } from '../services/mercado-pago.service.ts';

export class MercadoPagoAdapter implements PaymentI {
  private mercadoPago = new MercadoPagoService();

  pay(amount: number): void {
    this.mercadoPago.pay(amount);
  }

  refund(amount: number): void {
    console.log(`Reembolsando $${amount} con %cMercadoPago`, COLORS.yellow);
  }

  weebhook(): void {
    console.log(`Configurando webhook de %cMercadoPago`, COLORS.yellow);
  }
}

import { COLORS } from '../../../../libs/colors.ts';

export class MercadoPagoService {
  pay(amount: number): void {
    console.log(`Procesando pago de $${amount} con %cMercadoPago`, COLORS.yellow);
  }
}

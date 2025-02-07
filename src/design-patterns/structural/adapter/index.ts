import { AppLoggerAdapter } from './adapters/logger-app.adapter.ts';
import { MercadoPagoAdapter } from './adapters/mercado-pago.adapter.ts';
import { PayPalAdapter } from './adapters/paypal.adapter.ts';
import { StripeAdapter } from './adapters/stripe.adapter.ts';
import { PaymentI } from './interfaces/payment.interface.ts';

/**
 * ! Patrón Adapter
 *  Permite que objetos con interfaces incompatibles trabajen juntos, también es muy
 *  util para utilizar librerías de terceros en nuestra aplicación sin depender
 *  directamente de ellas.
 *
 * * Es útil cuando se quiere reutilizar una clase que no tiene la interfaz que
 * * necesitamos o cuando queremos crear una capa de abstracción para una librería
 * * de terceros.
 *
 * https://refactoring.guru/es/design-patterns/adapter
 */

export const mainAdapter = () => {
  const logger = new AppLoggerAdapter('mainAdapter.ts');

  logger.log('Log message');
  logger.error('Error message');
  logger.warn('Warning message');

  console.log('----------------------------------------');

  const paymentAmount = 100;
  const paypalProcessor: PaymentI = new PayPalAdapter();
  const stripeProcessor: PaymentI = new StripeAdapter();
  const mercadoPagoProcessor: PaymentI = new MercadoPagoAdapter();

  // Procesar pagos con los diferentes servicios
  // Los 3 procesadores de pago trabajan exactamente igual después de adaptaros
  console.log('Usando PayPal:');
  paypalProcessor.pay(paymentAmount);

  console.log('\nUsando Stripe:');
  stripeProcessor.pay(paymentAmount);

  console.log('\nUsando MercadoPago:');
  mercadoPagoProcessor.pay(paymentAmount);
};

import { TaxStrategy } from '../interfaces/tax-strategy.interface.ts';

// Estrategia 1: Impuestos en USA
export class USATaxStrategy implements TaxStrategy {
  calculateTax(amount: number): number {
    return amount * 0.1;
  }
}

// Estrategia 2: Impuestos en Canada
export class CanadaTaxStrategy implements TaxStrategy {
  calculateTax(amount: number): number {
    return amount * 0.13;
  }
}

// Estrategia 3: Impuestos en Germany
export class GermanyTaxStrategy implements TaxStrategy {
  calculateTax(amount: number): number {
    return amount * 0.19;
  }
}

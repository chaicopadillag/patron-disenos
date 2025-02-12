import { TaxStrategy } from '../interfaces/tax-strategy.interface.ts';

/**	
    1.	Implementar una interfaz TaxStrategy que defina un método 
        calculateTax(amount: number): number.
        
    2.	Crear clases específicas de estrategia para los países disponibles:
      •	USA: Impuesto del 10%.
      •	Canada: Impuesto del 13%.
      •	Germany: Impuesto del 19%.
      
    3.	Implementar una clase TaxCalculator que utilice las estrategias 
        para calcular los impuestos.
 */
export class TaxCalculator {
  constructor(private strategy: TaxStrategy) {}

  // Cambiar la estrategia de cálculo de impuestos
  setStrategy(strategy: TaxStrategy): void {
    this.strategy = strategy;
  }

  // Calcular impuestos
  calculate(amount: number): number {
    return this.strategy.calculateTax(amount);
  }
}

export interface TaxStrategy {
  calculateTax(amount: number): number;
}

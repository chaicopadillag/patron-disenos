export interface VendingMachineState {
  name: string;
  insertMoney(amount: number): void;
  selectProduct(): void;
  dispenseProduct(): void;
}

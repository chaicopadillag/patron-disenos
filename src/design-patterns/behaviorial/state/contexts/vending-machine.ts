import { VendingMachineState } from '../interfaces/vending-machine-state.interface.ts';
import { WaitingForMoney } from '../states/waiting-for-money.ts';

export class VendingMachine {
  private state: VendingMachineState;

  constructor() {
    this.state = new WaitingForMoney(this);
  }

  public insertMoney(amount: number): void {
    this.state.insertMoney(amount);
  }

  public selectProduct(): void {
    this.state.selectProduct();
  }

  public dispenseProduct(): void {
    this.state.dispenseProduct();
  }

  public setState(state: VendingMachineState): void {
    this.state = state;
  }

  public getState(): string {
    return this.state.name;
  }
}

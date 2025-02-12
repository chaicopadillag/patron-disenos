import { COLORS } from '../../../../libs/colors.ts';
import { VendingMachine } from '../contexts/vending-machine.ts';
import { VendingMachineState } from '../interfaces/vending-machine-state.interface.ts';
import { SelectProduct } from './select-product.ts';

export class WaitingForMoney implements VendingMachineState {
  public name = 'Esperando Dinero';

  constructor(private vendingMachine: VendingMachine) {}

  public insertMoney(amount: number): void {
    console.log(`%c🤑 Dinero insertado $${amount}`, COLORS.green);
    console.log('Selecciona un producto:');
    this.vendingMachine.setState(new SelectProduct(this.vendingMachine));
  }

  public selectProduct(): void {
    console.log('Inserta dinero primero');
  }

  public dispenseProduct(): void {
    console.log('Inserta dinero primero');
  }
}

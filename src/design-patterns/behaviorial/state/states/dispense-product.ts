import { COLORS } from '../../../../libs/colors.ts';
import { VendingMachine } from '../contexts/vending-machine.ts';
import { VendingMachineState } from '../interfaces/vending-machine-state.interface.ts';
import { WaitingForMoney } from './waiting-for-money.ts';

export class DispenseProduct implements VendingMachineState {
  public name = 'Despachando el producto';

  constructor(private vendingMachine: VendingMachine) {}

  public insertMoney(amount: number): void {
    console.log('Retira tu producto primero');
  }

  public selectProduct(): void {
    console.log('Ya seleccionaste un producto');
  }

  public dispenseProduct(): void {
    console.log('%cProducto entregado, disfrútalo 🍪', COLORS.blue);
    this.vendingMachine.setState(new WaitingForMoney(this.vendingMachine));
  }
}

import { COLORS } from '../../../../libs/colors.ts';
import { VendingMachine } from '../contexts/vending-machine.ts';
import { VendingMachineState } from '../interfaces/vending-machine-state.interface.ts';
import { DispenseProduct } from './dispense-product.ts';

export class SelectProduct implements VendingMachineState {
  public name = 'Seleccionando Producto';

  constructor(private vendingMachine: VendingMachine) {}

  public insertMoney(amount: number): void {
    console.log('Ya insertaste dinero');
  }

  public selectProduct(): void {
    console.log('%cYa seleccionaste un producto 🍪', COLORS.orange);
    this.vendingMachine.setState(new DispenseProduct(this.vendingMachine));
  }

  public dispenseProduct(): void {
    console.log('Selecciona un producto primero');
  }
}

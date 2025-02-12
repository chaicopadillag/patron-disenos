import { COLORS } from '../../../libs/colors.ts';
import { sleep } from '../../../libs/sleep.ts';
import { VendingMachine } from './contexts/vending-machine.ts';
/**
 * ! Patrón State
 * Este patrón permite a un objeto cambiar su comportamiento
 * cuando su estado interno cambia.
 *
 * * Es útil cuando un objeto tiene un comportamiento que depende de su estado
 * * y debe cambiar su comportamiento en tiempo de ejecución dependiendo de ese estado.
 *
 * https://refactoring.guru/es/design-patterns/state
 */

/**
 * * Objetivo: Implementar el patrón State para simular el funcionamiento
 * * de una máquina expendedora.
 * * La máquina tiene diferentes estados,
 *  * Como Esperando Dinero,
 *  * Seleccionando Producto,
 *  * Entregando Producto,
 * * y su comportamiento varía dependiendo del estado actual.
 */

export const mainState = async () => {
  const vendingMachine = new VendingMachine();
  console.log(`Estado actual: %c${vendingMachine.getState()}`, COLORS.yellow);

  console.log(`
    1. Insertar dinero.
    2. Seleccionar producto.
    3. Entregar producto.
    4. Salir.`);

  let selectOption: string | null = '4';

  do {
    console.clear();
    console.log(`Estado actual: %c${vendingMachine.getState()}`, COLORS.yellow);
    console.log(`
    1. Insertar dinero.
    2. Seleccionar producto.
    3. Recoger producto.
    4. Salir.`);
    selectOption = prompt('Selecciona una opción:');

    switch (selectOption) {
      case '1':
        const amount = Number(prompt('Ingresa la cantidad de dinero a insertar:'));
        vendingMachine.insertMoney(amount);
        break;
      case '2':
        vendingMachine.selectProduct();
        break;
      case '3':
        vendingMachine.dispenseProduct();
        break;
      default:
        console.log('Opción inválida');
        console.log('Adiós 👋');
        break;
    }
    await sleep(2000);
  } while (selectOption !== '4');
};

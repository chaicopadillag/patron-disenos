/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 *
 * https://refactoring.guru/es/design-patterns/builder
 */

import { ComputerBuilderI } from '../interfaces/computer-builder.interface.ts';
import { ComputerI } from '../interfaces/computer.interface.ts';
import { Computer } from '../models/computer.ts';


export class ComputerBuilder implements ComputerBuilderI {
  computer: Computer;

  constructor() {
    this.computer = new Computer();
  }

  setRam(ram: string): ComputerBuilderI {
    this.computer.ram = ram;
    return this;
  }
  setCpu(cpu: string): ComputerBuilderI {
    this.computer.cpu = cpu;
    return this;
  }
  setGpu(gpu: string): ComputerBuilderI {
    this.computer.gpu = gpu;
    return this;
  }
  setStorage(storage: string): ComputerBuilderI {
    this.computer.storage = storage;
    return this;
  }
  setOs(os: string): ComputerBuilderI {
    this.computer.os = os;
    return this;
  }

  build(): ComputerI {
    return this.computer;
  }
}

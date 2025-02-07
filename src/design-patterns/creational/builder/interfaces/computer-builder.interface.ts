import { ComputerI } from './computer.interface.ts';

export interface ComputerBuilderI {
  computer: ComputerI;

  setRam(ram: string): ComputerBuilderI;
  setCpu(cpu: string): ComputerBuilderI;
  setGpu(gpu: string): ComputerBuilderI;
  setStorage(storage: string): ComputerBuilderI;
  setOs(os: string): ComputerBuilderI;
  build(): ComputerI;
}

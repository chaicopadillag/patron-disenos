import { ComputerI } from '../interfaces/computer.interface.ts';

export class Computer implements ComputerI {
  ram: string;
  cpu: string;
  gpu: string;
  storage: string;
  os?: string | undefined;
  displayComputerInfo(): void {
    const computerDescription = `RAM: ${this.ram}
CPU: ${this.cpu}
GPU: ${this.gpu}
Storage: ${this.storage}
${this.os ? `OS: ${this.os}` : 'No OS'}
    `;

    console.log(computerDescription);
  }
}

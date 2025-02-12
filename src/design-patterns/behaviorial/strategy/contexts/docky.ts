import { DockyStrategy } from '../interfaces/docky-strategy.interface.ts';

export class Docky {
  constructor(private name: string, private strategy: DockyStrategy) {
    console.log(`El patito ${name} está listo para competir`);
  }

  setMoveStrategy(strategy: DockyStrategy) {
    this.strategy = strategy;
    console.log(`El patito ${this.name} ha cambiado su estrategia de movimiento`);
  }

  performMove() {
    console.log(`El patito ${this.name} prepara su movimiento...`);
    this.strategy.move();
  }
}

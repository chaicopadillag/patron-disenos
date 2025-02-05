import { Prototype } from '../interfaces/prototype.interface.ts';

export class PokemonPrototype implements Prototype {
  constructor(public name: string, public type: string, public level: number, public attacks: string[]) {}

  clone(): PokemonPrototype {
    return new PokemonPrototype(this.name, this.type, this.level, [...this.attacks]);
  }

  showData(): void {
    console.log(`
        Name: ${this.name},
        Type: ${this.type},
        Level: ${this.level},
        Attacks: ${this.attacks.join(', ')}`);
  }
}

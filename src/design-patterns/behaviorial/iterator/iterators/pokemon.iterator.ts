import PokemonCollection from '../collections/pokemon.collection.ts';
import { Iterator } from '../interfaces/interator.interface.ts';
import { Pokemon } from '../models/pokemon.model.ts';

export default class PokemonIterator implements Iterator<Pokemon> {
  private index = 0;
  constructor(private collection: PokemonCollection) {}

  next(): Pokemon | undefined {
    if (this.hasNext()) {
      return this.collection.getPokemonAt(this.index++);
    }
    return undefined;
  }

  hasNext(): boolean {
    return this.index < this.collection.getLength();
  }

  current(): Pokemon | undefined {
    return this.collection.getPokemonAt(this.index);
  }
}

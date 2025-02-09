import PokemonIterator from '../iterators/pokemon.iterator.ts';
import { Pokemon } from '../models/pokemon.model.ts';

export default class PokemonCollection {
  private pokemons: Pokemon[] = [];

  add(pokemon: Pokemon): void {
    this.pokemons.push(pokemon);
  }

  getPokemonAt(index: number): Pokemon | undefined {
    return this.pokemons[index];
  }

  getLength(): number {
    return this.pokemons.length;
  }

  createIterator(): PokemonIterator {
    return new PokemonIterator(this);
  }
}

import { CardCollection } from './collections/card.collection.ts';
import PokemonCollection from './collections/pokemon.collection.ts';
import { Card } from './models/card.model.ts';
import { Pokemon } from './models/pokemon.model.ts';

/**
 * ! Patrón Iterator
 * Este patrón permite recorrer los elementos de una colección sin exponer
 * la estructura interna de la colección.
 *
 * * Es útil cuando se necesita recorrer una colección de elementos sin importar
 * * cómo se almacenan los elementos.
 *
 * https://refactoring.guru/es/design-patterns/iterator
 */
export const mainIterator = () => {
  const pokemons = new PokemonCollection();
  pokemons.add(new Pokemon('Pikachu', 'Electric'));
  pokemons.add(new Pokemon('Charmander', 'Fire'));
  pokemons.add(new Pokemon('Meowth', 'Normal'));
  pokemons.add(new Pokemon('Bulbasaur', 'Grass'));
  pokemons.add(new Pokemon('Squirtle', 'Water'));
  pokemons.add(new Pokemon('Articuno', 'Ice'));
  pokemons.add(new Pokemon('Zapdos', 'Electric'));
  pokemons.add(new Pokemon('Moltres', 'Fire'));
  pokemons.add(new Pokemon('Mewtwo', 'Psychic'));
  pokemons.add(new Pokemon('Mew', 'Psychic'));
  pokemons.add(new Pokemon('Raikou', 'Electric'));
  pokemons.add(new Pokemon('Entei', 'Fire'));
  pokemons.add(new Pokemon('Suicune', 'Water'));
  pokemons.add(new Pokemon('Lugia', 'Psychic'));
  pokemons.add(new Pokemon('Ho-Oh', 'Fire'));

  const iterator = pokemons.createIterator();

  while (iterator.hasNext()) {
    const pokemon = iterator.next();
    if (pokemon) {
      console.log(`Pokemon: ${pokemon?.name} - Type: ${pokemon?.type}`);
    }
  }
  console.log('------------------------------------');
  const deck = new CardCollection();
  // Agregar algunas cartas a la colección
  deck.addCard(new Card('As de Corazones', 1));
  deck.addCard(new Card('Rey de Corazones', 13));
  deck.addCard(new Card('Reina de Corazones', 12));
  deck.addCard(new Card('Jota de Corazones', 11));
  // Recorrer la colección en orden usando for...of
  console.log('Recorriendo la colección de cartas:');
  for (const card of deck) {
    console.log(`Carta: ${card.name}, Valor: ${card.value}`);
  }
};

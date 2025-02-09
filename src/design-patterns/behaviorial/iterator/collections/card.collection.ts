import { Card } from '../models/card.model.ts';

export class CardCollection {
  private cards: Card[] = [];

  addCard(card: Card): void {
    this.cards.push(card);
  }

  *[Symbol.iterator](): IterableIterator<Card> {
    yield* this.cards;
  }

  *getCard(): IterableIterator<Card> {
    for (const card of this.cards) {
      yield card;
    }
  }
}

import { HotBeverage } from '../abstracts/hot-beverage.ts';

export class Tea extends HotBeverage {
  protected override addMainIngredient(): void {
    console.log('Añadiendo una bolsa de té');
  }

  protected override addCondiments(): void {
    console.log('Añadiendo miel y limón');
  }
}

export class Coffee extends HotBeverage {
  protected override addMainIngredient(): void {
    console.log('Añadiendo café molido');
  }

  protected override addCondiments(): void {
    console.log('Añadiendo azúcar y leche');
  }
}

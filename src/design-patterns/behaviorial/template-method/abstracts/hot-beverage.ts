export abstract class HotBeverage {
  prepare(): void {
    this.boilWater();
    this.addMainIngredient();
    this.pourInCup();
    this.addCondiments();
  }

  private boilWater() {
    console.log('Hirviendo agua...');
  }

  private pourInCup() {
    console.log('Sirviendo en la taza...');
  }

  protected abstract addMainIngredient(): void;
  protected abstract addCondiments(): void;
}

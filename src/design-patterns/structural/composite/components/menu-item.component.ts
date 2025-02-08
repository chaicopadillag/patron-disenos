import { COLORS } from '../../../../libs/colors.ts';
import { Component } from '../interfaces/component.interface.ts';

export class MenuItem implements Component {
  constructor(public name: string, public price: number) {}

  showDetails(indent: string = ''): void {
    console.log(`${indent}🔸 ${this.name}: %c$${this.price.toFixed(2)}`, COLORS.green);
  }
}

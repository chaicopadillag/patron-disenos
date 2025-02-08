import { COLORS } from '../../../../libs/colors.ts';
import { Component } from '../interfaces/component.interface.ts';

export class MenuCategory implements Component {
  public items: Component[] = [];
  constructor(public name: string) {}

  add(item: Component | Component[]): void {
    if (Array.isArray(item)) {
      this.items.push(...item);
    } else {
      this.items.push(item);
    }
  }

  showDetails(indent: string = ''): void {
    console.log(`%c${indent}🔰 ${this.name}`, COLORS.blue);
    this.items.forEach((item) => item.showDetails(indent + '  '));
  }
}

import { Component } from '../interfaces/component.interface.ts';

export class Folder implements Component {
  private children: Component[] = [];

  constructor(public name: string) {}

  add(component: Component): void {
    this.children.push(component);
  }

  showDetails(indent = ''): void {
    console.log(`${indent} + 📂: ${this.name}`);
    this.children.forEach((child) => child.showDetails(indent + '  '));
  }
}

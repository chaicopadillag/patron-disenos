import { Component } from '../interfaces/component.interface.ts';

export class File implements Component {
  constructor(public name: string) {}

  showDetails(indent = ''): void {
    console.log(`${indent} - 📑: ${this.name}`);
  }
}

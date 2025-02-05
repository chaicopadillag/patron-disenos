import { Prototype } from '../interfaces/prototype.interface.ts';

export class DocumentPrototype implements Prototype {
  constructor(public title: string, public content: string, public author: string, private edition: number) {}

  clone(): DocumentPrototype {
    return new DocumentPrototype(this.title, this.content, this.author, this.edition);
  }

  showData() {
    console.log(`
    Document: ${this.title}
    Content: ${this.content}
    Author: ${this.author}
    Edition: ${this.edition}`);
  }
}

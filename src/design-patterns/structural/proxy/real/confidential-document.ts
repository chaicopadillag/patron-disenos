import { COLORS } from '../../../../libs/colors.ts';
import { DocumentI } from '../interfaces/document.interface.ts';

export class ConfidentialDocument implements DocumentI {
  private content: string;

  constructor(content: string) {
    this.content = content;
  }

  displayContent(): void {
    console.log(`Contenido del documento: \n%c${this.content}\n`, COLORS.blue);
  }
}

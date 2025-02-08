import { COLORS } from '../../../../libs/colors.ts';

export class TextEditor {
  private text: string = '';
  private clipboard: string = '';
  private history: string[] = [];

  // Agregar texto al editor
  type(text: string): void {
    this.history.push(this.text); // Guardar estado antes de cambiarlo
    this.text += text;
  }

  // Copiar el texto actual
  copy(): void {
    this.clipboard = this.text;
    console.log(`Texto copiado al portapapeles: \n%c"${this.clipboard}"`, COLORS.blue);
  }

  // Pegar el texto del portapapeles
  paste(): void {
    this.history.push(this.text); // Guardar estado antes de pegar
    this.text += this.clipboard;
    console.log(`Texto después de pegar: \n%c"${this.text}"`, COLORS.blue);
  }

  // Deshacer la última acción
  undo(): void {
    if (this.history.length > 0) {
      this.text = this.history.pop()!;
      console.log(`Texto después de deshacer: \n%c"${this.text}"`, COLORS.blue);
      return;
    }

    console.log('No hay nada para deshacer.');
  }

  // Mostrar el texto actual
  getText(): string {
    return this.text;
  }
}

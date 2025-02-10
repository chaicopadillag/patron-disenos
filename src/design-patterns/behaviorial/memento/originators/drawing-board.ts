import { COLORS } from '../../../../libs/colors.ts';
import { DrawingMemento } from '../mementos/drawing-memento.ts';
export class DrawingBoard {
  private shapes: string[] = [];

  // Agregar una figura a la pizarra
  addShape(shape: string): void {
    this.shapes.push(shape);
    console.log(`Figura agregada: ${shape}`);
  }

  // Mostrar el estado actual de la pizarra
  showBoard(): void {
    console.log('Pizarra actual:', this.shapes.join(', ') || 'Vacía');
  }

  // Crear un Memento del estado actual de la pizarra
  save(): DrawingMemento {
    console.log('%c\nGuardando el estado de la pizarra...', COLORS.green);
    return new DrawingMemento(this.shapes);
  }

  // Restaurar el estado de la pizarra desde un Memento
  restore(memento: DrawingMemento): void {
    this.shapes = memento.getShapes();
    console.log('%c\nEstado de la pizarra restaurado.', COLORS.blue);
  }
}

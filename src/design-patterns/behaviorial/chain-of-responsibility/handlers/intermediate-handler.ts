import { COLORS } from '../../../../libs/colors.ts';
import { AbstractHandler } from './abstract.handler.ts';

export class IntermediateHandler extends AbstractHandler {
  override handle(request: string): void {
    if (request === 'intermediate') {
      console.log('%cEl manejador intermedio puede manejar la solicitud', COLORS.purple);
    } else {
      console.log('%cEl manejador intermedio no puede manejar la solicitud pasando a avanzado', COLORS.pink);
      super.handle(request);
    }
  }
}

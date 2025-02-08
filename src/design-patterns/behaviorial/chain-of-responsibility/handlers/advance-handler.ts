import { COLORS } from '../../../../libs/colors.ts';
import { AbstractHandler } from './abstract.handler.ts';

export class AdvanceHandler extends AbstractHandler {
  override handle(request: string): void {
    if (request === 'advance') {
      console.log('%cEl manejador avanzado puede manejar la solicitud', COLORS.green);
    } else {
      console.log('%cEl manejador avanzado no puede manejar la solicitud pasando a experto', COLORS.red);
      super.handle(request);
    }
  }
}

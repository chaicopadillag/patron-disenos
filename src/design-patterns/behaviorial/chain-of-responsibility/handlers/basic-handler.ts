import { COLORS } from '../../../../libs/colors.ts';
import { AbstractHandler } from './abstract.handler.ts';

export class BasicHandler extends AbstractHandler {
  override handle(request: string): void {
    if (request === 'basic') {
      console.log('%cEl manejador básico puede manejar la solicitud', COLORS.gray);
    } else {
      console.log('%cEl manejador básico no puede manejar la solicitud pasando a intermedio', COLORS.brown);
      super.handle(request);
    }
  }
}

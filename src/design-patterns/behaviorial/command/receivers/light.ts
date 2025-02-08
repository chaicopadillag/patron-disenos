import { COLORS } from '../../../../libs/colors.ts';

export class Light {
  public on(): void {
    console.log('%cLa luz está encendida', COLORS.yellow);
  }

  public off(): void {
    console.log('%cLa luz está apagada', COLORS.gray);
  }
}

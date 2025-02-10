import { COLORS } from '../../../../libs/colors.ts';
import { Observer } from '../interfaces/observer.interface.ts';

export class WeatherApp implements Observer {
  constructor(public name: string) {}

  // Recibir actualización del clima
  update(weatherData: string): void {
    console.log(`%c${this.name} %cha recibido notificación del clima: %c${weatherData}`, COLORS.red, COLORS.white, COLORS.yellow);
  }
}

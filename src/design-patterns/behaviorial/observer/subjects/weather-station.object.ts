import { COLORS } from '../../../../libs/colors.ts';
import { Observer } from '../interfaces/observer.interface.ts';

export class WeatherStation {
  private observers: Observer[] = [];
  private weatherData = 'Soleado';

  subscribe(observer: Observer): void {
    this.observers.push(observer);
    observer.update(this.weatherData);
    console.log('%cNueva aplicación suscrita al sistema meteorológico.', COLORS.green);
  }

  // Eliminar un Observer
  unsubscribe(observer: Observer): void {
    this.observers = this.observers.filter((obs) => obs.name !== observer.name);
    console.log(`%cUna aplicación se ha dado de baja`, COLORS.red);
  }

  // Actualizar el clima y notificar a todos los Observers
  setWeather(weatherData: string): void {
    console.log(`\nClima actualizado: %c${weatherData}`, COLORS.blue);
    this.weatherData = weatherData;
    this.notifyObservers();
  }

  // Notificar a todos los Observers
  private notifyObservers(): void {
    this.observers.forEach((observer) => {
      observer.update(this.weatherData);
    });
  }
}

import { User } from './observers/user.observer.ts';
import { WeatherApp } from './observers/weather-app.observer.ts';
import { WeatherStation } from './subjects/weather-station.object.ts';
import { YoutubeChannel } from './subjects/youtube-channel.object.ts';
/**
 * ! Patrón Observer
 * El patrón Observer es un patrón de diseño de comportamiento que establece
 * una relación de uno a muchos entre un objeto, llamado sujeto,
 * y otros objetos, llamados observadores, que son notificados
 * y actualizados automáticamente por el sujeto
 * cuando se producen cambios en su estado.
 *
 * * Es útil cuando necesitamos que varios objetos estén
 * * pendientes de los cambios
 *
 * !No confundirlo con RXJS Observables
 *
 * https://refactoring.guru/es/design-patterns/observer
 */

export const mainObserver = () => {
  const youtubeChannel = new YoutubeChannel('Aprendiendo Cocinar NodeJS');
  const juan = new User('Juan');
  const maria = new User('Maria');
  const pedro = new User('Pedro');
  const ester = new User('Ester');

  youtubeChannel.subscribe(juan);
  youtubeChannel.subscribe(maria);
  youtubeChannel.subscribe(pedro);
  youtubeChannel.publishVideo('Como hacer un CRUD con NodeJS');
  youtubeChannel.unsubscribe(pedro);
  youtubeChannel.subscribe(ester);
  youtubeChannel.publishVideo('Como Freezar un proyecto en NodeJS');
  youtubeChannel.unsubscribe(juan);
  youtubeChannel.unsubscribe(maria);
  youtubeChannel.publishVideo('Adrezando TypeScript con NodeJS');

  console.log('\n------------------------------------\n');

  const weatherStation = new WeatherStation();

  // Crear aplicaciones
  const flutterWeatherApp = new WeatherApp('Flutter WeatherApp');
  const reactNativeWeatherApp = new WeatherApp('React Native WeatherApp');
  const weatherTrackerApp = new WeatherApp('Weather Tracker App');

  // Suscribir aplicaciones a la estación meteorológica
  weatherStation.subscribe(flutterWeatherApp);
  weatherStation.subscribe(reactNativeWeatherApp);

  // Actualizar el clima
  weatherStation.setWeather('Lluvioso');

  // Agregar una nueva aplicación
  weatherStation.subscribe(weatherTrackerApp);
  weatherStation.setWeather('Nublado');

  // Una aplicación se da de baja
  weatherStation.unsubscribe(reactNativeWeatherApp);
  weatherStation.setWeather('Tormenta eléctrica');
};

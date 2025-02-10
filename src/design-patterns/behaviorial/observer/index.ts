import { User } from './observers/user.subscriber.ts';
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
};

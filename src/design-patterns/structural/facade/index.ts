/**
 * ! Patrón Facade
 * Este patrón proporciona una interfaz unificada para un conjunto de interfaces
 * en un subsistema.
 *
 * Facade define una interfaz de nivel más alto que hace que el subsistema
 * sea más fácil de usar.
 *
 * * Es útil cuando un subsistema es complejo o difícil de entender para
 * * proporcionar una interfaz simplificada para el cliente.
 *
 * https://refactoring.guru/es/design-patterns/facade
 */

import { HomeTheaterFacade } from './facades/home-theater.facade.ts';
import { PopCornMaker } from './subsystems/pop-corn-maker.ts';
import { Projector } from './subsystems/projector.ts';
import { SoundSystem } from './subsystems/sound-system.ts';
import { VideoPlayer } from './subsystems/video-player.ts';

export const mainFacade = () => {
  const projector = new Projector();

  const soundSystem = new SoundSystem();

  const movie = 'The Lord of the Rings: The Fellowship of the Ring';
  const videoPlayer = new VideoPlayer();

  const popCornMaker = new PopCornMaker();

  const params = {
    projector,
    videoPlayer,
    soundSystem,
    popCornMaker
  };

  const homeTheater = new HomeTheaterFacade(params);
  homeTheater.watchMovie(movie);
  homeTheater.endMovie();
};

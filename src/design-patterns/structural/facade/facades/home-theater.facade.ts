import { COLORS } from '../../../../libs/colors.ts';
import { PopCornMaker } from '../subsystems/pop-corn-maker.ts';
import { Projector } from '../subsystems/projector.ts';
import { SoundSystem } from '../subsystems/sound-system.ts';
import { VideoPlayer } from '../subsystems/video-player.ts';

interface Props {
  projector: Projector;
  videoPlayer: VideoPlayer;
  soundSystem: SoundSystem;
  popCornMaker: PopCornMaker;
}

export class HomeTheaterFacade {
  constructor(private homeTheater: Props) {}

  watchMovie(movie: string) {
    console.log('%cPreparando el ambiente para ver la película', COLORS.green);
    this.homeTheater.popCornMaker.turnOn();
    this.homeTheater.popCornMaker.turnPop();
    this.homeTheater.projector.on();
    this.homeTheater.projector.wideScreenMode();
    this.homeTheater.soundSystem.tornOn();
    this.homeTheater.soundSystem.setVolume(10);
    this.homeTheater.videoPlayer.on();
    this.homeTheater.videoPlayer.play(movie);
    console.log('%cDisfruta la película', COLORS.blue);
  }

  endMovie() {
    console.log('%cApagando el ambiente', COLORS.yellow);
    this.homeTheater.popCornMaker.turnOff();
    this.homeTheater.projector.off();
    this.homeTheater.soundSystem.turnOff();
    this.homeTheater.videoPlayer.stop();
    this.homeTheater.videoPlayer.off();
    console.log('%cPelícula finalizada', COLORS.red);
  }
}

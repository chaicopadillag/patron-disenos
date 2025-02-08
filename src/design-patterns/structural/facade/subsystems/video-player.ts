export class VideoPlayer {
  on() {
    console.log('Reproductor de video encendido');
  }

  off() {
    console.log('Reproductor de video apagado');
  }

  play(movie: string) {
    console.log(`Reproduciendo la película: ${movie}`);
  }

  pause() {
    console.log('Video pausado');
  }

  stop() {
    console.log('Video detenido');
  }
}

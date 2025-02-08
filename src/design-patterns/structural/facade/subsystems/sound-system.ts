export class SoundSystem {
  tornOn() {
    console.log('Sistema de sonido encendido');
  }

  turnOff() {
    console.log('Sistema de sonido apagado');
  }

  setVolume(volume: number) {
    console.log(`Volumen del sistema
        de sonido: ${volume}`);
  }
}

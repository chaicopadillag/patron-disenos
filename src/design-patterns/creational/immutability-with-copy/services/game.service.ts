import { Player } from '../models/player.model.ts';

export class GameService {
  static startPlay() {
    // Crear jugador inicial
    let player = new Player('Carlos', 0, 1);
    console.log('Estado inicial:');
    player.displayState();

    // Incrementar el puntaje
    player = player.copyWith({ score: 10 });
    console.log('\nDespués de incrementar el puntaje:');
    player.displayState();

    // Subir de nivel
    player = player.copyWith({ level: 2 });
    console.log('\nDespués de subir de nivel:');
    player.displayState();

    // Cambiar el nombre del jugador
    player = player.copyWith({ name: 'Carlos Pro' });
    console.log('\nDespués de cambiar el nombre:');
    player.displayState();
  }
}

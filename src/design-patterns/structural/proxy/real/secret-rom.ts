import { COLORS } from '../../../../libs/colors.ts';
import { PlayerI, RoomI } from '../interfaces/rom.interface.ts';

export class SecretRoom implements RoomI {
  enter(player: PlayerI): void {
    console.log(`%cEl jugador ${player.name} ha entrado a la sala secreta.`, COLORS.pink);
    console.log('¡Bienvenido!, aquí encontrarás un montón de tesoros.');
  }
}

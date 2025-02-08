import { PlayerI, RoomI } from '../interfaces/rom.interface.ts';

export class MagicPortal implements RoomI {
  constructor(public secretRoom: RoomI) {}

  enter(player: PlayerI): void {
    if (player.level >= 10) {
      this.secretRoom.enter(player);
    } else {
      console.log(`El jugador ${player.name} no tiene el nivel suficiente para entrar a la sala secreta.`);
    }
  }
}

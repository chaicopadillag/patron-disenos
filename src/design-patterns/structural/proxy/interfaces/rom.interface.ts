export interface RoomI {
  enter(player: PlayerI): void;
}

export interface PlayerI {
  name: string;
  level: number;
}

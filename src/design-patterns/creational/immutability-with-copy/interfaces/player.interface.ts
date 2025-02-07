export interface PlayerI {
  readonly name: string;
  readonly score: number;
  readonly level: number;

  copyWith(params: Partial<PlayerI>): PlayerI;
  displayState(): void;
}

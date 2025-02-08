export interface CharacterI {
  getDescription(): string;
  getStats(): { attack: number; defense: number };
}

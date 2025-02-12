export interface AutomaticDoorState {
  name: string;

  open(): void;
  close(): void;
}

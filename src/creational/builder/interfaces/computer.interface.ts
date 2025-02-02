export interface ComputerI {
  ram: string;
  cpu: string;
  gpu: string;
  storage: string;
  os?: string;
  displayComputerInfo(): void;
}

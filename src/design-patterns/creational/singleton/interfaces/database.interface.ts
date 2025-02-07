export interface DatabaseI {
  isConnected: boolean;
  connect(): void;
  desconnect(): void;
}

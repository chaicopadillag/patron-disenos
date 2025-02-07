export interface LoggerI {
  fileName: string;

  log(message: string): void;
  error(message: string): void;
  warn(message: string): void;
}

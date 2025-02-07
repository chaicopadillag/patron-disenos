import { Logger } from 'jsr:@deno-library/logger';

import { LoggerI } from '../interfaces/logger.interface.ts';

export class AppLoggerAdapter implements LoggerI {
  private logger = new Logger();
  fileName: string;

  constructor(fileName: string) {
    this.fileName = fileName;
  }

  log(message: string): void {
    this.logger.log(`${this.fileName}: ${message}`);
  }
  error(message: string): void {
    this.logger.error(`${this.fileName}: ${message}`);
  }
  warn(message: string): void {
    this.logger.warn(`${this.fileName}: ${message}`);
  }
}

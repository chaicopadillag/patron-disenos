import { COLORS } from '../../../libs/colors.ts';
import { DatabaseI } from '../interfaces/database.interface.ts';

export class Database implements DatabaseI {
  public isConnected: boolean;
  private static instance: Database;

  private constructor() {
    this.isConnected = false;
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  connect(): void {
    if (!this.isConnected) {
      console.log('%cConnecting to database', COLORS.green);
      this.isConnected = true;
    } else {
      console.log('%cYou are already connected', COLORS.yellow);
    }
  }

  desconnect(): void {
    this.isConnected = false;
    console.log('%cAlready disconnected', COLORS.red);
  }
}

import { RoleType, UserI } from '../interfaces/document.interface.ts';

export class User implements UserI {
  constructor(public name: string, public role: RoleType) {}

  getName(): string {
    return this.name;
  }

  getRole(): RoleType {
    return this.role;
  }
}

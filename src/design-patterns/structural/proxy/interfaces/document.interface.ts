export interface DocumentI {
  displayContent(user: UserI): void;
}

export interface UserI {
  name: string;
  role: string;
}

export type RoleType = 'admin' | 'user';

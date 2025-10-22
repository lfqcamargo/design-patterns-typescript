import { IUser } from './IUser';

export interface IDatabase {
  add(user: IUser): void;
  remove(user: IUser): void;
  getUsers(): IUser[];
}

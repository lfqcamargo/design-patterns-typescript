import { IDatabase } from '../interfaces/IDatabase';
import { IUser } from '../interfaces/IUser';

export class Database implements IDatabase {
  private _users: IUser[] = [];

  public add(user: IUser) {
    this._users.push(user);
  }

  public remove(user: IUser) {
    this._users.splice(this._users.indexOf(user), 1);
  }

  public getUsers(): IUser[] {
    return this._users;
  }
}

interface User {
  id: number;
  name: string;
}

export class SingletonDatabase {
  private static _instance: SingletonDatabase;
  private _users: User[] = [];

  private constructor() {}

  public static getInstance(): SingletonDatabase {
    if (!SingletonDatabase._instance) {
      SingletonDatabase._instance = new SingletonDatabase();
    }
    return SingletonDatabase._instance;
  }

  public add(user: User) {
    this._users.push(user);
  }

  public remove(user: User) {
    this._users.splice(this._users.indexOf(user), 1);
  }

  public getUsers(): User[] {
    return this._users;
  }
}

import User from "../models/User"

export default class Db {
  private users: Map<string, User>;

  constructor() {
    this.users = new Map();
  }

  findAll(): User[] {    
    return Array.from(this.users, ([, user]) => user);
  }

  find(email: string): User | undefined {
    return this.users.get(email);
  }

  create(user: User): User | undefined {
    if(this.users.get(user.email))
      return undefined;

    this.users.set(user.email, user);
    return user;
  }

  update(user: User): User | undefined {
    if(!this.users.get(user.email))
      return undefined;

    this.users.set(user.email, user);
    return user;
  }

  delete(email: string): User | undefined {
    const user = this.users.get(email);

    if(!user)
      return undefined;

    this.users.delete(email);
    return user;
  }
}

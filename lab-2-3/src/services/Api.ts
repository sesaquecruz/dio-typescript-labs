import Account from "../models/Account";
import User from "../models/User";

const user = {
  data: {
    name: "Tim B. Lee",
    email: "tim@mail.com",
  },

  auth: {
    password: "123456",
    token: "6a777cbf1abdec3a23eca153e7b5afd0",
  },

  account: {
    id: "001",
    balance: 100.12,
    active: true
  }
}

export class Api {
  async getToken(email: string, password: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        if (email === user.data.email && password === user.auth.password)
          resolve(user.auth.token);
        else
          reject("");
      }, 100);
    })
  }

  async getUser(token: string): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      setTimeout(() => {
        if (token === user.auth.token) 
          resolve(user.data);
        else
          reject("");
      }, 100);
    })
  }

  async getAccount(token: string): Promise<Account> {
    return new Promise<Account>((resolve, reject) => {
      setTimeout(() => {
        if (token === user.auth.token) 
          resolve(user.account);
        else
          reject("");
      }, 100);
    })
  }
}

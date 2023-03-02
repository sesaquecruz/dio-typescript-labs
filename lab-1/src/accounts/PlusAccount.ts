import BankAccount from "./BankAccount";

export default class PlusAccount extends BankAccount {
  constructor(name: string, accountNumber: number){
    super(name, accountNumber);
  }

  depositPlus(amount: number): boolean {
    if (amount > 0) {
      return this.deposit(amount + 10);
    }

    return false;
  }
}

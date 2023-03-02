import BankAccount from "./BankAccount";

export default class CompanyAccount extends BankAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber);
  }

  loan(amount: number): boolean {
    if(this.status && amount > 0) {
      this.deposit(amount);
      return true;
    }

    return false;
  }
}

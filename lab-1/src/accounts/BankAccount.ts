export default abstract class DioAccount {
  private readonly _name: string;
  private readonly _accountNumber: number;
  private _balance: number = 0;
  private _status: boolean = true;

  constructor(name: string, accountNumber: number){
    this._name = name;
    this._accountNumber = accountNumber;
  }

  get name(): string {
    return this._name;
  }

  get accountNumber(): number {
    return this._accountNumber;
  }

  get balance(): number {
    return this._balance;
  }

  get status(): boolean {
    return this._status;
  }

  set status(value: boolean) {
    this._status = value;
  }

  deposit(amount: number): boolean  {
    if(this.status && amount > 0){
      this._balance += amount;
      return true;
    }

    return false;
  }

  withdraw(amount: number): boolean {
    if(this.status && amount > 0 && this.balance >= amount) {
      this._balance -= amount;
      return true;
    }

    return false;
  }
}

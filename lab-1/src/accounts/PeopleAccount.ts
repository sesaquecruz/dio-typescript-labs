import BankAccount from "./BankAccount";

export default class PeopleAccount extends BankAccount {
  private readonly _docId: number;

  constructor(docId: number, name: string, accountNumber: number) {
    super(name, accountNumber);
    this._docId = docId;
  }

  get docId(): number {
    return this._docId;
  }
}

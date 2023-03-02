import CompanyAccount from "./accounts/CompanyAccount";
import PeopleAccount from "./accounts/PeopleAccount";
import PlusAccount from "./accounts/PlusAccount";

const companyAccount : CompanyAccount = new CompanyAccount("Company", 10)
const peopleAccount: PeopleAccount = new PeopleAccount(123, "Normal User", 11);
const plusAccount: PlusAccount = new PlusAccount("Plus Account", 12);

companyAccount.deposit(100);
companyAccount.withdraw(101);
companyAccount.withdraw(99);
companyAccount.loan(200);

peopleAccount.deposit(50);
peopleAccount.withdraw(200);
peopleAccount.withdraw(50);
peopleAccount.deposit(1);

plusAccount.deposit(50);
plusAccount.withdraw(61);
plusAccount.withdraw(50);
plusAccount.deposit(2);

console.log(companyAccount);
console.log(peopleAccount);
console.log(plusAccount);


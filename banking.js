function Account(accountNumber, balance) {
  this.accountNumber = accountNumber;
  this.balance = balance;
}

Account.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(`Deposited: ${amount}. New balance: ${this.balance}`);
};

Account.prototype.withdraw = function (amount) {
  if (amount > this.balance) {
    console.log("Insufficient funds");
  } else {
    this.balance -= amount;
    console.log(`Withdrew: ${amount}. New balance: ${this.balance}`);
  }
};

function SavingsAccount(accountNumber, balance, interestRate) {
  Account.call(this, accountNumber, balance); // Accountのコンストラクタを継承
  this.interestRate = interestRate;
}

SavingsAccount.prototype = Object.create(Account.prototype);

SavingsAccount.prototype.addInterest = function () {
  let interest = this.balance * (this.interestRate / 100);
  this.balance += interest;
  console.log(`Interest added: ${interest}. New balance: ${this.balance}`);
};

function CheckingAccount(accountNumber, balance) {
  Account.call(this, accountNumber, balance); // Accountのコンストラクタを継承
}

CheckingAccount.prototype = Object.create(Account.prototype);

CheckingAccount.prototype.withdrawUsingCheck = function (amount) {
  if (amount > this.balance) {
    console.log("Insufficient funds for check withdrawal");
  } else {
    this.balance -= amount;
    console.log(`Check withdrawal: ${amount}. New balance: ${this.balance}`);
  }
};

let savings = new SavingsAccount("S12345", 1000, 5);
console.log(`Savings Account - Balance: ${savings.balance}`);
savings.deposit(500);
savings.addInterest();

console.log("\n");

let checking = new CheckingAccount("C67890", 2000);
console.log(`Checking Account - Balance: ${checking.balance}`);
checking.deposit(1000);
checking.withdrawUsingCheck(500);
checking.withdraw(1000);

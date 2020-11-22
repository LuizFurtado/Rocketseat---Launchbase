const user = {
  name: "Furtadex",
  transactions: [],
  balance: 0
};

function createTransaction(transaction) {
  user.transactions.push(transaction);

  if(transaction.type === "credit") {
    user.balance += transaction.value;
  } else {
    user.balance -= transaction.value;
  }
}

function getHigherTransactionByType(transactionType) {
  let higherTransaction = {
    type: transactionType,
    value: 0
  };

  for(let i = 0; i < user.transactions.length; i++) {
    if(transactionType === user.transactions[i].type) {
      if (user.transactions[i].value > higherTransaction.value) {
        higherTransaction = {
          type: user.transactions[i].type,
          value: user.transactions[i].value
        };
      }
    }
  }

  console.log(higherTransaction);
}

function getAverageTransactionValue() {
  let total = 0;
  let average = 0;

  for(transaction of user.transactions) {
    total += transaction.value;
  }

  average = total / user.transactions.length;

  console.log(average);
}

function getTransactionsCount() {
  let totalCredit = 0;
  let totalDebit = 0;

  for(transaction of user.transactions) {
    if(transaction.type === "credit") totalCredit++;
    else totalDebit++;
  }

  const transactionsCount = {
    credit: totalCredit,
    debit: totalDebit
  };

  console.log(transactionsCount);
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance); // 60

getHigherTransactionByType("credit"); // { type: 'credit', value: 120 }
getHigherTransactionByType("debit"); // { type: 'debit', value: 80 }

getAverageTransactionValue(); // 70

getTransactionsCount(); // { credit: 2, debit: 2 }
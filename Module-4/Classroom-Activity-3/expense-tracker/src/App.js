import { useState } from "react";
import Summary from "./components/Summary";
import ExpenseList from "./components/ExpenseList";
import AddExpense from "./components/AddExpense";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      title: "Groceries",
      amount: 50,
      type: "expense",
    },
    {
      id: 2,
      title: "Salary",
      amount: 2300,
      type: "income",
    },
    {
      id: 3,
      title: "Phone",
      amount: 1000,
      type: "expense",
    },
  ]);

  const addTransaction = (title, amount, type) => {
    const newTransaction = {
      id: Date.now(),
      title: title,
      amount: Number(amount),
      type: type,
    };

    setTransactions([...transactions, newTransaction]);
  };

  const income = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((total, transaction) => total + transaction.amount, 0);

  const expense = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((total, transaction) => total + transaction.amount, 0);

  const balance = income - expense;

  return (
    <div className="app">
      <h1>Expense Tracker</h1>

      <div className="balance">
        <h3>YOUR BALANCE</h3>
        <h2>${balance.toFixed(2)}</h2>
      </div>

      <Summary income={income} expense={expense} />

      <ExpenseList transactions={transactions} />

      <AddExpense onAddTransaction={addTransaction} />
    </div>
  );
}

export default App;
function ExpenseList({ transactions }) {
  return (
    <div className="history">
      <h2>History</h2>

      {transactions.map((transaction) => (
        <div className="transaction" key={transaction.id}>
          <span>{transaction.title}</span>

          <span
            className={
              transaction.type === "income" ? "income" : "expense"
            }
          >
            {transaction.type === "income" ? "+" : "-"}
            ${transaction.amount.toFixed(2)}
          </span>
        </div>
      ))}
    </div>
  );
}

export default ExpenseList;
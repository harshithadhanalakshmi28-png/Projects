function Summary({ income, expense }) {
  return (
    <div>
      <h2>SUMMARY</h2>

      <div className="summary">
        <div>
          <h3>INCOME</h3>
          <p className="income">${income.toFixed(2)}</p>
        </div>

        <div>
          <h3>EXPENSE</h3>
          <p className="expense">${expense.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default Summary;
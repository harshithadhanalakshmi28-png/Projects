import { useState } from "react";

function AddExpense({ onAddTransaction }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title === "" || amount === "") {
      alert("Please enter title and amount");
      return;
    }

    onAddTransaction(title, amount, type);

    setTitle("");
    setAmount("");
    setType("expense");
  };

  return (
    <div className="add-expense">
      <h2>Add new transaction</h2>

      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          placeholder="Enter title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Amount</label>
        <input
          type="number"
          placeholder="Enter amount..."
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="type"
              value="income"
              checked={type === "income"}
              onChange={(e) => setType(e.target.value)}
            />
            Income
          </label>

          <label>
            <input
              type="radio"
              name="type"
              value="expense"
              checked={type === "expense"}
              onChange={(e) => setType(e.target.value)}
            />
            Expense
          </label>
        </div>

        <button type="submit">Add transaction</button>
      </form>
    </div>
  );
}

export default AddExpense;
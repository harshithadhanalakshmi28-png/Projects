// Personal Expense Calculator

let income = 30000;

let expenses = [
    { name: "Food", amount: 5000 },
    { name: "Transport", amount: 3000 },
    { name: "Education", amount: 7000 },
    { name: "Shopping", amount: 4000 }
];

// Calculate total expenses
let totalExpenses = 0;

for (let expense of expenses) {
    totalExpenses += expense.amount;
}

// Calculate savings
let savings = income - totalExpenses;

// Display report
console.log("===== PERSONAL EXPENSE CALCULATOR =====");
console.log("Income: ₹" + income);
console.log("Total Expenses: ₹" + totalExpenses);
console.log("Savings: ₹" + savings);

console.log("\nExpense Details:");

for (let expense of expenses) {
    console.log(expense.name + ": ₹" + expense.amount);
}

// Savings condition
if (savings > 0) {
    console.log("\nYou have saved ₹" + savings);
} else if (savings === 0) {
    console.log("\nNo savings.");
} else {
    console.log("\nYou have exceeded your income.");
}
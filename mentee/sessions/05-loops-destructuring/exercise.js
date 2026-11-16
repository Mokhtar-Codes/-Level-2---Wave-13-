/*1. M1 Stage 2

This is the main homework. Loop through every expense, `getTotal`, `getUnpaidTotal`, destructuring at least once — see the M1 brief.*/


// ---------- Data ----------

const expenses = [
  { label: "Rent", amount: 850, category: "home", isPaid: false },
  { label: "Internet", amount: 45, category: "home", isPaid: true },
  { label: "Groceries", amount: 250, category: "food", isPaid: true },
  { label: "Gym", amount: 35, category: "health", isPaid: false },
  { label: "Coffee", amount: 5, category: "food", isPaid: false }
];

// ---------- Functions ----------

// Describe an expense
function describeExpense(expense) {
  const status = expense.isPaid ? "paid" : "unpaid";

  return `${expense.label} — $${expense.amount} (${expense.category}, ${status})`;
}

// Determine the priority of an expense
function getPriority(expense) {
  if (expense.isPaid) {
    return "Paid";
  } else if (expense.amount > 100) {
    return "Pay first";
  } else {
    return "Unpaid";
  }
}

// Calculate the total amount of all expenses
function getTotal(expenses) {
  let total = 0;

  for (const expense of expenses) {
    const { amount } = expense;
    total += amount;
  }

  return total;
}

// Calculate the total amount of unpaid expenses
function getUnpaidTotal(expenses) {
  let unpaidTotal = 0;

  for (const expense of expenses) {
    const { amount, isPaid } = expense;

    if (!isPaid) {
      unpaidTotal += amount;
    }
  }

  return unpaidTotal;
}

// ---------- Output ----------

console.log("All expenses:");

for (const expense of expenses) {
  console.log(
    describeExpense(expense) + " → " + getPriority(expense)
  );
}

console.log("Total: $" + getTotal(expenses).toFixed(2));
console.log("Still to pay: $" + getUnpaidTotal(expenses).toFixed(2));



/*2. Parsons — count

Goal output: `2` (how many scores are 60 or above) */

// A => B => C => D => E => F => G => H 

const scores = [72, 55, 91, 40]; // Create an array containing four scores.

let count = 0; // Initialize count to 0.

for (const score of scores) { // Loop through every score using for...of.
  if (score >= 60) { // Check whether the score is greater than or equal to 60.
    count = count + 1; // Increase count by 1 when the condition is true.
  }
} // Close the if statement and the loop.

console.log(count); // Print the final count. // 2

// Explanation: The loop checks each score and increments the counter whenever a score is at least 60. Since only 72 and 91 satisfy this condition, the final count is 2.
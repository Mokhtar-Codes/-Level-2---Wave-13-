// Expense Tracker — your app for the whole course.
//
// Part 1 (session 6): data + functions, console only.
// Part 2 (session 9): a screen, and add / mark paid / delete.
// Part 3 (session 11): survives a refresh, and fetches live data.
//
// Start here, after session 4:
//
// Design check — answer these in a comment before writing any code.
//   1. What shape is an expense? Write one example.
//   2. What do you want to find out about your expenses?
//
// Example of the shape, from the brief:
//   { label: "Internet", amount: 45, category: "home", isPaid: false }

// ---------- data ----------

// ---------- functions ----------

// ---------- output ----------



 // Expense Tracker — console version

// Design check
// An expense has a label, an amount, a category, and a boolean showing whether it has been paid.
// Example:
// { label: "Internet", amount: 45, category: "home", isPaid: false }
// I want to know how much I spend in total, how much I still need to pay, and which expenses should be paid first.


// ---------- data ----------

// Stage 1


const expenses = [
  { label: "Rent", amount: 850, category: "home", isPaid: false },
  { label: "Internet", amount: 45, category: "home", isPaid: true },
  { label: "Groceries", amount: 250, category: "food", isPaid: true },
  { label: "Gym", amount: 35, category: "health", isPaid: false },
  { label: "Coffee", amount: 5, category: "food", isPaid: false }
];


// ---------- functions ----------

// Stage 1

function describeExpense(expense) {
  const status = expense.isPaid ? "paid" : "unpaid";

  return `${expense.label} — $${expense.amount} (${expense.category}, ${status})`;
}

function getPriority(expense) {
  // We check if it is paid first because paid expenses should not be marked as urgent.
  // Then we check unpaid expenses over $100.

  if (expense.isPaid) {
    return "Paid";
  } else if (expense.amount > 100) {
    return "Pay first";
  } else {
    return "Unpaid";
  }
}


// Stage 2

function getTotal(expenses) {
  let total = 0;

  for (const expense of expenses) {
    const { amount } = expense;
    total += amount;
  }

  return total;
}

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


// ---------- output ----------

// Stage 2
// A loop replaces the Stage 1 by index output.

console.log("All expenses:");

for (const expense of expenses) {
  console.log(
    describeExpense(expense) + " → " + getPriority(expense)
  );
}

console.log("Total: $" + getTotal(expenses).toFixed(2));
console.log("Still to pay: $" + getUnpaidTotal(expenses).toFixed(2));

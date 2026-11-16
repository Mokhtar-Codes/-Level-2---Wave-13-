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


// Stage 3

function getUnpaid(expenses) {
  return expenses.filter(expense => !expense.isPaid);
}

function getLabels(expenses) {
  return expenses.map(expense => expense.label);
}

function findExpense(expenses, label) {
  return expenses.find(expense => expense.label === label);
}


// ---------- output ----------

// Stage 1 — Display expenses individually by index.
// Replaced by a loop in Stage 2.

// console.log(describeExpense(expenses[0]));
// console.log(getPriority(expenses[0]));
// console.log(describeExpense(expenses[1]));
// console.log(getPriority(expenses[1]));
// console.log(describeExpense(expenses[2]));
// console.log(getPriority(expenses[2]));


// Stage 2
// A loop replaces the Stage 1 by index output.

// console.log("All expenses:");

// for (const expense of expenses) {
//   console.log(
//     describeExpense(expense) + " → " + getPriority(expense)
//   );
// }

// console.log("Total: $" + getTotal(expenses).toFixed(2));
// console.log("Still to pay: $" + getUnpaidTotal(expenses).toFixed(2));


// Stage 3
// We replaced the Stage 2 output loop with forEach.

console.log("All expenses:");

expenses.forEach(expense => {
  console.log(
    describeExpense(expense) + " → " + getPriority(expense)
  );
});

console.log("Total: $" + getTotal(expenses).toFixed(2));
console.log("Still to pay: $" + getUnpaidTotal(expenses).toFixed(2));

console.log("Unpaid:", getLabels(getUnpaid(expenses)));

// Search for an existing expense.

const foundExpense = findExpense(expenses, "Gym");

if (foundExpense) {
  console.log("Found: " + describeExpense(foundExpense));
} else {
  console.log('No expense called "Gym"');
}

// Search for an expense that does not exist.

const missingExpense = findExpense(expenses, "Holiday");

if (missingExpense) {
  console.log("Found: " + describeExpense(missingExpense));
} else {
  console.log('No expense called "Holiday"');
}
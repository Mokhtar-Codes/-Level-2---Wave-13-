// ### 1. M1 Stage 3

// Due **before S7** now, not S6 — Stage 3 needs today's session. `filter`, `map`, `find` with a not-found check. See the M1 brief.

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



// ### 2. Parsons
// Goal output: `[ 'Pen', 'Bag' ]` — names of in-stock products.

// A => B => C

const available = products.filter((product) => product.inStock); // A: Filter the products to keep only those that are in stock
const names = available.map((product) => product.name); // B: Extract the name of each available product
console.log(names); // C: Display the names of the in-stock products

// Output: ['Pen', 'Bag']


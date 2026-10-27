//1. Parsons 
    //Goal output:
        // true
        // false

// A => B => C => D => E

function isEven(n) {
    return n % 2 === 0;
}

console.log(isEven(4));
console.log(isEven(7));



//2. Modify
//Add a function `isGoodTip(percent)` to your tip calculator. It returns `true` if the percent is 15 or more, `false` otherwise.
//Then, **outside the function**, use it with a ternary to log either `"Generous"` or `"Standard"`.
//Write one sentence: why does `isGoodTip` return `true`/`false` instead of returning the word?


const calculateTip = (bill, percent) => bill * percent / 100;

const calculateTotal = (bill, tip) => bill + tip;

const calculatePerPerson = (total, people) => total / people;

const formatAmount = (amount) => `$${amount.toFixed(2)}`;

const isGoodTip = (percent) => percent >= 15;

const bill = 100;
const percent = 20;
const people = 4;

const tip = calculateTip(bill, percent); // Calculate the tip amount
const total = calculateTotal(bill, tip); // Calculate the total amount
const perPerson = calculatePerPerson(total, people); // Calculate the amount per person

console.log("Tip:", formatAmount(tip)); // Log the tip amount: $20.00
console.log("Total:", formatAmount(total)); // Log the total amount: $120.00
console.log("Each person pays:", formatAmount(perPerson)); // Log the amount per person: $30.00

console.log(isGoodTip(percent) ? "Generous" : "Standard"); // Log whether the tip is generous or standard: Generous

// Explanation:
// isGoodTip returns true or false because it checks a condition,
// while the ternary decides which word to display.
// This makes the function reusable even if we change the message.



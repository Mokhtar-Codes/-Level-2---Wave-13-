// 1. Parsons
// Goal output: `Cart: 2 items, total 30`
// D => B => A => C

const itemCount = 2;
const itemPrice = 15;
const cartTotal = itemCount * itemPrice;
console.log(`Cart: ${itemCount} items, total ${cartTotal}`);

// 2. Modify

// Take your Make task. Change the price so it's stored as a **string** — `"12"` instead of `12` — as if it had come from a form. Run your code. Then add these two lines and predict each before running: 
// console.log(price * 2);
// console.log(price + 2);

const productName = "Notebook"; // using const because the product name won't change
let price = "12"; // using let because the price might change
let stock = 11; // using let because the stock count will change
const isOnSale = true; // using const because the sale status is fixed for now

stock -= 2; // reduces stock by 2

console.log(`${productName}: only ${stock} left`);

console.log(typeof productName);
console.log(typeof price);
console.log(typeof stock);
console.log(typeof isOnSale);

console.log(price * 2); // It evaluates to 24 because JavaScript implicitly converts the string to a number for multiplication.
console.log(price + 2); // It evaluates to "122" because the plus sign triggers string concatenation instead of numeric addition.
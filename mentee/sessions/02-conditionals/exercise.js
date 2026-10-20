// 1. Parsons
// Goal output: `Grade: B` when `score` is `85`.

// B => E => C => F => A => D => G => H => I => J

const score = 85;
let grade = "";
 if (score >= 90) {
   grade = "A";
 } else if (score >= 80) {
   grade = "B";
 } else {
   grade = "C";
 }
console.log(`Grade: ${grade}`);


//2. Modify
//Take your shipping calculator. Add a rule: **orders over $500 always ship free, even international.**


// Explanation: I placed the new order total check right after the membership check because orders over $500 always qualify for free shipping, even if they are international.

let orderTotal = 600;
let country = "international";
let isMember = false;

let shippingCost;

// Check members first because they always ship free.
// Then check orders over $500 because they ship free,regardless of country.
// Finally, check local and international shipping rules.

if (isMember) {
  shippingCost = 0;
} else if (orderTotal > 500) {
  shippingCost = 0;
} else if (country === "local" && orderTotal > 50) {
  shippingCost = 0;
} else if (country === "local") {
  shippingCost = 5;
} else {
  shippingCost = 15;
}

// Use a ternary to create the shipping label

let label = shippingCost === 0
  ? "Free shipping"
  : `Shipping: $${shippingCost}`;

console.log(label);

// TEST CASES:
// Case 1: orderTotal = 40, country = "local", isMember = false
// Output: Shipping: $5

// Case 2: orderTotal = 60, country = "local", isMember = false
// Output: Free shipping

// Case 3: orderTotal = 30, country = "international", isMember = false
// Output: Shipping: $15

// Case 4: orderTotal = 20, country = "international", isMember = true
// Output: Free shipping

// Case 5: orderTotal = 600, country = "international", isMember = false
// Output: Free shipping

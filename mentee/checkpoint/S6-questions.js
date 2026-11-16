// **1.** What does each line print?

console.log("4" + 2); // "42"

console.log("4" - 2); // 2

// ---

// **2.** What is `msg` at the end?

let stock = 0;
let msg = "";

if (stock > 10) {
  msg = "Plenty";
} else if (stock) {
  msg = "Low";
} else {
  msg = "Sold out";
}

console.log(msg);

// ---

// **3.** Write **every line** this prints, in order.

function getTotal(a, b) {
  console.log(a + b); //  5
}

console.log(getTotal(2, 3)); //  undefined

// ---

// **4.** Using this data:

const shop = {
  name: "Corner",
  items: [
    { name: "Pen", price: 2, tags: ["office", "home"] },
    { name: "Mug", price: 7, tags: [] },
  ],
};

// - **a.** What does `shop.items[1].price` give?

console.log(shop.items[1].price); // 7

// - **b.** What does `shop.items[0].tags[0]` give?
console.log(shop.items[0].tags[0]); // office

// - **c.** What does `shop.items[2]` give?

console.log(shop.items[2]); // error undefined

// - **d.** What happens with `shop.items[2].price`?

// console.log(shop.items[2].price); // undefined
// // ---

// **5.** What does this print, and why?

const a = {
  count: 1,
};

const b = a;

b.count = b.count + 1;

console.log(a.count); // 2

// ---

// **6.** What is `best` at the end?

const nums = [4, 9, 2, 7];
let best = 0;

for (const n of nums) {
  if (n > best) {
    best = n;
  }
}

console.log(best); // 9

// ---

// **7.** What do `total` and `cheapCount` end up as?

const items = [
  { name: "A", price: 5 },
  { name: "B", price: 0 },
  { name: "C", price: 3 },
];

let total = 0;
let cheapCount = 0;

for (const item of items) {
  total = total + item.price;
  if (item.price < 4) {
    cheapCount = cheapCount + 1;
  }
}

console.log(total); // 8
console.log(cheapCount); //2
// Then, in one sentence: **why is `cheapCount` what it is?**

// Session 05 — your before-class prediction snippet.

console.log("predict.js running");

// 1. Whats t.title at the end

// const t = { title: "A" };
// const u = t;
// u.title = "B";

// console.log(t.title); // A // B

// let x = 1;
// let y = 2;

// y = 3;

// console.log(x);
// console.log(y);

// 2.  Write the path to the price:

// const shop = {
//     items: [
//         {name: "Pen", price: 2}
//     ]
// };

// shop.items[0].price

// 3. [10, 20, 30][3] gives? And .length?

// const numbersArray = [10, 20, 30];
// console.log(numbersArray[0]);
// console.log(numbersArray[1]);
// console.log(numbersArray[2]);
// console.log(numbersArray[3]);
// console.log(numbersArray.length); // 3

// 4. What does f() return?
function f() {
  return 1;
  return 2;
}
console.log(f()); // 1, 2 //

function age(age) {
  if (age >= 18) {
    return "Adult";
  }

  return "Minor";
}

console.log(age(10)); //

// Prediction
function countUrgent(tasks) {
  for (const task of tasks) {
    let count = 0;
    if (task.priority === 1) {
      count = count + 1;
    }
    return count;
  }
}

const tasks = [
  { title: "A", priority: 2 },
  { title: "B", priority: 1 },
  { title: "C", priority: 1 },
];

console.log(countUrgent(tasks));

// In the form, answer all three:

// > 1. It logs ___
// > 2. The loop body runs ___ time(s)
// > 3. The author wanted ___, and the fix is ___

// for (let i = 0; i <= 2; i++) {
//   console.log(i);
// }

const fruits = ["Kiwi", "Mango", "Dragon Fruit"];

// for (const fruit of fruits[0]) {
//   console.log(fruit);
// }

// let index = 2;
// for (let i = 0; i < 1; index++) {
//   console.log(fruits[index]);
// }

// const pay = 100;

// for (let week = 2; week <= 12; week += 2) {
//   const payment = pay * 2;

//   console.log(`Week ${week}: Pay employee $${payment}`);
// }

// When should we use a for loop?
// When you need the index
// When you have control over the count

//When should we use a for of loop?
// When you only need the values from an array
// When you want to show all elements/items in a array.

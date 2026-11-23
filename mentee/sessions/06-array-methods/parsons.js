// Session 06 — the line-ordering puzzle.

console.log("parsons.js running");

// Goal output: `[ 'Buy milk', 'Pay rent' ]` — the titles of the unfinished tasks.

// const tasks = [
//   { title: "Buy milk", isDone: false, priority: 1 },
//   { title: "Call bank", isDone: true, priority: 1 },
//   { title: "Pay rent", isDone: false, priority: 2 },
//   { title: "Walk dog", isDone: true, priority: 1 },
// ];

// ```
// A   const open = tasks.filter((task) => !task.isDone);
// B   const titles = open.map((task) => task.title);
// C   console.log(titles);
// X   const open = tasks.filter((task) => task.isDone);
// Y   const titles = open.map((task) => { task.title; });
// ```

// const open = tasks.filter((task) => !task.isDone);
// const titles = open.map((task) => task.title);
// console.log(titles); // ABC

// `search` is `"Nope"` — a title that isn't in the list. Goal: print `Not found`, **not** crash.

// const tasks = [
//   { title: "Buy milk", isDone: false, priority: 1 },
//   { title: "Call bank", isDone: true, priority: 2 },
//   { title: "Pay rent", isDone: false, priority: 1 },
//   { title: "Walk dog", isDone: true, priority: 3 },
// ];

// const search = "Nope";

// A   const found = tasks.find((task) => task.title === search);
// B   if (found) {
// C   console.log(found.priority);
// D   } else {
// E   console.log("Not found");
// F   }
// X   console.log(found.priority);

// const found = tasks.find((task) => task.title === search);
// if (found) {
//   console.log(found.priority);
// } else {
//   console.log("Not found");
// }

// const users = [
//   { name: "Ana", age: 22, role: "admin", isActive: true },
//   { name: "Luis", age: 15, role: "user", isActive: false },
//   { name: "Sam", age: 31, role: "user", isActive: true },
// ];

// const names = users.map((user) => user.name); // ["Ana","Luis","Sam"]

// console.log(users);
// console.log(names);

// const adultCount = users.filter((user) => user.age >= 18).length; // 2
// console.log(adultCount);

// const admin = users.find((user) => user.role === "admin"); // the Ana object

// console.log(admin);

// const activeCount = users.filter((user) => user.isActive).length; // 2

// console.log(activeCount);

//map
//length
//find
//filter

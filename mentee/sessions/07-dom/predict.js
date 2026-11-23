// Session 07 — your before-class prediction snippet.

console.log("predict.js running");

// document.querySelector(".demo"); // class
// document.querySelector("#demo"); // id
// document.getElementById("demo"); // id
// document.querySelector("h1") // tag
// document.querySelectorAll()

// const headingTwo = document.getElementById("change");
// const div = document.querySelector("#div");

// headingTwo.textContent = "TO DO LIST";
// div.innerHTML = '<button id="btn">CLICK ME</button>';

// const btn = document.querySelector("#btn");

// btn.classList.add("styleBtn");
// btn.classList.remove("styleBtn");

// const demo = document.querySelectorAll(".heading");

// demo.forEach((heading) => {
//   const updateHeading = document.createElement("h1");

//   updateHeading.textContent = "Morning";

//   heading.append(updateHeading);
// });

// textContent
// demo.textContent = "Morning";

// demo.innerHTML = "<em>Hello World</em>";

// Warm Up
// 1. What's in `out`?

// const nums = [1, 2, 3];
// const out = nums.map((n) => n * 2);

// console.log(out); //2,4,6

// const products = [
//   { name: "var1", price: 222, inStock: true },
//   { name: "var2", price: 22, inStock: false },
//   { name: "var3", price: 2220, inStock: true },
// ];

// const productList = document.getElementById("productList");

// const productsInfo = products.map((product) => {
//   return `${product.name} costs $${product.price}`;
// });

// productsInfo.forEach((productInfo) => {
//   const li = document.createElement("li");

//   li.textContent = productInfo;
//   productList.append(li);
// });

// 2. `[1, 2, 3].filter((n) => n > 1).length` gives?

// const nums = [1, 2, 3];

// const filteredNums = nums.filter((n) => n > 1);

// console.log(filteredNums);
// console.log(filteredNums.length);

// // 3. What's `a[0].x` at the end?

// const a = [{ x: 1 }];
// const b = a;
// b[0].x = 5;

// console.log(a); // 1

// console.log(b);
// console.log(a[0].x);

// const x = [3, 4, 5];
// const y = x;

// console.log(x === y); // true

// const x = [4, 5, 6];
// const y = x.map((num) => num * 2);

// console.log(x === y);

// 4. What does `tasks.find((t) => t.id === 99)` give when there's no task 99?

// const tasks = [
//   { id: 1, title: "Buy groceries" },
//   { id: 2, title: "Study JavaScript" },
//   { id: 3, title: "Clean room" },
// ];

// const result = tasks.find((t) => t.id === 99);

// console.log(result);

// let personName = null;
// console.log(personName);

// Prediction - What will the page show?

// const tasks = [{ title: "Buy milk", isDone: false }];

// const list = document.querySelector("#task-list");

// function createTaskElement(task) {
//   const item = document.createElement("li");
//   item.textContent = task;
//   return item;
// }

// function render() {
//   list.textContent = "";
//   tasks.forEach((task) => {
//     list.append(createTaskElement(task));
//   });
// }

// render();

// tasks.push({ title: "Call bank", isDone: false });
// tasks[0].isDone = true;

// render();

// render();

// 1. Target the UL in the HTML doc using DOM.

// const unOrderedList = document.getElementById("list");
// const newHeading = document.getElementById("change");

// newHeading.textContent = "Welcome";

// const listItem = document.createElement("li");
// listItem.textContent = "Buy milk";

// listItem.classList.add("start");
// // listItem.classList.remove("done");

// listItem.className = "done";

// const listItem2 = document.createElement("li");
// listItem2.textContent = "Call Bank";

// const listItem3 = document.createElement("li");
// listItem3.textContent = "Walk Dog";

// unOrderedList.append(listItem2, listItem);

// const headingTwo = document.getElementById("change");
// const div = document.getElementById("div");

// headingTwo.textContent = "To Do List";

// div.innerHTML = '<button id="btnDiv" >Click Me</button>';
// const btnDiv = document.getElementById("btnDiv");

// btnDiv.classList.add("styleBtn");
// btnDiv.classList.remove("styleBtn");

// const products = [];

// const productList = document.getElementById("productList");
// const addButton = document.getElementById("addProduct");

// function showProducts() {
//   productList.textContent = "";

//   products.forEach((product) => {
//     const li = document.createElement("li");

//     li.textContent = `${product.name} - $${product.price}`;

//     productList.append(li);
//   });
// }

// addButton.addEventListener("click", () => {
//   const name = document.getElementById("productName").value;
//   const price = Number(document.getElementById("productPrice").value);

//   if (!name.trim() || !Number.isFinite(price) || price <= 0) {
//     return;
//   }

//   products.push({ name, price });

//   showProducts();
// });

// showProducts();

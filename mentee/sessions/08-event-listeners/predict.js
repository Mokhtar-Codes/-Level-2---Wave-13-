// My personal solutions
// // Session 08 — your before-class prediction snippet.
// 
// console.log("predict.js running");
// 
// 
// // 1. Trace the console on paper
// // Here's some code, and then what the user does. Write the console output in order, including anything that happens before the user does anything.
// 
// const button = document.querySelector("#btn");
// let count = 0;
// 
// console.log("Setup starting"); 
// 
// button.addEventListener("click", () => {
//   count = count + 1;
//   console.log(`Clicked ${count}`);
// });
// 
// console.log(`Setup done, count is ${count}`);
// 
// // The page loads. Then the user clicks the button twice.
// //What's the full console output? How many times does the callback run?
// 
// // the Answer: 
// // First addEventListener registers the callback but doesn't run it immediately. So the initial console output is "Setup starting" and "Setup done, count is 0" before any clicks occur.
// // Setup starting => Setup starting prints when the page loads.
// // Setup done, count is 0 => Setup done, count is 0 prints because nobody has clicked yet.
// // Clicked 1 => The first click increases count from 0 to 1.
// // Clicked 2 => The second click increases count from 1 to 2.
// // The callback runs 2 times. => The callback is executed once for each click, so it runs 2 times in total.
// 
// 
// 
// //2. Submit your prediction
// 
// // A user types "Pay rent", picks Urgent from the dropdown (value="1"), and presses Enter. Don't run this — decide what appears on the page:
// 
// form.addEventListener("submit", (event) => {
//   event.preventDefault();
// 
//   const title = input.value.trim();
//   const priority = prioritySelect.value;
// 
//   tasks.push({ id: Date.now(), title, isDone: false, priority });
//   render();
// });
// // render and getStatus are exactly as in Where this lands in the project above.
// 
// // The Answer: 
// // I think the new item says "Pay rent — To do", because the dropdown gives the priority as a string "1", but getStatus checks priority === 1, which is a number. 
// // Since they are different types, the condition is false, so the function returns "To do" instead of "Urgent".

// Mentor updates
// Session 08 — your before-class prediction snippet.

console.log("predict.js running");

const button = document.getElementById("btn");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  message.textContent = "Hello World";
});

// Warm up:
// 1. What does `document.querySelector("#nope")` return when there's no such element?
// 2. `const x = ["a","b"].forEach((letter) => letter);` — what's in `x`?
// 3. What's the difference between `greet` and `greet()`?
// 4. Your `createTaskElement` has no `return`. What appears on the page?

// Prediction:
// The goal is to allow a user to add a new task through a form, store it in an array of objects, and update the page dynamically.
// A user types **"Pay rent"**, picks **Urgent** (`value="1"`), presses Enter:

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const title = input.value.trim();
//   const priority = Number(prioritySelect.value);

//   tasks.push({ id: Date.now(), title, isDone: false, priority });
//   render();
// });

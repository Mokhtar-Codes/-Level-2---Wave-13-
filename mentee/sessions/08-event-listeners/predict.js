// Session 08 — your before-class prediction snippet.

console.log("predict.js running");


// 1. Trace the console on paper
// Here's some code, and then what the user does. Write the console output in order, including anything that happens before the user does anything.

const button = document.querySelector("#btn");
let count = 0;

console.log("Setup starting"); 

button.addEventListener("click", () => {
  count = count + 1;
  console.log(`Clicked ${count}`);
});

console.log(`Setup done, count is ${count}`);

// The page loads. Then the user clicks the button twice.
//What's the full console output? How many times does the callback run?

// the Answer: 
// First addEventListener registers the callback but doesn't run it immediately. So the initial console output is "Setup starting" and "Setup done, count is 0" before any clicks occur.
// Setup starting => Setup starting prints when the page loads.
// Setup done, count is 0 => Setup done, count is 0 prints because nobody has clicked yet.
// Clicked 1 => The first click increases count from 0 to 1.
// Clicked 2 => The second click increases count from 1 to 2.
// The callback runs 2 times. => The callback is executed once for each click, so it runs 2 times in total.



//2. Submit your prediction

// A user types "Pay rent", picks Urgent from the dropdown (value="1"), and presses Enter. Don't run this — decide what appears on the page:

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = input.value.trim();
  const priority = prioritySelect.value;

  tasks.push({ id: Date.now(), title, isDone: false, priority });
  render();
});
// render and getStatus are exactly as in Where this lands in the project above.

// The Answer: 
// I think the new item says "Pay rent — To do", because the dropdown gives the priority as a string "1", but getStatus checks priority === 1, which is a number. 
// Since they are different types, the condition is false, so the function returns "To do" instead of "Urgent".
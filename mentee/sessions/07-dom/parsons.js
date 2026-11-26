// Session 07 — the line-ordering puzzle.

// console.log("parsons.js running");

// //  <h1>My Tasks</h1>
// //   <ul id="task-list"></ul>

// const tasks = [
//   { title: "Buy milk", isDone: false },
//   { title: "Call bank", isDone: true },
// ];

// const list = document.querySelector("ul");

// // Create one <li> for a task
// function createTaskElement({ title, isDone }) {
//   const item = document.createElement("li");

//   item.textContent = isDone ? `✓ ${title}` : title;

//   return item;
// }

// // A   function render() {
// // B   list.textContent = "";
// // C   tasks.forEach((task) => {
// // D   list.append(createTaskElement(task));
// // E   });
// // F   }
// // X   list.append(createTaskElement);

// function render() {
//   //A
//   list.textContent = ""; //B
//   tasks.forEach((task) => {
//     //C
//     list.append(createTaskElement(task)); //D
//   }); //E
// } //F

// render();

//parsons problem 2 - The goal is to create a function that takes a task object, creates an HTML <li> element, adds a CSS class if the task is completed, and returns the element.

// HTML CODE:
//   <h1>My Tasks</h1>
//   <ul id="task-list"></ul>

// CSS CODE:
// .done {
//   text-decoration: line-through;
//   color: gray;
// }

const tasks = [
  { title: "Buy milk", isDone: true },
  { title: "Call bank", isDone: false },
  { title: "Study JavaScript", isDone: true },
];

const list = document.querySelector("#task-list");

// A   function createTaskElement({ title, isDone }) {
// B   const item = document.createElement("li");
// C   item.textContent = title;
// D   if (isDone) { item.classList.add("done"); }
// E   return item;
// F   }
// X   item.textContent = task.title;

function createTaskElement({ title, isDone }) {
  const item = document.createElement("li");
  item.textContent = title;
  if (isDone) {
    item.classList.add("done");
  }
  return item;
}

function showTasks() {
  list.textContent = "";

  tasks.forEach((task) => {
    list.append(createTaskElement(task));
  });
}

showTasks();
showTasks();

// const list = document.querySelector("#song-list");
// const list = document.getElementById("song-list");

// const item = document.createElement("li");

{
  /* <li>Blue - 12 plays<li/> */
}

// item.textContent = "Blue - 12 plays"

list.app(item);

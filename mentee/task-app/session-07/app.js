// Session 7 — The DOM (and Props)
// The page is drawn from the data.

const tasks = [
  { title: "Buy milk", isDone: false, priority: 1 },
  { title: "Call bank", isDone: true, priority: 2 },
  { title: "Pay rent", isDone: false, priority: 3 }
];

const list = document.querySelector("#task-list");
const summary = document.querySelector("#summary");

function getStatus({ isDone, priority }) {
  if (isDone) return "Done";
  if (priority === 1) return "Urgent";
  return "To do";
}

function createTaskElement(task) {
  const { title, isDone } = task;

  const item = document.createElement("li");
  item.textContent = `${title} — ${getStatus(task)}`;

  if (isDone) {
    item.classList.add("done");
  }

  return item;
}

function render() {
  list.textContent = "";

  if (tasks.length === 0) {
    summary.textContent = "Nothing here yet";
    return;
  }

  tasks.forEach((task) => {
    list.append(createTaskElement(task));
  });

  const openCount = tasks.filter((task) => !task.isDone).length;
  summary.textContent = `${openCount} tasks still open`;
}

render();

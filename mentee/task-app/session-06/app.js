// Session 6 — Array Methods
// Every hand-written loop from Session 5 collapses.

const tasks = [
  { title: "Buy milk", isDone: false, priority: 1 },
  { title: "Call bank", isDone: true, priority: 2 },
  { title: "Pay rent", isDone: false, priority: 3 }
];

function getStatus(task) {
  const { isDone, priority } = task;

  if (isDone) return "Done";
  if (priority === 1) return "Urgent";
  return "To do";
}

function formatTask(task) {
  return `${task.title}: ${getStatus(task)}`;
}

const lines = tasks.map(formatTask);
const openCount = tasks.filter((task) => !task.isDone).length;
const firstUrgent = tasks.find((task) => task.priority === 1);

lines.forEach((line) => console.log(line));
console.log(`${openCount} tasks still open`);

if (firstUrgent) {
  console.log(`Start with: ${firstUrgent.title}`);
}

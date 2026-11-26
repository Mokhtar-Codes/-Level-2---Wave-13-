// Session 09 — your before-class prediction snippet.

console.log("predict.js running");


// 1. Trace the types on paper. For each line that produces a value, write the value and its type:

const count = 5; // 5 (number)

localStorage.setItem("a", count); // returns undefined

const a = localStorage.getItem("a"); // "5" (string)

const sumA = a + 1; // "51" (string)

localStorage.setItem("b", JSON.stringify(count));
// JSON.stringify(count) returns "5" (string)
// setItem returns undefined

const b = JSON.parse(localStorage.getItem("b"));
// getItem returns "5" (string)
// JSON.parse returns 5 (number)

const sumB = b + 1; // 6 (number)

const c = localStorage.getItem("never-saved");
// null (typeof null returns "object")


// Why are sumA and sumB different?

// sumA is "51" (string), while sumB is 6 (number).
// localStorage stores values as strings.
// In sumA, JavaScript performs string concatenation because a is a string.
// In sumB, JSON.parse() converts the string back into a number, so JavaScript performs numerical addition.


// 2. Submit your prediction
// Submit it using this session's form link from your mentor. Nobody else sees your answer — and once class starts, the form closes and you can't change it. So commit to what you actually think.
// Someone tried to save their tasks. Don't run this:

const tasks = [
  { id: 1, title: "Buy milk" },
  { id: 2, title: "Call bank" }
];

localStorage.setItem("tasks", tasks);

const saved = localStorage.getItem("tasks");

console.log(saved);
console.log(typeof saved);

saved.forEach((task) => {
  console.log(task.title);
});

// Prediction:

// Line 1 logs [object Object],[object Object].
// Line 2 logs string.
// The forEach throws a TypeError because saved is a string, not an array.
// This happens because localStorage converts the array into a string when it is saved without JSON.stringify().
// Each object is converted to "[object Object]".
// Expected error:
// TypeError: saved.forEach is not a function
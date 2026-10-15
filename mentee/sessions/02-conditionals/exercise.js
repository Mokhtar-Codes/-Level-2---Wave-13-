// 1. Parsons
// Goal output: `Grade: B` when `score` is `85`.

// B => E => C => F => A => D => G => H => I => J

const score = 85;
let grade = "";
 if (score >= 90) {
   grade = "A";
 } else if (score >= 80) {
   grade = "B";
 } else {
   grade = "C";
 }
console.log(`Grade: ${grade}`);
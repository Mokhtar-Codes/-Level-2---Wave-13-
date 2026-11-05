/*1. M1 Stage 2

This is the main homework. Loop through every expense, `getTotal`, `getUnpaidTotal`, destructuring at least once — see the M1 brief.*/





/*2. Parsons — count

Goal output: `2` (how many scores are 60 or above) */

// A => B => C => D => E => F => G => H 

const scores = [72, 55, 91, 40]; // Create an array containing four scores.

let count = 0; // Initialize count to 0.

for (const score of scores) { // Loop through every score using for...of.
  if (score >= 60) { // Check whether the score is greater than or equal to 60.
    count = count + 1; // Increase count by 1 when the condition is true.
  }
} // Close the if statement and the loop.

console.log(count); // Print the final count. // 2

// Explanation: The loop checks each score and increments the counter whenever a score is at least 60. Since only 72 and 91 satisfy this condition, the final count is 2.